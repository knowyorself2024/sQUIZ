// ============= QUESTIONS =============
// cat: vanilla | kinky | bdsm | fetish | hotwife | extreme | slut
const QUESTIONS = [
  // --- BDSM / Bondage / D/s ---
  {q:"Being tied up or physically restrained by your partner during sex — how appealing?", cat:"bdsm"},
  {q:"Being the one who ties up or restrains your partner during sex — how appealing?", cat:"bdsm"},
  {q:"Using handcuffs, ropes, or bondage tape to restrain during play — how appealing?", cat:"bdsm"},
  {q:"Breath play — light choking or controlling your partner's breathing — how appealing?", cat:"bdsm"},
  {q:"Impact play — spanking, paddling, or flogging on the body — how appealing?", cat:"bdsm"},
  {q:"Playing the Dominant/Top role — being in charge and directing the scene — how appealing?", cat:"bdsm"},
  {q:"Playing the submissive/Bottom role — giving up control to your partner — how appealing?", cat:"bdsm"},
  {q:"Being a Switch — enjoying both Dominant and submissive roles — how appealing?", cat:"bdsm"},
  {q:"Wearing a collar as a symbol of belonging to a partner — how appealing?", cat:"bdsm"},
  {q:"Verbal humiliation or degradation — being called names during play — how appealing?", cat:"bdsm"},
  {q:"Orgasm control — being denied or edged repeatedly without release — how appealing?", cat:"bdsm"},
  {q:"Wearing a chastity device that prevents orgasms for extended periods — how appealing?", cat:"bdsm"},
  {q:"Shibari — decorative Japanese-style rope bondage — how appealing?", cat:"bdsm"},
  {q:"Service-oriented submission — chores, tasks, and rituals of serving a partner — how appealing?", cat:"bdsm"},
  {q:"Masochism — genuinely enjoying receiving pain — how appealing?", cat:"bdsm"},
  {q:"Sadism — genuinely enjoying inflicting pain on a partner — how appealing?", cat:"bdsm"},
  {q:"A full 24/7 Dominant/submissive relationship extending outside the bedroom — how appealing?", cat:"bdsm"},
  {q:"'Brat taming' — a cheeky submissive who acts out and is put back in place — how appealing?", cat:"bdsm"},
  {q:"Sensory deprivation with blindfold and earplugs during play — how appealing?", cat:"bdsm"},
  {q:"Protocol training — following strict behaviour rules with punishments — how appealing?", cat:"bdsm"},

  // --- Kinky (roleplay, moderate) ---
  {q:"Wax play — dripping hot candle wax on bare skin — how appealing?", cat:"kinky"},
  {q:"Ice play — alternating hot and cold sensations on the body — how appealing?", cat:"kinky"},
  {q:"Primal play — raw, animalistic sex with growling, biting, wrestling — how appealing?", cat:"kinky"},
  {q:"Consensual non-consent (CNC) — pre-negotiated 'forced sex' roleplay — how appealing?", cat:"kinky"},
  {q:"Teacher / student roleplay (with adult partners) — how appealing?", cat:"kinky"},
  {q:"Boss / secretary roleplay — how appealing?", cat:"kinky"},
  {q:"Doctor / patient roleplay with intense exam scenes — how appealing?", cat:"kinky"},
  {q:"Uniforms (police, nurse, military) as a turn-on — how appealing?", cat:"kinky"},
  {q:"Kidnapping or abduction fantasy roleplay — how appealing?", cat:"kinky"},
  {q:"Pet play — acting or being treated as a kitten, puppy, or pony — how appealing?", cat:"kinky"},
  {q:"Cross-dressing or 'sissy' play — how appealing?", cat:"kinky"},
  {q:"Hypnotic submission — being 'put under' and given commands — how appealing?", cat:"kinky"},
  {q:"ASMR-style erotic triggers — whispers, soft sounds, tingles — how appealing?", cat:"kinky"},
  {q:"Voice or accent as a specific turn-on — how appealing?", cat:"kinky"},
  {q:"Tickle torture — being helplessly laughing under tickling — how appealing?", cat:"kinky"},

  // --- Fetish (object / body specific) ---
  {q:"Foot fetish — kissing, massaging, or worshipping feet — how appealing?", cat:"fetish"},
  {q:"High heels or shoes as a specific turn-on — how appealing?", cat:"fetish"},
  {q:"Stockings, tights, or pantyhose as a specific turn-on — how appealing?", cat:"fetish"},
  {q:"Latex, rubber, or PVC clothing on you or your partner — how appealing?", cat:"fetish"},
  {q:"Leather clothing or accessories as a turn-on — how appealing?", cat:"fetish"},
  {q:"Hair as a turn-on — long hair, hair pulling — how appealing?", cat:"fetish"},
  {q:"Armpit worship — kissing, licking a partner's armpit — how appealing?", cat:"fetish"},
  {q:"Sweat or natural body odour as a turn-on — how appealing?", cat:"fetish"},
  {q:"Spit or saliva play during sex — how appealing?", cat:"fetish"},
  {q:"Piercings or tattoos on a partner as a turn-on — how appealing?", cat:"fetish"},
  {q:"Glasses or a 'nerdy' look as a specific turn-on — how appealing?", cat:"fetish"},
  {q:"Muscle worship — attraction to very muscular partners — how appealing?", cat:"fetish"},
  {q:"Messy food play or 'sploshing' — how appealing?", cat:"fetish"},
  {q:"Watersports — urine as part of intimacy — how appealing?", cat:"fetish"},
  {q:"Diaper / ABDL fetish — how appealing?", cat:"fetish"},

  // --- Hotwife / Cuckold / Sharing / Group ---
  {q:"Cuckolding or hotwifing — watching or knowing your partner has sex with someone else — how appealing?", cat:"hotwife"},
  {q:"Being the voyeur cuckold — watching a partner with someone else — how appealing?", cat:"hotwife"},
  {q:"Being the 'bull' or hotwife dominant — the third partner in the dynamic — how appealing?", cat:"hotwife"},
  {q:"Polyamory or ethical non-monogamy taken to intense levels — how appealing?", cat:"hotwife"},
  {q:"Swingers parties or full orgies — how appealing?", cat:"hotwife"},
  {q:"Group sex or a gangbang (three or more people at once) — how appealing?", cat:"hotwife"},
  {q:"Being shared with your partner's friends or coworkers — how appealing?", cat:"hotwife"},
  {q:"Being a regular at a sex club or BDSM dungeon — how appealing?", cat:"hotwife"},
  {q:"Voyeurism — watching other people have sex — how appealing?", cat:"hotwife"},
  {q:"Glory hole play (anonymous partner through a wall) — how appealing?", cat:"hotwife"},

  // --- Extreme ---
  {q:"Needle play — sterile needles for sensation — how appealing?", cat:"extreme"},
  {q:"Blood play — drawing small amounts of blood in a scene — how appealing?", cat:"extreme"},
  {q:"Fire play — brief flames or fire-based sensation on the skin — how appealing?", cat:"extreme"},
  {q:"Extreme spanking hard enough to leave bruises for days — how appealing?", cat:"extreme"},
  {q:"Being caned or whipped hard enough to leave visible marks — how appealing?", cat:"extreme"},
  {q:"Extreme bondage with very limited ability to move or escape — how appealing?", cat:"extreme"},
  {q:"Mummification — being fully wrapped from head to toe — how appealing?", cat:"extreme"},
  {q:"Extreme anal stretching or anal fisting — how appealing?", cat:"extreme"},
  {q:"Double or triple penetration (multiple partners or toys at once) — how appealing?", cat:"extreme"},
  {q:"Electrical play with a TENS unit or violet wand — how appealing?", cat:"extreme"},
  {q:"Breast or nipple torture — clamps, biting, hard pinching — how appealing?", cat:"extreme"},
  {q:"Cutting or scarification play — how appealing?", cat:"extreme"},
  {q:"Partner-controlled asphyxiation — how appealing?", cat:"extreme"},
  {q:"Long-term orgasm denial lasting weeks or months — how appealing?", cat:"extreme"},
  {q:"Overstimulation torture — sensation pushed far past climax — how appealing?", cat:"extreme"},

  // --- Slut / Free-use / Exhibitionist (from PDF) ---
  {q:"Getting fucked by 5+ strangers in one day — how appealing?", cat:"slut"},
  {q:"Public sex in crowded places where people might watch — how appealing?", cat:"slut"},
  {q:"Attending an orgy to be used by as many people as possible — how appealing?", cat:"slut"},
  {q:"Dressing extremely slutty to attract random hookups — how appealing?", cat:"slut"},
  {q:"Being openly groped or catcalled by strangers in public — how appealing?", cat:"slut"},
  {q:"Being recorded or livestreamed during a gangbang — how appealing?", cat:"slut"},
  {q:"Taking multiple cum loads in every hole during one session — how appealing?", cat:"slut"},
  {q:"Being known as the ultimate easy slut or town whore — how appealing?", cat:"slut"},
  {q:"Fucking 10+ different people in a single week — how appealing?", cat:"slut"},
  {q:"Offering all your holes immediately when feeling extremely horny — how appealing?", cat:"slut"},
  {q:"Being passed around freely at a party with no limits — how appealing?", cat:"slut"},
  {q:"Quickie sex in a club bathroom while friends are close by — how appealing?", cat:"slut"},
  {q:"Being a free-use toy for anyone who wants you in one night — how appealing?", cat:"slut"},
  {q:"Acting extremely slutty in public while completely sober — how appealing?", cat:"slut"},
  {q:"Being called whore, cumdump, or slut during rough sex — how appealing?", cat:"slut"},
  {q:"Wearing a 'Free Use' collar or sign in public — how appealing?", cat:"slut"},
  {q:"Being filmed while acting out your most extreme slut fantasies — how appealing?", cat:"slut"},
  {q:"Traveling far just to get fucked by new people — how appealing?", cat:"slut"},
  {q:"Letting a group of strangers run a train on you — how appealing?", cat:"slut"},
  {q:"Having 10+ orgasms in 24 hours — how appealing?", cat:"slut"},
  {q:"Performing sexual acts in front of a large audience — how appealing?", cat:"slut"},
  {q:"Fucking so many people in a weekend you lose count — how appealing?", cat:"slut"},
  {q:"Advertising your slutty availability openly — how appealing?", cat:"slut"},
  {q:"Doing a cumwalk in public after being filled — how appealing?", cat:"slut"},
  {q:"Servicing strangers at a gloryhole for hours — how appealing?", cat:"slut"},
  {q:"Waking up covered in cum after a long night of being used — how appealing?", cat:"slut"},
  {q:"Wearing a butt plug in public as a slut signal — how appealing?", cat:"slut"},
  {q:"Participating in a big bukkake or intense gangbang — how appealing?", cat:"slut"},
  {q:"Roleplaying as a free-use party favor or cumdump — how appealing?", cat:"slut"},
  {q:"Breaking every personal rule during extreme slutty fantasy nights — how appealing?", cat:"slut"},
];

