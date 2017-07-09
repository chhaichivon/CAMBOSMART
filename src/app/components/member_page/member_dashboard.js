import React from 'react';
import Navigation from './component/navigation';
import MemberIndex from './component/index';
import './css/member.css';
import Footer from './../shared_component/footer/footer_web';
class MemberDashbaord extends React.Component{
    render(){
        return(
            <div className="wrap-nav-merchant">
                <div className="nav-merchant">
                    {/*================Call Navigation================*/}
                    <Navigation />
                    {/*================Call Menu Left================*/}
                </div>
                <div className="container child">
                    {this.props.children}
                </div>
                <div>
                    <Footer/>
                </div>
            </div>

        );
    }
}
export default MemberDashbaord;