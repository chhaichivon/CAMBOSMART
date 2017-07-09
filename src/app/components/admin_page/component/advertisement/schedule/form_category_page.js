import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class FormCategoryPage extends React.Component {

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
                            CT1 (1122 x 300px)
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
                            {renderHeadDiv("schedule-div", advertisements, "CT1", () => this.handleClick("CT1"))}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={2}>
                            {renderDiv("schedule-div-l", "CL1 (273 x 443px)", advertisements, "CL1", () => this.handleClick("CL1"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("schedule-div-r", "CML1 (409 x 245px)", advertisements, "CML1", () => this.handleClick("CML1"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("schedule-div-r", "CMR (409 x 245px)", advertisements, "CMR1", () => this.handleClick("CMR1"))}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={2}>
                            {renderDiv("schedule-div-l", "CL2 (273 x 443px)", advertisements, "CL2", () => this.handleClick("CL2"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("schedule-div-r", "CML2 (409 x 245px)", advertisements, "CML2", () => this.handleClick("CML2"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("schedule-div-r", "CMR2 (409 x 245px)", advertisements, "CMR2", () => this.handleClick("CMR2"))}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={2}>
                            {renderDiv("schedule-div-l", "CL3 (273 x 443px)",  advertisements, "CL3", () => this.handleClick("CL3"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("schedule-div-r", "CML3 (409 x 245px)",  advertisements, "CML3", () => this.handleClick("CML3"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("schedule-div-r", "CMR3 (409 x 245px)", advertisements, "CMR3", () => this.handleClick("CMR3"))}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={2}>
                            {renderDiv("schedule-div-l", "CL4 (409 x 245px)", advertisements, "CL4", () => this.handleClick("CL4"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("schedule-div-r", "CML4 (409 x 245px)", advertisements, "CML4", () => this.handleClick("CML4"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("schedule-div-r", "CMR4 (409 x 245px)", advertisements, "CMR4", () => this.handleClick("CMR4"))}
                        </Col>
                    </Row>
                </div>
                :
                null
        )
    }
}
