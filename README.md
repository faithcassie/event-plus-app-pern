# Event+ app | PERN-Typescript

## Overview

This application is a PERN (PostgreSQL, Express, React, Node.js) stack implementation with Typescript, designed to manage events. Users can register, log in, create events, sign up for events, and interact with other users through features like event invitations, comments, and messaging.

### Demo [link]

## Tech Stack

PostgreSQL: SQL Database
React: Frontend framework
Redux Toolkit: State management toolset
Tailwind: CSS framework
Node.js: Backend runtime environment
ExpressJS: Node.js framework
Typescript: Language
Nodemailer: Email notifications //pending
JWT: Authentication

## User stories

### Authentication

- New users can register with the app by providing their name, email, and password. An email notification is sent on registration. Confirmation is done by clicking on a link in the email.

- Users can log in using their email address and password created during registration. Passwords must meet specific criteria.

- Users can initiate a password reset by clicking on the "forgot password" link, providing an email address. An email notification is sent to reset the account password.

### Event Management

- Users can list all events they have created, including details such as name, type, location, start and end dates, capacity limit, and signup deadline.

- Users can list all events for which they are on the guest list.

- Users can list all public events, ordered by name, start date, end date, capacity limit, or signup deadline.

- Users can view an event description by clicking on an event name in a list of events.

- Users can sign up for an event, receiving an email with event information upon successful signup.

- Users can create events, including various details such as name, type, location, start and end dates, capacity limit, signup deadline, and description.

- Upon creating a public event, the owner receives an email with event information and a signup link.

- Users can click on an event sign-up link, signing up for an event by providing an email address and password.

- Upon private event creation, the owner receives an email with event information.

### Guest list and invitations

- Event owners can create a guest list for an event, including guest names and email addresses.

- Event owners can send event invitation emails to all guests or a subset of guests on the guest list.

- Guests invited to an event receive an email with event information and a link to confirm attendance. The app sends a confirmation email to the guest upon confirmation.

- Event owners can add or remove guests from the event guest list.

- Event owners can cancel an event, sending an email notification to all guests.

- Event owners can send email notifications to all guests or a subset of guests.

### Communication

- Guests can send emails to the owner of an event.

- Guests can post comments to the event blog page.

- Guests can view a private event guest list (names only).

### User Blocking

- Event owners can block users from signing up for an event. Blocked users receive a notification when attempting to sign up.

## Screenshots

Cont.
