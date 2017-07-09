import React from 'react';
import { Field, reduxForm} from 'redux-form';
import { Row, Col, Alert, FormGroup, Button, Radio, Popover, ButtonToolbar, OverlayTrigger } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import FormField from './../../../../shared_component/redux_form_fields/form_field';
import FormTextArea from './../../../../shared_component/redux_form_fields/form_textarea';
import FormSubmit from './../../../../shared_component/redux_form_fields/form_submit';
import FormSimpleCheckbox from './../../../../shared_component/redux_form_fields/form_simple_checkbox';
import {insertCategoryAction} from './../../../../../actions/admin/category/category';
import {loadState} from './../../../../../localstorages/local_storage';
import SweetAlert from 'sweetalert-react';
import './../../../../../../../node_modules/sweetalert/dist/sweetalert.css';

let categoryIcon = '';

class AddLevelOneCategory extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            icon: '',
            iconError: false,
            status: false,
            style: 'danger',
            message: '',
            success : false,
            error : false,
            iconExist: false,
            categoryExist: false
        };
        this.formSubmit = this.formSubmit.bind(this);
        this.handleSelectIcon = this.handleSelectIcon.bind(this);
        this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
    }

    componentWillReceiveProps(data){
        if(data.insertCategory.code == 200){
            this.setState({success:true});
        }
        if(data.insertCategory.code == 208){
            this.setState({iconExist:true});
        }
        if(data.insertCategory.code == 209){
            this.setState({categoryExist:true});
        }
        if(data.insertCategory.code == 400){
            this.setState({error:true});
        }
    }

    handleSelectIcon(event){
        categoryIcon = event.target.value;
        this.setState({icon: categoryIcon, iconError: false});
    }

    handleAlertDismiss() {
        categoryIcon = '';
        this.setState({
            icon: '',
            iconError: false,
            status: false,
            style: 'danger',
            message: ''
        });
        location.reload();
    }

    formSubmit(value){
        if(categoryIcon == ""){
            this.setState({iconError: true})
        }else{
            this.props.insertCategoryAction({
                token: loadState() != undefined ? loadState().token : '',
                category: {
                    productId: [],
                    categoryName: value.nameEn,
                    khName: value.nameKh,
                    categoryDescription: value.description,
                    parentId: {$oid: "000000000000000000000000"},
                    ancestorId: [],
                    categoryIcon: categoryIcon,
                    commonCategory: 1
                }
            });
        }
    }

    render(){
        const {handleSubmit, submitting} = this.props;
        return(
            <div style={{borderStyle: 'groove'}}>
                <center><h4 style={{color:'#f77416'}}><b><u>Add Level One Category</u></b></h4></center>
                <Row>
                    <FormGroup controlId="category_icon">
                        <Col lg={2} style={{marginTop: '7px', textAlign: 'right'}}>
                            <strong>Icon <span style={{color: "red"}}>*</span></strong>
                        </Col>
                        <Col lg={2}>
                            <div style={{borderStyle: '1px solid'}}>
                                <ButtonToolbar>
                                    <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={
                                        <Popover id="popover-trigger-click-root-close" title="Choose Icon Category">
                                            <FormGroup onChange={this.handleSelectIcon} style={{width:'300px'}}>
                                                <Radio name="icon" value="fa fa-television" inline><i className="fa fa-television" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-video-camera" inline><i className="fa fa-video-camera" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-battery-three-quarters" inline><i className="fa fa-battery-three-quarters" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-headphones" inline><i className="fa fa-headphones" aria-hidden="true"></i></Radio><br/>

                                                <Radio name="icon" value="fa fa-car" inline><i className="fa fa-car" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-motorcycle" inline><i className="fa fa-motorcycle" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-ship" inline><i className="fa fa-ship" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-bicycle" inline><i className="fa fa-bicycle" aria-hidden="true"></i></Radio><br/>

                                                <Radio name="icon" value="fa fa-university" inline><i className="fa fa-university" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-home" inline><i className="fa fa-home" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-industry" inline><i className="fa fa-industry" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-flag" inline><i className="fa fa-flag" aria-hidden="true"></i></Radio><br/>

                                                <Radio name="icon" value="fa fa-shopping-bag" inline><i className="fa fa-shopping-bag" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-info-circle" inline><i className="fa fa-info-circle" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-newspaper-o" inline><i className="fa fa-newspaper-o" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-id-card-o" inline><i className="fa fa-id-card-o" aria-hidden="true"></i></Radio><br/>

                                                <Radio name="icon" value="fa fa-female" inline><i className="fa fa-female" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-shopping-cart" inline><i className="fa fa-shopping-cart" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-money" inline><i className="fa fa-money" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-shopping-basket" inline><i className="fa fa-shopping-basket" aria-hidden="true"></i></Radio><br/>

                                                <Radio name="icon" value="fa fa-diamond" inline><i className="fa fa-diamond" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-cogs" inline><i className="fa fa-cogs" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-scissors" inline><i className="fa fa-scissors" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-star" inline><i className="fa fa-star" aria-hidden="true"></i></Radio><br/>

                                                <Radio name="icon" value="fa fa-leaf" inline><i className="fa fa-leaf" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-lemon-o" inline><i className="fa fa-lemon-o" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-gavel" inline><i className="fa fa-gavel" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-paw" inline><i className="fa fa-paw" aria-hidden="true"></i></Radio><br/>

                                                <Radio name="icon" value="fa fa-truck" inline><i className="fa fa-truck" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-volume-control-phone" inline><i className="fa fa-volume-control-phone" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-handshake-o" inline><i className="fa fa-handshake-o" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-commenting" inline><i className="fa fa-commenting" aria-hidden="true"></i></Radio><br/>

                                                <Radio name="icon" value="fa fa-list-alt" inline><i className="fa fa-list-alt" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-book" inline><i className="fa fa-book" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-bell" inline><i className="fa fa-bell" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-pencil-square-o" inline><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Radio><br/>

                                                <Radio name="icon" value="fa fa-user-circle-o" inline><i className="fa fa-user-circle-o" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-hand-paper-o" inline><i className="fa fa-hand-paper-o" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-users" inline><i className="fa fa-users" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-heart" inline><i className="fa fa-heart" aria-hidden="true"></i></Radio><br/>

                                                <Radio name="icon" value="fa fa-heartbeat" inline><i className="fa fa-heartbeat" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-smile-o" inline><i className="fa fa-smile-o" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-gamepad" inline><i className="fa fa-gamepad" aria-hidden="true"></i></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Radio name="icon" value="fa fa-heart-o" inline><i className="fa fa-heart-o" aria-hidden="true"></i></Radio><br/>
                                            </FormGroup>
                                        </Popover>
                                    }>
                                        <Button>{this.state.icon == ""? 'Choose Icon' : <span><i className={categoryIcon} aria-hidden="true"></i></span> }</Button>
                                    </OverlayTrigger>
                                </ButtonToolbar>
                                {this.state.err_icon? <span style={{color:'red'}}>Icon is *required.</span> : null}
                                <br/>
                            </div>
                        </Col>
                        <Col lg={8} style={{marginTop: '7px'}}>
                            { this.state.iconError ?
                                <span style={{marginLeft: '-45px', color: "red"}}>Field is require !!</span>
                                :null
                            }
                        </Col>
                    </FormGroup>
                </Row>
                <Row>
                    <form onSubmit={handleSubmit(this.formSubmit)}>
                        <Row>
                            <Col lg={2} style={{marginTop: '7px', textAlign: 'right'}}>
                                <strong>Name (Khmer) <span style={{color: 'red'}}>*</span></strong>
                            </Col>
                            <Col lg={10}>
                                <Field name="nameKh" type="text" component={FormField} label="Category name (Khmer)" icon="fa fa-keyboard-o" />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={2} style={{marginTop: '7px', textAlign: 'right'}}>
                                <strong>Name (English) <span style={{color: 'red'}}>*</span></strong>
                            </Col>
                            <Col lg={10}>
                                <Field name="nameEn" type="text" component={FormField} label="Category name (English)" icon="fa fa-keyboard-o"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={2} style={{marginTop: '7px', textAlign: 'right'}}>
                                <strong>Description</strong>
                            </Col>
                            <Col lg={10}>
                                <Field name="description" type="text" component={FormTextArea} height="100px" label="Description"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lgOffset={2} lg={10}>
                                <Field name="common" type="checkbox" component={FormSimpleCheckbox} placeholder="Common category"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lgOffset={2} lg={2}>
                                <FormSubmit submitting={submitting} label="Save" />
                            </Col>
                        </Row>
                    </form>
                    <SweetAlert
                        show={this.state.success}
                        type="success"
                        title="Successfully"
                        text="Successfully added new category."
                        confirmButtonColor="#ff5a00"
                        onConfirm={() => { location.href = "/admin/category/add-category/add-level-one"; }}
                    />
                    <SweetAlert
                        show={this.state.error}
                        type="error"
                        title="Something went wrong"
                        text="Fail with add new category."
                        confirmButtonColor="#ff5a00"
                        onConfirm={() => { location.href = "/admin/category/add-category/add-level-one"; }}
                    />
                    <SweetAlert
                        show={this.state.iconExist}
                        type="error"
                        title="Something went wrong"
                        text="Category Icon is already exist!"
                        confirmButtonColor="#ff5a00"
                        onConfirm={() => { location.href = "/admin/category/add-category/add-level-one"; }}
                    />
                    <SweetAlert
                        show={this.state.categoryExist}
                        type="error"
                        title="Something went wrong"
                        text="Category Name is already exist!"
                        confirmButtonColor="#ff5a00"
                        onConfirm={() => { location.href = "/admin/category/add-category/add-level-one"; }}
                    />
                </Row>
            </div>
        )
    }
}

AddLevelOneCategory = reduxForm({
    form: 'form_add_level_one_category',
    validate: function (values) {
        const errors = {};
        if(values.nameKh == undefined || values.nameKh == "" || values.nameKh.length < 2 || values.nameKh.length > 100){
            errors.nameKh = 'Name (Khmer) must in between (2-100) characters !!';
        }
        if(values.nameEn == undefined || values.nameEn == "" || values.nameEn.length < 2 || values.nameEn.length > 100){
            errors.nameEn = 'Name (English) must in between (2-100) characters !!';
        }
        return errors
    }
})(AddLevelOneCategory);


function mapStateToProps(state){
    return ({
        insertCategory: state.insertCategory,
        initialValues: {
            nameKh: '',
            nameEn: '',
            common: false
        }
    })
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({insertCategoryAction}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AddLevelOneCategory);