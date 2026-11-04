# AI Prompt Log

Tool: Claude (model/version: ______)

Purpose: Planning, code generation, debugging, test ideas

## Entry 1
- **Date:** 2026-10-27
- **Prompt (verbatim):** Midterm project brief pasted in, asking Claude to generate project ideas
- **Key part of AI response:** Five project ideas, each with an audience, need, features and edge-case tests
- **What I did with it (accepted / changed / rejected):** Chose the baseball stats study helper

## Entry 2
- **Date:** 2026-10-28
- **Prompt (verbatim):** Asked for a step-by-step plan to earn 100% on the rubric
- **Key part of AI response:** A seven-phase plan covering repo setup, build, testing, issue/PR, README, AI note and demo
- **What I did with it (accepted / changed / rejected):** Following it phase by phase

## Entry 3
- **Date:** 2026-11-02
- **Prompt (verbatim):** Asked Claude for the glossary starter files (index.html, style.css, app.js) with search and category filter
- **Key part of AI response:** Three starter files with five stats (ERA, WHIP, K/9, BB/9, FIP) and filter logic
- **What I did with it (accepted / changed / rejected):** Accepted the files and created them in the repo. Tested by hand: searching "walks" shows 3 stats (WHIP, BB/9 and FIP, because FIP's description mentions walks); the Skill-based filter shows 3; searching "zzz" shows the no-match message.

## Entry 4
- **Date:** 2026-11-04
- **Prompt (verbatim):** Asked Claude to help verify the five formulas against published sources
- **Key part of AI response:** Pointed to MLB Glossary, Baseball-Reference, FanGraphs Library and Tom Tango's FIP page, and noted that FIP has variants and a yearly constant
- **What I did with it (accepted / changed / rejected):** Opened the source pages myself and compared each formula to app.js. All five matched. Added a sources table and the FIP limitations to the README.

## Entry 5
- **Date:** 2026-11-04
- **Prompt (verbatim):** Asked Claude to write the calculator (IP, ER, H, BB, K, HR, HBP and an editable FIP constant) with formula steps
- **Key part of AI response:** Calculator form, input checks, innings conversion (6.1 = 6 1/3), and results showing the formula with the numbers filled in
- **What I did with it (accepted / changed / rejected):** Pasted the three files into GitHub. The first copy of index.html was cut off partway, so app.js never loaded and nothing worked. I found it by comparing the page against the code, replaced the whole file, and re-tested. After the fix, all five results appear when every field is filled in. The calculator rejects blank fields by design, so I plan to test that as an edge case.

## Entry 6
- **Date:** 2026-11-04
- **Prompt (verbatim):** Asked Claude to write practice mode with randomized stat lines, answer checking and feedback that shows the correct work
- **Key part of AI response:** Random question generator for ERA, WHIP, K/9, BB/9 and FIP, a 0.01 rounding tolerance, and feedback showing the formula steps
- **What I did with it (accepted / changed / rejected):** (fill in after you run it: what worked, what you changed)
