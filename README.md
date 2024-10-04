Exercises for the Fullstack open course by the University of Helsinki.

They include practical projects using JavaScript, React, Node.js, Express and MongoDB.

**Part 1**
- **Course Information**: React app that displays information about the course. _Props._
- **Ancedotes**: React app that displays randomly an anecdote, with the ability to change between them, voting them, and displays the most voted. _State hook._
- **Unicafe**: React app to collect customer feedback for a cafe. User click Good/Neutral/Bad and the score is updated accordingly. Statistics are shown based on current votes. _Usage of multiple state hooks._

**Part 2**
- **Course Information**: Extension of the previous app, displaying more detailed info about each part of the course. _Components, extracting data from an object, calculate using reduce._
- **Phonebook (front)**: React app where the user can handle their contacts, adding their name and telephone or deleting them. If the contact exists, user is prompted to change the information. Typing in a field allows to filter instantly only the names that match. Data is stored from a JSON-Server, and retrieved with axios. Confirmation messages with different styles according to the status. _Form handling, effect hook, axios, async, interaction with mock API REST with JSON-Server, React styling._
- **Countries**: React app to display information about countries. User can type in a form, and the matching countries are displayed. When they click on each country, detail about the country is displayed, as well as the current weather in the capital. _State and effect hooks, connection to external APIs (Country list and Open Weather Map)_

**Part 3**
- **Phonebook (back)**: Node.js and Express backend for the app from part 2, creating API Rest. Creation of cloud database in MongoDB. Implement validation. Deploy with Fly.io. _Node.js, Express, MongoDB, Mongoose, ESLint, Fly.io_

As the course requires separate repositories, other parts can be found in the following repositories:

* https://github.com/jordijs/fullstack-open-part3
* https://github.com/jordijs/fullstack-open-part4
* https://github.com/jordijs/fullstack-open-part5
* https://github.com/jordijs/fullstackopen-part9
