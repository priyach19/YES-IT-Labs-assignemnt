# Its a project creating CRUD APIs for user management
  ## BACKEND- Node.js
  #### CRUD APIs created for handling user management with authentication middlewares:
       1. POST -->/api/users/register     endpoint for creating user and insert into mongoDB database
       2. GET-->/api/users                endpoint for getting all users from the database
       3. PUT-->/api/users/:id            endpoint for updating user details using id params
       4. DELETE-->/api/users/id          endpoint for deleting user from the database

  #### To run the backend server (port: 5000):
     1. First you need to install all the packages needed to run the server using command:
        >>> npm init
     2. To run the server we use command:
        >>> npm start or nodemon server.js

  ## FRONTEND- React.js
  Created UserForm component to add the user details into the database and used ContextAPI for state management by creating context and providing as provider into the component where its is used.
   #### To run the frontend (port: 3000):
     1. First you need to install all the packages needed to run the server using command:
        >>> npm init
     2. To run the code we use command:
        >>> npm start 
  
