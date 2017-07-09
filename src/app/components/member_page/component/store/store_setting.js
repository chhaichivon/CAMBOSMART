import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Field, reduxForm} from 'redux-form';
import {Row, Col, Alert} from 'react-bootstrap';
import FormField from './../../../shared_component/redux_form_fields/form_field';
import FormSubmit from './../../../shared_component/redux_form_fields/form_submit';
import FormTextArea from './../../../shared_component/redux_form_fields/form_textarea';
import SweetAlert from 'sweetalert-react';
import './../../../../../../node_modules/sweetalert/dist/sweetalert.css';
import AddImage from './fileupload/add_image';
import {loadStoreInfo,loadState,loadLanguage}from './../../../../localstorages/local_storage';
import {updateStoreAction} from './../../../../actions/store/store'

class StoreSetting extends React.Component {
    constructor(props){
        super(props);
        this.state={
            success:false,
            file: null
        };
        this.formSubmit = this.formSubmit.bind(this);
        this.setFile = this.setFile.bind(this);
    }

    formSubmit(value) {
        this.props.updateStoreAction({
            token: loadState().token,
            store: {
                userId: loadState().user.userId,
                storeName: value.storeName.trim(),
                storeInformation: value.storeInformation.trim()
            }
        })
    }

    componentWillReceiveProps(data){
        if(data.updateStore.code == 200){
            this.setState({success: true});
        }
    }

    setFile(value){
        this.setState({file: value})
    }

    render() {
        const { handleSubmit, error, invalid, submitting } = this.props;
        return (
            <div className="container">
                <br />
                <Row style={{margin: '0px'}}>
                    <Col xs={12}>
                        <form onSubmit={handleSubmit(this.formSubmit)}>
                            <Row>
                                <Col xs={2}>
                                    <strong>{loadLanguage() == "en" || loadLanguage() == undefined ? "Store Name" : "ឈ្មោះហាង"}<span style={{color: 'red'}}> *</span></strong>
                                </Col>
                                <Col xs={8}>
                                    <Field name="storeName" component={FormField} icon="fa fa-keyboard-o"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={2}>
                                    <strong>{loadLanguage() == "en" || loadLanguage() == undefined ? "About" : "អំពីហាង"}<span style={{color: 'red'}}> *</span></strong>
                                </Col>
                                <Col xs={8}>
                                    <Field name="storeInformation" component={FormTextArea} height="100px" />
                                </Col>

                            </Row>
                            <Row>
                                <Col xsOffset={2} xs={8}>
                                    <Alert bsStyle="warning" style={{margin: '0px'}}>
                                        {loadLanguage() == "en" || loadLanguage() == undefined ?
                                                <div>
                                                    <h4 style={{color: "black", fontWeight: 'bold'}}>Banner Requirement</h4>
                                                    <div style={{color: "#2D2D2D", listStyle: "circle", paddingLeft: "2px",textAlign:"left"}}>
                                                        <span>Banner Width must be 1090px</span><br/>
                                                        <span>Banner Height must be 168px</span><br/>
                                                        <span>Banner Format must be jpg, png, jpeg</span><br/>
                                                        <span>Banner Size must less than 10 MB</span><br/>
                                                    </div>
                                                </div>
                                            :
                                                <div>
                                                    <h4 style={{color: "black", fontWeight: 'bold'}}>តម្រួវការផ្លាកយ៉ីហោ</h4>
                                                    <div style={{color: "#2D2D2D", listStyle: "circle", paddingLeft: "2px",textAlign:"left"}}>
                                                        <span>ទំហំទទឹងត្រួវតែ​​​ 1090px</span><br/>
                                                        <span>ទំហំបណ្តោយត្រូវតែ 168px</span><br/>
                                                        <span>ប្រភេទរូបភាពត្រូវតែ​ jpg, png, jpeg</span><br/>
                                                        <span>ទំហំរូបភាពត្រូវតែតូចជាង 10 MB</span>
                                                    </div>
                                                </div>
                                        }

                                    </Alert>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col xs={2}>
                                    <strong>{loadLanguage() == "en" || loadLanguage() == undefined ? "Banner" : "ផ្លាកយ៉ីហោ"} </strong>
                                </Col>
                                <Col xs={8} >
                                    <div style={{ Width:"50px" }}>
                                        <AddImage handleUploadFile={this.setFile} />
                                    </div>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col xsOffset={2} xs={2}>
                                    <FormSubmit error={error} invalid={invalid} submitting={submitting} label={loadLanguage() == "en" || loadLanguage() == undefined ? "Save" : "រក្សាទុក"}/>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
                <SweetAlert
                    show={this.state.success}
                    type="success"
                    title="Successfully !!"
                    text="Store has been update successful !"
                    confirmButtonColor="#ff5a00"
                    onConfirm={() => setTimeout(function () {
                        if (loadState().user.userType == "normal") {
                            location.href =  '/normal';
                        } else if (loadState().user.userType == "merchant") {
                            window.location.assign('/merchant')
                            location.href = '/merchant';
                        }
                    }.bind(this), 10)}
                />
            </div>
        );
    }
}

StoreSetting = reduxForm({
    form: 'form_store_setting',
    validate: function (values) {
        let regex_string= /^[ ]+$/;
        const errors = {};
        if(values.storeName==undefined||values.storeName==""||regex_string.test(values.storeName)){
            errors.storeName="This field is required"
        }

        if(values.storeInformation==undefined||values.storeInformation==''||regex_string.test(values.storeInformation)){
            errors.storeInformation="This field is required"
        }
        return errors
    }
})(StoreSetting);

function mapStateToProps(state){
    return{
        updateStore:state.updateStore,
        initialValues: {
            storeName: loadStoreInfo() != undefined ? loadStoreInfo().storeName : '',
            storeInformation: loadStoreInfo() != undefined ? loadStoreInfo().storeInformation : ''
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({updateStoreAction}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(StoreSetting);

