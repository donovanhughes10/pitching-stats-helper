\# AI Prompt Log



Tool: Claude (Sonnet 5.5, via claude.ai)



Purpose: Planning, code generation, debugging, test ideas



\## Entry 1

\- \*\*Date:\*\* 2026-10-27

\- \*\*Prompt (verbatim, start of message):\*\* "completely seperate assignment right here , generate ideas :" followed by the pasted AI 101 midterm project brief

\- \*\*Key part of AI response:\*\* Five project ideas, each with an audience, need, features and edge-case tests

\- \*\*What I did with it (accepted / changed / rejected):\*\* Chose the baseball stats study helper



\## Entry 2

\- \*\*Date:\*\* 2026-10-28

\- \*\*Prompt (verbatim):\*\* "based off the rubric at previously represented walk me through step by step on how to complete this ai assited proptotype in line with the rubric to 100 percent score"

\- \*\*Key part of AI response:\*\* A seven-phase plan covering repo setup, build, testing, issue/PR, README, AI note and demo

\- \*\*What I did with it (accepted / changed / rejected):\*\* Following it phase by phase



\## Entry 3

\- \*\*Date:\*\* 2026-11-02

\- \*\*Prompt (summary):\*\* Asked Claude for the glossary starter files (index.html, style.css, app.js) with search and category filter

\- \*\*Key part of AI response:\*\* Three starter files with five stats (ERA, WHIP, K/9, BB/9, FIP) and filter logic

