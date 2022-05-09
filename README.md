[![Run Tests](https://github.com/LaszloFeher-XP/XP-Berlin_clock/actions/workflows/test.yml/badge.svg)](https://github.com/LaszloFeher-XP/XP-Berlin_clock/actions/workflows/test.yml/badge.svg) 
"[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Berlin_clock&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Berlin_clock)" 
[![Open Issues](https://img.shields.io/github/issues/LaszloFeher-XP/XP-Berlin_clock/badge.svg)](https://github.com/LaszloFeher-XP/XP-Berlin_clock/issues) 

[![Build Status](coverage/badge-branches.svg)](coverage/badge-branches.svg) 
[![Build Status](coverage/badge-functions.svg)](coverage/badge-functions.svg) 
[![Build Status](coverage/badge-lines.svg)](coverage/badge-lines.svg) 
[![Build Status](coverage/badge-statements.svg)](coverage/badge-statements.svg) 
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) 

[Metrics report](metrics.md) 
[Complexity report](complexity-report.md) 

# Berlin Clock

## Instructions 

The "Berlin Clock" is the first public clock in the world that tells the time by means of illuminated, coloured fields, for which it entered the Guinness Book of Records upon its installation on 17 June 1975. 

The clock is read from the top row to the bottom. The top row of four red fields denote five full hours each, alongside the second row, also of four red fields, which denote one full hour each, displaying the hour value in 24-hour format. The third row consists of eleven yellow-and-red fields, which denote five full minutes each (the red ones also denoting 15, 30 and 45 minutes past), and the bottom row has another four yellow fields, which mark one full minute each. The round yellow light on top blinks to denote even- (when lit) or odd-numbered (when unlit) seconds.

Example: Two fields are lit in the first row (five hours multiplied by two, i.e. ten hours), but no fields are lit in the second row; therefore the hour value is 10.
Six fields are lit in the third row (five minutes multiplied by six, i.e. thirty minutes), while the bottom row has one field on (plus one minute). Hence, the lights of the clock altogether tell the time as 10:31. (Source: Wikipedia)

Task: Write a function that takes in a particular time as 24h format ('hh:mm:ss') and outputs a string that reproduces the Berlin Clock. The parameters should be as follows:

    “O” = Light off
    “R” = Red light
    “Y” = Yellow light


Example Test Case:

Input String:
12:56:01

Output String:
O
RROO
RROO
YYRYYRYYRYY
YOOO

Please check the example test cases for the required output format. 

## User Stories 

### 1. Converting 5-hour
```
As a pedestrian
I want to see the 5-hour row section of the Berlin Clock
So that I'll know the time
```

#### Scenarios: converting 5-hour
```
Given the timestamp <timestamp>
When converting it to Berlin time
Then the 5-hour row shows <fiveHourLights>

Examples:
  | timestamp | fiveHourLights |
  | 00:18:54  | ⚫⚫⚫⚫     |
  | 04:13:24  | ⚫⚫⚫⚫     |
  | 05:25:19  | 🔴⚫⚫⚫     |
  | 09:13:30  | 🔴⚫⚫⚫     |
  | 10:15:58  | 🔴🔴⚫⚫     |
  | 14:41:55  | 🔴🔴⚫⚫     |
  | 15:38:01  | 🔴🔴🔴⚫     |
  | 19:10:02  | 🔴🔴🔴⚫     |
  | 20:12:00  | 🔴🔴🔴🔴     |
  | 23:59:00  | 🔴🔴🔴🔴     |
```


# Setting up the environment 

## To install dependencies 

To install dependencies, run the following: 

```npm install``` 

## To run the tests 

To run the tests, there is a script in the project root called test. It calculates code coverage, incorporates watch mode, and prints in verbose mode, so all test file's test report will be visible. Alternatively, you can achieve the same with the command the script contains: 

```npm test --watchAll --collect-coverage --verbose```  

