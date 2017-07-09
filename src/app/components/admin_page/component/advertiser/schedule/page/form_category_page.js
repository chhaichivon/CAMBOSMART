import React from 'react';
import { Row, Col } from 'react-bootstrap';
import moment from 'moment';

export default class FormCategoryPage extends React.Component {

    constructor(props){
        super(props);
    }

    handleClick(location){
        if(this.props.advertisements != undefined){
            if(this.props.advertisements.length > 0){
                const advertise  = this.props.advertisements.filter(ads => ads.location == location);
                if(advertise != null){
                    this.props.handleClick({
                        location: location,
                        price: advertise[0].price,
                        description: advertise[0].description
                    });
                }
            }
        }
    }

    render(){
        const advertisements = this.props.advertisements;
        const getAdvertisement = (advertisements, location) => {
            return advertisements.find(advertisement => advertisement.location == location)
        };
        const renderHeadDiv = (className, advertisements, location, handleClick) => {
            return(
                getAdvertisement(advertisements, location) != null ?
                    getAdvertisement(advertisements, location).advertise.filter(ads => ads.expireDate >= new Date().getTime()).length >= 20 ?
                        <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                            <div style={{ marginLeft: '-15px', background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '80px'}}>
                                <h4 style={{marginTop: '20px'}}>
                                    CT1 (1122 x 300px)
                                </h4>
                                <span className="schedule-current">Not available</span>
                            </div>
                        </a>
                        :
                        <a onClick={handleClick}>
                            <div className={className}>
                                <h4>
                                    CT1 (1122 x 300px)
                                </h4>
                                <span className="schedule-current">Current : {getAdvertisement(advertisements, location).advertise.filter(ads => ads.expireDate >= new Date(moment(new Date()).format("YYYY-MM-DD")).getTime()).length} &nbsp; | &nbsp;
                                    <span className="schedule-available">
                                        Available : { 20 - getAdvertisement(advertisements, location).advertise.filter(ads => ads.expireDate >= new Date().getTime()).length }
                                    </span>
                                </span>
                            </div>
                        </a>
                    :
                    <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                        <div style={{ marginLeft: '-15px', background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '80px'}}>
                            <h4 style={{marginTop: '20px'}}>
                                CT1 (1122 x 300px)
                            </h4>
                            <span className="schedule-current">Not available</span>
                        </div>
                    </a>
            )
        };
        const renderDiv = (className, classDisable, title, defaultSize, advertisements, location, handleClick) => {
            return(
                getAdvertisement(advertisements, location) != null ?
                    getAdvertisement(advertisements, location).advertise.filter(ads => ads.expireDate >= new Date().getTime()).length >= 20 ?
                        <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                            <div className={classDisable} style={{marginLeft: '-15px', background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '60px'}}>
                                <h5>{title}</h5>
                                <p>{defaultSize}</p>
                                <span className="schedule-current">Not available</span>
                            </div>
                        </a>
                        :
                        <a onClick={handleClick}>
                            <div className={className}>
                                <h5>{title}</h5>
                                <p>{defaultSize}</p>
                                <span className="schedule-current">Current({getAdvertisement(advertisements, location).advertise.filter(ads => ads.expireDate >= new Date().getTime()).length}) &nbsp; | &nbsp;
                                    <span className="schedule-available">
                                        Available({20 - getAdvertisement(advertisements, location).advertise.filter(ads => ads.expireDate >= new Date().getTime()).length})
                                    </span>
                                </span>
                            </div>
                        </a>
                    :
                    <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                        <div className={classDisable}>
                            <h5>{title}</h5>
                            <p>(848 x 250px)</p>
                            <span className="schedule-current">Not available</span>
                        </div>
                    </a>
            )
        };
        return(
            advertisements != undefined ?
                <div>
                    <Row>
                        <Col lg={12}>
                            {renderHeadDiv("schedule-div", advertisements, "CT1", () => this.handleClick("CT1"))}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={3}>
                            {renderDiv("advertisement-div-cl", "advertisement-div-disable-left", "CL1", "273 x 443px ", advertisements, "CL1", () => this.handleClick("CL1"))}
                        </Col>
                        <Col lg={4}>
                            {renderDiv("advertisement-div-cm", "advertisement-div-disable-default", "CML1", "409 x 245px ", advertisements, "CML1", () => this.handleClick("CML1"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("advertisement-div-cm", "advertisement-div-disable-default", "CMR1", "409 x 245px ", advertisements, "CMR1", () => this.handleClick("CMR1"))}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={3}>
                            {renderDiv("advertisement-div-cl", "advertisement-div-disable-left", "CL2", "273 x 443px ", advertisements, "CL2", () => this.handleClick("CL2"))}
                        </Col>
                        <Col lg={4}>
                            {renderDiv("advertisement-div-cm", "advertisement-div-disable-default", "CML2", "409 x 245px ", advertisements, "CML2", () => this.handleClick("CML2"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("advertisement-div-cm", "advertisement-div-disable-default", "CMR2", "409 x 245px ", advertisements, "CMR2", () => this.handleClick("CMR2"))}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={3}>
                            {renderDiv("advertisement-div-cl", "advertisement-div-disable-left", "CL3", "273 x 443px ",  advertisements, "CL3", () => this.handleClick("CL3"))}
                        </Col>
                        <Col lg={4}>
                            {renderDiv("advertisement-div-cm", "advertisement-div-disable-default", "CML3", "409 x 245px ",  advertisements, "CML3", () => this.handleClick("CML3"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("advertisement-div-cm", "advertisement-div-disable-default", "CMR3", "409 x 245px ", advertisements, "CMR3", () => this.handleClick("CMR3"))}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={3}>
                            {renderDiv("advertisement-div-cl", "advertisement-div-disable-left", "CL4", "273 x 443px ", advertisements, "CL4", () => this.handleClick("CL4"))}
                        </Col>
                        <Col lg={4}>
                            {renderDiv("advertisement-div-cm", "advertisement-div-disable-default", "CML4", "409 x 245px ", advertisements, "CML4", () => this.handleClick("CML4"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("advertisement-div-cm", "advertisement-div-disable-default", "CMR4", "409 x 245px ", advertisements, "CMR4", () => this.handleClick("CMR4"))}
                        </Col>
                    </Row>
                </div>
                :
                null
        )
    }
}