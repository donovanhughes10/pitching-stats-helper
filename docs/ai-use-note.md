\# AI Use Note



\*\*Project:\*\* Pitching Stats Helper (AI 101 midterm)

\*\*Author:\*\* Donovan Hughes

\*\*Date:\*\* 2026-11-09 (Section 6 written 2026-11-11)



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

5\. "ask me questions until you are confident it is my wording". I asked Claude to interview me so that Section 6 of this note would be in my own words.



Other prompts are summarized in `docs/ai-prompts.md` (Entries 3 to 12).



\## 3. What I changed, checked and rejected



Most of the code was written by Claude. I did not write the app from scratch. My contribution was choosing the project, testing and reviewing the code, finding and fixing problems, and deciding what to keep.



\- \*\*Project choice:\*\* I picked the baseball stats helper from Claude's five ideas because it fits my pitching background and every answer can be checked by math.

\- \*\*Formula verification:\*\* I opened the MLB, Baseball-Reference, FanGraphs and Tom Tango pages myself and compared each formula to app.js. All five matched. I recorded the sources in the README.

\- \*\*A truncated file:\*\* The first copy of index.html I pasted into GitHub was cut off partway, so app.js never loaded and the page showed no results. I compared the page to the code, found the missing ending, and replaced the whole file.

\- \*\*Testing:\*\* I ran every test myself in Chrome and took a screenshot of each. I noticed I had the FIP constant at 0 for the first tests, re-ran test 6 with 3.10, and recorded it. I also corrected two things in Claude's test plan: test 5 needed only one blank field, and the test 7 tolerance check was unreliable, so I split it into 7a and 7b.

\- \*\*Tracked improvement (Issue #1, Pull request #2):\*\* After all tests passed, I chose practice-mode mistake feedback as the improvement. I took the before screenshot, wrote the issue's acceptance criteria, tested the new code on a branch (innings mistake, forgot-×9, FIP constant, and a no-match answer), and reworded the three explanation messages in my own voice ("It looks like you...").

\- \*\*Git problems:\*\* A style.css edit I made on GitHub landed on `main` instead of my branch and emptied the file. Merging `main` into my branch made it worse before I restored the file from my computer. I recorded this in the PR and the prompt log, and I resolved a second merge conflict in style.css by keeping my branch's full stylesheet.

\- \*\*Writing Section 6:\*\* Claude interviewed me with one question per bullet. The first and third bullets are based on my own answers, lightly cleaned up. The second bullet was drafted by Claude after my own explanation turned out to be wrong (see Section 5).

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

\- \*\*My own misunderstanding:\*\* When I first tried to explain why my 15.00 answer showed the orange box and my 2.00 answer didn't, I guessed it was about a tolerance range. That was wrong. The 0.01 tolerance only decides whether an answer is correct. The orange box appears only when a wrong answer exactly matches what a known mistake would produce. I corrected my explanation after testing both answers on the same question.

\- \*\*Bad advice:\*\* Claude's suggestion to merge `main` into my branch made the style.css problem worse before I restored the file from my computer. Claude also gave me an example answer that didn't fit my practice question, which I caught when the app showed no explanation for it.

\- \*\*Untested by the AI:\*\* Claude does not run the code. Every behavior described here was tested by me in the browser.

\- \*\*App limitations:\*\*

&#x20; - FIP uses a league constant that changes every season. The 3.10 default is approximate.

&#x20; - FIP has variants (for example, intentional walks). The app uses the common FanGraphs form.

&#x20; - Practice mode only recognizes three specific mistakes. Combined mistakes get the normal feedback with no explanation.

&#x20; - The calculator requires every field to be filled in (use 0 if none).

&#x20; - Formulas follow common definitions. This is a study tool, not official scoring.

\- \*\*Testing limitations:\*\* All tests were manual, in one browser (Chrome). I did not test on other browsers or phones.

\- \*\*What I did not fully verify:\*\* I reviewed the code change line by line, but I did not independently audit every line of the starter code. I tested its behavior instead.



\## 6. Explanations (drafted with Claude, checked and edited by me)



\- \*\*Why 6.1 innings means 6⅓:\*\* 6.1 IP and 6 1/3 IP both mean the pitcher finished six full innings plus one out in the seventh. In both cases that's 19 outs total, one written in baseball notation and the other as a fraction. For the math, the app has to use the fraction form. On my practice question with 2.1 IP and 8 strikeouts, dividing by 2.1 gave 34.29, but the correct K/9 is 9 × 8 ÷ 2.333 = 30.86.

\- \*\*How the mistake feedback works:\*\* When a practice question is created, the app works out the correct answer and also the answers that a few common mistakes would give, like using the IP as a plain decimal or forgetting the ×9. When I click Check answer, it first checks whether my answer is within 0.01 of the correct one. If it isn't, it checks whether my answer matches one of those mistake answers. On my 1.2 IP BB/9 question the correct answer was 10.80, so 15.00 (9 × 2 ÷ 1.2) matched the innings mistake and got the orange box, while 2.00 matched nothing and only got "Not quite."

\- \*\*What I would improve next:\*\* If I kept adding features, I'd build a stat tracker that breaks down a pitcher's game. It would show their statistical odds in each situation, such as runners on base or the count, and present their probability of succeeding against the batter. This would help pitchers see which situations cost them runs, instead of only seeing season totals like ERA and FIP. It would need a real data source, such as pitch-by-pitch or play-by-play data, which this app doesn't have.

