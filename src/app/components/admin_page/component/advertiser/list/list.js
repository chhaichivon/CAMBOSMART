import React from 'react';
import { Link } from 'react-router';
import { Row, Col} from 'react-bootstrap';

export default class AdvertisementList extends React.Component {
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
                        <a href="/admin/advertisers/list/categories" style={{fontWeight:'bold'}}>
                            <i className="fa fa-plus-circle" aria-hidden="true">
                                {' '}Category menu advertisement
                            </i>
                        </a>
                    </Col>
                    <Col lg={4}>
                        <a href="/admin/advertisers/list/pages" style={{fontWeight:'bold'}}>
                            <i className="fa fa-plus-circle" aria-hidden="true">
                                {' '}Page website advertisement
                            </i>
                        </a>
                    </Col>
                </Row>
                <br />
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}