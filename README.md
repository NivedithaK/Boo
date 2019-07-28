# Inspiration

Procrastination is a crippling problem relevant to all students and workers, and our team members have frequently suffered 
from its symptoms. There are extensions such as "Forest", which guilt-trip users into avoiding procrastination by threatening 
to kill their growing tree. However, youth nowadays can more effectively be motivated in another way: fear.

# What it does
"Boo!" is an extension for Google Chrome that can be downloaded and used by anyone. The app appears innocent enough; users are 
able to click on the icon in the extension menu and toggle a drop-down menu to choose how long a countdown timer will run. 
While the timer runs, the user is expected to concentrate on working on their homework, without straying their attention to 
any time-consuming websites. (On the settings page, users can customize which entertainment websites they personally find the 
most time-consuming.) It also downloads a very disappointed message to the user's computer to document that they attempted to 
open a blacklisted website.

But temptation lures even the most diligent of us. If the user chooses to open any of the blacklisted websites, a shocking, 
random, eye-catching jumpscare will fill the webpage, disabling all buttons that formerly stood underneath. The picture will 
remain on the screen for 3 seconds, and as the initial shock fades and the user remembers about Boo! being active, a delayed 
text will appear in the middle of the screen reminding the user to get back to work.

# How we built it
Since our mission was to create a Google chrome extension, we chose to use the most suitable languages: JavaScript, Html and 
CSS, coincidentally also the languages we knew the least about. In the beginning, we used JavaScript to create a scary pop-up 
image on every new tab. JavaScript was also used to create a timer to keep track of how long the user wants to be productive. 
Next, we used CSS to make the webpages visually appealing. HTML made the structure of the extension more intuitive and user-
friendly.

# Challenges we ran into
Surprisingly, the overall hacking went more smoothly than expected. All of us have been to hackathons in the past and we tend 
to run into problems so significant that the overall hack is dysfunctional. We didn't have much experience in the coding 
languages that we used, so learning all of them within the time constraint was challenging. Also, we had difficulty extracting 
URLs from Chrome tabs using developer tools, so we originally weren't able to blacklist unwanted sites until we found another 
way to do it. Another issue was the countdown timer, which we could not successfully execute because every time we opened a 
new tab, the timer would restart. Sometimes we would forget to disable our extension and it would pop up while we were coding 
and scare us.

# Accomplishments that we're proud of
Going into this hackathon, most of our team didn't know how to navigate Javascript, HTML, or even GitHub. Over the 12 hours, 
we figured out most of our code by comparing it to our knowledge of other languages, through tutorials, and through trial and 
error. One memorable moment was when we finally (after an hour) made a functional countdown timer on Javascript that referred 
to information given in a drop-down menu! Blacklisting websites seemed impossible until the last hour when we realized it was 
as simple as editing the manifest file. Most of all, we made our own Google Chrome extension that really works and that can 
really help people!

# What we learned
We learned that building a Chrome extension is a lot harder than we expected, but with enough perseverance, it's definitely 
doable. Through Boo!, we learned the structure of an extension, and how CSS formatting works. We also learned how to 
collaborate in a way that takes advantage of everyone's skills and lets everyone learn and contribute.

# What's next for Boo!
Jumpscares can be really effective, but there are other ways to frighten people back into productivity too. For example, we 
thought of a feature that would slowly replace all the text on the procrastinator's screen with an alphabet from another 
language so users would be so annoyed that they would close the tab. Alternatively, the screen could display a fake virus or 
play a loud noise. These features would be a great addition to the next update of the extension.

# Built With
JavaScript, HTML, and CSS.
