import React from "react";
import { Container, Row, Col } from "../Grid";

function SavedBook(props) {
    return (
        <div className="card text-center">
            <Row>
                <Col size="sm-10">
                    <h3 className="card-title">{props.name}</h3>
                    <p className="card-author">{props.author}</p>
                </Col>
                <Col size="sm-2">
                    <button className="viewBtn">View</button>
                    <button className="saveBtn">Delete</button>
                </Col>
            </Row>
            <Row>
                <Col size="sm-2">
                    <img
                    className="card-img-top img-fluid portimg"
                    src={props.image}
                    alt={props.alt}/>
                </Col>
                <Col size="sm-10">
                    <p
                    className="card-description">{props.description}
                    </p> 
                </Col>
            </Row>
        </div>
 )
}

export default SavedBook;