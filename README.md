# Be the Hero

A Simple app created with node.js, ReactJS and React Native.

## Table of Contents
* [General info](#general-info)
* [App Stack](#app-stack)
  * [Backend](#backend)
  * [Frontend](#frontend)
  * [Mobile App](#mobile-app)
* [Setting it Up](#setting-it-up)

## General Info

This application was developed as part of the Omnistack Week, held by Rocketseat. It aims to help non-governamental entities to solve the financial obstacles they might face.

## App Stack

This application is divided in three main components: a backend, a frontend webpage, and the mobile app.

### Backend

The backend services were implemented using [Express](https://expressjs.com), which is a fast, minimalist web framework for Node.js, alongside [Knex](https://knexjs.org) to handle database migrations.

Unit tests and integration tests were implemented using [Jest](https://jestjs.io).

The backend handles the requests from the frontend and mobile app, regarding the creation of entities, incidents related to those entities, and deleting a incident if needed.

### Frontend

The frontend application was built with [ReactJS](https://reactjs.org), alongside with [axios](https://github.com/axios/axios) to handle http requests to the backend.

An ONG can logon into the application, see its incidents and register a new incident. If an existing incident is resolved, the ONG can delete it.

### Mobile App

The mobile app was built with [React Native](https://reactnative.dev) and [Expo](https://expo.io), alongside with [axios](https://github.com/axios/axios) to handle http requests to the backend.

It shows to the user a list of incidents registered in the system, which the user can choose to see details about it and contact the entity.

It supports email composition and whatsapp integration.

## Setting it Up

To start the backend services, just run:

```
$ npm install
$ npm start
```

To start the frontend application, run:

```
$ npm start
```

__P.S.:__ if you're going to run the backend in a different machine or network, check `api.js` and change the host and port as needed.

To run the mobile application, run (again, check `api.js` to change the backend host and port if needed):

```
$ npm start
```

In your smartphone, download the Expo client app. When the qrcode is shown in the terminal, open with your camera and run the application in your mobile devide.

__PS:__ Email composition and whatsapp integration do not work on simulators.