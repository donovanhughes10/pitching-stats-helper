# Pitching Stats Helper

## Scope statement

**Audience:** High school and college pitchers, and baseball fans.

**Need:** Understand what ERA, WHIP, FIP and K/9 actually measure, not just memorize them.

**Course:** AI 101, Alvernia University (midterm project)
**Author:** Donovan Hughes

## Features (3)

1. **Glossary filter** (done): search and filter stats by category; each entry shows the formula and what it tells you.
2. **Calculator** (in progress): enter your own numbers and see the result with the formula steps.
3. **Practice mode** (in progress): randomized stat lines with feedback that explains the correct work.

## How to run

1. Download or clone this repository.
2. Open `index.html` in any web browser (double-click it).
3. No installs or internet connection are needed.

## How to test

_(to be added: see docs/test-log.md)_

## Known limitations

- FIP uses a league constant that changes every season, so the number here is an estimate unless you enter that year's constant.
- FIP has variants (for example, some versions treat intentional walks differently). This app uses the common FanGraphs form with hit batters included.
- Formulas follow common published definitions. This is a study tool, not official scoring.
- No live or real player data is used.

## Sources (formula verification)

| Stat | Formula in this app | Checked against |
|---|---|---|
| ERA | 9 × ER ÷ IP | MLB Glossary; Baseball-Reference Glossary |
| WHIP | (BB + H) ÷ IP | MLB Glossary; Baseball-Reference Glossary |
| K/9 | 9 × K ÷ IP | FanGraphs Library (Strikeout and Walk Rates) |
| BB/9 | 9 × BB ÷ IP | FanGraphs Library (Strikeout and Walk Rates) |
| FIP | (13×HR + 3×(BB+HBP) − 2×K) ÷ IP + constant | FanGraphs Library (FIP); Tom Tango FIP wiki |

Links:
- https://www.mlb.com/glossary/standard-stats/earned-run-average
- https://www.mlb.com/glossary/standard-stats/walks-and-hits-per-inning-pitched
- https://www.baseball-reference.com/glossary/earned-run-average/
- https://www.baseball-reference.com/glossary/whip/
- https://library.fangraphs.com/pitching/rate-stats
- https://library.fangraphs.com/pitching/fip
- https://tangotiger.net/wiki_archive/FIP.html

Date checked: 2026-11-04

## AI use

AI tool: Claude. See `docs/ai-prompts.md` for the prompt log. A full AI Use Note will be added at `docs/ai-use-note.md`.