// ============= CONFIG =============
const FORMSPREE_URL = "https://formspree.io/f/mkoknrpo";

// ============= LOGIC =============
const SCALE = [
  {label:"Not for me", desc:"Not interested / Never", val:0},
  {label:"A little curious", desc:"Mild curiosity / Rarely", val:1},
  {label:"Open to it", desc:"Interested / Sometimes / Willing to try", val:2},
  {label:"I love this", desc:"Extremely into it / Often", val:3},
];

const CATEGORIES = {
  vanilla: {name:"Vanilla / Normal",  desc:"Classic, sweet, romantic intimacy is your comfort zone."},
  kinky:   {name:"Kinky Playful",     desc:"You enjoy playful roleplay, sensation, and light kink."},
  bdsm:    {name:"BDSM",              desc:"Bondage, discipline, dominance & submission speak to you."},
  fetish:  {name:"Fetishist",         desc:"Specific objects, materials, or body parts really turn you on."},
  hotwife: {name:"Hotwife / Cuckold / Group", desc:"Sharing, watching, or group dynamics excite you."},
  extreme: {name:"Extreme / Edge",    desc:"You're drawn to intense, high-sensation edge play."},
  slut:    {name:"Slut / Free-use / Exhibitionist", desc:"Being desired, used, and seen fuels the fantasy."},
};

