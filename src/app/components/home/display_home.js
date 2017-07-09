import React from 'react';
import {Button,Carousel,Item} from 'react-bootstrap';
import HomePageLayout from'./homepage_layout';
import './carosoul.css';
import Footer from './../../components/shared_component/footer/footer_web';
export default class DisplayHome extends React.Component {
    constructor(props){

        super(props);
           this.state={
               index: 0,
               direction: null
           };
        this.handlSelect=this.handlSelect.bind(this);
    }
    handlSelect(selectedIndex,e){
        alert('selected=' + selectedIndex + ', direction=' + e.direction);
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }
    render(){
        return(
            <div>
                <div className="container">
                    <HomePageLayout/>
                    {
                        this.props.child
                    }
                </div>
            </div>

        )
    }
}