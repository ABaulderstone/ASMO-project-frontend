#### Satisfeed: An app built on React by [Michael Bahari](https://github.com/ugkid), [Alex Baulderstone](https://github.com/ABaulderstone), [OB](https://github.com/obpumanee) and [Sam Conway](https://github.com/sjwconway).

**Satisfeed Live**: http://satisfeed-react-app.s3-website-ap-southeast-2.amazonaws.com/

**Satisfeed Front-end Repo**: https://github.com/ABaulderstone/ASMO-project-frontend

**Satisfeed Back-end Repo**: https://github.com/ABaulderstone/ASMO-project-backend

## Project Description

### Problem Definition

Satisfeed is a cloud-based restaurant app. The client wanted to improve food and service quality, staff team motivation, and CRM/member acquisition. To accomplish these requirements, we developed a platform that included both customer and management facing applications.

### Features

The Satisfeed life cycle includes three stages of user interaction. The app is browser-based and although responsive, it is designed to be used on an Ipad.

### 1. Roster

- Staff roster tool—managers can assign each staff member to kitchen or floor role.

### 2. Feedback & Member Sign-up

- Rating and comments page—during payment/processing, customers can give a rating out of 5 stars for food quality and customer service. Profile photos of staff who are rostered on the day will be displayed at the bottom of the page and customers are able to leave a comment/review.

- Member sign-up form—allows customers to easily become a member to receive exclusive offers through email/posted marketing.

- Member database search tool—allows staff to search quickly for members during customer payment/processing.

### 3. After-sales

- Real-time dashboard—lets managers see weekly kitchen/floor performance on a bart chart.

- Customer comments feed—managers can browse through customer comments with ratings.

- Member/staff management tool—allows managers to create, update and delete staff details.

### Screenshots

Below are some screenshots from our app as of 25th July 2019.
**Login Page**
![Login Page](./docs/imgs/screenshots/login.png)  
**Dashboard Page**
![Dashboard Page](./docs/imgs/screenshots/dashboard.png)  
**Members Page**
![Members Page](./docs/imgs/screenshots/members.png)
**Edit Member Page**
![Edit Page](./docs/imgs/screenshots/edit_member.png)
**Comments Page**
![Comments Page](./docs/imgs/screenshots/comments.png)
**Staff Page**
![Staff Page](./docs/imgs/screenshots/staff.png)
**Roster Page**
![Roster Page](./docs/imgs/screenshots/roster.png)
**App Page**
![App Page](./docs/imgs/screenshots/app.png)
**Feedback Page**
![Feedback Page](./docs/imgs/screenshots/feedback.png)
**Member Sign-up Form**
![Membern Sign-up Form](./docs/imgs/screenshots/member_sign_up.png)
**Member Search Page**
![Membern Sign-up Form](./docs/imgs/screenshots/member_search.png)

### Tech Stack

![Tech Stack](./docs/imgs/tech-stack/tech_stack.png)

### App Instructions

1. Setup

```
1. \$ git clone [back-end](https://github.com/ABaulderstone/ASMO-project-backend) and [front-end](https://github.com/ABaulderstone/ASMO-project-frontend)
2. \$ npm install
3. Setup variables as listed in .env.example (will need an AWS account)
4. Make sure mongoDB is running
5. \$ npm run dev-server (in back-end repo)
6. \$ npm start (in front-end)
```

2. Configure

```
1. Set desired email for SendGrid in .env (see .env example)
2. Set timezone in back-end statistics_service.js to your region
3. Set timezone in front-end dashboard.js to your region
4. To run Cypress tests, create user with email address "test@cypress.com" and password "testing1"
```

3. Deploy

```
1. Create Heroku account
2. Configure Heroku CLI
3. To deploy back-end to Heroku \$ git push heroku master
4. Create and configure public AWS Bucket
5. Install and configure AWS CLI
6. To deploy front-end to AWS \$ npm run deploy
```

## Design Documentation

**Researched Competitors**
![Kounta](./docs/imgs/design-docs/research.png)
**Researched Review/Rating UI & UX**
![Rating UX](./docs/imgs/design-docs/research2.png)

### Design Process

**Roster Concept**
![Roster](./docs/imgs/design-process/roster.png)

**Rating Concept**
![Rating](./docs/imgs/design-process/rating.png)

**Sign-up Concept**
![Signup](./docs/imgs/design-process/signup.png)

**Member Search Concept**
![Member Search](./docs/imgs/design-process/database.png)

**Dashboard Concept**
![Dashboard](./docs/imgs/design-process/dashboard.png)

### User Stories

