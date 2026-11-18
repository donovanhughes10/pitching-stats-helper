\# Demo Script: Pitching Stats Helper (5 minutes)



\*\*Author:\*\* Donovan Hughes

\*\*Course:\*\* AI 101, Alvernia University (midterm project)

\*\*Delivery:\*\* Submitted through Canvas

\*\*Repository:\*\* https://github.com/donovanhughes10/pitching-stats-helper



The demo follows the five things the assignment says it will ask about: audience, working features, the AI-assisted change, evidence and a limitation.



\## Before I start



\- \[ ] Do not change any code. The demonstrated version is the merged `main` branch.

\- \[ ] Open `index.html` from the project folder and press Ctrl+Shift+R.

\- \[ ] Open these tabs: Issue #1, Pull request #2 (Files changed), `docs/test-log.md`, and the `test-screenshots` folder.

\- \[ ] Have `before-fix.png` and `after-fix-final.png` ready as a backup if the random practice question doesn't cooperate.



\## Timed script



\### 0:00 to 0:30: Audience and need



"This app is for baseball players, coaches and fans who want stat breakdowns. It's mainly for pitchers and the people who follow them. I chose it because I think it's a useful tool for people inside the baseball community. The need is to understand what ERA, WHIP, FIP and K/9 actually measure, not just memorize them."



\### 0:30 to 2:00: Working features



\*\*Glossary (about 30 seconds).\*\* Scroll to the top.

"One of the most important parts is the glossary at the top, where each formula is broken down so other users can see how these numbers are created."

Type `walks` (3 stats show). Pick Skill-based (3 stats show).



\*\*Calculator (about 30 seconds).\*\* Enter 6.1 IP, 2 ER, 0 in every other field, FIP constant 3.10, and click Calculate. ERA shows 2.84.

"6.1 means six full innings plus one out, which is 19 outs, so the app uses 6⅓ in the math. Dividing by 6.1 would give 2.95, which is wrong."



\*\*Practice mode (about 30 seconds).\*\* Show a question and answer it correctly or incorrectly to show the feedback.



\### 2:00 to 3:30: The AI-assisted change



Open Issue #1.

"After my tests passed, I noticed that when I answered a practice question wrong, the app said 'Not quite' and showed the correct answer, but it didn't say why my answer was wrong. I wrote an issue with acceptance criteria, asked Claude to write the change on a separate branch, tested it, reworded the messages in my own voice, and merged it as pull request #2."



Live demo: click New question until the IP ends in .1 or .2 and it asks for ERA, WHIP, K/9 or BB/9. Type the answer you get by using the IP as written in the formula, and show the orange "Likely mistake" box.

Open PR #2, Files changed, and point at `app.js`.



\### 3:30 to 4:30: Evidence



"To show it works, I point to the evidence I collected while building. The test log has twelve tests, all passed, and each has a screenshot. I also worked the answers out by hand and checked every formula against MLB, Baseball-Reference and FanGraphs."

Show `before-fix.png` (no explanation), then `after-fix-final.png` (explanation box).



\### 4:30 to 5:00: Limitation



"One limitation is that the FIP constant changes every season, so my default of 3.10 is approximate. Another is that the app can't personalize to a specific player or team yet. That's the feature I'd add next: a game breakdown showing a pitcher's odds in each situation. It would need real play-by-play data."



\## If something goes wrong



\- \*\*The practice question isn't useful:\*\* click New question again, or switch to the screenshots.

\- \*\*The page looks unstyled:\*\* press Ctrl+Shift+R.

\- \*\*Running long:\*\* cut the Git details and mention them only if asked.



\## Likely questions and my answers



These are drafts to say in my own words.



\- \*\*Why this audience?\*\* I'm a pitcher, and I think this is a useful tool for people in the baseball community who want to understand stats.

\- \*\*What did the AI get wrong?\*\* It predicted two results when I searched "walks," and the app showed three. Its suggestion to merge `main` into my branch made the style.css problem worse before I restored the file. And I misunderstood how the orange box works until I tested two answers on the same question.

\- \*\*How do you know the formulas are right?\*\* I opened the MLB, Baseball-Reference, FanGraphs and Tom Tango pages and compared each formula to my code. The sources are in the README.

\- \*\*How does the mistake feedback work?\*\* When a question is created, the app works out the correct answer and the answers that a few common mistakes would give. If my wrong answer matches one of them, it shows the explanation.

\- \*\*What did you change yourself?\*\* I picked the project, ran and screenshotted every test, caught the truncated `index.html`, reworded the three messages and resolved the Git conflicts.

\- \*\*What would you do next?\*\* A stat tracker that breaks down a pitcher's game by situation, which needs a real data source.



\## Recording tips (if the demo is a video)



\- Windows key + G opens the Xbox Game Bar, which can record the browser window and your microphone.

\- Do one practice run, then record. Aim for about 4:30.

\- Check that the audio and the screen are clear before uploading to Canvas.

