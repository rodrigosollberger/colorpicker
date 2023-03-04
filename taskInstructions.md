GOAL: We will make a “Color Picker”. We have 3 color buttons (red, green, blue) that will change the currently-selected color.

We’ll need 3 pieces:

- Create a Color component, and render the 3 different colors in the App component
- Initialize a selectedColor piece of state
- Write a click handler that calls setSelectedColor to the currently-clicked color

Write your code in the 2 files:

- /src/App.js file.
- /src/Color.js file.

1. Color Component

1. In the /src/Color.js file, expect to receive a color prop, and display that color as:

- The text of the button
- The color of the style property. Read the docs on inline styling here. If you get stuck, check out the hint below.

How to add Inline Style in React
In our app, this will look like
style={{color}}
Why the double-curly-braces? Because the style prop expects an object, and we are passing the color variable as the color key in the object we pass to style.

2. In the /src/App.js file, import and render the Color component 3 times. Each component should receive a color prop. They should be red, green, blue.

Help with importing color component
import { Color } from './Color';
Note: Make sure to destructure Color from the import!

3. RESULT → You should see three circular buttons showing: red, green, blue.
4. Run the tests. TESTS → This should PASS two (2) tests

5. Initialize State

6. Initialize a new piece of state in the App component, called selectedColor.

- What should its initial data type be? And its initial value?
  const [selectedColor, setSelectedColor] = useState('');

3. Click Handler

1. In the Color component, on the button element, add an onClick prop with a callback that calls setSelectedColor. But wait… we don’t have that setter in this component. So, we need to…

- Pass setSelectedColor down as props to Color when we render it (all 3 times we render it!)

- Use the props.setSelectedColor in the Color component, passing in the color from props.

Spoiler alert! Solution 👇

- Color component
  <button onClick={() => setSelectedColor(color)} style={{color}}>{color}</button>

- App component (same for all 3 renders of Color)
  <Color color='red' setSelectedColor={setSelectedColor}/>

2. Conditionally add the selected className to the button if the color is the same as selectedColor.

- As we saw in the lesson, we can use a ternary to achieve this.
- But… we don’t have access to selectedColor in this component. So we’ll have to pass it down as props like we did with setSelectedColor.
- To conditionally add the className to the button:
  className={color === selectedColor ? 'selected' : ''}
- In App, pass selectedColor when rendering Color:
  <Color color='green' setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>

3. RESULT → When the color button is clicked, the currently-selected color button should show in bold.
4. Run the tests. All three (3) tests should now be passed.
