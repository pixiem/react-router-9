import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import "./Course.css"

const Course = (props) => {
    const {name, Duration, price, enrolled, teacher, img} =  props.course
    return (
        <div className="col" >
            <CardGroup>
                <Card>
                    <div className="course-image">
                    <img width="100%" height="150px" src={img} alt="" />
                    </div>
                    <Card.Body className="card-body">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                        <div className="d-flex justify-content-between">
                            <div>
                            <img width="20px" src="./favpng_bangladeshi-taka-currency-symbol-money.png" alt="" />
                            {price} 
                            </div>
                            <span className="hours">{Duration}</span>
                            </div>
                        </Card.Text>
                        
                        <Button className="butto" variant="primary">Enroll Now</Button>
                    </Card.Body>
                </Card>


            </CardGroup>

        </div>
    );
};

export default Course;