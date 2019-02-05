Start the project by creating the project app
At the commamd line
Type “npx create-react-app reactrecipe”

When the app is created

cd reactrecipe

Test if the app works

npm start

Upload project to github

add client database --- follow the step below

md clientDb

cd clientDb

npm init

npm install express // to use node express liabraries

configure the scripts in the packet.json and add:  
"start": "node ./clientDb/index.js|react-scripts start" // to be able to start database and the client side consecutively

run "npm start" to start the database and the client side consecutively

database connection is done by adding proxy connection in the package.json ("proxy": "http://localhost:8000")

User is able to access pages

User is able to create user account

The site provides recipe information to users

User is able to rate the recipe.
https://github.com/fredricku/reactRecipe/commit/37c652cdb908fcd580e4283fd62f509f5eb3c2bd?short_path=e0532c3#diff-e0532c34e2cb658da9cab69368b541ae

![user-registeration](/Screenshorts/user-registeration.png)

![registeration-status](../Screenshots/user-registeration-status.png " user successfully register to the database ")

![recipe-menu](../Screenshots/recipe-menu.png " user can navigate through to various recipies")

![dessert-menu](../Screenshots/recipe-menu.png " this shows dessert recipies")

![dessert-child](../Screenshots/dessert-menu.png " this shows dessert child recipe")
