import React from 'react';
import { Link } from 'react-router';
import { Row, Col} from 'react-bootstrap';

export default class Advertisement extends React.Component {
    render(){
        return(
            <div className="container-fluid" style={{marginLeft: '-25px'}}>
                <br/>
                <Row>
                    {/* menu to choose level of category */}
                    <Col lg={4}>
                        <span style={{color:'#ff6903',fontWeight:'bold'}}>Choose advertisement's type you want <span style={{color: 'red'}}>*</span></span>
                    </Col>
                    <Col lg={4}>
                        <a className="advertisement-type" href="/admin/advertisers/new/category" style={{fontWeight:'bold'}}>
                            <i className="fa fa-plus-circle" aria-hidden="true">
                                {' '}Category menu advertisement
                            </i>
                        </a>
                    </Col>
                    <Col lg={4}>
                        <a href="/admin/advertisers/new/page" style={{fontWeight:'bold'}}>
                            <i className="fa fa-plus-circle" aria-hidden="true">
                                {' '}Page website advertisement
                            </i>
                        </a>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col lg={12}>
                        {this.props.children}
                    </Col>
                </Row>
            </div>
        )
    }
}