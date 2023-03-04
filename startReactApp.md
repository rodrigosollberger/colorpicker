creating your React application

Run the following command: npm init -y. This will create a package.json for you

Run the following command: npm install parcel. This will install all the necessary dependencies you’ll need to work with your React project

Run the following command: npm install react. This will install the react library which will be necessary for Babel to convert your JSX to Javascript.

Run the following command: npm install react-dom. This will include the react library which will be necessary in order to render a JSX element on the webpage.

Include the following as part of the scripts in your package.json:
"start": "parcel index.html --open"

Create a new HTML file named index.html that contains:
The Boiler Plate
A Title
A div element in the body with an ID of root

Between your <body> and </body> tags add the following script tag:

<script type="module" src="index.js"></script>

Create a new JavaScript file named index.js that contains:
import React from "react";
import { createRoot } from 'react-dom/client';

    const root = createRoot(document.getElementById('root'));
    root.render(<h1>This is JSX, not HTML</h1>);

Run the following command:
npm start
