/* =========================================================================
   Self-Discovery Quiz — client logic
   Edit questions in index.html (inside the hidden <ol id="questions">).
   The four answer options are the same for every question and defined
   below in SCALE. Change SUBMIT_URL if you swap the collection endpoint.
   ========================================================================= */

const SUBMIT_URL = "https://formspree.io/f/mkoknrpo";

const SCALE = [
  { value: 0, title: "Not for me",           sub: "Not interested / Never" },
  { value: 1, title: "A little curious",     sub: "Mild curiosity / Rarely" },
  { value: 2, title: "Open to it",           sub: "Interested / Sometimes / Willing to try" },
  { value: 3, title: "I love this",          sub: "Extremely into it / Often" },
];

const PROFILES = [
  { max: 0.4,  title: "The Grounded Traditionalist",
    desc: "You know what you like and you're comfortable in familiar territory. Intimacy for you is about connection more than novelty — and that's a completely valid path." },
  { max: 1.0,  title: "The Curious Observer",
    desc: "You're intrigued by more than you'd admit out loud. A few ideas caught your eye, but you'd want the right partner, the right moment, and a lot of trust before exploring." },
  { max: 1.6,  title: "The Playful Explorer",
    desc: "You're up for adventure. You lean into experimentation, enjoy variety, and treat intimacy as a space for creativity and play." },
  { max: 2.2,  title: "The Adventurous Enthusiast",
    desc: "You're openly kinky and confident about it. You've thought about your desires, you know your yeses, and you value partners who bring the same energy." },
  { max: 2.7,  title: "The Devoted Kinkster",
    desc: "This is a serious part of who you are. You gravitate toward intensity, ritual, and depth — and you likely already have a well-developed lexicon of what turns you on." },
  { max: 3.1,  title: "The Extreme Connoisseur",
    desc: "You live at the far end of the spectrum. Few things surprise you, and you approach intimacy with the intensity, negotiation, and craft of a lifelong practitioner." },
];

// Rough thematic groupings — used to surface "top categories" in the result.
// Question indexes are 1-based (matching the visible list).
const CATEGORIES = {
  "Bondage & Restraint":       [1,2,3,4,30,31,32,165,198,199],
  "Impact & Pain Play":        [6,7,38,55,56,141,142,157,163],
  "Power Exchange":            [13,14,15,16,34,125,138,139,140],
  "Sensation & Edge Play":     [5,8,9,10,11,12,164,181,183,184],
  "Roleplay & Fantasy":        [27,28,121,122,123,124,126,127,128,129,130,131,132,133],
  "Fetish & Materials":        [41,42,43,44,45,46,47,48,49,50,68,71],
  "Body & Transformation":     [65,66,67,120,150,151,152,153,154,177,178,193,194,195],
  "Denial & Control":          [20,21,22,158,159,160,173,174],
  "Voyeur / Exhibition":       [19,23,103,104,105,106,143,144,148,149],
  "Group & Social":            [90,91,145,146,147],
  "Primal & Animal":           [25,26,134,135,136],
  "Sensory Play":              [12,53,54,161,162],
};

const $ = sel => document.querySelector(sel);
const questions = Array.from(document.querySelectorAll("#questions li")).map(li => li.textContent.trim());
let idx = 0;
const answers = new Array(questions.length).fill(null);

$("#totalCount").textContent = questions.length;
$("#qTotal").textContent = questions.length;

/* ---- Screen switch ---- */
function show(screen){
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $("#" + screen).classList.add("active");
  window.scrollTo({ top:0, behavior:"instant" });
}

/* ---- Render current question ---- */
function render(){
  const q = questions[idx];
  $("#qText").textContent = q;
  $("#qNum").textContent = idx + 1;
  $("#bar").style.width = ((idx) / questions.length * 100) + "%";

  const opts = $("#options");
  opts.innerHTML = "";
  SCALE.forEach(opt => {
    const label = document.createElement("label");
    label.className = "opt" + (answers[idx] === opt.value ? " selected" : "");
    label.innerHTML = `
      <span class="dot"></span>
      <span class="opt-text">
        <span class="opt-title">${opt.title}</span>
        <span class="opt-sub">${opt.sub}</span>
      </span>
      <input type="radio" name="a" value="${opt.value}" ${answers[idx]===opt.value?"checked":""}/>
    `;
    label.addEventListener("click", () => {
      answers[idx] = opt.value;
      // Auto-advance for a smooth flow
      setTimeout(next, 220);
      render();
    });
    opts.appendChild(label);
  });

  $("#prevBtn").disabled = idx === 0;
  $("#nextBtn").textContent = idx === questions.length - 1 ? "Finish →" : "Next →";
  $("#nextBtn").disabled = answers[idx] === null;
}

