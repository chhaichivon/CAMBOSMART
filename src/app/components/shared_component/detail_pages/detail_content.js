/**
 * Created by Acer on 12/18/2016.
 */
import React from 'react';
import {Grid , Row,Col,Thumbnail,Button} from 'react-bootstrap';
const styles={
    style:{
        color:'rgba(0, 0, 0, 0.870588)',
        backgroundColor: 'rgb(255, 255, 255)',
        transition: 'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
        boxSizing: 'border-box',
        boxShadow:'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px',
        borderRadius:'0px',
        height: '100%',
        width: 256,
        position: 'fixed',
        zIndex: '1300',
        left: '0px',
        top: '0px',
        transform: 'translate(0px, 0px)',
        overflow: 'auto'
    },
    icon:{
        fontSize:'20px',
        color: 'white',
        position: 'relative',
        top: '11px',
        display: 'inline-block',
        fontFamily: 'Glyphicons Halflings',
        fontStyle: 'normal',
        fontWeight: '400px',
        paddingRight: '6px',
        marginRight:'5px'
    },
    a:{
        color:'white'
    },
    h3:{
        textAlign:'center'
    }
}
export default class extends React.Component{
    render(){
        return(
            <div>
                <div style={styles.content}>
                    <Grid>
                        <Row>
                            {/*Menu*/}
                            <Col xs={6} sm={6} lg={4}>MenuLeft</Col>
                            {/* Product */}
                            <Col lg={8}>
                                <Row>
                                    <Col  xs={6} sm={6} lg={6}>Pro3</Col>
                                    <Col  xs={6} sm={6} lg={6}>Pro4</Col>
                                </Row>
                            </Col>
                        </Row>
                        </Grid>
                 </div>
         </div>
        );
    }
}
