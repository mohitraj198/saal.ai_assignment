## Versions
 * **Node Version :** v12.22.0
 * **React Version :** 17.0.2

## Profile Viewer
* This includes the list view of different users
* User's details(Username, DOB, Email, Address and Phone) are show in list format 
* Lightbox is provided for thumbnails
* Other details are show using the modal
* Search by Username is implemented
* Pagination is implemented for multiple user 

## Folder Structure
```
README.md
App.js
index.js
.env
src/
  - assets/
      - style
  - components
  - libs
  - services
  - views
      - User
          - widgets
```

## Available Scripts

In the project directory, you can run:

### `npm install`

This will download all dependencies. 
Run inside the project folder.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Warning 
We are pushing the `.env` file because of testing purpose. Otherwise it is not recommended to push `.env` to git. 