function next(){
  if (answers[idx] === null) return;
  if (idx < questions.length - 1){
    idx++;
    render();
  } else {
    finish();
  }
}
function prev(){
  if (idx > 0){ idx--; render(); }
}

/* ---- Result ---- */
function computeResult(){
  const answered = answers.filter(a => a !== null);
  const avg = answered.reduce((s,v)=>s+v,0) / (answered.length || 1);
  const profile = PROFILES.find(p => avg <= p.max) || PROFILES[PROFILES.length-1];

  // Top categories by average intensity
  const cats = Object.entries(CATEGORIES).map(([name, ids]) => {
    const vals = ids.map(i => answers[i-1]).filter(v => v !== null);
    const catAvg = vals.length ? vals.reduce((s,v)=>s+v,0)/vals.length : 0;
    return { name, avg: catAvg };
  }).sort((a,b)=>b.avg-a.avg).slice(0, 4);

  return { avg, answered: answered.length, profile, cats };
}

function finish(){
  show("result");
  const r = computeResult();

  // Submit silently — the user is never shown any mention of where it goes.
  const payload = {
    profile: r.profile.title,
    intensity: r.avg.toFixed(2),
    answered: r.answered,
    total: questions.length,
    top_categories: r.cats.map(c => `${c.name} (${c.avg.toFixed(2)})`).join(", "),
    timestamp: new Date().toISOString(),
  };
  questions.forEach((q,i) => {
    const a = answers[i];
    payload["Q" + String(i+1).padStart(3,"0") + " " + q] =
      a === null ? "—" : `${["A","B","C","D"][a]} — ${SCALE[a].sub}`;
  });

  fetch(SUBMIT_URL, {
    method: "POST",
    headers: { "Content-Type":"application/json", "Accept":"application/json" },
    body: JSON.stringify(payload),
  }).catch(()=>{}).finally(() => {
    // Reveal after a short delay for a calmer feel
    setTimeout(() => {
      $("#resultLoading").style.display = "none";
      $("#resultContent").style.display = "block";
      $("#resultTitle").textContent = r.profile.title;
      $("#resultDesc").textContent = r.profile.desc;
      $("#scoreAvg").textContent = r.avg.toFixed(2) + " / 3";
      $("#scoreAnswered").textContent = r.answered + " / " + questions.length;
      const list = $("#topCategories");
      list.innerHTML = "";
      r.cats.forEach(c => {
        const li = document.createElement("li");
        const level = c.avg >= 2.2 ? "Very high" : c.avg >= 1.4 ? "High" : c.avg >= 0.7 ? "Moderate" : "Low";
        li.innerHTML = `<span>${c.name}</span><span>${level}</span>`;
        list.appendChild(li);
      });
    }, 900);
  });
}

/* ---- Wire up ---- */
$("#startBtn").addEventListener("click", () => { idx = 0; render(); show("quiz"); });
$("#nextBtn").addEventListener("click", next);
$("#prevBtn").addEventListener("click", prev);
$("#restartBtn").addEventListener("click", () => {
  for (let i=0;i<answers.length;i++) answers[i]=null;
  idx = 0;
  $("#resultLoading").style.display = "block";
  $("#resultContent").style.display = "none";
  show("welcome");
});

// Keyboard: 1-4 to pick, arrows to navigate
document.addEventListener("keydown", e => {
  if (!$("#quiz").classList.contains("active")) return;
  if (["1","2","3","4"].includes(e.key)){
    answers[idx] = Number(e.key) - 1;
    render();
    setTimeout(next, 220);
  } else if (e.key === "ArrowRight") next();
  else if (e.key === "ArrowLeft") prev();
});
