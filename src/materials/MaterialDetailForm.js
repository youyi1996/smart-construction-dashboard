import "./MaterialDashboard.css"
import LabeledInput from "../components/LabeledInput"
import { useState } from "react"
import { RoundedButton } from "../components/RoundedButton";


/// A form that shows the detailed data of a Material.
export default function MaterialDetailForm ({currentMaterial, updateMaterial}) {

    const [name, setName] = useState(currentMaterial.name);
    const [color, setColor] = useState(currentMaterial.color);
    const [volume, setVolume] = useState(currentMaterial.volume);
    const [cost, setCost] = useState(currentMaterial.cost);
    const [deliveryDate, setDeliveryDate] = useState(currentMaterial.deliveryDate);

    const onSave = () => {
        const newMaterial = {
            name: name,
            color: color,
            volume: volume,
            cost: cost,
            deliveryDate: deliveryDate
        };
        updateMaterial(newMaterial);
    }

    return (
        <>
            <div className="row">
                <div className="col-half">
                    <LabeledInput label="Name" value={name} onChange={(e)=>{setName(e.target.value);}}></LabeledInput>
                </div>
                <div className="col-half">
                    <LabeledInput label="Color" type={"color"} value={color} onChange={(e)=>{setColor(e.target.value);}}></LabeledInput>
                </div>
            </div>
            <div className="row">
                <div className="col-half">
                    <LabeledInput label="Volume (m³)" value={volume} onChange={(e)=>{setVolume(e.target.value);}} type={"number"}></LabeledInput>
                </div>
                <div className="col-half">
                    <LabeledInput label="Cost (USD per m³)" type={"number"} value={cost} onChange={(e)=>{setCost(e.target.value);}}></LabeledInput>
                </div>
            </div>
            <div className="row">
                <div className="col-half">
                    <LabeledInput label="Delivery Date" type={"date"} value={deliveryDate} onChange={(e)=>{setDeliveryDate(e.target.value);}}></LabeledInput>
                </div>
            </div>
            <div className="row">
                <div className="col-half">
                    <RoundedButton onClick={onSave}>Save</RoundedButton>
                </div>
            </div>
        </>
    )

};
