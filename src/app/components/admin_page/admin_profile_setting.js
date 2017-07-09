import React from 'react';
import {connect} from 'react-redux';
import {Field,reduxForm} from 'redux-form';
import {Row,Col,Panel,FormGroup,ControlLabel,FormControl } from 'react-bootstrap';
import FormField from './../shared_component/redux_form_fields/form_field';
import FormSelectField from './../shared_component/redux_form_fields/form_select_field';
import FormSubmit from './../shared_component/redux_form_fields/form_submit';
import {saveState,loadState} from './../../localstorages/local_storage';
import {actionUpdateProfile} from './../../actions/user';
import {bindActionCreators} from 'redux';
import './css/admin.css';
//import ImageCrop from './../crop_image/image_crop'

let user={}
let image='';
class AdminProfileSetting extends React.Component{

    formSubmit(value) {
        console.log("tttt",loadState().user.password);
        user=
        {
            firstName: value.firstName,
            lastName: value.lastName,
            email:  loadState().user.email!=""? loadState().user.email:"null",
            phone: loadState().user.phone!=""? loadState().user.phone:"null",
            city:  value.location,
            password:value.password,
            profileImage:image
        };
        this.props.actionUpdateProfile(user);

    }

    readURL(e){
        image="/icon/";
        /*
         let  output= document.getElementById('output');
        output.src = window.URL.createObjectURL(e.target.files[0]);
        console.log(output.src);*/

      let  output= document.getElementById('output');
      let reader = new FileReader();

        reader.onload = function(event){
            output.src = reader.result;//base64 string
        };
        reader.readAsDataURL(e.target.files[0]);

    }


    componentWillReceiveProps(data) {
        if (data.result.code==200) {
            const newUser = {
                message: loadState().message,
                code: loadState().code,
                user: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    phone: user.phone,
                    email: user.email,
                    city: user.city,
                    userType: loadState().user.userType,
                    status: loadState().user.status,
                    online: loadState().user.online
                },
                token: loadState().token,
                minutes: loadState().minutes
            };
            saveState(newUser);
           window.location.assign("/admin/setting");
            if(document.getElementById("showMessage")) {
                document.getElementById("showMessage").innerHTML = data.result.message;
            }
        }
    }


    render(){
        const {handleSubmit, error, invalid, submitting} = this.props;
        return(
            <div className="container-fluid user-nav">
                <div className="container">
                    <br/><br/><br/>

                                <Row>
                                    <Col xs={12} sm={12}>
                                        <div id="showMessage" className="message">
                                        </div>
                                        <ul style={{listStyleType:"none"}}>
                                            <li>
                                                <span>userName:</span>
                                                <span>{loadState().user.firstName} {loadState().user.lastName}</span>
                                            </li>
                                            {
                                                loadState().user.phone!=""&& loadState().user.phone!="null"?
                                                    <li>
                                                        <span>phone: {loadState().user.phone.replace("+855","0")}</span>
                                                    </li>:null
                                            }
                                            {
                                                loadState().user.email!=""&& loadState().user.email!="null"?
                                                    <li>
                                                        <span>email: { loadState().user.email}</span>
                                                    </li>:null
                                            }
                                            <li>
                                                <span>Location:</span>
                                                <span>{ loadState().user.city}</span>
                                            </li>

                                        </ul>

                                        <form onSubmit={handleSubmit(this.formSubmit.bind(this))}>
                                            <div id="showMessage" className="message">
                                            </div>

                                            <Row>
                                                <Col xs={12} sm={2}>
                                                    <Row>
                                                        <Col xs={12} sm={2}>
                                                        <div >
                                                        <img id="output" src="/icon/default_profile.jpg" alt="your image" style={{height:"107px",width:"107px"}}/>
                                                        </div>
                                                        <div className="choose_file">
                                                          Choose File
                                                            <input type='file' onChange={this.readURL.bind(this)} className="hide_file"
                                                            name="profileImage"/>
                                                        </div>
                                                       </Col>
                                                    </Row>
                                                </Col>
                                                <Col xs={12} sm={10}  >
                                                    <Row>
                                                        <Col xs={12} sm={7} >
                                                            <label>First Name</label>
                                                            <Field name="firstName" type="text" component={FormField}  icon="fa fa-user"/>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col xs={12} sm={7} >
                                                            <label>Last Name</label>
                                                                <Field name="lastName" type="text" component={FormField}  icon="fa fa-user" />
                                                        </Col>
                                                    </Row>

                                                    <Row>
                                                        <Col xs={12} sm={7} >
                                                           <label> Change password</label>
                                                            <Field name="password" type="password" component={FormField} icon="fa fa-key"/>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col xs={12} sm={7} >
                                                           <label> Confirm password</label>
                                                            <Field name="confirmPassword" type="password" component={FormField} icon="fa fa-key"/>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col xs={12} sm={7} >
                                                            <label>Location</label>
                                                            <Field name="location" type="select" component={FormSelectField} icon="fa fa-map-marker"/>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col xs={12} sm={7} >
                                                            <FormSubmit error={error} invalid={invalid} submitting={submitting} label="update"/>
                                                        </Col>
                                                    </Row>
                                                    </Col>
                                                </Row>
                                        </form>
                                    </Col>
                                </Row>
                </div>
            </div>
        );

    }
}

AdminProfileSetting = reduxForm
(
    {
    form: 'member_profile_setting',
        validate: function (values) {
            let regex_name = /^[A-Za-z]+$/;

            const errors = {}
            if (!regex_name.test(values.firstName) || values.firstName == undefined) {
                errors.firstName = 'First name is invalid'
            }
            if (!regex_name.test(values.lastName) || values.lastName == undefined) {
                errors.lastName = 'Last name is invalid'
            }

            if(values.password!=""){
                if(values.password.length<6){
                    errors.password='Please enter at least 6 characters.'
                }
            }

            if(values.confirmPassword!="") {
                if (values.confirmPassword !=values.password) {
                    errors.confirmPassword = 'Your password not match';
                }
            }

            if(values.password!=""&&values.confirmPassword==""){
                errors.confirmPassword = 'Please input your confirm password';
            }

            console.log("value location",values.location);

            if (values.location == undefined||values.location=="") {
                errors.location = "Please select your province or city";
            }
            return errors
        }
    }
)(AdminProfileSetting)

function mapStateToProps(state){
    return{
        result:state.updateProfile,
        initialValues: {
            firstName:loadState().user.firstName,
            lastName:loadState().user.lastName,
            password:'',
            confirmPassword:'',
            location:loadState().user.city
        }
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({actionUpdateProfile}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(AdminProfileSetting)