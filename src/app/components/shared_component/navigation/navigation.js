import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Button} from 'react-bootstrap';
import {actionModalSignIn, actionModalSignUp, actionModalVerifiedPhone, actionModalVerifiedCode, userLogOut} from './../../../actions/user';
import {loadState, clearState,loadCodeStatus,loadPhone } from './../../../localstorages/local_storage';
import './navigation.css';
import { Link } from 'react-router';
import { saveLanguage, loadLanguage } from './../../../localstorages/local_storage';

class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            lang: 'en'
        };
        this.handleLogout = this.handleLogout.bind(this);
    }

    static getUserName(){
        if (loadState() !== undefined){
            if(loadState().user !== undefined){
                return loadState().user.userName;
            }
        }
    }
    handleLogout(){
        this.props.userLogOut(loadState().token);
        clearState();
    }

    componentWillMount(){
        if(loadCodeStatus()==111){
            this.props.actionModalSignUp(false);
            this.props.actionModalVerifiedCode(true, loadPhone());
            sessionStorage.removeItem('codeStatus');
            sessionStorage.removeItem('phone');
        }else if(loadCodeStatus()==113||loadCodeStatus()==201){
            this.props.actionModalSignUp(false);
            this.props.actionModalVerifiedPhone(true);
            sessionStorage.removeItem('codeStatus');
        }
        if(loadLanguage() == undefined){
            saveLanguage('en');
        }
        document.getElementsByClassName('flag').src = '/icon/cambodia.png';
    }

    static openProfileSetting(){
        if (loadState() !== undefined) {
            if(loadState().user !== undefined){
                if(loadState().user.userType != 'editor'){
                    location.href = `/${loadState().user.userType}`;
                }else {
                    location.href = '/admin';
                }
            }
        }else{
                location.href = '/';
        }
    }
    static handleChangeLanguage(){
        let lang = '';
        if(loadLanguage() == 'en'){
                lang = 'kh';
        }else{
                lang = 'en';
        }
            saveLanguage(lang);
            window.location.reload(true);
    }

    render(){
        const userProfile = (loadState()!== undefined) ? (
            <div className="col-xs-7 menu-cambo">
                <div className="wrap-menu">
                    <ul className="menu">

                        <li><a href=""><span className="title-header">{loadLanguage() == "en" || loadLanguage() == undefined ? "Welcome to" : "សូមស្វាគមន៏"}</span></a> </li>&nbsp;&nbsp;
                        <li className="user-profile">
                            <span>{
                                loadState().user.profileImage !== '' ? <div><img src={`/images/profiles/${loadState().user.profileImage}`} /></div>
                                    :
                                <img  src="/profile/default-profile.png"></img>
                            }
                            </span></li>
                        <li className="wrap-dropdown">
                            <button className="btn btn-primary my-drop-down" type="button" data-toggle="dropdown">{Navigation.getUserName()}&nbsp;<span className="caret"></span></button>
                            <ul className="dropdown-menu nav">
                                <li><a onClick={Navigation.openProfileSetting}><span className="title-header">{loadLanguage() == "en" || loadLanguage() == undefined ? "Profile" : "គណនី"}</span></a> </li>
                                <li><a onClick={Navigation.openProfileSetting}><span className="title-header">{loadLanguage() == "en" || loadLanguage() == undefined ? "Setting" : "ការគ្រប់គ្រង់"}</span></a> </li>
                                <li><a onClick={this.handleLogout}><i className="fa fa-sign-out fa-fw">&nbsp;&nbsp;<span className="title-header">{loadLanguage() == "en" || loadLanguage() == undefined ? "Logout" : "ចាកចេញ"}</span></i></a> </li>
                            </ul>
                        </li>
                        <li><a href="/"><i className="fa fa-home" aria-hidden="true">&nbsp;<span className="title-header">{loadLanguage() == "en" || loadLanguage() == undefined ? "Home" : "ទំព័រដើម"}</span></i></a> </li>
                        <li><a>|</a> </li>
                        <li><a href="/help"><i className="fa fa-lightbulb-o" aria-hidden="true">&nbsp;<span className="title-header">{loadLanguage() == "en" || loadLanguage() == undefined ? "របៀបប្រើ" : "របៀបប្រើ"}</span></i></a> </li>
                        <li><a href="">|</a> </li>
                        <li><a onClick={Navigation.handleChangeLanguage}  ><img className="flag" src={loadLanguage() == "en" || loadLanguage() == undefined ? "/icon/cambodia.png" : "/icon/english.png" } alt="flag"/>&nbsp;&nbsp;<span className="title-header">{loadLanguage() == "en" || loadLanguage() == undefined ? "ខ្មែរ" : "English"}</span></a> </li>
                    </ul>
                </div>
            </div>

        ): (
            <div className="col-xs-7 menu-cambo">
                <div className="wrap-menu">
                    <ul className="menu">
                        <li><a href="/"><i className="fa fa-home" aria-hidden="true">&nbsp;<span className="title-header">{loadLanguage() == "en" || loadLanguage() == undefined ? "Home" : "ទំព័រដើម"}</span></i></a> </li>
                        <li><a href="">|</a> </li>
                        <li><a href="/sign-in"><i className="fa fa-user" aria-hidden="true">&nbsp;<span className="title-header">{loadLanguage() == "en" || loadLanguage() == undefined ? "Login" : "ចូលគណនី"}</span></i></a> </li>
                        <li><a href="">|</a> </li>
                        <li><a href="/sign-up"><i className="fa fa-sign-in" aria-hidden="true">&nbsp;<span className="title-header">{loadLanguage() == "en" || loadLanguage() == undefined ? "Join Free" : "ចុះឈ្មោះ"}</span></i></a> </li>
                        <li><a href="">|</a> </li>
                        <li><a href="/help"><i className="fa fa-lightbulb-o" aria-hidden="true">&nbsp;<span className="title-header">{loadLanguage() == "en" || loadLanguage() == undefined ? "របៀបប្រើ" : "របៀបប្រើ"}</span></i></a> </li>
                        <li><a href="">|</a> </li>
                        <li><a onClick={Navigation.handleChangeLanguage}><img className="flag" src={loadLanguage() == "en" || loadLanguage() == undefined ? "/icon/cambodia.png" : "/icon/english.png"}  alt="flag"/>&nbsp;&nbsp;<span className="title-header">{loadLanguage() == "en" || loadLanguage() == undefined ? "ខ្មែរ" : "English"}</span></a> </li>
                    </ul>
                </div>
            </div>
        );
       return(
           <div className="header">
              <div className="">
                  <div className="col-xs-5 contact-cambo">
                      <div className="wrap-contact">
                          <ul className="contact">
                              <li><a href="tel:+855 17996687" target="_blink"> <i className="fa fa-phone-square" aria-hidden="true">&nbsp;+855 70 600 200</i></a></li>
                              <li><a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blink"><i className="fa fa-envelope" aria-hidden="true">&nbsp;info@cambosmart.com</i></a></li>
                          </ul>
                      </div>
                  </div>
                  { userProfile }
              </div>
           </div>
       )
    }
}
function mapStateToProps(state){
    return ({
        userLogout: state.userLogout
    });
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({userLogOut, actionModalSignIn, actionModalSignUp,actionModalVerifiedPhone, actionModalVerifiedCode}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);
