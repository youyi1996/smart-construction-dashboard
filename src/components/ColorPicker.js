import { useRef } from "react"
import "./ColorPicker.css"

export default function ColorPicker({ color, readonly=false, onChange }) {

    const ref = useRef();

    const containerStyle = {
        backgroundColor: color,
    }

    function showColorPicker() {
        // console.log(ref);
        // ref.current.click();
    }

    return (
        <div className="color-picker" style={containerStyle} onClick={showColorPicker}>
            <input ref={ref} type={"color"} value={color} onChange={onChange}></input>
        </div>
    )
}