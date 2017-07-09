import React from 'react';
import {Carousel}from 'react-bootstrap';

class Sub extends React.Component{

    render(){
        return(
            <div className="advertise_sub_page">
                <Carousel className="my-carousel sub-slide" interval={5000}>
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
                            <img onClick={() => window.open('/icon/advertisements/default/default_v.jpg',"_blank")} width={200} height={200} alt="900x500" src="/icon/advertisements/default/sub.jpg"/>
                        </Carousel.Item>

                    }
                </Carousel>

            </div>
        );
    }
}

export default Sub;