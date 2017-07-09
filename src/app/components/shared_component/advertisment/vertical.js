import React from 'react';
import {Carousel}from 'react-bootstrap';
import './advertisment.css';

class Vertical extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className="advertise_sub_page v">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 adv-v">
                    <Carousel className="my-carousel vertical-ad-home adv" interval={5000}>
                        {this.props.display != undefined ?
                            this.props.display.advertisers.map((advertiser, index) =>{
                                return(
                                    <Carousel.Item key={index}>
                                        <img onClick={() => window.open(advertiser.url != "" ? advertiser.url : `/images/advertisements/${advertiser.image}`,"_blank")} width={200} height={200} alt="900x500" src={`/images/advertisements/${advertiser.image}`} />
                                    </Carousel.Item>
                                )
                            })
                            :
                            <Carousel.Item>
                                <img onClick={() => window.open('/icon/advertisements/default/default_v.jpg',"_blank")} width={200} height={200} alt="900x500" src="/icon/advertisements/default/default.jpg"/>
                            </Carousel.Item>

                        }
                    </Carousel>
                </div>
            </div>
        )
    }
}

export default Vertical;
