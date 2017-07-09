import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class FormLocationPage extends React.Component {

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
                            LT1 (1122 x 300px)
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
                            {renderHeadDiv("schedule-div", advertisements, "LT1", () => this.handleClick("LT1"))}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={2}>
                            {renderDiv("schedule-div-l", "LL1 (273 x 443px)", advertisements, "LL1", () => this.handleClick("LL1"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("schedule-div-r", "LML1 (409 x 245px)", advertisements, "LML1", () => this.handleClick("LML1"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("schedule-div-r", "LMR (409 x 245px)", advertisements, "LMR1", () => this.handleClick("LMR1"))}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={2}>
                            {renderDiv("schedule-div-l", "LL2 (273 x 443px)", advertisements, "LL2", () => this.handleClick("LL2"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("schedule-div-r", "LML2 (409 x 245px)", advertisements, "LML2", () => this.handleClick("LML2"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("schedule-div-r", "LMR2 (409 x 245px)", advertisements, "LMR2", () => this.handleClick("LMR2"))}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={2}>
                            {renderDiv("schedule-div-l", "LL3 (273 x 443px)",  advertisements, "LL3", () => this.handleClick("LL3"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("schedule-div-r", "LML3 (409 x 245px)",  advertisements, "LML3", () => this.handleClick("LML3"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("schedule-div-r", "LMR3 (409 x 245px)", advertisements, "LMR3", () => this.handleClick("LMR3"))}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={2}>
                            {renderDiv("schedule-div-l", "LL4 (273 x 443px)", advertisements, "LL4", () => this.handleClick("LL4"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("schedule-div-r", "LML4 (409 x 245px)", advertisements, "LML4", () => this.handleClick("LML4"))}
                        </Col>
                        <Col lg={5}>
                            {renderDiv("schedule-div-r", "LMR4 (409 x 245px)", advertisements, "LMR4", () => this.handleClick("LMR4"))}
                        </Col>
                    </Row>
                </div>
                :
                null
        )
    }
}
