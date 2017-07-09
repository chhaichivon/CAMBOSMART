import React from 'react';
import {Carousel}from 'react-bootstrap';

class Main extends React.Component{

    constructor(props){
        super(props);
        this.state={
            index: 0,
            direction: null
        };
        this.handlSelect=this.handlSelect.bind(this);
    }

    handlSelect(selectedIndex,e){
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render(){

        return(
            <div className="advertise_main_page">
                <Carousel className="my-carousel-top" interval={5000}>
                    {this.props.display != undefined ?
                        this.props.display.advertisers.map((advertiser, index) =>{
                            return(
                                <Carousel.Item key={index}>
                                    <img onClick={() => window.open(advertiser.url != "" ? advertiser.url : `/images/advertisements/${advertiser.image}`,"_blank")} alt="main-logo" src={`/images/advertisements/${advertiser.image}`} />
                                </Carousel.Item>
                            )
                        })
                        :
                        <Carousel.Item>
                            <img onClick={() => window.open('/icon/advertisements/default/default_v.jpg',"_blank")}  alt="900x500" src="/icon/advertisements/default/default_v.jpg"/>
                        </Carousel.Item>

                    }
                </Carousel>
                <br/>
           </div>

        );
    }
}

export  default Main;