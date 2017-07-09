import React, {PropTypes} from "../../../../../node_modules/react";
import {Button, Row, Col} from "../../../../../node_modules/react-bootstrap";
import axios from 'axios';
import {API_ENDPOINT} from '../../../api/headers';
import {saveSocialId, saveState, loadState, saveCodeStatus, savePhone} from './../../../localstorages/local_storage';


let socialId = '';
export default class FormSocial extends React.Component {
    constructor(props) {
        super(props);

        /*window.fbAsyncInit = function () {
            FB.init({
                appId: '1814130272181202',
                xfbml: true,
                version: 'v2.8'
            });
            FB.AppEvents.logPageView();
        };

        (function (d, s, id) {
            let js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));*/
        window.fbAsyncInit = function() {
            FB.init({
                appId      : '1307001952740433',
                cookie     : true,
                xfbml      : true,
                version    : 'v2.8'
            });
            FB.AppEvents.logPageView();
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    loginWithFacebookAccount() {
        FB.login(("/me", function (response) {
            if (response.status === "connected") {
                if (response.authResponse) {
                    FB.api("/me?fields=first_name,last_name,email,hometown", "GET", function (user) {
                        socialId = user.id;
                        axios({
                            url: API_ENDPOINT + 'users/social/signup',
                            method: 'post',
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept-Language': 'en',
                                'X-Api-Key': 'AbCdEfGhIjK1',
                            },
                            data: {
                                socialId: user.id,
                                userName: 'fb-'.concat(user.last_name.toLowerCase(),user.first_name.toLowerCase()),
                                phone: '',
                                email: (user.email == undefined) ? '' : user.email,
                                password: '',
                                city: (user.hometown ==  undefined) ? '' : user.hometown
                            }

                        }).then(function (response) {
                            if (response.data.data.code == 201) { /* user don't have phone */
                                saveSocialId(socialId);
                                saveCodeStatus(response.data.data.code);
                                location.href = '/add-phone';
                            }else if (response.data.data.code == 111) { /* user inactive */
                                savePhone(response.data.data.user.phone.replace("+855", "0"));
                                saveCodeStatus(response.data.data.code);
                                location.href = '/verify-code';
                            }else if (response.data.data.code == 113) { /* user don't have phone */
                                saveSocialId(socialId);
                                saveCodeStatus(response.data.data.code);
                                location.href = '/add-phone';

                            } else if (response.data.data.code == 114) { /* user have been block */
                                location.href = '/account/terminated';

                            }else if (response.data.data.code == 200) {
                                console.log(response.data.data);
                                saveState(response.data.data);
                                location.href = loadState().user.userType == undefined ? '/normal' : `/${loadState().user.userType}`;
                            }
                        }).catch(function (error) {
                            /*  location.href = ("/");*/
                            console.log("ERROR", error);
                        });
                    });
                }
            } else {
                console.log("Opps! Cannot connect to Facebook");
            }
        }), null);

    }

    loginWithGoogleAccount() {
        try {
            const config = {
                apiKey: "AIzaSyA5xOPn2wKcHa-at0YqrZxJr4VDho2hTVM",
                authDomain: "cambosmart-168507.firebaseapp.com",
                databaseURL: "https://cambosmart-168507.firebaseio.com",
                projectId: "cambosmart-168507",
                storageBucket: "cambosmart-168507.appspot.com",
                messagingSenderId: "240611451491"
            };
            firebase.initializeApp(config);

        } catch (error) {
            console.log("error message:", error)
        }
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            let user = result.user;
            socialId = user.uid;
            let names = user.displayName.split(" ");
            axios({
                url: API_ENDPOINT + 'users/social/signup',
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept-Language': 'en',
                    'X-Api-Key': 'AbCdEfGhIjK1',
                },
                data: {
                    socialId: user.uid,
                    userName: 'g-'.concat(names[1].toLowerCase(), names[0].toLowerCase()),
                    phone: '',
                    email: user.email,
                    password: '',
                    city: user.location == undefined ? '' : user.location

                }
            }).then(function (response) {
                if (response.data.data.code == 201) { /* user don't have phone */
                    saveSocialId(socialId);
                    saveCodeStatus(response.data.data.code);
                    location.href = '/add-phone';
                } else if (response.data.data.code == 111) { /* user inactive */
                    savePhone(response.data.data.user.phone.replace("+855", "0"));
                    saveCodeStatus(response.data.data.code);
                    location.href = '/verify-code';

                } else if (response.data.data.code == 113) { /* user don't have phone */
                    saveSocialId(socialId);
                    saveCodeStatus(response.data.data.code);
                    location.href = '/add-phone';

                } else if (response.data.data.code == 114) { /* user have been block */
                    location.href = '/account/terminated';

                } else if (response.data.data.code == 200) { /* login successful */
                    saveState(response.data.data);
                    location.href = loadState().user.userType == undefined ? '/normal' : `/${loadState().user.userType}`;
                }
            })
                .catch(function (error) {
                    console.log("error:", error);
                });
        }).catch(function (error) {
            console.log("google error:", error)
        });
    }

    render() {
        const {fb, g} = this.props;
        return (
            <Row>
                <Col xs={12} sm={6}>
                    <Button bsStyle="primary" block onClick={this.loginWithFacebookAccount.bind(this)}>
                        <i className="fa fa-facebook" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;{fb}</i>
                    </Button>
                </Col>
                <Col xs={12} sm={6}>
                    <Button bsStyle="danger" block onClick={this.loginWithGoogleAccount.bind(this)}>
                        <i className="fa fa-google" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;{g}</i>
                    </Button>
                </Col>
            </Row>
        );
    }
}

