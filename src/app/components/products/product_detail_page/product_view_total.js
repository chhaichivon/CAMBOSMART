/**
 * Created by chhaichivon on 5/3/17.
 */
import React from 'react';
import {Row, Col} from 'react-bootstrap';
class ProductViewTotal extends React.Component{
    render(){
        return(
            <Row>
                <Col xs={12} md={12} lg={12} sm={12}>
                    <p style={{ fontWeight:'bold',color:'black',fontFamily: 'sans-serif'}}>
                        <i className="fa fa-eye" aria-hidden="true"></i>&nbsp;
                        {this.props.total != undefined ? this.props.total : null} Views
                    </p>
                </Col>
            </Row>
        )
    }
}export default ProductViewTotal;