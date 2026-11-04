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
