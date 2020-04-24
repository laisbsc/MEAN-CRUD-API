# BlackBooks_bookstorev2
Continuous Assessment 2 of the Interactive Web Applications module for sem 2 year 3 IT

This application is composed by A REST API for creating, editing, listing and deleting a book on the BlackBooks bookstore inventory.

> notes here will become part of the report. This is not a descriptive summary of wehat the app does. [will work on that when all is finished].

To accomplish such, a simple webserver was built, a backend database connection was configurd with MongoDB Atlas using AWS and finally buildng the model and the methods to handle the CRUD operations.

The application was deployed on Heroku and buolt using MongoDB, Express, Angular 8 and Node.js, using a structure known as MEAN.
- Angular: is a client-side framework that acts on the browser and manages the building of Single-Page-Applications (SPA). Its responsibility is to render UI with dynamic data, as well as handling user input and communicating with Backend Services, hence the wise usability for APIs. The framework aims to provide a smooth User eXperience.
 - Node.js: Javascript library that works on the server-side. Its job is to listen to requests and send responses. Executes server-side logic, and interact with databases and files.
 - Express: Node.js framework that simplifies the server-side code and logic. It is middleware-based, i.e, funnel incoming  requests through a stack of functions. It basically simplifies the usage of Node.js.
 - MongoDB: a NoSQL database that stores documents in 'collections' ans connects easily to Node and Express. The database schema is handled by a module named Mongoose, that also acts as a client for MongoDB.

Postman was used to test the application.

The program outputs the database records on a BSON filetype, forming a JSON object as it is standard for MongoDB database.

Ideally, you would want your front end to operate as a standalone application, requesting data from the back end, processing, and displaying it (you might hear this called “consuming an API”). The principle underpinning this is referred to as “separation of concerns”, and it states that each part of your program should operate independently, have a clear, singular purpose, and communicate via a well-defined interface. Although your front end doesn’t have to implement a framework to follow the separation of concerns principle, most frameworks encourage this architectural pattern. [from here](https://stackoverflow.blog/2020/02/03/is-it-time-for-a-front-end-framework/)


The main differences between the 1st version of BlackBooks Bookstre and version 2.0:
 - 1st version does not have a database storage application to store the data from the app, all the data is stored in XML on the actual Node file, which is quite dependent on the program itself and impedes the app from scaling at possible required times. To sort that out, version 2 has a backend connection stablished to MongoDB Atlas using a AWS cluster hosted in Ireland used a shared free tier.
 - One of Mongo's main characteristics is the fact that it's a non-relational database that stores data on a JSON format. Our old version of the program had it's data stored in XML-format (with and XSL schema) and converted into BSON (quite similar to JSON) on the run, by using the method 'xmlFileToJs' to then be shown on the HTML table. With the implementation of Mongo on V2.0 of the Bookstore app, the XML conversion method will no longer be necessary, since the latest uses the Mongoose module to  dictate the schema for the database objects.
 - V1.0 was built with JS ES5 and V2.0 was updated to ES6.
 - V1.0 had express handling the HTML on the front-end, now the front-end framework (Angular, in this case) will handle that task.
 

