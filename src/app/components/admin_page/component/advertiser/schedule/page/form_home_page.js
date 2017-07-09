import React from 'react';
import { Row, Col } from 'react-bootstrap';
import moment from 'moment';

export default class FormHomePage extends React.Component {

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
                                    HT1 (1122 x 300px)
                                </h4>
                                <span className="schedule-current">Not available</span>
                            </div>
                        </a>
                        :
                        <a onClick={handleClick}>
                            <div className={className}>
                                <h4>
                                    HT1 (1122 x 300px)
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
                                HT1 (1122 x 300px)
                            </h4>
                            <span className="schedule-current">Not available</span>
                        </div>
                    </a>
            )
        };
        const renderDiv = (className, title, advertisements, location, handleClick) => {
            return(
                getAdvertisement(advertisements, location) != null ?
                    getAdvertisement(advertisements, location).advertise.filter(ads => ads.expireDate >= new Date().getTime()).length >= 20 ?
                        <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                            <div style={{marginLeft: '-15px', background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '60px'}}>
                                <h5>
                                    {title}
                                </h5>
                                <span className="schedule-current">Not available</span>
                            </div>
                        </a>
                        :
                        <a onClick={handleClick}>
                            <div className={className}>
                                <h5>
                                    {title}
                                </h5>
                                <span className="schedule-current">Current : {getAdvertisement(advertisements, location).advertise.filter(ads => ads.expireDate >= new Date().getTime()).length} &nbsp; | &nbsp;
                                    <span className="schedule-available">
                                        Available : {20 - getAdvertisement(advertisements, location).advertise.filter(ads => ads.expireDate >= new Date().getTime()).length}
                                    </span>
                                </span>
                            </div>
                        </a>
                    :
                    <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                        <div style={{marginLeft: '-15px', background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '60px'}}>
                            <h5>
                                {title}
                            </h5>
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
                            {renderHeadDiv("schedule-dive-style", advertisements, "HT1", () => this.handleClick("HT1"))}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lgOffset={4} lg={8}>
                            {renderDiv("schedule-dive-style", "HT2 (838 x 298px)", advertisements, "HT2", () => this.handleClick("HT2"))}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={6}>
                            {renderDiv("schedule-dive-style", "HML1 (557 x 245px)", advertisements, "HML1", () => this.handleClick("HML1"))}
                        </Col>
                        <Col lg={6}>
                            {renderDiv("schedule-dive-style", "HMR1 (557 x 245px)", advertisements, "HMR1", () => this.handleClick("HMR1"))}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={6}>
                            {renderDiv("schedule-dive-style", "HML2 (557 x 245px)", advertisements, "HML2", () => this.handleClick("HML2"))}
                        </Col>
                        <Col lg={6}>
                            {renderDiv("schedule-dive-style", "HMR2 (557 x 245px)", advertisements, "HMR2", () => this.handleClick("HMR2"))}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={6}>
                            {renderDiv("schedule-dive-style", "HML3 (557 x 245px)", advertisements, "HML3", () => this.handleClick("HML3"))}
                        </Col>
                        <Col lg={6}>
                            {renderDiv("schedule-dive-style", "HMR3 (557 x 245px)", advertisements, "HMR3", () => this.handleClick("HMR3"))}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={6}>
                            {renderDiv("schedule-dive-style", "HML4 (557 x 245px)", advertisements, "HML4", () => this.handleClick("HML4"))}
                        </Col>
                        <Col lg={6}>
                            {renderDiv("schedule-dive-style", "HMR4 (557 x 245px)", advertisements, "HMR4", () => this.handleClick("HMR4"))}
                        </Col>
                    </Row>
                </div>
                :
                null
        )
    }
}
