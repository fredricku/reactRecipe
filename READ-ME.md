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

![user-registeration](../Screenshots/user-registeration.png " user can register to the database with this form")

![registeration-status](../Screenshots/user-registeration-status.png " user successfully register to the database ")

![recipe-menu](../Screenshots/recipe-menu.png " user can navigate through to various recipies")

![dessert-menu](../Screenshots/recipe-menu.png " this shows dessert recipies")

![dessert-child](../Screenshots/dessert-menu.png " this shows dessert child recipe")
