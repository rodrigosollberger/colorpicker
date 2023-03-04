import React from 'react';

export function Color({color, selectedColor, setSelectedColor}) {
    
    return (
        <button className={color === selectedColor ? 'selected' : ''} onClick={() => setSelectedColor(color)} style={{color}}>{color}</button>
        );
}
