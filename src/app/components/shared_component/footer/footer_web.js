import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './footer.css';
import { Link } from 'react-router';
import { loadLanguage } from '../../../localstorages/local_storage';

export default class FooterWeb extends React.Component {
    render(){
        return(
            <div>
                <footer>
                    <div className="footer" id="footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3  col-md-3 col-sm-3 col-xs-3">
                                    <h3>{loadLanguage() == "en" || loadLanguage() == undefined ? "Get to Know Us" : "ទំនាក់ទំនង"}</h3>
                                    <ul>
                                        <li> <Link to="/help/about-us">{loadLanguage() == "en" || loadLanguage() == undefined ? "About Cambosmart.com" : "អំពីយើងខ្មុំ"}</Link> </li>
                                        <li> <Link to="/help/contact-us">{loadLanguage() == "en" || loadLanguage() == undefined ? "Contact Us" : "ទំនាក់ទំនង"}</Link> </li>
                                    </ul>
                                </div>
                                <div className="col-lg-3  col-md-3 col-sm-3 col-xs-3">
                                    <h3>{loadLanguage() == "en" || loadLanguage() == undefined ? "Customer Service" : "សេវាកម្មអតិថិជន"}</h3>
                                    <ul>
                                        <li> <Link to="/help/post-ad">{loadLanguage() == "en" || loadLanguage() == undefined ? "How to Post Product" : "របៀបដាក់លក់ផលិតផល"}</Link> </li>
                                        <li> <Link to="/help/promote">{loadLanguage() == "en" || loadLanguage() == undefined ? "How to promote products" : "របៀបប៊ូតផលិតផល"}</Link> </li>
                                        <li> <Link to="/help/merchant">{loadLanguage() == "en" || loadLanguage() == undefined ? "How to be a merchant" : "របៀបក្លាយជា Merchant"}</Link> </li>
                                </ul>
                                </div>
                                <div className="col-lg-3  col-md-3 col-sm-3 col-xs-3">
                                    <h3>{loadLanguage() == "en" || loadLanguage() == undefined ? "Let Us Help You" : "របៀបប្រើ"}</h3>
                                    <ul>
                                        <li> <Link to="/help/how-to-register">{loadLanguage() == "en" || loadLanguage() == undefined ? "How to Register" : "របៀបចុះឈ្មោះ"}</Link> </li>
                                        <li> <Link to="/help/how-to-login">{loadLanguage() == "en" || loadLanguage() == undefined ? "How to Login" : "របៀបចូលគណនី"}</Link> </li>
                                        {/*<li> <Link to="#">{loadLanguage() == "en" || loadLanguage() == undefined ? "How to advertise" : "របៀបដាក់លក់"}</Link> </li>*/}
                                    </ul>
                                </div>
                                <div className="col-lg-3  col-md-3 col-sm-3 col-xs-3">
                                    <h3>{loadLanguage() == "en" || loadLanguage() == undefined ? "Follow Us" : "ចូលរួមជាមួយយើងតាមរយៈ"}</h3>
                                    <ul className="social">
                                        <li> <a href="https://www.facebook.com/cambosmart.online" target="_blink"> <i className=" fa fa-facebook"></i> </a> </li>
                                        <li> <a href="https://twitter.com/cambosmart" target="_blink"> <i className="fa fa-twitter"></i> </a> </li>
                                        <li> <a href="https://plus.google.com/115387942057292964357" target="_blink"> <i className="fa fa-google-plus"></i> </a> </li>
                                        <li> <a href="https://www.instagram.com/Cambosmart/"target="_blink"> <i className="fa fa-instagram"> </i> </a> </li>
                                        <li> <a href="https://www.youtube.com/channel/UCq8JdFboEgk593ql7e4fFYw" target="_blink"> <i className="fa fa-youtube"></i> </a> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <p className="center"> Copyright © cambo-smart(2016-2017). All right reserved. </p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}