\- \*\*What I did with it (accepted / changed / rejected):\*\* Accepted the files and created them in the repo. Tested by hand: searching "walks" shows 3 stats (WHIP, BB/9 and FIP, because FIP's description mentions walks); the Skill-based filter shows 3; searching "zzz" shows the no-match message.



\## Entry 4

\- \*\*Date:\*\* 2026-11-04

\- \*\*Prompt (summary):\*\* Asked Claude to help verify the five formulas against published sources

\- \*\*Key part of AI response:\*\* Pointed to MLB Glossary, Baseball-Reference, FanGraphs Library and Tom Tango's FIP page, and noted that FIP has variants and a yearly constant

\- \*\*What I did with it (accepted / changed / rejected):\*\* Opened the source pages myself and compared each formula to app.js. All five matched. Added a sources table and the FIP limitations to the README.



\## Entry 5

\- \*\*Date:\*\* 2026-11-04

\- \*\*Prompt (summary):\*\* Asked Claude to write the calculator (IP, ER, H, BB, K, HR, HBP and an editable FIP constant) with formula steps

\- \*\*Key part of AI response:\*\* Calculator form, input checks, innings conversion (6.1 = 6 1/3), and results showing the formula with the numbers filled in

\- \*\*What I did with it (accepted / changed / rejected):\*\* Pasted the three files into GitHub. The first copy of index.html was cut off partway, so app.js never loaded and nothing worked. I found it by comparing the page against the code, replaced the whole file, and re-tested. After the fix, all five results appear when every field is filled in. The calculator rejects blank fields by design, so I tested that as an edge case.



\## Entry 6

\- \*\*Date:\*\* 2026-11-04

\- \*\*Prompt (summary):\*\* Asked Claude to write practice mode with randomized stat lines, answer checking and feedback that shows the correct work

\- \*\*Key part of AI response:\*\* Random question generator for ERA, WHIP, K/9, BB/9 and FIP, a 0.01 rounding tolerance, and feedback showing the formula steps

\- \*\*What I did with it (accepted / changed / rejected):\*\* Pasted the three full files. Ran practice mode: the answer box checks answers correctly, and New question loads a different question. I did not change the code. Checked the answers by hand during testing.



\## Entry 7

\- \*\*Date:\*\* 2026-11-04

\- \*\*Prompt (summary):\*\* Asked Claude for a test log template with at least five tests, including edge cases and a failure case, with hand-calculated expected values

\- \*\*Key part of AI response:\*\* A table of eight tests with expected results, including 6.1 IP (ERA 2.84), 6.3 IP, 0 IP, a blank field and a FIP hand calculation

\- \*\*What I did with it (accepted / changed / rejected):\*\* Accepted the table and corrected two things Claude's version got wrong: test 5 needed only one field left blank, and the test 7 tolerance check was unreliable, so I split it into 7a and 7b. Ran all tests myself on 2026-11-09 and took a screenshot of each. All passed. Noticed I had the FIP constant at 0 for the first tests, re-ran test 6 with 3.10, and recorded that in the test log.



\## Entry 8

\- \*\*Date:\*\* 2026-11-09

\- \*\*Prompt (summary):\*\* Asked Claude to suggest a tracked improvement after all tests passed, and chose practice-mode mistake feedback (Issue #1)

\- \*\*Key part of AI response:\*\* Recommended showing a one-sentence explanation when a wrong answer matches a common mistake (innings as decimals, missing ×9, missing FIP constant)

\- \*\*What I did with it (accepted / changed / rejected):\*\* Accepted the idea and wrote the issue with acceptance criteria. Took a before screenshot (before-fix.png): the question "5.1 IP, 1 ER, 7 H, 5 BB, 9 K, 1 HR, 2 HBP, BB/9?" answered with 8.82 (treating 5.1 as a plain decimal) shows "Not quite." and the correct answer 8.44, with no explanation.



\## Entry 9

\- \*\*Date:\*\* 2026-11-09

\- \*\*Prompt (summary):\*\* Asked Claude to write the code change for Issue #1 (new app.js and style.css) on the feature-mistake-feedback branch

\- \*\*Key part of AI response:\*\* A mistakes list built with each practice question, with wrong answers worked backward from the correct answer, an explanation box for matches, and a .mistake style

\- \*\*What I did with it (accepted / changed / rejected):\*\* Accepted the approach. Tested it: innings mistake (test 9), no-match (test 10), forgot-×9, and FIP constant (test 12) all behaved as expected. Changed: reworded the three messages from "You may have..." to "It looks like you..." in my own voice. Found a problem: a style.css edit I made on GitHub landed on main instead of the branch and emptied the file, so I restored it on the branch and re-tested. Kept: the check for innings is skipped for whole-number innings, because that wrong answer would equal the correct one. Not covered: combined mistakes.



\## Entry 10

\- \*\*Date:\*\* 2026-11-09

\- \*\*Prompt (summary):\*\* Asked Claude for help with Git and browser problems: untracked files blocking git pull and checkout, a GitHub edit that went to the wrong branch, and a page that looked unstyled

\- \*\*Key part of AI response:\*\* Move the local copies of files out of the repo before pulling, check which branch an edit lands on, restore style.css from the command line, and confirm the stylesheet was applying (it was; the browser had cached an old copy)

\- \*\*What I did with it (accepted / changed / rejected):\*\* Followed the fixes and checked results myself with git branch, git status, dir and the browser. One of Claude's suggestions (merging main into my branch) made the style.css problem worse before I restored the file, so I recorded that in the PR description. A second conflict in style.css appeared when merging the PR; I resolved it from the command line by keeping my branch's full stylesheet.



\## Entry 11

\- \*\*Date:\*\* 2026-11-09 to 2026-11-11

\- \*\*Prompt (summary):\*\* Asked Claude to write the AI Use Note (tool and purpose, prompts, my changes, verification, limitations) and a final README from my prompt log

\- \*\*Key part of AI response:\*\* A full draft of docs/ai-use-note.md and an updated README that links the note and lists the before, after and merged-PR screenshots

\- \*\*What I did with it (accepted / changed / rejected):\*\* Checked every factual statement in the note against what I actually did and confirmed them. Wrote Section 6 using my own answers (see Entry 12). Added a bullet about my own misunderstanding to Section 5.



\## Entry 12

\- \*\*Date:\*\* 2026-11-11

\- \*\*Prompt (verbatim, start of message):\*\* "ask me questions until you are confident it is my wording"

\- \*\*Key part of AI response:\*\* Claude interviewed me with one question per bullet of Section 6: why 6.1 innings means 6⅓, how the mistake feedback works, and what I would improve next.

\- \*\*What I did with it (accepted / changed / rejected):\*\*

&#x20; - Bullet 1: My answer was that 6.1 IP and 6 1/3 IP both mean six full innings plus one out, which is 19 outs. Claude pointed out that 6.1 is baseball notation, not a true decimal, so I kept my wording with "baseball notation" instead of "decimal." I added my own 2.1 IP example (34.29 versus 30.86).

&#x20; - Bullet 2: My own explanation was wrong. I guessed that 2.00 was inside a tolerance range and 15.00 was outside it. Claude corrected this: the 0.01 tolerance only decides whether an answer is correct, and the orange box appears only when a wrong answer matches what a known mistake would produce. I asked Claude to draft the bullet, so it is Claude's wording. I recorded that in the heading of Section 6 and added my misunderstanding to Section 5.

&#x20; - Bullet 3: Kept my own answer (a game-breakdown stat tracker showing odds by situation). Claude suggested adding why it helps pitchers and that it would need a real data source, and I kept those additions.

