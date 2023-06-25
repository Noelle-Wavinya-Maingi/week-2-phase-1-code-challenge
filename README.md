# CODE CHALLENGE PHASE 1 WEEK 2

# Description

The code challenge for week two I worked on Flataculties, an app where you can vote for the cutest animal! I used a local API and built out the frontend for our app, Flatacuties. The project guidelines and core deliverables are described below:

# Project Guidelines

The project should conform to the following:

# Core Deliverables

As a user, I can:

See a list of all animal names. You will need to make a GET request to the following endpoint to retrieve the character data
 GET /characters

Example Response:
[
   {

     "id": 1,

     "name": "Mr. Cute",

     "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",

     "votes": 0

   },

   {

     "id": 2,

     "name": "Mx. Monkey",

     "image": "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",

     "votes": 0   }, ….]
Click on an animal’s name to see its details i.e image and number of votes. Note, you should only be displaying the details of one animal at a time. You can either use the character information from your first request or make a new request to this endpoint to get the character's details 
GET /characters/:id

Example Response: 
{

     "id": 1,

     "name": "Mr. Cute",

     "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",

     "votes": 0

   },
 

When viewing an animal’s details, I should be able to add the number of votes for each animal. This number of votes should then be displayed together with the animal’s details. No persistence is needed for the votes.

The data used in our db.json is found in this file [Data](https://docs.google.com/document/d/1EUcHU9gkydR3IfJDTebW5iNHP2BCMRcv508R7BAXSvo/edit)

# Project Setup

To run the code challange, follow these steps:

1. First you need to have the json server installed in your laptop globally by running sudo npm install json-server.

2. Clone the repository: git@github.com:Noelle-Wavinya-Maingi/week-2-phase-1-code-challenge.git

3. Navigate to your local directory: cd nameofthedirectory

4. Run <img src="./image/Screenshot%20from%202023-06-25%2018-58-37.png" width="128"/>

. Execute the program on a webpage: index.html



