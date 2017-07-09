import React from 'react';
import { Row, Col } from 'react-bootstrap';
import moment from 'moment';
import './page_style_component.css';

export default class FormLocationPage extends React.Component {

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
                                    LT1 (1122 x 300px)
                                </h4>
                                <span className="schedule-current">Not available</span>
                            </div>
                        </a>
                        :
                        <a onClick={handleClick}>
                            <div className={className}>
                                <h4>
                                    LT1 (1122 x 300px)
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
                                LT1 (1122 x 300px)
                            </h4>
                            <span className="schedule-current">Not available</span>
                        </div>
                    </a>
            )
        };

        const renderDiv = (className, classDisable, title,defaultSize, advertisements, location, handleClick) => {
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
                            {renderHeadDiv("schedule-div", advertisements, "LT1", () => this.handleClick("LT1"))}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={3}>
                            {renderDiv("advertisement-div-cl", "advertisement-div-disable-left","273 x 443px ", "LL1", advertisements, "LL1", () => this.handleClick("LL1"))}
                        </Col>
                        <Col lg={4}>
                            {renderDiv("advertisement-div-cm", "advertisement-div-disable-default","409 x 245px ", "LML1", advertisements, "LML1", () => this.handleClick("LML1"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("advertisement-div-cm", "advertisement-div-disable-default","409 x 245px ", "LMR1", advertisements, "LMR1", () => this.handleClick("LMR1"))}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={3}>
                            {renderDiv("advertisement-div-cl", "advertisement-div-disable-left","273 x 443px ", "LL2", advertisements, "LL2", () => this.handleClick("LL2"))}
                        </Col>
                        <Col lg={4}>
                            {renderDiv("advertisement-div-cm", "advertisement-div-disable-default","409 x 245px ", "LML2", advertisements, "LML2", () => this.handleClick("LML2"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("advertisement-div-cm", "advertisement-div-disable-default","409 x 245px ", "LMR2", advertisements, "LMR2", () => this.handleClick("LMR2"))}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={3}>
                            {renderDiv("advertisement-div-cl", "advertisement-div-disable-left","273 x 443px ", "LL3",  advertisements, "LL3", () => this.handleClick("LL3"))}
                        </Col>
                        <Col lg={4}>
                            {renderDiv("advertisement-div-cm", "advertisement-div-disable-default","409 x 245px ", "LML3",  advertisements, "LML3", () => this.handleClick("LML3"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("advertisement-div-cm", "advertisement-div-disable-default","409 x 245px ", "LMR3", advertisements, "LMR3", () => this.handleClick("LMR3"))}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={3}>
                            {renderDiv("advertisement-div-cl", "advertisement-div-disable-left","273 x 443px ", "LL4", advertisements, "LL4", () => this.handleClick("LL4"))}
                        </Col>
                        <Col lg={4}>
                            {renderDiv("advertisement-div-cm", "advertisement-div-disable-default","409 x 245px ", "LML4", advertisements, "LML4", () => this.handleClick("LML4"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("advertisement-div-cm", "advertisement-div-disable-default","409 x 245px ", "LMR4", advertisements, "LMR4", () => this.handleClick("LMR4"))}
                        </Col>
                    </Row>
                </div>
                :
                null
        )
    }
}