- AS an restaurant owner, I WANT TO... receive feedback from customers about the food/service, SO I can improve the quality of the food/service.

- AS a restaurant manager, I WANT TO... see how does the staff perform, SO... I can encourage them to work better.

- AS a restaurant marketing team, I WANT TO... get customer information, SO... I can send digital marketing pieces to the customer.

### Workflow Diagram

![Workflow Diagram](./docs/imgs/workflow-diagram/workflow_diagram.png)

### Wireframes

**Low Fidelity Mockup / Working Prototype**
![Wireframes](./docs/imgs/wireframes/wireframes.png)
**High Fidelity Mockup / Working Prototype**
![Prototype](./docs/imgs/wireframes/prototype.png)

### Database Object Relationship Diagram

![Database Object Relationship Diagram](./docs/imgs/ord/ord.png)

## Details of Project Management & Planning Process

### Project Plan & Timeline

![Project Timeline](./docs/imgs/timeline/timeline.png)

### Client Communications

**Client Expectations Letter**
![Client Letter](./docs/imgs/client/letter.png)
**Client Email**
![Client Email](./docs/imgs/client/email.png)

### Screenshots of Trello Board

![Trello](./docs/imgs/planning/trello.png)

## Short Answer Questions

### A) What are the most important aspects of quality software?

**Reliability**: Is an aspect of resiliency and structural solidity. Reliability is used to measure risk, and the potential application failures. It is also used for when changes has been made to software to see if any defects are apparent. In our application we used the same naming conventions throughout, and used code comments throughout to maintain the lucidness of our code.

**Efficiency**: Efficiency is used to see how well the software runs in its run time mode. Big complex software that run efficiently with speed without hindrance is a good example of quality efficient software. Within our application we created reusable components, removed unnecessary code and made use of error handing throughout all levels of our application e.g. our UI and Data flow.

**Security**: Is used to measure the possibility of potential security breaches due to weak coding methods and architecture. In our application we used JWT from Passport for validation which also salts and hashes users login information for maximise security.

**Maintainability**: Maintainability quality measures the adaptability, portability and transferability of software, mainly from one development team to another.

**Size**: Size is not necessarily a software quality, but the bigger the source code becomes, the difficulty rises in maintaining the software.

### B) What libraries are being used in the app and why?

**Passport**: We used Passport as our authentication middleware for Node. It is an extremely flexible and is easy to use in any express based web application. Passport has a wide variety of strategies, but we used JWT(json web token) for authentication for our users sessions.

**Moment**: We used Moment to easily manipulate and validate Javascripts Date object. Using Javascripts Date Object is quite cumbersome to use on it’s own, moment makes parsing, manipulating, validating and displaying dates a whole lot easier. We used Moment in our statistics Schema as we pass reviews through it to manipulate dates, so they stay the same wherever the user moves in the world for accurate data.

**Sendgrid**: We used sendgrid for digital marketing. When a customer signs up to become a member, they will get sent an email welcoming them and get a piece of marketing. Sengrid make that process a bit easier to tackle.

**Celebrate**: We used celebrate to add an extra layer of validation before getting moved onto a handler function. It is used in most forms to make sure the right type of data was being sent through the application.

### C) A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?

**Communication skills**: As a team, communication is the key. It is essential that the project can effectively and finish on time. We will have to share ideas, goals, and issues—as well as produce reports and presentations, among other skills.

**Organization skills**: We would have to be able to organize all the code, plan and communication. We learn to use the tool as VScode, Trello, Github to plan and organize the project.

### D) Within your own project what knowledge or skills were required to complete your project, and overcome challenges?

**Team management skills**: An effective team needs to be able to demonstrate good planning, setting goals, separating the task. and evaluating in each individual performance as well.

**Leadership skills** Even though leadership is the current buzzword in the project management industry, and with good reason: If you can lead, you can deliver. But most importantly, leadership is often what is missing in the project manager’s arsenal of highly developed technical skills. If you’re a project manager, I can guarantee you have felt the need to improve yourself as a leader at some point.

### E) Evaluate how effective your knowledge and skills were in this project, using examples, and suggest changes or improvements for future projects of a similar nature?

Our team managed admirably considering our skill level as junior devs and the short time frame. Each of us had a unique skill set that helped tackle different types of problems during the project. We had to self-learn many new topics that we had not learned in class, test them, and implement them quickly to create our features. These included: creating queriying parameters in the api, aws image uploading using multer, automated email messaging, street address form validations

For future projects of a similar nature our team could have better project mananagement by scoping out the project more accurately and estimating the complexitity of tasks. Learning from our experiences, we could also save more time and be more efficient when it comes to setting up the back-end and styling the front-end.