// Archetype = user-facing "type of person" label based on top category + score patterns.
const ARCHETYPES = {
  normal:  {emoji:"💞", title:"The Normal / Vanilla Romantic",
            desc:"You know what you like and you're comfortable in familiar territory. Intimacy for you is about connection and warmth more than novelty — and that's a completely valid path."},
  curious: {emoji:"🌸", title:"The Curious Explorer",
            desc:"You're quietly intrigued by more than you'd admit out loud. A few ideas caught your eye — with the right partner and trust, you'd love to explore."},
  kinkster:{emoji:"🔥", title:"The Playful Kinkster",
            desc:"You lean into experimentation. Roleplay, sensation, and a splash of taboo are your playground."},
  fetishist:{emoji:"👠", title:"The Devoted Fetishist",
            desc:"Specific triggers — materials, body parts, objects — light you up in a way vanilla never could."},
  bdsm:    {emoji:"⛓️", title:"The BDSM Devotee",
            desc:"Power, control, ritual, and intensity are where you feel most alive. Whether Dom, sub, or switch — this is a serious part of who you are."},
  hotwife: {emoji:"💋", title:"The Hotwife",
            desc:"You crave being desired by more than one — being watched, celebrated, and shared while your partner adores you for it."},
  cuckold: {emoji:"👁️", title:"The Cuckold / Voyeur",
            desc:"Watching your partner enjoyed by someone else fuels you. There's power and pleasure in the surrender of exclusivity."},
  bull:    {emoji:"🐂", title:"The Bull / Third",
            desc:"You're the confident third — the one couples invite in. Dominant energy, no strings, all appetite."},
  slut:    {emoji:"💦", title:"The Free-Use Slut",
            desc:"You want to be desired, used, seen. Being the center of a room full of hunger is the fantasy."},
  edge:    {emoji:"⚡", title:"The Edge Connoisseur",
            desc:"You live at the far end of the spectrum. Few things surprise you — you approach intimacy with the intensity of a lifelong practitioner."},
};

