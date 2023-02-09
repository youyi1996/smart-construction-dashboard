import ColorPicker from "./ColorPicker"
import "./LabeledInput.css"

export default function LabeledInput({ value, type, label, placeholder, onChange=undefined }) {

    if (type === "color") {
        return (
            <div className="container">
                <label>{label}</label>
                <ColorPicker color={value} onChange={onChange}></ColorPicker>
            </div>
        )
    }
    return (
        <div className="container">
            <label>{label}</label>
            <input type={type} value={value} placeholder={placeholder} onChange={onChange}></input>
        </div>
    )
}