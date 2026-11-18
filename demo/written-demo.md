\# Written Demo: Pitching Stats Helper



\*\*Author:\*\* Donovan Hughes

\*\*Course:\*\* AI 101, Alvernia University (midterm project)

\*\*Repository:\*\* https://github.com/donovanhughes10/pitching-stats-helper



This is a written version of my five-minute demonstration. It follows the five things the assignment names: audience, working features, the AI-assisted change, evidence and a limitation.



\## 1. Audience and need



This app is for baseball fans, players and coaches, mainly pitchers and the people who follow them. They can learn the formulas behind common pitching stats, enter their own or any other player's numbers, and see the benefit of understanding what the stats measure. The need is to understand what ERA, WHIP, FIP and K/9 actually measure, not just memorize them.



\## 2. Working features



The app has three features, all in one page that runs in the browser.



\*\*Glossary.\*\* At the top of the page, each stat is listed with its formula and what it tells you, so a user can see how the number is created. A search box and a category filter narrow the list. For example, searching "walks" shows three stats (WHIP, BB/9 and FIP, because FIP's description also mentions walks).



\*\*Calculator.\*\* A user enters a pitching line (innings, earned runs, hits, walks, strikeouts, home runs and hit batters) and sees ERA, WHIP, K/9, BB/9 and FIP, with the formula steps shown. Innings use baseball notation, where 6.1 means six innings plus one out. That is 19 outs, or 6⅓ innings, so the app converts it before dividing. For example, 6.1 innings and 2 earned runs gives an ERA of 2.84. Dividing by 6.1 as if it were a normal decimal would give 2.95, which is wrong. The FIP constant is editable because it changes every season.



\*\*Practice mode.\*\* The app creates a random stat line and asks for a stat. A user can type an answer, and the app shows whether it is correct, the correct answer, and the worked steps. This lets users practice the math.



\## 3. The AI-assisted change



After my first twelve tests passed, I noticed a gap in practice mode. When I answered wrong, the app said "Not quite" and showed the correct answer, but it never explained why my answer was wrong. I wrote Issue #1 with acceptance criteria, asked Claude to write the change on a separate branch, tested it, reworded the three messages in my own voice, and merged it as Pull Request #2.



The change adds a "Likely mistake" box in orange. It does not appear for every wrong answer. When a practice question is created, the app works out the correct answer and the answers that three common mistakes would give: using the innings as a plain decimal, forgetting to multiply by 9, and leaving out the FIP constant. When a wrong answer exactly matches one of those, the box explains the mistake.



Here is an example from my testing. On a question with 1.2 innings pitched asking for BB/9, the correct answer was 10.80. I typed 15.00, which is 9 × 2 ÷ 1.2, the plain-decimal mistake, and the orange box appeared. I typed 2.00, which matches none of the mistakes, and I only got "Not quite" with no box. The 0.01 tolerance in the code only decides whether an answer is correct. It does not decide when the box appears.



Along the way, a style.css edit I made on GitHub went to the wrong branch and emptied the file, which made the page look unstyled. I restored it from my computer and resolved a merge conflict by keeping my branch's full stylesheet. I documented that in the pull request and the prompt log. Claude's suggestion to merge `main` into my branch made that problem worse before I fixed it.



\## 4. Evidence



\- \*\*Test log:\*\* `docs/test-log.md` has twelve tests, all passed, covering normal cases, edge cases (6.1 IP, 6.3 IP, 0 IP), validation (a blank field, non-numeric input) and the new feature. Each test has a screenshot in `test-screenshots`.

\- \*\*Hand calculations:\*\* I worked out the expected answers by hand before running the tests.

\- \*\*Formula checks:\*\* I compared every formula to MLB, Baseball-Reference, FanGraphs and Tom Tango's FIP page. The sources are in the README.

\- \*\*Before and after:\*\* `before-fix.png` shows a wrong answer with no explanation. `after-fix.png` and `after-fix-final.png` show the same kind of wrong answer with the orange box. The final one is from the merged `main` branch.

\- \*\*Fresh copy:\*\* I downloaded the project as a ZIP from GitHub, extracted it and ran every feature, including random practice questions, to confirm that someone else can open and use it with no setup.

\- \*\*Traceable change:\*\* Issue #1 is closed and Pull Request #2 is merged.



\## 5. Limitations



\- The app can't save or store stats. Each time a user enters numbers, they are used for that one calculation and then gone.

\- The FIP constant changes every season, so the 3.10 default is approximate. FIP is only comparable with published numbers if the user enters the constant for that season.

\- Practice mode only recognizes three mistakes. Combined mistakes get the normal feedback with no explanation.

\- Tests were manual, in one browser.



\## 6. What I would do next



If I kept building, I would let teams use the app so a coach could enter all the numbers and have the statistics listed correctly and saved for each specific player. That would require storing data, which this app does not do. A later version could also break down a pitcher's game by situation, such as runners on base or the count, which would need real play-by-play data.



\## 7. Likely questions and my answers



\- \*\*Why this audience?\*\* I am a pitcher, and I think this is a useful tool for people in the baseball community who want to understand stats.

\- \*\*What did the AI get wrong?\*\* It predicted two results when I searched "walks" and the app showed three. Its advice to merge `main` into my branch made the style.css problem worse. I also misunderstood how the orange box works until I tested two answers on the same question.

\- \*\*How do you know the formulas are right?\*\* I compared each one to MLB, Baseball-Reference, FanGraphs and Tom Tango's FIP page. The sources are in the README.

\- \*\*What did you change yourself?\*\* I chose the project, ran and screenshotted every test, caught a truncated `index.html`, reworded the three explanation messages and resolved the Git conflicts.

