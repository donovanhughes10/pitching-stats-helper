// Glossary data. Verify each formula against MLB's glossary or FanGraphs
// and list those sources in the README.
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
