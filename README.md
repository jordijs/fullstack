Projects for the Fullstack open course by the University of Helsinki.

They use mainly JavaScript, React, Node.js, Express and MongoDB.

As the course requires separate repositories, other parts can be found in the following repositories:
* https://github.com/jordijs/fullstack-open-part3
* https://github.com/jordijs/fullstack-open-part4
* https://github.com/jordijs/fullstack-open-part5
* https://github.com/jordijs/fullstackopen-part9

# Bloglist
## Front-end
App that allows users to save information about interesting blogs they have stumbled across on the internet. After user enters username and password to a form, the name of the logged user is shown, and data is stored on localstorage. Conditional rendering of blogs data only if user is logged-in. Delete button is only shown if the logged user matches the user that created the blog. Button to like each blog, reordering the list with top-rated first.
- **Technologies**: React conditional rendering, state and effect hooks, PropTypes, ESLint, Testing: Vitest, End to end testing: Playwright.
- **Location**: Part 5
## Back-end
Extension and refactor from a given code. User administration and Token authentication using HTTP POST requests, save information of the authenticated user who created the post in the database.
- **Technologies**: Node.js, Express, MongoDB, Mongoose, TDD, Unit Testing, ESLint.
- **Location**: Part 4

# Phonebook
## Front-end
App where the user can handle their contacts, adding their name and telephone or deleting them. If the contact exists, user is prompted to change the information. Typing in a field allows to filter instantly only the names that match. Confirmation messages with different styles according to the status. Data is retrieved with axios, first with a mock backend with JSON-Server, and finally with a full backend.
- **Technologies**: React, form handling, effect hook, axios, async, interaction with mock API REST with JSON-Server, React styling.
- **Location**: Part 2, Part 3
## Back-end
Node.js and Express backend, creating API Rest. Creation of cloud database in MongoDB. Implement validation. Deploy with Fly.io.
- **Technologies**: Node.js, Express, MongoDB, Mongoose, ESLint, Fly.io, JavaScript.
- **Location**: Part 3

# Countries
App to display information about countries. User can type in a form, and the matching countries are displayed. When they click on each country, detail about the country is displayed, as well as the current weather in the capital.
- **Technologies**: React, state and effect hooks, connection to external APIs (Country list and Open Weather Map).
- **Location**: Part 2

# Unicafe
App to collect customer feedback for a cafe. User clicks Good/Neutral/Bad and the score is updated accordingly. Statistics are shown based on current votes.
- **Technologies**: React, usage of multiple state hooks, JavaScript.
- **Location**: Part 1

# Anecdotes
App that displays randomly an anecdote, with the ability to change between them, voting them, and displays the most voted.
- **Technologies**: React, State hook, JavaScript.
- **Location**: Part 1

# Course Information
App that displays information about the course, displaying information about each part calculated from given data.
- **Technologies**: React, props, components, extracting data from an object, calculate using reduce, JavaScript.
- **Location**: Part 1 + Part 2
