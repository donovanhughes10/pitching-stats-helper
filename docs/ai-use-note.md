\# AI Use Note



\*\*Project:\*\* Pitching Stats Helper (AI 101 midterm)

\*\*Author:\*\* Donovan Hughes

\*\*Date:\*\* 2026-11-09



\## 1. Tool and purpose



\- \*\*Tool:\*\* Claude (Sonnet 5.5, via claude.ai chat). No live AI API is used in the app itself. The app runs entirely in the browser with plain HTML, CSS and JavaScript.

\- \*\*What I used it for:\*\*

&#x20; - Brainstorming project ideas and choosing a scope that fit the rubric

&#x20; - Writing the starter code (index.html, style.css, app.js) for the glossary, calculator and practice mode

&#x20; - Drafting the test plan and test-log template, with hand-calculated expected values

&#x20; - Writing the code change for Issue #1 (the "likely mistake" feedback in practice mode)

&#x20; - Walking me through Git and GitHub steps and debugging problems along the way

&#x20; - Drafting the README, prompt log and this note



The full running record is in `docs/ai-prompts.md`.



\## 2. Representative prompts



These are prompts I typed, with spelling as I typed them.



1\. "completely seperate assignment right here , generate ideas :" followed by the pasted project brief. Result: five project ideas. I chose the baseball stats study helper.

2\. "based off the rubric at previously represented walk me through step by step on how to complete this ai assited proptotype in line with the rubric to 100 percent score". Result: a seven-phase plan that I followed.

3\. "for the prompts you pasted above I need you to resend them with the full current index , app and style". I asked for complete files after a partial paste left index.html cut off.

4\. "just send me the full styles.css and then we can check on cmd if it went". I asked for the full file after a style.css edit went to the wrong branch.



Other prompts are summarized in `docs/ai-prompts.md` (Entries 3 to 10).



\## 3. What I changed, checked and rejected



Most of the code was written by Claude. I did not write the app from scratch. My contribution was choosing the project, testing and reviewing the code, finding and fixing problems, and deciding what to keep.



\- \*\*Project choice:\*\* I picked the baseball stats helper from Claude's five ideas because it fits my pitching background and every answer can be checked by math.

\- \*\*Formula verification:\*\* I opened the MLB, Baseball-Reference, FanGraphs and Tom Tango pages myself and compared each formula to app.js. All five matched. I recorded the sources in the README.

\- \*\*A truncated file:\*\* The first copy of index.html I pasted into GitHub was cut off partway, so app.js never loaded and the page showed no results. I compared the page to the code, found the missing ending, and replaced the whole file.

\- \*\*Testing:\*\* I ran every test myself in Chrome and took a screenshot of each. I noticed I had the FIP constant at 0 for the first tests, re-ran test 6 with 3.10, and recorded it. I also corrected two things in Claude's test plan: test 5 needed only one blank field, and the test 7 tolerance check was unreliable, so I split it into 7a and 7b.

\- \*\*Tracked improvement (Issue #1, Pull request #2):\*\* After all tests passed, I chose practice-mode mistake feedback as the improvement. I took the before screenshot, wrote the issue's acceptance criteria, tested the new code on a branch (innings mistake, forgot-×9, FIP constant, and a no-match answer), and reworded the three explanation messages in my own voice ("It looks like you...").

\- \*\*Git problems:\*\* A style.css edit I made on GitHub landed on `main` instead of my branch and emptied the file. Merging `main` into my branch made it worse before I restored the file from my computer. I recorded this in the PR and the prompt log, and I resolved a second merge conflict in style.css by keeping my branch's full stylesheet.

\- \*\*What I rejected or left out:\*\* I did not add extra features beyond the three the scope allows. I did not invent a bug for the issue, because none of my nine original tests failed.



\## 4. How I verified the work



\- \*\*Formulas:\*\* Checked against published sources (see the README sources table).

\- \*\*Hand calculations:\*\* I worked the expected answers by hand before running tests (for example, 6.1 IP and 2 ER gives an ERA of 2.84, and the FIP check gives 2.88 with a 3.10 constant).

\- \*\*Tests:\*\* Twelve tests are in `docs/test-log.md`, covering normal cases, edge cases (6.1 IP, 6.3 IP, 0 IP), validation (a blank field, "abc"), and the new feature (tests 9, 10 and 12). All twelve passed, and each has a screenshot in `test-screenshots`.

\- \*\*Before and after evidence:\*\* `before-fix.png` shows a wrong answer with no explanation. `after-fix.png` and `after-fix-final.png` show the same kind of wrong answer with the "Likely mistake" box. The final one is from the merged `main` branch.

\- \*\*Regression check:\*\* After the change, I re-checked the calculator, the glossary, correct answers and non-numeric input (test 11).

\- \*\*Version control:\*\* The change is traceable through Issue #1, Pull request #2, and the commit history.



\## 5. Limitations and where the AI was wrong



\- \*\*Wrong predictions:\*\* Claude predicted that searching "walks" would show two stats. It showed three, because FIP's description also mentions walks. The app was right and the prediction was wrong.

\- \*\*Bad advice:\*\* Claude's suggestion to merge `main` into my branch made the style.css problem worse before I restored the file from my computer. Claude also repeated a wrong example number once, which I caught when the app showed no explanation for it.

\- \*\*Untested by the AI:\*\* Claude does not run the code. Every behavior described here was tested by me in the browser.

\- \*\*App limitations:\*\*

&#x20; - FIP uses a league constant that changes every season. The 3.10 default is approximate.

&#x20; - FIP has variants (for example, intentional walks). The app uses the common FanGraphs form.

&#x20; - Practice mode only recognizes three specific mistakes. Combined mistakes get the normal feedback with no explanation.

&#x20; - The calculator requires every field to be filled in (use 0 if none).

&#x20; - Formulas follow common definitions. This is a study tool, not official scoring.

\- \*\*Testing limitations:\*\* All tests were manual, in one browser (Chrome). I did not test on other browsers or phones.

\- \*\*What I did not fully verify:\*\* I reviewed the code change line by line, but I did not independently audit every line of the starter code. I tested its behavior instead.



\## 6. In my own words



\*(Edit these three answers so they sound like you. I wrote a first version, and your edit is part of the student-changes evidence.)\*



\- \*\*Why 6.1 innings means 6⅓:\*\* Baseball counts outs, not tenths. The number after the decimal is the number of outs in the current inning, so .1 is one out, which is 1/3 of an inning. That's why the calculator converts 6.1 to 6.333 before dividing.

\- \*\*How the mistake feedback works:\*\* When a practice question is created, the app already knows the correct answer, so it works out what each common wrong answer would be: the IP used as a plain decimal, the answer without the ×9, or the FIP answer without the constant. When I submit a wrong answer, it checks whether my answer is within 0.01 of one of those, and if so, it shows the matching explanation.

\- \*\*What I would improve next:\*\* I would catch combined mistakes (such as using the IP as a decimal and forgetting the ×9) and let blank optional fields default to 0.

