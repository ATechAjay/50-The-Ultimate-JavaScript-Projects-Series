---
author: "Ajay Yadav 🎯"
handle: "@ATechAjay"
source: "https://twitter.com/ATechAjay/status/1547130825853976577"
date: "July 13, 2022 12:08 PM"
likes: 735
retweets: 131
replies: 34
---
![ATechAjay](https://pbs.twimg.com/profile_images/1485567675111981057/mLsrcZdB_normal.jpg)
Ajay Yadav 🎯 ([@ATechAjay](https://twitter.com/ATechAjay)) - July 13, 2022 12:08 PM

1️⃣3️⃣ / 5️⃣0️⃣ The Ultimate JavaScript Projects Series!

🎉 Progress Page Steps!

A Thread🧵↓ [pic.twitter.com/lljKFvHHAs](https://twitter.com/ATechAjay/status/1547130825853976577/video/1)

🔔Continuing this thread from the previous one!

[twitter.com/ATechAjay/stat…](https://twitter.com/ATechAjay/status/1544587424512086016)

> ![ATechAjay](https://pbs.twimg.com/profile_images/1485567675111981057/mLsrcZdB_normal.jpg)
> Ajay Yadav 🎯 ([@ATechAjay](https://twitter.com/ATechAjay)) - July 6, 2022 11:41 AM
>
>
> 1️⃣2️⃣ -🅰 / 5️⃣0️⃣ The Ultimate JavaScript Projects Series!
>
> 🎉 Progress Page Steps!
>
> A Thread🧵↓ [pic.twitter.com/MWILdFr8qu](https://twitter.com/ATechAjay/status/1544587424512086016/photo/1)
>
![3_1544587421513179139](https://pbs.twimg.com/media/FW96E4fUYAM3m_q.png)

⛔ Now we have to add a function for the functionality of the progress step pages, so I've divided this function into 3 parts.

1️⃣ For circles
2️⃣ For line
3️⃣ For the button disabled or not

◩ So we are going to create a function called "refresh( )" that is responsible for the progress step page. [pic.twitter.com/Cbcmgnz8fu](https://twitter.com/ATechAjay/status/1547130838071930881/photo/1)

![3_1547120267528269824](https://pbs.twimg.com/media/FXh5r7LUcAAvddH.png)

1️⃣ For circles

◩ Now we have to iterate those circles, if the value of the "index" variable is less than the "active" value then we have to add the ".active" classes to the circle elements or vice-versa. [pic.twitter.com/U750i2lJpG](https://twitter.com/ATechAjay/status/1547130843889483776/photo/1)

![3_1547120752880521216](https://pbs.twimg.com/media/FXh6ILQUEAAP80e.png)

2️⃣ For line

◩ Then we have to implement the line status according to the ".active" classes.

◩ I've created a new variable to find the current location of the line. [pic.twitter.com/E9ethnh7eg](https://twitter.com/ATechAjay/status/1547130851489505281/photo/1)

![3_1547122287920287745](https://pbs.twimg.com/media/FXh7hhuUEAEs546.jpg)

◩ Here is the logic for the exact location of the circles and lines.

◩ At the first circle:
- length of the line = 1
- Number of circles = 5
and so on...

◩ And just we have to divide the length by the number of circles and multiply them by 100 as well. [pic.twitter.com/uhYFgfbqat](https://twitter.com/ATechAjay/status/1547130858397503489/photo/1)

![3_1547123010850631681](https://pbs.twimg.com/media/FXh8Lm2VsAEFXgk.jpg)

◩ After multiplying, we have to concatenate the "%" sign with those values.

◩ Still, we are not getting the exact location of the circles and lines.

💡That's why we have to subtract 1 from both of them.

◩ Without subtraction the exact status of the line and circle on each click:

◩ 1st click(2nd circle):
- value of line = 2
- total num of circle = 5
and so on... [pic.twitter.com/vkX4icMctF](https://twitter.com/ATechAjay/status/1547130869420134400/photo/1)

![3_1547125511813402624](https://pbs.twimg.com/media/FXh-dLqVEAACCWr.jpg)

◩ After subtracting from both of them the value of line and circles:

◩ 1st click(2nd circle):
- value of line = 1
- total num of circle = 4
and so on...

😜 We are ignoring the first circle! [pic.twitter.com/QYJH7dgz40](https://twitter.com/ATechAjay/status/1547130878089826305/photo/1)

![3_1547126132952117248](https://pbs.twimg.com/media/FXh_BVlVsAA5ibR.jpg)

⛔ Take your time to understand this:)

3️⃣ For the button disabled or not!

◩ At start:
- If the value of the "active" variable is equal to 1 then the "prev" button will be disabled.

◩ At last:
- If the value of the "active" variable is equal to the number of circles then the "next" button will be disabled.

⛔Otherwise not disabled! [pic.twitter.com/h16ZVgUzsx](https://twitter.com/ATechAjay/status/1547130889074749440/photo/1)

![3_1547127768621625344](https://pbs.twimg.com/media/FXiAgi7VsAAX2fz.png)

🔔 One more thing, if you want to learn the awesome projects from this series then you should follow this Github repository.

🔔 Don't forget to give a star ⭐ to this repository, also if you didn't follow me on GitHub then consider following me.

[github.com/ATechAjay/50-T…](https://github.com/ATechAjay/50-The-Ultimate-JavaScript-Projects-Series)

💗 Try it from here:

[codepen.io/atechajay/full…](https://codepen.io/atechajay/full/MWVjGeW)

[Thread link](https://twitter.com/ATechAjay/status/1547130825853976577)
