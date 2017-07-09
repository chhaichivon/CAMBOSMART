import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class FormDetailPage extends React.Component {

    constructor(props){
        super(props);
    }

    handleClick(location){
        window.scrollTo(0,document.body.scrollHeight);
        this.props.handleClick({list: true, location: location});
    }

    render(){
        const advertisements = this.props.advertisements;
        const getAdvertisement = (advertisements, location) => {
            return advertisements.find(advertisement => advertisement.location == location)
        };
        function renderHeadDiv(className, advertisements, location, handleClick) {
            return(
                <a onClick={handleClick}>
                    <div className={className}>
                        <h4>
                            DT1 (1122 x 300px)
                        </h4>
                        {getAdvertisement(advertisements, location) != null ?
                            <span className="schedule-current">Current : {getAdvertisement(advertisements, location).advertise.length} &nbsp; => &nbsp;
                                <span className="schedule-available">
                                    Available : {20 - getAdvertisement(advertisements, location).advertise.length}
                                </span>
                            </span>
                            :
                            <span className="schedule-current">Current : 0 &nbsp; => &nbsp;
                                <span className="schedule-available">
                                    Available : 20
                                </span>
                            </span>
                        }
                    </div>
                </a>
            )
        }
        function renderDiv(className, title, advertisements, location, handleClick) {
            return(
                <a onClick={handleClick}>
                    <div className={className}>
                        <h5>
                            {title}
                        </h5>
                        {getAdvertisement(advertisements, location) != null ?
                            <span className="schedule-current">Current : {getAdvertisement(advertisements, location).advertise.length} &nbsp; => &nbsp;
                                <span className="schedule-available">
                                    Available : {20 - getAdvertisement(advertisements, location).advertise.length}
                                </span>
                            </span>
                            :
                            <span className="schedule-current">Current : 0 &nbsp; => &nbsp;
                                <span className="schedule-available">
                                    Available : 20
                                </span>
                            </span>
                        }
                    </div>
                </a>
            )
        }
        return(
            this.props.advertisements != undefined ?
                <div>
                    <Row>
                        <Col lg={12}>
                            {renderHeadDiv("schedule-div", advertisements, "DT1", () => this.handleClick("DT1"))}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={2}>
                            {renderDiv("schedule-div-l", "DL1 (273 x 443px)", advertisements, "DL1", () => this.handleClick("DL1"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("schedule-div-r", "DML1 (409 x 245px)",  advertisements, "DML1", () => this.handleClick("DML1"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("schedule-div-r", "DMR1 (409 x 245px)", advertisements, "DMR1", () => this.handleClick("DMR1"))}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={2}>
                            {renderDiv("schedule-div-l", "DL2 (273 x 443px)", advertisements, "DL2", () => this.handleClick("CL2"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("schedule-div-r", "DML2 (409 x 245px)", advertisements, "DML2", () => this.handleClick("DML2"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("schedule-div-r", "DMR2 (409 x 245px)", advertisements, "DMR2", () => this.handleClick("DMR2"))}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={2}>
                            {renderDiv("schedule-div-l", "DL3 (273 x 443px)",  advertisements, "DL3", () => this.handleClick("DL3"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("schedule-div-r", "DML3 (409 x 245px)",  advertisements, "DML3", () => this.handleClick("DML3"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("schedule-div-r", "DMR3 (409 x 245px)", advertisements, "DMR3", () => this.handleClick("DMR3"))}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={2}>
                            {renderDiv("schedule-div-l", "DL4 (273 x 443px)", advertisements, "DL4", () => this.handleClick("DL4"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("schedule-div-r", "DML4 (409 x 245px)", advertisements, "DML4", () => this.handleClick("DML4"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("schedule-div-r", "DMR4 (409 x 245px)", advertisements, "DMR4", () => this.handleClick("DMR4"))}
                        </Col>
                    </Row>
                </div>
                :
                null
        )
    }
}
