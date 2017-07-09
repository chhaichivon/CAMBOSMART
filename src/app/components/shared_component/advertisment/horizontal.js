import React from 'react';
import {Carousel}from 'react-bootstrap';
import './advertisment.css';

class Horizontal extends React.Component{

    constructor(props){
        super(props)
    }

    render(){

        return(
            <div>
                <div className="advertise_sub_page horizontal" style={{ marginLeft:"-10px" }}>
                    <div className="detail-page col-xs-12 col-sm-12 col-md-12 col-lg-12 advertise">
                        <Carousel interval={5000}>
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
                                    <img onClick={() => window.open('/icon/advertisements/default/default_h.jpg',"_blank")} width={200} height={200} alt="900x500" src="/icon/advertisements/default/default_h.jpg"/>
                                </Carousel.Item>

                            }
                        </Carousel>
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Horizontal;