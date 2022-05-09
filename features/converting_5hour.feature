Feature: Converting 5-hour

Scenario Outline: Converting 5-hour
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