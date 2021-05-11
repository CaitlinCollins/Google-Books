import React from "react";
import { Row, Col } from "../Grid";
import "./style.css";

function Book(props) {
    return (
        <div className="card" id="card">
            <Row>
                <Col size="md-10">
                    <h3 className="card-title">{props.title}</h3>
                </Col>
                <Col size="md-2">
                    <button className="viewBtn">View</button>
                    <button className="saveBtn">Save</button>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <p className="card-author">{props.author}</p>
                </Col>
            </Row>
            <Row>
                <Col size="md-2">
                    <img
                    className="card-img img-fluid"
                    src={props.image}
                    alt={props.alt}/>
                </Col>
                <Col size="md-10">
                    <p
                    className="card-description">{props.description}
                    </p> 
                </Col>
            </Row>
        </div>
 )
}

export default Book;