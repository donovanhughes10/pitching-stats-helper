// Glossary data. Formulas were checked against MLB's glossary,
// Baseball-Reference, FanGraphs and Tom Tango's FIP page (see README).
const STATS = [
  {
    name: "ERA (Earned Run Average)",
    category: "Results-based",
    formula: "ERA = 9 × ER ÷ IP",
    meaning: "Earned runs a pitcher allows per nine innings. Lower is better.",
    keywords: "earned runs era"
  },
  {
    name: "WHIP (Walks plus Hits per Inning Pitched)",
    category: "Results-based",
    formula: "WHIP = (BB + H) ÷ IP",
    meaning: "How many baserunners a pitcher allows per inning through walks and hits.",
    keywords: "whip walks hits baserunners"
  },
  {
    name: "K/9 (Strikeouts per Nine Innings)",
    category: "Skill-based",
    formula: "K/9 = 9 × K ÷ IP",
    meaning: "How often a pitcher strikes batters out, scaled to nine innings.",
    keywords: "strikeouts k9 k/9"
  },
  {
    name: "BB/9 (Walks per Nine Innings)",
    category: "Skill-based",
    formula: "BB/9 = 9 × BB ÷ IP",
    meaning: "How often a pitcher issues walks, scaled to nine innings. Lower is better.",
    keywords: "walks bb9 bb/9 control"
  },
  {
    name: "FIP (Fielding Independent Pitching)",
    category: "Skill-based",
    formula: "FIP = (13×HR + 3×(BB + HBP) − 2×K) ÷ IP + FIP constant",
    meaning: "Estimates ERA using only outcomes the pitcher controls: strikeouts, walks, hit batters and home runs. The constant changes each season.",
    keywords: "fip fielding independent home runs"
  }
];

const searchBox = document.getElementById("search");
const categorySelect = document.getElementById("category");
const list = document.getElementById("stat-list");
const count = document.getElementById("count");

function makeCard(stat) {
  const card = document.createElement("div");
  card.className = "stat-card";

  const title = document.createElement("h3");
  title.textContent = stat.name;

  const tag = document.createElement("span");
  tag.className = "tag";
  tag.textContent = stat.category;

  const formula = document.createElement("p");
  formula.className = "formula";
  formula.textContent = stat.formula;

  const meaning = document.createElement("p");
  meaning.textContent = "What it tells you: " + stat.meaning;

  card.append(title, tag, formula, meaning);
  return card;
}

function render() {
  const query = searchBox.value.trim().toLowerCase();
  const category = categorySelect.value;

  const matches = STATS.filter(function (stat) {
    const inCategory = category === "all" || stat.category === category;
    const text = (stat.name + " " + stat.keywords + " " + stat.meaning).toLowerCase();
    return inCategory && text.includes(query);
  });

  list.replaceChildren(...matches.map(makeCard));
  count.textContent = matches.length === 0
    ? "No stats match your search."
    : "Showing " + matches.length + " of " + STATS.length + " stats.";
}

searchBox.addEventListener("input", render);
categorySelect.addEventListener("change", render);
render();

// ---------- Calculator ----------
const calcForm = document.getElementById("calc-form");
const calcError = document.getElementById("calc-error");
const calcResults = document.getElementById("calc-results");

// Baseball notation: 6.1 = 6 1/3 innings, 6.2 = 6 2/3 innings. .3 and up are not valid.
function parseInnings(text) {
  const t = text.trim();
  if (t === "") {
    return { error: "Enter innings pitched (IP)." };
  }
  if (!/^\d+(\.[012])?$/.test(t)) {
    return { error: "IP must be a whole number or end in .0, .1 or .2 (6.1 means 6 and 1/3 innings)." };
  }
  const parts = t.split(".");
  const whole = Number(parts[0]);
  const outs = parts.length === 2 ? Number(parts[1]) : 0;
  return { value: whole + outs / 3 };
}

function parseCount(id, label) {
  const t = document.getElementById(id).value.trim();
  if (t === "") {
    return { error: "Enter a value for " + label + " (use 0 if none)." };
  }
  if (!/^\d+$/.test(t)) {
    return { error: label + " must be a whole number, 0 or higher." };
  }
  return { value: Number(t) };
}

function resultCard(name, steps, value) {
  const card = document.createElement("div");
  card.className = "stat-card";

  const title = document.createElement("h3");
  title.textContent = name;

  const stepLine = document.createElement("p");
  stepLine.className = "formula";
  stepLine.textContent = steps;

  const answer = document.createElement("p");
  answer.textContent = "Result: " + value;

  card.append(title, stepLine, answer);
  return card;
}

function calculate(event) {
  event.preventDefault();
  calcResults.replaceChildren();
  calcError.textContent = "";

  const ip = parseInnings(document.getElementById("ip").value);
  const er = parseCount("er", "ER");
  const h = parseCount("h", "H");
  const bb = parseCount("bb", "BB");
  const k = parseCount("k", "K");
  const hr = parseCount("hr", "HR");
  const hbp = parseCount("hbp", "HBP");

  const firstProblem = [ip, er, h, bb, k, hr, hbp].find(function (field) {
    return field.error;
  });
  if (firstProblem) {
    calcError.textContent = firstProblem.error;
    return;
  }

  const constText = document.getElementById("fip-constant").value.trim();
  const constant = Number(constText);
  if (constText === "" || !Number.isFinite(constant)) {
    calcError.textContent = "FIP constant must be a number (for example 3.10).";
    return;
  }

  const innings = ip.value;
  if (innings === 0) {
    calcResults.append(resultCard(
      "Undefined",
      "With 0 innings pitched, these rates cannot be calculated.",
      "Undefined"
    ));
    return;
  }

  const ipText = innings.toFixed(3);
  const era = (9 * er.value) / innings;
  const whip = (bb.value + h.value) / innings;
  const k9 = (9 * k.value) / innings;
  const bb9 = (9 * bb.value) / innings;
  const fip = (13 * hr.value + 3 * (bb.value + hbp.value) - 2 * k.value) / innings + constant;

  calcResults.append(
    resultCard("ERA",
      "9 × " + er.value + " ÷ " + ipText,
      era.toFixed(2)),
    resultCard("WHIP",
      "(" + bb.value + " + " + h.value + ") ÷ " + ipText,
      whip.toFixed(2)),
    resultCard("K/9",
      "9 × " + k.value + " ÷ " + ipText,
      k9.toFixed(2)),
    resultCard("BB/9",
      "9 × " + bb.value + " ÷ " + ipText,
      bb9.toFixed(2)),
    resultCard("FIP",
      "(13×" + hr.value + " + 3×(" + bb.value + " + " + hbp.value + ") − 2×" + k.value + ") ÷ " + ipText + " + " + constant,
      fip.toFixed(2))
  );
}

calcForm.addEventListener("submit", calculate);
