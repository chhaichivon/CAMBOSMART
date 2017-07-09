import React from 'react';

export default class ContactUs extends React.Component{
    render(){
        return(
            <div className="row contact-us">
                <div className="about-cambosmart">
                    <img src="/icon/about.png"/>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 contact-us">
                    <h3 className="contact-us">Contact us</h3>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 ">
                    <p>Phone :</p>
                </div>
                <div className="col-xs-9 col-sm-9 col-md-9">
                       <span className="float-right"><a href="tel:+855 70 600 200" target="_blink"> <p>+855 70 600 200</p></a> </span>
                       <span className="float-right"><a href="tel:+855 99 600 200" target="_blink"><p>/ +855 99 600 200</p></a></span>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 ">
                    <p>Email :</p>
                </div>
                <div className="col-xs-9 col-sm-9 col-md-9">
                    <p><a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blink"> info@cambosmart.com</a></p>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 ">
                    <p>Address :</p>
                </div>
                <div className="col-xs-9 col-sm-9 col-md-9">
                    <p>Phnom Penh</p>
                </div>
            </div>
        );
    }
}