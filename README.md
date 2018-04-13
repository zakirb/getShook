# Shook
In this increasingly flighty society, most apps are indulging our desire to reduce our accountability. Not anymore. Shook is an agreement app that can make, track, and enforce deals between friends, family members, coworkers and anyone in between. Never let your friend back out of a bet again and keep your kids on their chore grind with Shook. **Let's Shake On It!**

By [Zakir Butte](http://www.github.com/zakirb), [Scott Molsness](https://github.com/smolsn13), [Michael Hammer](https://github.com/HamMike), and [Daniel Heyward](http://www.github.com/danheyward).

***
### Technologies Used
* React.js
* React-Materialize
* Django
* PostgreSQL
* jQuery
* Axios

***
### User Stories

## Accountability Amongst Your Social Groups (Mike)
Jackie is mid twenties and hangs with a very unreliable and immature crowd.  She is constantly dealing with the irresponsibilities of her friends. Examples being: paying for friends when they “forgot” their wallet, waiting around when they don’t remember having scheduled a meetup or dealing with statements that are just plain wrong.  Shook allows her to log those interactions with the ‘friends’ acknowledgement, allowing Jackie to prove her case whenever a disagreement from the past arises.  Jackie can gain a peace of mind over the argument and move on to more enjoyable endeavors.

#### Training Partner for the Big Race (Scott)
Sally and her friend Randy both thought it would be fun to run a marathon. Sally signed up for the race and started training every day. Two weeks before the race, Randy tells her that he never signed up and says “good luck with the race!” Sally wishes there was some way she could hold Randy accountable so she didn’t have to run the race by herself. An app like Shook would be the perfect solution for someone in Sally's position who wants to make sure she has a running partner for the big race.
* Sally can create an agreement with a friend and track the status of the agreement
* Before allowing one person (Randy) to change or delete the agreement, the other person must first approve the change
* Sally can view her past agreements with all her friends


#### Keeping a household in working order (Daniel)
> "As a **mother of 3 teenage boys**, I want an app that will **keep a strict record of the chores my boys said they'd do** because I want to **reinforce accountability** while also maintaining a nice, clean house."

Acceptance Criteria
* The app is mobile responsive so I can make my Shakes on the go.
* The Recent Shakes section allows me to find my sons easily.
* My profile page updates when my sons complete or drop a shake.

***
### Wireframes

**WIREFRAMES GO HERE**


***
### Models

**MODELS GO HERE**


***
### Routes

**ROUTES GO HERE**

### Daily Progress

##### Day 1 - Planning
The team sat down with no idea what to do for our fourth and final Web Development Immersive project. We asked everyone for app ideas: our cohort, passing instructors, anyone who would listen but didn't hear anything that resonated with the group as a whole. We took to the internet to see if we could find some inspiration and we were not disappointed. The idea for Shook began to form out of a fun idea for a simple dare app.

With the initial 'Shake' model sketched, core features listed out and stretch features ranked by ease of implementation, the team left to work on user stories.

##### Day 2 - Base Code + App Connectivity
Connecting Django and React was a harder task than anticipated. The Shook team spent an afternoon running through a multitude of online tutorials on how to get the React frontend to speak to the Django backend. The core of the day was spent on ensuring this connection was solid before divvying up the component builds.

##### Day 3 - React Router + Token Authentication
Another intense day of connectivity issues! This time, the team was dealing with token authentication and React Router. While half the developers spent their time testing different solutions for routing, the other half built out the base components and the 'Shake' model. Albeit stressful, the team accomplished all the goals laid out in the scrum meeting beforehand. For take home, the goals were to fine tune the routing, add login and sign up functionality, and add wireframed styling to the components.

##### Day 4 - Rendering The Data
The hurdle for day 4 was writing and reading from the database. Using a Data Provider component that served a data object from a passed down endpoint prop, the team slowly connected each component to have access to our User and Shake data. Now with data connected, the team can focus on rendering and manipulating the data.

##### Day 5 - Styling and Logic
Although the Shook team had full connectivity from the backend to the frontend, displaying the data in a meaningful and styled way was a whole other story. Half the team spent the day dedicated to ensuring the components look sleek while the other half continued to work out rendering logic.

##### Day 6 - Final Features + Deploy
The final day of the cohort! The team spent the day making final tweaks to the logic and styling of the site and deploying to Heroku.

***

### Next Steps
The initial turnaround time for this project was a mere 7 days so not all the features made it into the soft deploy. However, there are a few stretch goals that are on deck to be implemented:

* Have shakes between multiple users
* Data visualization
* More flexibility with shake creation / management
* Gamify the app
* Add user search function
* Add social networking
