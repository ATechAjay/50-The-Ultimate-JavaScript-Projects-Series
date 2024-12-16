# Converting with the Year

```js
let year = 22;
const Year = year;
const Week = year * 52;
const Month = year * 12;
const Day = year * 365;
const Hour = year * 365 * 24;
const Minute = year * 365 * 24 * 60;
const Second = year * 365 * 24 * 60 * 60;
const Milliseconds = year * 365 * 24 * 60 * 60 * 1000;
```

# Converting with the Milliseconds

```js
let year = 22;

// Millisecond to specific date units.
const msToSec = (year * 365 * 24 * 60 * 60 * 1000) / 1000;
const msToMin = (year * 365 * 24 * 60 * 60 * 1000) / (1000 * 60);
const msToHrs = (year * 365 * 24 * 60 * 60 * 1000) / (1000 * 60 * 60);
const msToDay = (year * 365 * 24 * 60 * 60 * 1000) / (1000 * 60 * 24);
```

```js
const msToSec = Math.abs(ms / 1000);
const msToMin = Math.abs(ms / (1000 * 60));
const msToHrs = Math.abs(ms / (1000 * 60 * 60));
const daysFromTimeStamp = Math.abs(ms / (1000 * 60 * 60 * 24));
const yearFromDays = daysFromTimeStamp / 365;
const monthFromYear = yearFromDays * 12;
const weekFromDays = daysFromTimeStamp / 7;
```
