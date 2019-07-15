
# Develop an application to manage notes(CRUD API with 30% failure rate). Note has a title and content.<br>
## Deploy on https://nerty777.github.io/subj-notes/<br>

##### Requirements:<br>
1. User can have a possibility to:<br>
a) Create note<br>
b) Delete note<br>
c) Edit note (both title and content)<br>
2. Notification snackbar (e.g. https://material-ui.com/demos/snackbars/)<br>
a) After creating or deleting the note user should see a notification snackbar for 2s.<br>
b) Notification has “Undo” button, clicking on which user can revert the action while notification is visible.<br>
c) Notification should be animated (optional).<br>
3. API integration. <br>
We provide an API to manage notes. It is simple CRUD API. However, we intentionally configured a 30% failure rate. It means that every 3rd request to server will fail and you should be ready to handle it.<br>
a) When user open the app, load all notes from the API.<br>
b) All changes to notes (creation, editing and deletion) should be reflected on the backend via API.<br>
c) API Docs<br>
d) API URL  http://159.89.96.181/api/v1/<br>
4. Design and other details is up to you, just be ready to argument them.<br>
5. Use Git, your solution should have commit history and send a link to your repository.<br>
6. Solution should be executable with one or two commands. Provide an instruction.<br>
<br>
##### Required technologies<br>
1. React<br>
2. Redux/Mobx<br>
3. Flex/Grid markup<br>
4. Axios<br>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br>




