# BlackBooks_bookstorev2
Continuous Assessment 2 of the Interactive Web Applications module for semester 2 year 3 Information Technology (IT) course.

This application is composed by A REST API for creating, editing, listing and deleting a book on the BlackBooks bookstore inventory.

The aim was to deploy the application using Heroku, but after a sequence of build failures, and much frustration on log files, I decided to stop here.

App Testing:
 To test this app, the user has to execute both back and front end *concurrently*:
  1. to start the backend. On BlackbooksBackend run: 
            > npm server.js
  2. on terminal, go to the Blackbooksfrontend folder and run:
            > ng serve 
            
     Now, open the browser and go to URI http://localhost:4200/books. The application should be visible there.
     
## Deployment to Heroku
After days of research, I discovered that the way I initially set up the project (diving the front and backend into two different folders) was not the most suitable for Heroku deployment after all. I tried to fix it by deploying the frontend to one Heroku git and the backend to another, finally creating a pipeline between the two. It did not work, and the (faulty) results were pushed into the branch 'herokudebug'.

## Future plans for this app:
 - fix he deployment to Heroku;
 - enable editing of items through frontpage [implement the update API];
 - remove the 'Remove All' button from the front page.
