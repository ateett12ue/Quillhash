# Quillhash Assignment

This is Quillhash Assignment for react developer

# Project hosted on

`https://goofy-hermann-13b46d.netlify.com/`

# Fork this

`https://github.com/ateett12ue/Quillhash`

# Available username

### username: ateet

#### password: tiwari

### username: akshit

#### password: singh

### username: siddharth

#### password: singh

## User Flow

### 1. user enter a username with password

### 1. if credentials are correct

### 1. todo app opens

### 1. user can add a task

### 1. user can edit the task

### 1. user can delete the task

### 1. user can tick the task as completed

### 1. user can redo the completed task

## Project objectives

### UI:

#### 1 User should be able to Login/Logout.

#### 2 User should be able to ADD To-Dos.

#### 3 User should be able to VIEW the list of To-Dos.

#### 4 On clicking a to-Do name user should be able to see the details of that To-Do

#### 5 User should be able to EDIT previous To-Dos.

#### 6 User should be able to DELETE To-Dos.

#### 7 User should be able to mark To-Dos as done.

#### 8 Should be responsive across all sizes

### APIs:

#### 1 Use Browser’s local storage

#### 2 User Mock HTTPS test client to read/write data to/from Local Storage.

#### 3 Refreshing the page should refresh the local storage.

#### 4 Load 3 Users in Local Storage and use them to login

## Login Code

#### 3 users from local storage

```
const users = JSON.parse(localStorage.getItem("users"));
    let bol = users.some(user => {
      if (user.login == this.state.login) {
        console.log(user.login);
        const foundUser = user.pass == this.state.pass ? user : "Not Found";
        return foundUser;
      }
    });
    if (bol == true) {
      this.setState({
        viewTodo: true
      });
    } else {
      this.setState({
        viewTodo: false
      });
    }
```

#### clearing local storage

```
localStorage.clear();
```

#### this project was made using bootstrap for optimization

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
