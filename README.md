Projects for the Fullstack open course by the University of Helsinki.

They use mainly JavaScript, React, Node.js, Express and MongoDB.

As the course requires separate repositories, other parts can be found in the following repositories:
* https://github.com/jordijs/fullstack-open-part3
* https://github.com/jordijs/fullstack-open-part4
* https://github.com/jordijs/fullstack-open-part5
* https://github.com/jordijs/fullstackopen-part9

Projects:
# Course Information
- **Description**: App that displays information about the course, displaying information about each part calculated from given data.
- **Technologies**: _React (props, components), JavaScript(extracting data from an object, calculate using reduce)._
- **Location**: Part 1 + Part 2

# Anecdotes
- **Description**: React app that displays randomly an anecdote, with the ability to change between them, voting them, and displays the most voted.
- **Technologies**: _React (State hook), JavaScript._
- **Location**: Part 1
  
# Unicafe
- **About**: React app to collect customer feedback for a cafe. User click Good/Neutral/Bad and the score is updated accordingly. Statistics are shown based on current votes.
- **Technologies**: _React (Usage of multiple state hooks), JavaScript._
- **Location**: Part 1

**Part 2**

- **Phonebook (front)**: React app where the user can handle their contacts, adding their name and telephone or deleting them. If the contact exists, user is prompted to change the information. Typing in a field allows to filter instantly only the names that match. Data is stored from a JSON-Server, and retrieved with axios. Confirmation messages with different styles according to the status. _Form handling, effect hook, axios, async, interaction with mock API REST with JSON-Server, React styling._
- **Countries**: React app to display information about countries. User can type in a form, and the matching countries are displayed. When they click on each country, detail about the country is displayed, as well as the current weather in the capital. _State and effect hooks, connection to external APIs (Country list and Open Weather Map)_

**Part 3**
- **Phonebook (back)**: Node.js and Express backend for the app from part 2, creating API Rest. Creation of cloud database in MongoDB. Implement validation. Deploy with Fly.io. _Node.js, Express, MongoDB, Mongoose, ESLint, Fly.io_

**Part 4**
- **Bloglist (back):** Node.js and Express backend for blog list application, that allows users to save information about interesting blogs they have stumbled across on the internet. Extension and refactor from a given code. User administration and Token authentication using HTTP POST requests, save information of the authenticated user who created the post in the database. _TDD, Unit Testing, Node.js, Express, MongoDB, Mongoose, ESLint_

**Part 5**
- **Bloglist (front):** React frontend for Bloglist backend. After user enters username and password to a form, the name of the logged user is shown, and data is stored on localstorage. Conditional rendering of blogs data only if user is logged-in. Delete button is only shown if the logged user matches the user that created the blog. Button to like each blog, reordering the list with top-rated first. _React conditional rendering, state and effect hooks, PropTypes, ESLint, Testing: Vitest, End to end testing: Playwright_
