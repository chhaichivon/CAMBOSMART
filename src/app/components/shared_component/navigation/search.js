import React from 'react';
import {Grid, Row, Col, PageHeader } from 'react-bootstrap';

export default class Search extends React.Component {
    render(){
        return(
            <div className="container-fluid">
                <Row>
                    <Col xs={12} sm={6} md={2} lg={2}>.</Col>
                    <Col xs={12} sm={6} md={2} lg={2}><PageHeader>CamboSmart</PageHeader></Col>
                    <Col xs={12} sm={6} md={4} lg={4}></Col>
                    <Col xs={12} sm={6} md={2} lg={2}></Col>
                    <Col xs={12} sm={6} md={2} lg={2}>.</Col>
                </Row>
            </div>
        )
    }
}