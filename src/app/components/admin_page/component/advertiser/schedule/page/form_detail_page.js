import React from 'react';
import { Row, Col } from 'react-bootstrap';
import moment from 'moment';

export default class FormDetailPage extends React.Component {

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
                                    DT1 (1122 x 300px)
                                </h4>
                                <span className="schedule-current">Not available</span>
                            </div>
                        </a>
                        :
                        <a onClick={handleClick}>
                            <div className={className}>
                                <h4>
                                    DT1 (1122 x 300px)
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
                                DT1 (1122 x 300px)
                            </h4>
                            <span className="schedule-current">Not available</span>
                        </div>
                    </a>
            )
        };
        const renderDiv = (className, classDisable,defaultSize, title, advertisements, location, handleClick) => {
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
                            <p>{defaultSize}</p>
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
                            {renderHeadDiv("schedule-div", advertisements, "DT1", () => this.handleClick("DT1"))}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={3}>
                            {renderDiv("advertisement-div-cl", "advertisement-div-disable-left", "DL1","273 x 443px ", advertisements, "DL1", () => this.handleClick("DL1"))}
                        </Col>
                        <Col lg={4}>
                            {renderDiv("advertisement-div-cm", "advertisement-div-disable-default", "DML1","409 x 245px ",  advertisements, "DML1", () => this.handleClick("DML1"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("advertisement-div-cm", "advertisement-div-disable-default", "DMR1","409 x 245px ", advertisements, "DMR1", () => this.handleClick("DMR1"))}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={3}>
                            {renderDiv("advertisement-div-cl", "advertisement-div-disable-left", "DL2","273 x 443px ", advertisements, "DL2", () => this.handleClick("DL2"))}
                        </Col>
                        <Col lg={4}>
                            {renderDiv("advertisement-div-cm", "advertisement-div-disable-default", "DML2","409 x 245px ", advertisements, "DML2", () => this.handleClick("DML2"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("advertisement-div-cm", "advertisement-div-disable-default", "DMR2","409 x 245px ", advertisements, "DMR2", () => this.handleClick("DMR2"))}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={3}>
                            {renderDiv("advertisement-div-cl", "advertisement-div-disable-left", "DL3","273 x 443px ",  advertisements, "DL3", () => this.handleClick("DL3"))}
                        </Col>
                        <Col lg={4}>
                            {renderDiv("advertisement-div-cm", "advertisement-div-disable-default", "DML3","409 x 245px ",  advertisements, "DML3", () => this.handleClick("DML3"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("advertisement-div-cm", "advertisement-div-disable-default", "DMR3","409 x 245px ", advertisements, "DMR3", () => this.handleClick("DMR3"))}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={3}>
                            {renderDiv("advertisement-div-cl", "advertisement-div-disable-left", "DL4","273 x 443px ", advertisements, "DL4", () => this.handleClick("DL4"))}
                        </Col>
                        <Col lg={4}>
                            {renderDiv("advertisement-div-cm", "advertisement-div-disable-default", "DML4","409 x 245px ", advertisements, "DML4", () => this.handleClick("DML4"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("advertisement-div-cm", "advertisement-div-disable-default", "DMR4","409 x 245px ", advertisements, "DMR4", () => this.handleClick("DMR4"))}
                        </Col>
                    </Row>
                </div>
                :
                null
        )
    }
}
