import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './component/admin.css';
import './css/admin.css';
import Navigation from './component/navigation';
import Menu from './component/menu';
import MenuLeft from './component/memu_left';


export default class AdminDashboard extends React.Component {
    constructor(props){
        super(props);
        /*this.state={
            in1:false,
            in2:false
        }
        this.showin1=this.showin1.bind(this);
        this.showIn2=this.showIn2.bind(this);*/
    }
    /*showin1(){
        this.setState({
            in1:!this.state.in1
        })
    }
    showIn2(){
        this.setState({
            in2:!this.state.in2
        })
    }*/
    render(){
        return(
            <div id="wrapper">
                    <nav className="navbar navbar-default navbar-static-top admin" role="navigation" style={{marginBottom: 0}}>
                    {/*================Call Navigation================*/}
                    <Navigation />
                    {/*================Call Menu Left================*/}
                    <MenuLeft />
                </nav>
          <div id="page-wrapper">
              <div className="row">
                  <div className="col-lg-12">
                      {this.props.children}
                  </div>
              </div>
          </div>
        {/*end page-wrapper*/}
        </div>
        )
    }

}