// State
const answers = new Array(QUESTIONS.length).fill(null);
let idx = 0;

const $ = id => document.getElementById(id);
$("totalCount").textContent = QUESTIONS.length;
$("qTotal").textContent = QUESTIONS.length;

function show(screen){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  $(screen).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}

function render(){
  const q = QUESTIONS[idx];
  $("qNum").textContent = idx+1;
  $("qText").textContent = q.q;
  const answered = answers.filter(a=>a!==null).length;
  $("answered").textContent = answered;
  $("bar").style.width = ((idx+1)/QUESTIONS.length*100)+"%";
  const opts = $("options");
  opts.innerHTML = "";
  SCALE.forEach(s=>{
    const b = document.createElement("button");
    b.type = "button";
    b.className = "opt" + (answers[idx]===s.val ? " selected" : "");
    b.innerHTML = `<span class="dot"></span>
      <span class="opt-text">
        <span class="opt-title">${s.label}</span>
        <span class="opt-sub">${s.desc}</span>
      </span>`;
    b.onclick = ()=>{
      answers[idx] = s.val;
      if(idx < QUESTIONS.length-1){ idx++; render(); }
      else render();
    };
    opts.appendChild(b);
  });
  $("prevBtn").disabled = idx===0;
  $("nextBtn").disabled = idx>=QUESTIONS.length-1;
  const canSubmit = answered>0;
  $("submitBtn").disabled = !canSubmit;
  $("submitBtn").textContent = answered===QUESTIONS.length
    ? "See Results ✨"
    : `Submit now (${answered})`;
}

$("startBtn").onclick = ()=>{ show("quiz"); render(); };
$("downloadBtn").onclick = downloadHTML;
$("prevBtn").onclick = ()=>{ if(idx>0){ idx--; render(); } };
$("nextBtn").onclick = ()=>{ if(idx<QUESTIONS.length-1){ idx++; render(); } };
$("submitBtn").onclick = onSubmit;
$("restartBtn").onclick = ()=>{
  for(let i=0;i<answers.length;i++) answers[i]=null;
  idx=0;
  $("resultLoading").style.display="block";
  $("resultContent").style.display="none";
  $("submitError").style.display="none";
  show("welcome");
};

async function onSubmit(){
  const answered = answers.filter(a=>a!==null).length;
  if(answered===0) return;
  show("result");
  // Fire submission + compute in parallel; always show results.
  const result = computeResult();
  let submitFailed = false;
  try{
    const payload = {
      archetype: result.archetype.title,
      overallIntensity: result.overallPct + "%",
      answered: `${answered}/${QUESTIONS.length}`,
      breakdown: result.rows.map(r=>`${CATEGORIES[r.cat].name}: ${r.pct}%`).join(" | "),
      answers: QUESTIONS.map((q,i)=>({
        q:q.q, cat:q.cat,
        answer: answers[i]===null ? "—" : SCALE[answers[i]].label
      })),
    };
    const res = await fetch(FORMSPREE_URL, {
      method:"POST",
      headers:{"Content-Type":"application/json","Accept":"application/json"},
      body: JSON.stringify(payload),
    });
    if(!res.ok) submitFailed = true;
  }catch(e){ submitFailed = true; }
  // Slight delay for nicer transition
  setTimeout(()=>renderResult(result, submitFailed), 500);
}

