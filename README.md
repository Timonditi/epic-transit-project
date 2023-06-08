# epic transit

# introduction

Epic Transit is an application that  provides an online ticket booking system that simplifies the customer needs. Customers can book bus/train tickets and pay online, saving a lot of time. 

# draft
This is the draft of the project `https://www.figma.com/file/P0yBAiqcKfByQyetpRuZk9/Travel-site-landing-page?type=design&node-id=0-1&t=KVi2XYMbFHxGIgLi-0`

# built with
-For the frontend of this project we have used the following: 
   - CSS
   - React
-For the  backend we used:
   - Sinatra
   - Active Records
   - sqlite3

# setup
The following github links will take you to the respective repositories of the project 
 - frontend : `https://github.com/Timonditi/epic-transit-project`
 - backend : `https://github.com/Michal379/phase-3-sinatra-react-project`

To start this application;
   - run the backend server `rake server` on port `http://localhost:9292/customers` 
   - `then npm start ` in the frontend's root directory

   # features
The application has the following features: 
 1. User friendly UI.
 2. Homepage with  bus details.
 3. Page with trains details.
 4. Forms to enable users to book their preffered mode of transport.
 5. Form to enable users to input their booking details/information.
 6. Payment mode where users can choose their preffered mode of payment.

 # MVP
 Users are able to do the following:
 1. Search for availabe buses/trains
 2. Choose their preffered bus/train and destination
 3. Enter/edit their personal details
 4. Choose mode of payment 
 5. Book successfully
 6. Leave/delete their reviews

 # Limitations
 The app is experiencing a few limitations such as: 
  - The mode of payment is not functional at the moment.


# For the backend;
We created our own backend using Sinatra and Active Record. It has the following 

  # features
It has four models :
1. bus 
2. train
3. customer
4. review

- Each model has a corresponding table with appropriate columns and relationships.
- You can check the relationships with the following ERD link: `https://drawsql.app/teams/michal-7/diagrams/epic-transit-erd`

  # authors
  Daniel Juma
  Michal Khakayi
  Rukia Sharif
  Timothy Odongo

