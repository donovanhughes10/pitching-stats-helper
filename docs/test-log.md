\# Test Log



Tester: Donovan Hughes

Version tested: main branch (tests 1 to 8), feature-mistake-feedback branch (tests 9 to 12)

Date: 2026-11-09

Browser: Chrome, opened locally from index.html



| ID | Input | Expected | Actual | Pass/Fail | Screenshot | Notes |

|---|---|---|---|---|---|---|

| 1 | Calculator: 9 IP, 3 ER, all other fields 0 | ERA 3.00 | ERA 3.00 | Pass | test-1.png | Normal case |

| 2 | Calculator: 6.1 IP, 2 ER, all other fields 0 | ERA 2.84 (18 ÷ 6.333) | ERA 2.84 | Pass | test-2.png | Edge: fractional innings converted correctly |

| 3 | Calculator: 6.3 IP | Red error: IP must end in .0, .1 or .2 | Red error shown | Pass | test-3.png | Edge: invalid innings rejected |

| 4 | Calculator: 0 IP, all other fields 0 | "Undefined", no crash | "Undefined" shown, no crash | Pass | test-4.png | Edge: divide by zero |

| 5 | Calculator: 9 IP, 3 ER, H/BB/K/HBP 0, HR left blank | Error: Enter a value for HR (use 0 if none) | Error shown | Pass | test-5.png | Validation: blank field |

| 6 | Calculator: 9 IP, 3 ER, 1 H, 2 BB, 4 K, 0 HR, 0 HBP, FIP constant 3.10 | ERA 3.00, WHIP 0.33, K/9 4.00, BB/9 2.00, FIP 2.88 | All five matched | Pass | test-6.png | Hand-calculated FIP: (0 + 6 − 8) ÷ 9 + 3.10 = 2.88. First run had the FIP constant at 0 by mistake; re-ran with 3.10 and got 2.88 (see screenshot) |

| 7a | Practice: wrong answer, then the exact correct answer | "Not quite." then "Correct!" | As expected | Pass | test-7a.png (wrong answer), test-7a(2).png (correct answer) | Two-step test. Feedback shows the correct answer and the work |

| 7b | Practice: correct answer plus 0.05 | "Not quite." | "Not quite." | Pass | test-7b.png | Edge: outside the 0.01 tolerance |

| 8 | Practice: type "abc" | Red message asking for a number | Message shown | Pass | test-8.png | Validation: non-numeric input |

| 9 | Practice (new feature): stat line 1.2 IP, 0 ER, 3 H, 2 BB, 0 K, 1 HR, 2 HBP, BB/9. Answer 15.00 (treats 1.2 as a plain decimal: 9 × 2 ÷ 1.2) | "Not quite." plus a Likely mistake box about innings notation, correct answer 10.80 | Orange Likely mistake box shown, correct answer 10.80 | Pass | after-fix.png | Screenshot shows the original "You may have used..." wording; I reworded it afterward to "It looks like you used..." |

| 10 | Practice (no match): same question, answer 2.00 | "Not quite." with no explanation box, correct answer 10.80 | No explanation box, correct answer shown | Pass | test-10.png | Existing behavior preserved when no known mistake matches |

| 11 | Regression: re-ran the calculator checks (9 IP, 6.1 IP, 6.3 IP, 0 IP, blank HR), the practice correct-answer and "abc" checks, and the glossary search on the feature branch | Same results as before the change | Same results | Pass | none | Spot-check only, no screenshots. Correct practice answers still show "Correct!" with no explanation |

| 12 | Practice (FIP constant): stat line 6 IP, 6 ER, 1 H, 2 BB, 11 K, 1 HR, 0 HBP, FIP, constant 3.10. Answer -0.50 (correct 2.60 minus 3.10) | "Not quite." plus a Likely mistake box about the FIP constant, correct answer 2.60 | Orange box "It looks like you left out the FIP constant. Add 3.10 at the end." and correct answer 2.60 | Pass | test-12.png | Third mistake type from issue #1. Uses the reworded message |



\## Observations

\- For the first several tests the FIP constant field was left at 0 instead of the 3.10 default. ERA, WHIP, K/9 and BB/9 do not use the constant, so those results were unaffected. Test 6 is the only calculator test that checks FIP, so I re-ran it with the constant set to 3.10 and it matched the hand calculation (2.88).

\- The calculator rejects blank fields by design. Every field must be filled in (use 0 if none), including HR and HBP.

\- While testing the new feature, a forgot-the-×9 check also worked: on a 4 IP K/9 question (correct answer 18.00), entering 2.00 showed the forgot-×9 explanation. I did not save a screenshot for that run.

\- The page briefly looked unstyled because a style.css edit landed on main by mistake and emptied the file. I restored it on the feature branch.



\## Limitation investigated

The FIP constant changes every season. It is set so that league FIP matches league ERA, so no single value is correct for every year. This app defaults to 3.10, which is approximate. Because the constant is added to the result, entering 0 instead of 3.10 lowers FIP by exactly 3.10 while every other stat stays the same. Users must look up the constant for their season (FanGraphs publishes it on its Guts page) for FIP to be comparable with published figures.



A second limitation of the new feature: it only recognizes three specific mistakes. A wrong answer that combines two mistakes, or any other error, shows the normal feedback with no explanation.



\## Summary

12 tests run (1 to 6, 7a, 7b, 8, 9, 10, 11, 12). 12 passed, 0 failed. No bugs were found in the original version, so the tracked improvement was a feature improvement (Issue #1, Pull request #2) rather than a bug fix.

