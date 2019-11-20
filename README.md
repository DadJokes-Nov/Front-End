# Welcome to Dad Jokes (November 2019 - Lambda Build Week)!

## Team:
UI: Gerard Crockenberg II
React1: Lexie Jiang and Hector Valdez
React2: Andrew Wilson
Backend: Ayomide Jones
iOS: Skyler Suzuki
Project Lead: John Pitts

## Proposal:

You're a funny guy, but you keep losing your list of jokes and forgetting which ones got the most groans! Well worry no more - with the DadJokes app, a cornucopia of dadtasticness is at your fingertips. Why did the chicken _really_ cross that road? See what other jokesters have to say in the public Joke feed. Overhear a real knee-slapper on the L train? Just whip out your phone, pop open our app, and save it to your private collection for posterity. Sitting in a bar and a string walks through the door and sits down next to you? Dads Jokes has got you covered with a real zinger for every situation! 

- What problem does your app solve?  
    Not forgetting your jokes. Showcasing your jokes. Browsing other jokes.

- Be as specific as possible; how does your app solve the problem?
    A website that saves jokes and allows you to view jokes/punch lines separately.  Admins have access to add delete edit jokes.

- What is the mission statement?
    Helping dads remember their jokes!


## Features:

- What features are required for your minimum viable product?
    Ability to create users who can add edit and delete jokes.  The ability for all users to see all jokes on a public page. A system that shows joke then punch line.

- What features may you wish to put in a future release?
    Tracking of attendance for classes/workout measure.


- What do the top 3 similar apps do for their users?
    Laughfactory, rd (readersdigest), top-funny-jokes


## Frameworks - Libraries:

- What 3rd party frameworks/libraries are you considering using?
    React, Material, Redux, Yup, Styled Components, Formik

- Do APIs require you to contact its maintainer to gain access?


- Are you required to pay to use the API?


- Have you considered using Apple Frameworks? (MapKit, Healthkit, ARKit?)
    None that would work for this application.


## Target Audience:

- Who is your target audience? Be specific.
    Let’s just say dads who forget jokes! This is an application for all genders, inclusive, to enjoy really huge jokes (I mean at least in their minds).


- What feedback have you gotten from potential users?  
	Many people enjoy word play, puns and deadpan jokes.

- Have you validated the problem and your solution with your target audience? How?
	We always scramble up, remembering jokes. This is a great solution for modern audience due to too much information on the internet and too little space in our noggins.


## Research:

- Research thoroughly before writing a single line of code. Solidify the features of your app conceptually before implementation. Spend the weekend researching so you can hit the ground running on Monday.
Prototype Key Feature(s)

- This is the “bread and butter” of the app, this is what makes your app yours. Calculate how long it takes to implement these features and triple the time estimated. That way you’ll have plenty of time to finish. It is preferred to drop features and spend more time working on your MVP features if needed.


## Instructions

**Read these instructions carefully.**

This is a team assignment with individual assessments. All work must be your own but remember to collaborate with everyone on your team. Your challenge score is a measure of your ability to work independently using the material covered through this sprint and there is a score on overall teamwork. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.


## Commits

In case you ever need to return to old code. Remember your **ABC: Always Be Committing!**


## Project Set Up

Follow these steps to set up and work on your project:

- [ ]  Clone your OWN version of Repo.
- [ ]  Create a new Branch on the clone: `git checkout -b <firstName-lastName>`.
- [ ]  Implement the project on this branch, committing changes regularly.
- [ ]  Push commits: `git push origin <firstName-lastName>`.
- [ ]  **LOOK** at your project directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
- [ ]  **RUN** `yarn install` or `npm install` to retrieve the client-side dependencies.
- [ ]  **RUN** `yarn start` or `npm start` to fire up your React application.
- [ ] **RUN** `yarn add` or `npm i` to add frameworks and libraries needed for your project (i.e. redux, formik, yup, react-router-dom, etc.).


## Minimum Viable Product (MVP)

1. User can view dad jokes listed as 'public' without having an account (being authenticated)
2. User can sign up as by providing a unique username and a password that will serve as their login/authentication credentials. 
3. An authenticated user has the ability to view, create, edit and delete jokes. 

- (mobile, web): A "jokes" page/view where they can:
    
    1. View all public (private as well if the user is logged) jokes
    2. If logged in, select a joke from the list and present a detail view where they could edit the joke
    3. Create a joke. A joke must have at minimum the following properties:
        * `question` - String
        * `joke/answer` - String
    4. Edit a joke.
    5. Delete a joke.


## STRETCH GOALS 💪

1. In-app messaging to send a joke to another register user.(mobile)

2. Ability to add pictures to a user's profile.(mobile, web)

3. In the public feed, add a feature to hide the punchline of the joke until the user wants to see it. (mobile, web)

4. Add the ability to rate jokes depending on reception the user receives. (mobile, web)

5. Implement voice recording via mobile assistant (Siri, Google Assistant, etc.) so you can save that great joke even with your hands full of groceries.