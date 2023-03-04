import React, {useState} from 'react';
import { Color } from "./Color.js";
export function App() {
    const [selectedColor, setSelectedColor] = useState('');

    return <>
        <h1>Color Picker</h1>
        <Color color="red" selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        <Color color="green" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
        <Color color="blue" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
    </>
}