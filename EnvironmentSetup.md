### Environment Setup

Chrome
Install Redux DevTools Extension
VS Code
Bracket Pair Colorizer
ES7 React/Redux/GraphQL/React-Native Snippets
Prettier - Code formatter
VS Code -> Settings -> Search 'Format on save' and tick

### install dependency packages

npm i express express-validator bcryptjs config gravatar jsonwebtoken mongoose request

express: web framework for backend
express-validator: data validation
bcryptjs: password encryption
config: global variable
gravatar: profile avatar
jsonwebtoken: use JWT to pass along a token for validation. http://jwt.io, https://www.npmjs.com/package/jsonwebtoken
mongoose: a layer sit on top of mongoose so we can interact with
request: module to make http request, can use axios as alternative

npm i -D nodemon concurrently

concurrently allows run front-end and back-end at the same time

### run server

Change package.json
"scripts": {
"start": "node server",
"server": "nodemon servern"
},

run server: npm run server
