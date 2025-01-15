import { useState } from "react";
import circle from '../assets/images.js/circle.svg';
import sad from '../assets/images.js/sad.svg';
import happy from '../assets/images.js/smile.svg';
import bigHappy from '../assets/images.js/bigSmile.svg';
import meh from '../assets/images.js/meh.svg';
import angry from '../assets/images.js/angry.svg'

export default function Composable(){

    const [partsCount, setPartsCount] = useState(3);


    const [parts, setParts] = useState([]);

    function partsAdd(src, size){

        const newPart = <img className={size} src={src}/>

        setParts([...parts, newPart])

        setPartsCount(c => c-1);
        if(partsCount < 1){
            setPartsCount(c => c = 3);
            setParts([]);
        }
        console.log(parts)
    }

    return(
        
        <div className="d-flex justify-content-start flex-column align-items-center w-100 init bg-info">

        <h1 className="text-light mb-2">Snowman Maker</h1>
        <h2 className="text-light">Parts Left : {partsCount}</h2>

        <div className="d-flex justify-content-between align-items-center w-50 mb-4">

            <div className="sectionButton1" onClick={() => partsAdd(circle, "w-25")}><img className="w-25" src={circle} /></div>
            <div className="sectionButton1" onClick={() => partsAdd(circle, "w-50")}><img className="w-50" src={circle} /></div>
            <div className="sectionButton1" onClick={() => partsAdd(circle, "w-75")}><img className="w-75"  src={circle} /></div>


        </div>

        <h2 className="text-light">Faces</h2>

        <div className="d-flex justify-content-between align-items-center w-100 mb-5">

            <div className="sectionButton" onClick={() => partsAdd(happy, "w-25")}><img className="w-25" src={happy}/></div>
            <div className="sectionButton" onClick={() => partsAdd(bigHappy, "w-25")}><img className="w-25" src={bigHappy}/></div>
            <div className="sectionButton" onClick={() => partsAdd(sad, "w-25")}><img className="w-25" src={sad}/></div>
            <div className="sectionButton" onClick={() => partsAdd(angry, "w-25")}><img className="w-25" src={angry}/></div>
            <div className="sectionButton" onClick={() => partsAdd(meh, "w-25")}><img className="w-25" src={meh}/></div>
        </div>
                <div className="d-flex flex-column justify-content-center align-items-center w-50">
                    {parts.map((part, index) => 
                        <div className="sectionButton1 d-flex justify-content-center align-items-center" key={index}>{part}</div>)}
                </div>
    </div>
    
    );

}