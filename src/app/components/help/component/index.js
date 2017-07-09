import React from 'react';
import {Link} from 'react-router';
import Navigation from './../../shared_component/navigation/navigation';
import Search from './../../shared_component/navigation/cambo_search/form_search';
import './../index.css';
import { loadLanguage } from './../../../localstorages/local_storage';

export default class Index extends React.Component{
    render(){
        return(
            <div>
                <div className="container help">
                    <div className="wrapp-help row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="wrapp-help">
                                <h4>
                                    {loadLanguage() == "en" || loadLanguage() == undefined ? 'Any help from CAMBOSMART.COM':'របៀបប្រើប្រាស់  CAMBOSMART.COM'}
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-3 col-sm-3 col-md-3">
                            <div className="help panel-group" id="accordion">
                                <div className="help panel panel-default">
                                    <div className="help panel-heading">
                                        <h4 className="help panel-title">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"><span
                                                className="help glyphicon glyphicon-user">
                            </span>{loadLanguage() == "en" || loadLanguage() == undefined ? 'Account Setting':'គណនី '}</a>
                                        </h4>
                                    </div>
                                    <div id="collapseOne" className="panel-collapse collapse in">
                                        <div className="help panel-body">
                                            <table className="table">
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <span className="help glyphicon glyphicon-pencil text-primary"></span>
                                                        <Link to="/help/how-to-register">{loadLanguage() == "en" || loadLanguage() == undefined ? 'How to Register':'របៀបបង្កើតគណនី '}</Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="help glyphicon glyphicon-check text-primary"></span>
                                                        <Link to="/help/how-to-verify">{loadLanguage() == "en" || loadLanguage() == undefined ? 'How to Verify':'របៀបផ្ទៀងផ្ទាត់លេខទូរស័ព្ទ'}</Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="help fa fa-key text-success"></span>
                                                        <Link to="/help/how-to-login">{loadLanguage() == "en" || loadLanguage() == undefined ? 'How to LogIn':'របៀបចូលគណនី '}</Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="help fa fa-unlock-alt text-success"></span>
                                                        <Link to="/help/how-to-reset-password">{loadLanguage() == "en" || loadLanguage() == undefined ? 'Forget Password':'ភ្លេចលេខសម្ងាត់'}</Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="help fa fa-info-circle text-info"></span>
                                                        <Link to="/help/profile-info">{loadLanguage() == "en" || loadLanguage() == undefined ? 'Profile Info':'ពត៍មានរបស់គណនី '}</Link>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="help panel panel-default">
                                        <div className="help panel-heading">
                                            <h4 className="help panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion"
                                                   href="#collapseTwo"><span className="help glyphicon glyphicon-th"></span>
                                                    {loadLanguage() == "en" || loadLanguage() == undefined ? 'Post Products':'ការដាក់លក់ '}</a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo" className="panel-collapse collapse">
                                            <div className="help panel-body">
                                                <table className="table">
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <Link to="/help/post-ad"><span className="help fa fa-cart-plus" aria-hidden="true"></span>{loadLanguage() == "en" || loadLanguage() == undefined ? 'How to post products':'របៀបដាក់លក់ '}</Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Link to="/help/manage-ad"><span className="help fa fa-shopping-cart" aria-hidden="true"></span>{loadLanguage() == "en" || loadLanguage() == undefined ? 'how to manage products':'របៀបគ្រប់គ្រងការដាក់លក់ '}</Link>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="help panel panel-default">
                                        <div className="help panel-heading">
                                            <h4 className="help panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion"
                                                   href="#collapseEight"><span className="help glyphicon glyphicon-th"></span>
                                                    {loadLanguage() == "en" || loadLanguage() == undefined ? 'Promote':'របៀបប៊ូត'}</a>
                                            </h4>
                                        </div>
                                        <div id="collapseEight" className="panel-collapse collapse">
                                            <div className="help panel-body">
                                                <table className="table">
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <Link to="/help/promote"><span className="fa fa-shopping-bag" aria-hidden="true"></span>{loadLanguage() == "en" || loadLanguage() == undefined ? ' How to promote products':' របៀបប៊ូតផលិតផល'}</Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Link to="/help/merchant"><span className="fa fa-user-circle-o" aria-hidden="true"></span>{loadLanguage() == "en" || loadLanguage() == undefined ? ' how to promote to be merchant':' របៀបប្តូរគណនី'}</Link>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="help panel panel-default">
                                        <div className="help panel-heading">
                                            <h4 className="help panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion"
                                                   href="#collapseThree"><span className="help-top fa fa-shopping-basket"></span>
                                                    {loadLanguage() == "en" || loadLanguage() == undefined ? 'ManageStore':'ហាង'}</a>
                                            </h4>
                                        </div>
                                        <div id="collapseThree" className="panel-collapse collapse">
                                            <div className="help panel-body">
                                                <table className="table">
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <Link to="/help/store-info"> {loadLanguage() == "en" || loadLanguage() == undefined ? 'Store Info':'ពត៍មានរបស់ហាង'}</Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Link to="/help/store-banner"> {loadLanguage() == "en" || loadLanguage() == undefined ? 'Add Store Banner':'ដាក់បាដា'}</Link>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="help panel panel-default">
                                        <div className="help panel-heading">
                                            <h4 className="help panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion"
                                                   href="#collapseFour">
                                                    <span className="help-top fa fa-wrench"></span>
                                                    {loadLanguage() == "en" || loadLanguage() == undefined ? 'Term & Privacy':'បទបញ្ជាផ្ទៃក្នុង'}</a>
                                            </h4>
                                        </div>
                                        <div id="collapseFour" className="panel-collapse collapse">
                                            <div className="help panel-body">
                                                <table className="table">
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <Link to="/help/privacy">{loadLanguage() == "en" || loadLanguage() == undefined ? 'Term & Privacy':'បទបញ្ជាផ្ទៃក្នុង'}</Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Link to="/help/post-rule">{loadLanguage() == "en" || loadLanguage() == undefined ? 'Post Rule':'ការដាក់លក់ផលិតផល'}</Link>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="help panel panel-default">
                                        <div className="help panel-heading">
                                            <h4 className="help panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion"
                                                   href="#collapseFive"><span className="help-top fa fa-info-circle"></span>
                                                    {loadLanguage() == "en" || loadLanguage() == undefined ? "About Combo-smart" : "អំពីយើងខ្មុំ"}</a>
                                            </h4>
                                        </div>
                                        <div id="collapseFive" className="panel-collapse collapse">
                                            <div className="help panel-body">
                                                <table className="table">
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <Link to="/help/about-us">{loadLanguage() == "en" || loadLanguage() == undefined ? "About Us" : "អំពីយើងខ្មុំ"}</Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Link to="/help/contact-us">{loadLanguage() == "en" || loadLanguage() == undefined ? "Contact Us" : "ទំនាក់ទង"}</Link>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="help panel panel-default">
                                        <div className="help panel-heading">
                                            <h4 className="help panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion"
                                                   href="#collapsesix"><span className="help-top fa fa-map-marker"></span>
                                                    {loadLanguage() == "en" || loadLanguage() == undefined ? "Set Map" : "ដាក់ផែនទី"}</a>
                                            </h4>
                                        </div>
                                        <div id="collapsesix" className="panel-collapse collapse">
                                            <div className="help panel-body">
                                                <table className="table">
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <Link to="/help/map">{loadLanguage() == "en" || loadLanguage() == undefined ? "How to set Map" : "របៀបដាក់ផែនទី"}</Link>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-9 col-sm-9 col-md-9">
                            <div className="well">
                                {
                                    this.props.children
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}