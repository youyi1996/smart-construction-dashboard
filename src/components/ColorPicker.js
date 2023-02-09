import { useRef } from "react"
import "./ColorPicker.css"


/// A component that shows the current color in a circle, and pop out the color picker when being clicked.
/// Supported by modern web browsers. Outdated ones may not.
export default function ColorPicker({ color, onChange }) {

    const ref = useRef();

    const containerStyle = {
        backgroundColor: color,
    }

    return (
        <div className="color-picker" style={containerStyle}>
            <input ref={ref} type={"color"} value={color} onChange={onChange}></input>
        </div>
    )
}