import React,{useState} from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Proptypes from 'prop-types';

function Props(props){


    return(
        <section className=" w-100 d-flex justify-content-center align-items-center props components" id="basics">
        <h1 className="sectionTitle">useState / Props / React-Bootstrap</h1>

        <div className="card bg-info">
            <img style={{height: "400px"}} src={props.imgSrc} className="card-img-top img" alt="Enter a URL of an Image" />
            <div className="card-body">
                <hr />
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text">{props.desc}</p>
            </div>
        </div>
    </section>
    )

}
Props.prototype = {
    imgSrc: Proptypes.string,
    title: Proptypes.string,
    desc: Proptypes.string
}


function Usestate(){

    const [imgSrc, setImgSrc] = useState("https://placehold.jp/400x400.png");
    const [title, setTitle] = useState("Title");
    const [desc, setDesc] = useState("description");

    // const changeImage = () =>{
        
    //     const image = document.getElementById('image').value.toString()
    // }

    return(
        <section className="h-100">
            <Props imgSrc = {imgSrc} title = {title} desc = {desc}/>
            <Container fluid className="d-flex justify-content-center align-items-center flex-column useStateCont">
                <Row className="p-5">

                    <Row className="mb-3">
                    <Col sm={2} className="text-md-start text-lg-end">Image Source:</Col>
                    <Col sm={8} className=""><input id="image" className="w-100" type="text" value={imgSrc} onChange={e => setImgSrc(e.target.value)} /></Col>
                    </Row>

                    <Row className="mb-3">
                    <Col sm={2} className="text-md-start text-lg-end">Title:</Col>
                    <Col sm={8} className=""><input id="title" className="w-100" type="text" value={title} onChange={e => setTitle(e.target.value)} /></Col>
                    </Row>

                    <Row className="mb-3">
                    <Col sm={2} className="text-md-start text-lg-end">Description:</Col>
                    <Col sm={8} className=""><input id="desc" className="w-100" type="text" value={desc} onChange={e => setDesc(e.target.value)}/></Col>
                    </Row>

                </Row>

                {/* <button type="button" onClick={() => setImgSrc(document.getElementById('image').value)} className="w-25 mb-3">Change Image</button> */}

            </Container>
        </section>
    
    );
}

export default Usestate