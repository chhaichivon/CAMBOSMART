/**
 * Created by CHHAI CHIVON
 */
import React from 'react';
import Login from './navigation';
import { Row, Col} from 'react-bootstrap';
import NavigationLogin from './navigation';
import './login.css';
import './../admin_page/css/admin.css';
class LoginCambo extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-default navbar-static-top login" role="navigation"
                     style={{marginBottom: 0}}>
                    {/*================Call Navigation================*/}
                    <NavigationLogin/>
                </nav>
                <div className="xs={12} col-lg-12 wrap-child">
                            {this.props.children}
                </div>
            </div>
        )
    }
}
export default LoginCambo;
