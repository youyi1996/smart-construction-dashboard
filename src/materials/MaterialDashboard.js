import { useEffect, useState } from "react"
import { apiAddMaterial, apiDeleteMaterial, apiGetAllMaterials, apiUpdateMaterial } from "../api/api";
import Card from "../components/Card"
import LabeledInput from "../components/LabeledInput";
import { RoundedButton } from "../components/RoundedButton"
import "./MaterialDashboard.css"
import MaterialDetailForm from "./MaterialDetailForm";

export default function MaterialDashboard() {

    const [materials, setMaterials] = useState([]);
    const [currentMaterial, setCurrentMaterial] = useState(null);

    useEffect(()=>{
        loadAllMaterials();
    }, []);

    useEffect(()=>{
        if (currentMaterial) {
            console.log("enter second useeffect");
            setCurrentMaterial(
                materials.find(({id})=>id===currentMaterial.id)
            )
        }

    }, [materials, currentMaterial])


    function loadAllMaterials() {
        apiGetAllMaterials().then((data)=>{
            setMaterials(data);
        })
    }

    function onMaterialClick(material) {
        setCurrentMaterial(material);
    };

    function addMaterial() {

        const today = new Date();
        let strYear = today.getFullYear().toString();
        let strMonth = today.getMonth() < 9 ? "0"+(today.getMonth()+1).toString() : (today.getMonth()+1).toString();
        let strDate = today.getDate() < 10 ? "0"+(today.getDate()).toString() : (today.getDate()).toString();


        const newMaterial = {
            name: "New Material",
            color: "#000000",
            volume: 0,
            cost: 0,
            deliveryDate: `${strYear}-${strMonth}-${strDate}`,
        }

        apiAddMaterial(newMaterial).then(()=>{
            loadAllMaterials();
        });

    }

    function updateMaterial(newMaterial) {
        apiUpdateMaterial(currentMaterial.id, newMaterial).then(()=>{
            loadAllMaterials();
        });
    }

    function deleteMaterial() {
        if (!currentMaterial) {
            return;
        }
        apiDeleteMaterial(currentMaterial.id).then(()=>{
            loadAllMaterials();
        });
    }

    const materialList = materials.map((value)=>{
        return <Card key={value.id} name={value.name} description={`${value.volume} m3`} color={value.color} selected={currentMaterial === value} onClick={()=>{onMaterialClick(value);}}></Card>
    });

    function DetailForm() {
        if (currentMaterial) {
            return <MaterialDetailForm currentMaterial={currentMaterial} updateMaterial={updateMaterial}></MaterialDetailForm>
        }
    }

    function TotalCost() {
        let sum = 0.;
        materials.forEach((material) => {
            sum += material.cost * material.volume;
        });
        return (<>
            Total Cost: ${sum}
        </>)
    }

    return (<>
        <header>Materials</header>
        <div className="main-content">
            <div className="row command-row">
                <RoundedButton icon={"bi bi-plus-lg"} onClick={addMaterial}>Add</RoundedButton>
                <RoundedButton icon={"bi bi-trash"} type="danger" onClick={deleteMaterial}>Delete</RoundedButton>
            </div>
            <div className="row data-row">
                <div className="list">
                    { materialList }
                </div>

                <div className="detail">
                    <DetailForm></DetailForm>
                </div>
            </div>
            <div className="row footer">
                <TotalCost></TotalCost>
            </div>
        </div>
    </>)
}