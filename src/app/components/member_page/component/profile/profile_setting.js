import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Field, reduxForm} from 'redux-form';
import {Row,Panel,Col, Button, Tooltip} from 'react-bootstrap';
import FormField from './../../../shared_component/redux_form_fields/form_field';
import FormSelectField from './../../../shared_component/redux_form_fields/form_select_field';
import FormSubmit from './../../../shared_component/redux_form_fields/form_submit';
import FormTextArea from './../../../shared_component/redux_form_fields/form_textarea';
import ImageCrop from './../../../crop_image/image_crop';
import ChangePassword from './change_password';
import SweetAlert from 'sweetalert-react';
import './../../../../../../node_modules/sweetalert/dist/sweetalert.css';
import { saveState, loadState ,loadLanguage} from './../../../../localstorages/local_storage';
import { actionUpdateMemberInfo } from './../../../../actions/member/common';

let member = {
    token: '',
    member: {
        _id: (loadState() != undefined && loadState().user != undefined && loadState().user.userId != undefined) ? loadState().user.userId : '',
        userName: (loadState() != undefined && loadState().user != undefined &&loadState().user.userName != undefined) ? loadState().user.userName : '',
        phone: (loadState() != undefined && loadState().user != undefined && loadState().user.phone != undefined) ? loadState().user.phone : '',
        email: (loadState() != undefined && loadState().user != undefined && loadState().user.email != undefined) ? loadState().user.email : '',
        phones: (loadState() != undefined && loadState().user != undefined && loadState().user.otherPhones != undefined) ? loadState().user.otherPhones : [],
        location: (loadState() != undefined && loadState().user != undefined && loadState().user.location != undefined) ? loadState().user.location : '',
        address: (loadState() != undefined && loadState().user != undefined && loadState().user.address != undefined) ? loadState().user.address : ''
    }
};

