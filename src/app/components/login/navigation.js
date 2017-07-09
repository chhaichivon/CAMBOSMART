/**
 * Created by CHHAI CHIVON
 */
import React from 'react';
import { Link } from 'react-router';
import {Form,Table,Image,Pagination,FormGroup,Button,FormControl,HelpBlock,Row,Col,InputGroup,Glyphicon} from 'react-bootstrap';
import './login.css';
class NavigationLogin extends React.Component{
    render(){
        return (
            <Row className="login-row">
                <Col className="wrap-header-login">
                    <div className="loging-logo text-center">
                        <Link to="/"><img src="/icon/cambo-smart3.png"/></Link>
                    </div>
                </Col>
            </Row>
        )
    }
}
export default NavigationLogin;