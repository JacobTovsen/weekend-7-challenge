# Redux Feedback Loop

> **PLEASE COMMENT YOUR CODE.** Do not clone this repository. Instead, download the zip, extract the contents, `git init`, `git add .`, `git commit -m "initial commit - base project"` and add your remote. Please do this before you leave for the day.

"And as always, what do I end every day with?" - Luke


 For this assignment, you will be creating a feedback form modeled after Prime's system. Feedback will be collected over 4 views, and when all steps are complete, your app will save the feedback in the database. In a separate view, a user will be able to see all the collected feedback. 

### SETUP

- [X] Create your database and tables using the provided `data.sql` file. Start the server.

```
- [X] npm install
- [X] npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
- [X] npm run client
```

### ADD NEW FEEDBACK

> NOTE: As a baseline requirement, you must use Redux to store your data across views.

Create a multi-part form that allows users to leave feedback for today. 
There will be 4 views for the form parts.
The parts:
- [X]  How are you feeling today?
![feeling](wireframes/page-one.png)
- [X]  How well are you understanding the content?
![understanding](wireframes/page-two.png)
- [X]  How well are you being supported?
![support](wireframes/page-three.png)
- [X]  Any comments you want to leave?
![comments](wireframes/page-four.png)

- [X] While there is no nav bar, each part of the form should be at its own route. Clicking next should move the user to the appropriate step in the process.

- [X]  When the form is complete, save the submission in the database. The user should see a submission success page.
 ![understanding](wireframes/page-five.png)

### DISPLAY FEEDBACK

- [X] Display all of the existing feedback at the route `/admin`. 
- [X] The most recently added feedback should appear at the top of the list. 
- [X] Allow the user to delete existing feedback. 
- [X] Prompt the user to confirm prior to deleting the feedback from the database.

![display feedback](wireframes/admin.png)

## STRETCH GOALS

- Update this README.md to describe the project in your own words
- Improve the styling of the app using Material-UI theme, cards, snackbars, buttons, nav bar, and icons, and anything else you'd like.
- Add the ability to flag an existing feedback entry for further review on the /admin view
- Deploy your project to Heroku -- you'll need to read the special instructions for building and deploying with these apps! 


> NOTE: These stretch goals are intended to be completed in order.