class ProfileSetting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            check: false,
            textName: '',
            lblName: loadState().user.userName != undefined ? loadState().user.userName : '',
            btn: false,
            checkPhone: false,
            textPhone: '',
            lblPhone: '',
            btnPhone: false,
            checkEmail: false,
            textEmail: '',
            lblEmail: '',
            btnEmail: false,
            errorName: false,
            errorPhone: false,
            errorEmail: false,
            phone2: false,
            success: false,
            provinces: [
                'Phnom Penh', 'Banteay Meanchey',
                'Battambong', 'Kampong Cham', 'Kampong Chhnang',
                'Kampong Speu', 'Kampong Thom', 'Kampot', 'Kandal', 'Koh Kong',
                'Kep', 'Kratie', 'Mondulkiri', 'Oddar Meanchey',
                'Pailin', 'Preah Sihanouk', 'Peah Vihear', 'Pursat',
                'Prey Veng', 'Ratanakiri', 'Siem Reap', 'Stung Treng', 'Svay Rieng',
                'Takeo', 'Tboung Khmum'
            ]
        };
        this.addPhone2 = this.addPhone2.bind(this);
    }

    addPhone2(){
        this.setState({phone2: !this.state.phone2});
    }

    handleEditName() {
        this.setState({btn: !this.state.btn, check: true, textName: document.getElementById("lblName").textContent})
    }

    handleSaveName() {
        this.setState({btn: !this.state.btn, check: false, lblName: this.state.textName});
        member = {
            token: loadState().token != undefined ? loadState().token : '',
            member: {
                _id: loadState().user != undefined ? loadState().user.userId : '',
                userName: this.state.textName,
                phone: '',
                email: '',
                phones: [],
                location: '',
                address: ''
            }
        };
        this.props.actionUpdateMemberInfo(member);
    }


    handleChangeName(event) {
        let regex_name = /^[a-zA-Z0-9_.-]*$/;
        if(!regex_name.test(event.target.value) || event.target.value.length > 25){
            this.setState({errorName: true})
        }else {
            this.setState({errorName: false})
        }
        this.setState({textName: event.target.value});

    }

    handleEditPhone() {
        this.setState({btnPhone: !this.state.btnPhone, checkPhone: true, textPhone: document.getElementById("lblPhone").textContent})
    }

    handleSavePhone() {
        this.setState({btnPhone: !this.state.btnPhone, checkPhone: false, lblPhone: this.state.textPhone});
        member = {
            token: loadState().token != undefined ? loadState().token : '',
            member: {
                _id: loadState().user != undefined ? loadState().user.userId : '',
                userName: '',
                phone: this.state.textPhone.replace(this.state.textPhone.charAt(0), "+855"),
                email: '',
                phones: [],
                location: '',
                address: ''
            }
        };
        this.props.actionUpdateMemberInfo(member);
    }

    handleChangePhone(event) {
        let regex_phone = /^0\d{8,9}$/;
        if(!regex_phone.test(event.target.value)){
            this.setState({errorPhone: true})
        }else {
            this.setState({errorPhone: false})
        }
        this.setState({textPhone: event.target.value});

    }

    handleEditEmail() {
        this.setState({btnEmail: !this.state.btnEmail, checkEmail: true, textEmail: ''})
    }

    handleSaveEmail() {
        this.setState({btnEmail: !this.state.btnEmail, checkEmail: false, lblEmail: this.state.textEmail});
        member = {
            token: loadState().token != undefined ? loadState().token : '',
            member: {
                _id: loadState().user != undefined ? loadState().user.userId : '',
                userName: '',
                phone: '',
                email: this.state.textEmail,
                phones: [],
                location: '',
                address: ''
            }
        };
        this.props.actionUpdateMemberInfo(member);
    }

    handleChangeEmail(event) {
        let regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regex_email.test(event.target.value)){
            this.setState({errorEmail: true})
        }else {
            this.setState({errorEmail: false})
        }
        this.setState({textEmail: event.target.value});
    }

    formSubmit(value) {
        member = {
            token: loadState().token != undefined ? loadState().token : '',
            member: {
                _id: loadState().user != undefined ? loadState().user.userId : '',
                userName: '',
                phone: '',
                email: '',
                phones: value.phone2 != '' ? [value.phone1, value.phone2] : [value.phone1],
                location: value.location,
                address: value.address
            }
        };
        this.props.actionUpdateMemberInfo(member);
    }

    componentWillReceiveProps(data) {
        if (data.memberProfile.code == 200) {
            let user = loadState();
            user.user.userName = member.member.userName != '' ? member.member.userName : loadState().user.userName;
            user.user.phone = member.member.phone != '' ? member.member.phone : loadState().user.phone;
            user.user.email = member.member.email != '' ? member.member.email : loadState().user.email;
            user.user.otherPhones = member.member.phones.length != 0 ? member.member.phones : loadState().user.otherPhones;
            user.user.location = member.member.location != '' ? member.member.location : loadState().user.location;
            user.user.address = member.member.address != '' ? member.member.address : loadState().user.address;
            saveState(user);
            this.setState({success: true});
        }else {
            if(document.getElementById("error_message")) {
                document.getElementById("error_message").innerHTML = data.memberProfile.message != undefined ? data.memberProfile.message : '';
            }
        }
    }

    static imageError(message){
        document.getElementById('image_error').innerHTML = message;
    }

    render() {
        const {handleSubmit, error, invalid, submitting} = this.props;
        let total = 0;
        if(this.props.products.products != undefined){
            this.props.products.products.map((product) => {
                total = product.store.length
            })
        }
        return (
            <div className="container-fluid">
                <br />
                    <Row>
                        {
                            loadState().user.userType=="normal" ?
                                loadLanguage() == "en" || loadLanguage() == undefined ?
                                    <Col xs={4} sm={4} md={4} lg={4} lgOffset={7} mdOffset={7}>
                                        <Link to="/normal/promote-desc">
                                            <div className="list-inline">
                                                <span><Button className="upgrade-in-profile"><p style={{ fontSize: '15px',marginBottom: '0px', marginLeft: '5px' }}><img src="/icon/Buttons/Upgrade-to-Business-Account.gif"/></p></Button></span>
                                            </div>
                                        </Link>
                                    </Col>
                                    :
                                    <Col xs={4} sm={4} md={4} lg={4} lgOffset={7} mdOffset={7}>
                                        <Link to="/normal/promote-desc">
                                            <div className="list-inline">
                                                <span><Button className="upgrade-in-profile"><p style={{ fontSize: '15px',marginBottom: '0px', marginLeft: '5px' }}><img src="/icon/Buttons/Upgrade-to-Business-Account(Kh).gif"/></p></Button></span>
                                            </div>
                                        </Link>
                                    </Col>
                                :
                                null
                        }
                </Row>
                <Row>
                    <Col xs={3} lg={3}>
                        <div>
                            <ImageCrop imageError={ProfileSetting.imageError} />
                        </div>
                        <div>
                            <p id="image_error" style={{margin: '5px', color: 'red'}}></p>
                        </div>
                    </Col>
                    <Col xs={9} lg={9} className="merchant-info">

                        <div>
                            <div style={{color: 'red', fontWeight: 'bold'}} id="error_message"></div>
                            <Row>
                                <Col xs={5} lg={5}><h4>
                                    {
                                        loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                            "Hi"
                                            :
                                            "សូមស្វាគមន៏ "

                                    }
                                    &nbsp;
                                    &nbsp;
                                    {loadState().user.userName.search("g-") > -1 ? loadState().user.userName.replace("g-", "").toUpperCase() : loadState().user.userName.replace("fb-", "").toUpperCase()}
                                    !!</h4></Col>
                            </Row>
                            <Row>
                                <Col xs={5} lg={5}>
                                        {loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                            <strong>Username : </strong>
                                            :
                                            <strong>ឈ្មោះ : </strong>
                                        }
                        <span>
                                    { this.state.check == false ?
                                        <label id="lblName" style={{fontWeight: 'normal'}}>{this.state.lblName}</label> :
                                        <span>
                                            <input type="text" id="txtName" value={this.state.textName} onChange={this.handleChangeName.bind(this)}/>
                                            {this.state.errorName ?
                                                loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                                    <Tooltip placement="bottom" className="in" id="tooltip-bottom" style={{ marginLeft: '110px'}}>
                                                        Name must greater than 1 character without space !!
                                                    </Tooltip>
                                                    :
                                                    <Tooltip placement="bottom" className="in" id="tooltip-bottom" style={{ marginLeft: '110px'}}>
                                                        ឈ្មោះត្រូួវតែច្រើនជាងមួយតួរអក្សរ និង គ្មានគំលាត !!
                                                    </Tooltip>
                                                :
                                                null
                                            }
                                        </span>
                                    }
                            &nbsp;
                            {this.state.errorName ?
                                null
                                :
                                <a onClick={!this.state.btn ? this.handleEditName.bind(this) : this.handleSaveName.bind(this)}>{!this.state.btn ?
                                    <i className="fa fa-pencil-square-o" style={{fontSize: '16px'}}>
                                    </i>
                                    :
                                    <i className="fa fa-floppy-o" style={{fontSize: '16px'}}>
                                    </i>}
                                </a>
                            }
                                </span>
                                </Col>

                                <Col xs={5} lg={5}>
                                    {
                                        loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                            <strong>Register Phone: </strong>
                                            :
                                            <strong>លេខទូរស័ព្ទចុះឈ្មោះ: </strong>
                                    }
                                    {loadState().user.phone != "" || this.state.lblPhone != ""?
                                        <label style={{fontWeight: 'normal'}}>
                                            {loadState().user.phone == "" ?
                                                <span>{this.state.lblPhone} &nbsp;<i className="fa fa-check" style={{fontSize: '15px', color: 'green'}}>&nbsp;</i></span>
                                                :
                                                <span>{loadState().user.phone.replace("+855", "0")} &nbsp;<i className="fa fa-check" style={{fontSize: '15px', color: 'green'}}>&nbsp;</i></span>
                                            }
                                        </label>
                                        :
                                        <span>
                                    { this.state.checkPhone == false ?
                                        <label id="lblPhone" style={{fontWeight: 'normal'}}>{this.state.lblPhone}</label>
                                        :
                                        <span>
                                            <input type="text" id="txtPhone" placeholder="Ex: 070972232" value={this.state.textPhone} onChange={this.handleChangePhone.bind(this)}/>
                                            {this.state.errorPhone ?
                                                loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                                    <Tooltip placement="bottom" className="in" id="tooltip-bottom" style={{ marginLeft: '110px'}}>
                                                        Phone number is invalid !!
                                                    </Tooltip>
                                                    :
                                                    <Tooltip placement="bottom" className="in" id="tooltip-bottom" style={{ marginLeft: '110px'}}>
                                                        លេខទូរស័ព្ទមិនត្រឹមត្រូួវទេ !!
                                                    </Tooltip>
                                                :
                                                null
                                            }
                                        </span>
                                    }
                                            &nbsp;
                                            {this.state.errorPhone ?
                                                null
                                                :
                                                <a onClick={!this.state.btnPhone ? this.handleEditPhone.bind(this) : this.handleSavePhone.bind(this)}>{!this.state.btnPhone ?
                                                    <i className="fa fa-plus-circle" style={{fontSize: '14px'}}>&nbsp;Add</i>
                                                    :
                                                    <i className="fa fa-floppy-o" style={{fontSize: '16px'}}>
                                                    </i>}
                                                </a>
                                            }
                                    </span>
                                    }
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={5} lg={5}>
                                    {
                                        loadLanguage() == "en" || loadLanguage() == undefined ?
                                            <strong>Account Type :</strong>
                                            :
                                            <strong>ប្រភេទគណនី  :</strong>
                                    }
                                    {loadState().user.userType}
                                </Col>
                                <Col xs={5} lg={5}>
                                    {
                                        loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                            <strong>Register Email : </strong>
                                            :
                                            <strong>អ៊ីម៉ែលចុះឈ្មោះ : </strong>
                                    }
                                    {loadState().user.email != "" || this.state.lblEmail != "" ?
                                        <label style={{fontWeight: 'normal'}}>
                                            {loadState().user.email == "" ?
                                                <span>{this.state.lblEmail} &nbsp;<i className="fa fa-check" style={{fontSize: '15px', color: 'green'}}>&nbsp;</i></span>
                                                :
                                                <span>{loadState().user.email} &nbsp;<i className="fa fa-check" style={{fontSize: '15px', color: 'green'}}>&nbsp;</i></span>
                                            }
                                        </label>
                                        :
                                        <span>
                                    { this.state.checkEmail == false ?
                                        <label id="lblEmail" style={{fontWeight: 'normal'}}>{this.state.lblEmail}</label>
                                        :
                                        <span>
                                            <input type="text" id="txtEmail" placeholder="example@example.com" value={this.state.textEmail} onChange={this.handleChangeEmail.bind(this)}/>
                                            {this.state.errorEmail ?
                                                loadLanguage() == "en" || loadLanguage() == undefined ?
                                                    <Tooltip placement="bottom" className="in" id="tooltip-bottom"
                                                             style={{ marginLeft: '110px'}}>
                                                        Email is invalid !!
                                                    </Tooltip>
                                                    :
                                                    <Tooltip placement="bottom" className="in" id="tooltip-bottom"
                                                             style={{ marginLeft: '110px'}}>
                                                        អ៊ីម៉ែលមិនត្រឹមត្រូួវទេ !!
                                                    </Tooltip>
                                                :
                                                null
                                            }
                                        </span>
                                    }
                                            &nbsp;
                                            {this.state.errorEmail ?
                                                null
                                                :
                                                <a onClick={!this.state.btnEmail ? this.handleEditEmail.bind(this) : this.handleSaveEmail.bind(this)}>
                                                    {!this.state.btnEmail ?
                                                        <i className="fa fa-plus-circle" style={{fontSize: '14px'}}>&nbsp;Add</i>
                                                        :
                                                        <i className="fa fa-floppy-o" style={{fontSize: '16px'}}>
                                                        </i>
                                                    }
                                                </a>
                                            }
                                    </span>
                                    }
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={5} lg={5}>
                                    {
                                        loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                            <strong>Post Ads : </strong>
                                            :
                                            <strong>ទំនិញលក់ : </strong>
                                    }
                                    {total}
                                </Col>
                                <Col xs={5} lg={5}>
                                    {
                                        loadLanguage() == "en" || loadLanguage() == undefined ?
                                            <strong>Store URL : </strong>
                                            :
                                            <strong>ហាងទំនិញ : </strong>
                                    }
                                    <a href={`/store/${loadState().user.userName}/1`}>https://www.cambosmart.com/{loadState().user.userName}</a>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <br /><br />
                <Row>
                    <Col xs={6} lg={6}>
                        <Row>
                            <div id="error_message" className="message">
                            </div>
                            <Panel header={
                                    loadLanguage() == "en" || loadLanguage() == undefined ?
                                        <center><strong className="forget-password-title">PROFILE INFORMATION</strong></center>
                                    :
                                        <center><strong className="forget-password-title">ព័ត៏មានគណនី</strong></center>
                                }>
                                <form onSubmit={handleSubmit(this.formSubmit.bind(this))}>
                                    { loadState().user.otherPhones != undefined ?
                                        loadState().user.otherPhones.length == 0 || loadState().user.otherPhones.length == 1 ?
                                            <div>
                                                <Col xs={12}lg={12}>
                                                    <Row >
                                                        <Col xs={2} sm={2} md={2} lg={2} style={{marginTop: '10px'}}>
                                                            {
                                                                loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                                                    <strong>Phone 1</strong>
                                                                    :
                                                                    <strong>ទូរស័ព្ទ១</strong>
                                                            }

                                                        </Col>
                                                        <Col xs={9} sm={9} md={9} lg={9}>
                                                            <Field name="phone1" component={FormField} label="Phone" icon="fa fa-phone"/>
                                                        </Col>
                                                        <Col xs={1} sm={1} md={1} lg={1}>
                                                            <Button onClick={this.addPhone2} style={{height: '40px', marginLeft: '-27px'}}>
                                                                {this.state.phone2 ?
                                                                    <i className="fa fa-minus-circle" aria-hidden="true" style={{color: 'red'}}>
                                                                    </i>
                                                                    :
                                                                    <i className="fa fa-plus-circle" aria-hidden="true" style={{color: '#f77416'}}>
                                                                    </i>
                                                                }
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </div>
                                            :
                                            <div>
                                                <Col xs={12}lg={12}>
                                                    <Row>
                                                        <Col xs={2} sm={2} md={2} lg={2} style={{marginTop: '10px'}}>
                                                            {
                                                                loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                                                    <strong>Phone 1</strong>
                                                                    :
                                                                    <strong>ទូរស័ព្ទ១</strong>
                                                            }
                                                        </Col>
                                                        <Col xs={10} sm={10} md={10} lg={10}>
                                                            <Field name="phone1" component={FormField} label="Phone" icon="fa fa-phone"/>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col xs={12}lg={12}>
                                                    <Row>
                                                        <Col xs={2} sm={2} md={2} lg={2} style={{marginTop: '10px'}}>
                                                            {
                                                                loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                                                    <strong>Phone 2</strong>
                                                                    :
                                                                    <strong>ទូរស័ព្ទ២</strong>
                                                            }
                                                        </Col>
                                                        <Col xs={10} sm={10} md={10} lg={10}>
                                                            <Field name="phone2" component={FormField} label="Phone" icon="fa fa-phone"/>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </div>
                                        :
                                        <div>
                                            <Col xs={12}lg={12}>
                                                <Row>
                                                    <Col xs={2} sm={2} md={2} lg={2} style={{marginTop: '10px'}}>
                                                        {
                                                            loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                                                <strong>Phone 1</strong>
                                                                :
                                                                <strong>ទូរស័ព្ទ១</strong>
                                                        }
                                                    </Col>
                                                    <Col xs={9} sm={9} md={9} lg={9}>
                                                        <Field name="phone1" component={FormField} label="Phone" icon="fa fa-phone"/>
                                                    </Col>
                                                    <Col xs={1} sm={1} md={1} lg={1}>
                                                        <Button onClick={this.addPhone2} style={{height: '40px'}}>
                                                            {this.state.phone2 ?
                                                                <i className="fa fa-minus-circle" aria-hidden="true" style={{color: 'red'}}>
                                                                </i>
                                                                :
                                                                <i className="fa fa-plus-circle" aria-hidden="true" style={{color: '#f77416'}}>
                                                                </i>
                                                            }
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </div>
                                    }
                                    {this.state.phone2 ?
                                        <Col xs={12} lg={12}>
                                            <Row>
                                                <Col xs={2} sm={2} md={2} lg={2} style={{marginTop: '10px'}}>
                                                    {
                                                        loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                                            <strong>Phone 2</strong>
                                                            :
                                                            <strong>ទូរស័ព្ទ២</strong>
                                                    }
                                                </Col>
                                                <Col xs={10} sm={10} md={10} lg={10}>
                                                    <Field name="phone2" component={FormField} label="Phone" icon="fa fa-phone"/>
                                                </Col>
                                            </Row>
                                        </Col>
                                        :
                                        null
                                    }

                                    <Col xs={12}lg={12}>
                                        <Row>
                                            <Col xs={2} sm={2} md={2} lg={2} style={{marginTop: '10px'}}>
                                                {
                                                    loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                                        <strong>Location</strong>
                                                        :
                                                        <strong>ទីតាំង</strong>
                                                }
                                            </Col>
                                            <Col xs={10} sm={10} md={10} lg={10}>
                                                <Field name="location" type="select" component={FormSelectField} placeholder="Location" values={this.state.provinces} icon="fa fa-map-marker"/>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12} lg={12}>
                                        <Row>
                                            <Col xs={2} sm={2} md={2} lg={2} style={{marginTop: '10px'}}>
                                                {
                                                    loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                                        <strong>Address</strong>
                                                        :
                                                        <strong>អាសយដ្ឋាន </strong>
                                                }
                                            </Col>
                                            <Col xs={10} sm={10} md={10} lg={10}>
                                                <Field name="address" component={FormTextArea} label="E.g : #168E0, Khan Toul Kork, Phnom Pehn, Cambodia"/>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col mdOffset={3} xs={3} sm={3} md={3} lg={3}>
                                        <FormSubmit error={error} invalid={invalid} submitting={submitting} label={loadLanguage() == "en" ||  loadLanguage() == undefined ? "Save":"រក្សាទុក"} />
                                    </Col>
                                </form>
                            </Panel>
                        </Row>
                    </Col>
                    <Col xs={6} lg={6}>
                        <ChangePassword />
                    </Col>
                </Row>
                <SweetAlert
                    show={this.state.success}
                    type="success"
                    title="Successfully !!"
                    text="User has been update successful !"
                    confirmButtonColor="#ff5a00"
                    onConfirm={() => setTimeout(function(){
                        location.href = loadState().user == undefined ? '/normal/profile' :
                            loadState().user.userType == 'normal' ? '/normal/profile' : '/merchant/profile'
                    }.bind(this), 10)}
                />
            </div>
        );
    }
}

ProfileSetting = reduxForm({
    form: 'form_profile_setting',
    validate: function (values) {
        let regex_phone = /^0\d{8,9}$/;
        const errors = {};

        if (!regex_phone.test(values.phone1)) {
            errors.phone1 = 'Phone number is invalid !!'
        }
        if (!regex_phone.test(values.phone2)) {
            errors.phone2 = 'Phone number is invalid !!'
        }
        if (values.location == undefined||values.location=="") {
            errors.location = "Please select your location !!";
        }
        return errors
    }
})(ProfileSetting);

function mapStateToProps(state){
    let phone1 = '';
    let phone2 = '';
    if(loadState().user.otherPhones != undefined){
        if(loadState().user.otherPhones.length == 2){
            phone1 = loadState().user.otherPhones[0];
            phone2 = loadState().user.otherPhones[1];
        }else if(loadState().user.otherPhones.length == 1){
            phone1 = loadState().user.otherPhones[0]
        }
    }
    return{
        products: state.memberProducts,
        memberProfile: state.profile,
        initialValues: {
            phone1: phone1,
            phone2: phone2,
            location: loadState().user.location,
            address: loadState().user.address
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ actionUpdateMemberInfo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSetting);