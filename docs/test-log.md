# Test Log

Tester: Donovan Hughes
Version tested: main branch, before the tracked improvement
Date: 2026-11-04

| ID | Input | Expected | Actual | Pass/Fail | Screenshot | Notes |
|---|---|---|---|---|---|---|
| 1 | Calculator: 9 IP, 3 ER, all other fields 0 | ERA 3.00 | | | test-1.png | Normal case |
| 2 | Calculator: 6.1 IP, 2 ER, all other fields 0 | ERA 2.84 (2.842 from 18 ÷ 6.333) | | | test-2.png | Edge: fractional innings |
| 3 | Calculator: 6.3 IP | Red error: IP must end in .0, .1 or .2 | | | test-3.png | Edge: invalid innings |
| 4 | Calculator: 0 IP, all other fields 0 | "Undefined", no crash | | | test-4.png | Edge: divide by zero |
| 5 | Calculator: 9 IP, 3 ER, HR left blank | Error: Enter a value for HR (use 0 if none) | | | test-5.png | Failure/validation |
| 6 | Calculator: 9 IP, 3 ER, 1 H, 2 BB, 4 K, 0 HR, 0 HBP, constant 3.10 | ERA 3.00, WHIP 0.33, K/9 4.00, BB/9 2.00, FIP 2.88 | | | test-6.png | Hand-calculated: (0 + 6 − 8) ÷ 9 + 3.10 |
| 7 | Practice: type the correct answer plus 0.01, then plus 0.02 | +0.01 counts as correct; +0.02 shows "Not quite." | | | test-7.png | Edge: rounding tolerance |
| 8 | Practice: type "abc" | Red error asking for a number | | | test-8.png | Failure/validation |

## Limitation investigated
(Fill in after testing. For example: the FIP constant changes every season, and the default 3.10 is approximate.)

## Summary
(Fill in: how many passed, how many failed, and what you found.)
