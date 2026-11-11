# Pitching Stats Helper

## Scope statement

**Audience:** High school and college pitchers, and baseball fans.

**Need:** Understand what ERA, WHIP, FIP and K/9 actually measure, not just memorize them.

**Course:** AI 101, Alvernia University (midterm project)
**Author:** Donovan Hughes

## Features (3)

1. **Glossary filter:** search and filter stats by category; each entry shows the formula and what it tells you.
2. **Calculator:** enter a pitching line and see ERA, WHIP, K/9, BB/9 and FIP with the formula steps and an editable FIP constant. Innings use baseball notation (6.1 means 6⅓).
3. **Practice mode:** randomized stat lines with feedback that shows the correct answer and the work. When a wrong answer matches a common mistake (innings used as a plain decimal, forgetting the ×9, leaving out the FIP constant), it also explains the likely mistake.

## Tracked improvement

The "likely mistake" explanation in practice mode was added through Issue #1 and Pull request #2 (branch `feature-mistake-feedback`, now merged into `main`). Evidence is in `test-screenshots`:

- `before-fix.png`: a wrong answer with no explanation
- `after-fix.png`: the same kind of wrong answer with the explanation (branch version)
- `after-fix-final.png`: the final version running from `main`
- `pr-merged.png`: the merged pull request

## How to run

1. Download or clone this repository.
2. Open `index.html` in any web browser (double-click it).
3. No installs or internet connection are needed.

## How to test

Tests were run by hand in Chrome. See `docs/test-log.md` for the full log with inputs, expected results, actual results and screenshots. Screenshots are in the `test-screenshots` folder. Twelve tests were run, including edge cases (6.1 IP, 6.3 IP, 0 IP), validation cases (a blank field, non-numeric input) and the new mistake feedback (tests 9, 10 and 12).

## Known limitations

- FIP uses a league constant that changes every season. The default of 3.10 is approximate, so FIP is only comparable with published figures if you enter the constant for that season.
- FIP has variants (for example, some versions treat intentional walks differently). This app uses the common FanGraphs form with hit batters included.
- The calculator requires every field to be filled in (use 0 if none).
- Practice mode only recognizes three specific mistakes. Combined mistakes or other errors get the normal feedback with no explanation.
- Formulas follow common published definitions. This is a study tool, not official scoring.
- No live or real player data is used.
- Tests were manual, in one browser (Chrome), not automated.

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

AI tool: Claude (Sonnet 5.5). Claude helped plan the project, write the starter code and the issue's code change, draft the test plan, and troubleshoot Git. I tested every behavior myself, verified the formulas against published sources, and reviewed and edited the change.

- AI Use Note: `docs/ai-use-note.md`
- Prompt log: `docs/ai-prompts.md`
- Test log: `docs/test-log.md`