function computeResult(){
  // aggregate per category (only over answered questions)
  const totals = {};
  for(const c of Object.keys(CATEGORIES)) totals[c] = {sum:0, answered:0};
  QUESTIONS.forEach((q,i)=>{
    if(answers[i]!==null && totals[q.cat]){
      totals[q.cat].sum += answers[i];
      totals[q.cat].answered++;
    }
  });
  let overallSum=0, overallAns=0;
  QUESTIONS.forEach((q,i)=>{ if(answers[i]!==null){ overallSum+=answers[i]; overallAns++; } });
  const overallPct = overallAns ? Math.round(overallSum/(overallAns*3)*100) : 0;
  const vanillaPct = 100 - overallPct;

  const rows = [];
  for(const c of Object.keys(CATEGORIES)){
    let pct;
    if(c==="vanilla"){ pct = vanillaPct; }
    else {
      const t = totals[c];
      pct = t.answered ? Math.round(t.sum/(t.answered*3)*100) : 0;
    }
    rows.push({cat:c, pct});
  }
  rows.sort((a,b)=>b.pct-a.pct);

  const top = rows[0];
  const secondary = rows.slice(1,4).filter(r=>r.pct>=35);

  // Archetype selection
  let arch;
  if(overallAns < 8 && overallPct < 25) arch = ARCHETYPES.curious;
  else if(top.cat==="vanilla") arch = overallPct < 20 ? ARCHETYPES.normal : ARCHETYPES.curious;
  else if(top.cat==="kinky") arch = ARCHETYPES.kinkster;
  else if(top.cat==="fetish") arch = ARCHETYPES.fetishist;
  else if(top.cat==="bdsm") arch = ARCHETYPES.bdsm;
  else if(top.cat==="extreme") arch = ARCHETYPES.edge;
  else if(top.cat==="slut") arch = ARCHETYPES.slut;
  else if(top.cat==="hotwife"){
    // Distinguish Hotwife vs Bull vs Cuckold via specific question keywords
    let hot=0,bull=0,cuck=0,n=0;
    QUESTIONS.forEach((q,i)=>{
      if(q.cat!=="hotwife" || answers[i]===null) return;
      const t = q.q.toLowerCase();
      const v = answers[i];
      if(t.includes("bull") || t.includes("hotwife dominant") || t.includes("third partner")) bull += v;
      else if(t.includes("cuckold") || t.includes("voyeur") || t.includes("watching") || t.includes("watching a partner")) cuck += v;
      else { hot += v; }
      n++;
    });
    const max = Math.max(hot,bull,cuck);
    if(max===bull && bull>0) arch = ARCHETYPES.bull;
    else if(max===cuck && cuck>0) arch = ARCHETYPES.cuckold;
    else arch = ARCHETYPES.hotwife;
  }
  else arch = ARCHETYPES.curious;

  return {rows, top, secondary, overallPct, overallAns, archetype:arch};
}

function renderResult(r, submitFailed){
  $("archEmoji").textContent = r.archetype.emoji;
  $("resultTitle").textContent = r.archetype.title;
  $("resultDesc").textContent = r.archetype.desc;
  $("scoreAvg").textContent = r.overallPct + "%";
  $("scoreAnswered").textContent = r.overallAns + "/" + QUESTIONS.length;

  const badges = $("badges");
  badges.innerHTML = "";
  r.secondary.forEach((s,i)=>{
    const b = document.createElement("span");
    b.className = "badge" + (i%2 ? " alt" : "");
    b.textContent = `${CATEGORIES[s.cat].name} · ${s.pct}%`;
    badges.appendChild(b);
  });

  const ul = $("topCategories");
  ul.innerHTML = "";
  r.rows.forEach((row,i)=>{
    const li = document.createElement("li");
    li.className = "cat";
    li.innerHTML = `
      <div class="cat-head"><span>${CATEGORIES[row.cat].name}</span><span>${row.pct}%</span></div>
      <div class="cat-bar"><div class="cat-fill" style="width:0%"></div></div>
      <p class="cat-desc">${CATEGORIES[row.cat].desc}</p>`;
    ul.appendChild(li);
    // animate fill
    setTimeout(()=>{
      li.querySelector(".cat-fill").style.width = row.pct + "%";
    }, 120 + i*90);
  });

  $("submitError").style.display = submitFailed ? "block" : "none";
  $("resultLoading").style.display="none";
  $("resultContent").style.display="block";
}

function downloadHTML(){
  const html = document.documentElement.outerHTML;
  const blob = new Blob([html], {type: "text/html"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "fantasy-self-discovery-quiz.html";
  document.body.appendChild(a);
  a.click();
  setTimeout(()=>{ URL.revokeObjectURL(url); a.remove(); }, 100);
}
