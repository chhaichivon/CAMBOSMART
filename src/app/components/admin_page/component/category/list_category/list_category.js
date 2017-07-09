import React from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';

export default class ListCategory extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <br/>
                <Row>
                    {/* menu to choose level of category */}
                    <Col lg={3}>
                        <span style={{color:'#ff6903',fontWeight:'bold'}}>CHOOSE CATEGORY'S LEVEL <span style={{color: 'red'}}>*</span></span>
                    </Col>
                    <Col lg={3}>
                        <Link to="/admin/category/list-category/list-level-one" style={{fontWeight:'bold'}}>
                            <i className="fa fa-plus-circle" aria-hidden="true">
                                {' '}List Level One Category
                            </i>
                        </Link>
                    </Col>
                    <Col lg={3}>
                        <Link to="/admin/category/list-category/list-level-two" style={{fontWeight:'bold'}}>
                            <i className="fa fa-plus-circle" aria-hidden="true">
                                {' '}List Level Two Category
                            </i>
                        </Link>
                    </Col>
                    <Col lg={3}>
                        <Link to="/admin/category/list-category/list-level-three" style={{fontWeight:'bold'}}>
                            <i className="fa fa-plus-circle" aria-hidden="true">
                                {' '}List Level Three Category
                            </i>
                        </Link>
                    </Col>
                    {/* category form */}
                </Row>

                <Row>
                    {/* category form */}
                    <Col lg={12}>
                        {this.props.children}
                    </Col>
                </Row>
            </div>
        )
    }
}