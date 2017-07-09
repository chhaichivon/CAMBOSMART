import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router';
import {Row, Col, FormGroup, Button, Radio, Popover, ButtonToolbar, OverlayTrigger} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import FormField from './../../../../shared_component/redux_form_fields/form_field';
import FormTextArea from './../../../../shared_component/redux_form_fields/form_textarea';
import FormSubmit from './../../../../shared_component/redux_form_fields/form_submit';
import FormSimpleCheckbox from './../../../../shared_component/redux_form_fields/form_simple_checkbox';
import {updateCategoryAction} from './../../../../../actions/admin/category/category';
import {loadState} from './../../../../../localstorages/local_storage';

let categoryIcon = '';

class EditLevelOneCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: '',
            status: false,
            message: ''
        };
        this.formSubmit = this.formSubmit.bind(this);
        this.handleSelectIcon = this.handleSelectIcon.bind(this);
        this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
    }


    handleSelectIcon(event) {
        categoryIcon = event.target.value;
        this.setState({icon: categoryIcon});
    }

    handleAlertDismiss() {
        categoryIcon = '';
        this.setState({
            status: false,
            message: ''
        });
    }

    formSubmit(value) {
        if (categoryIcon == "") {
            this.setState({iconError: true})
        } else {
            this.props.updateCategoryAction({
                token: loadState() != undefined ? loadState().token : '',
                category: {
                    _id: {$oid: this.props.params.categoryId != undefined ? this.props.params.categoryId : '000000000000000000000000'},
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

    componentWillReceiveProps(data){
        if(data.updateCategory.code == 200){
            location.href = '/admin/category/list-category/list-level-one';
        }else if(data.updateCategory.code == 400){
            this.setState({
                status: true,
                message: data.updateCategory.message
            });
        }
    }

    render() {
        const {handleSubmit, submitting} = this.props;
        return (
            <div>
                <br />
                <Link to="/admin/category/list-category/list-level-one">
                    <strong><i className="fa fa-angle-double-left" aria-hidden="true">
                        {' '}Back
                    </i></strong>
                </Link><br/><br/>
                <div style={{borderStyle: 'groove'}}>
                    <center><h4 style={{color: '#f77416'}}><b><u>Update Level One Category</u></b></h4></center>
                    <Row style={{marginLeft: '-12px'}}>
                        <Col lgOffset={2} lg={10}>
                            {this.state.status ?
                                <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
                                    <h4>Oh snap! You got an error!</h4>
                                    <p>{this.state.message}</p>
                                </Alert>
                                : null
                            }
                        </Col>
                    </Row>
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
                                                <FormGroup onChange={this.handleSelectIcon} style={{width: '300px'}}>
                                                    <Radio name="icon" value="fa fa-television" inline>
                                                        <i className="fa fa-television" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-video-camera" inline>
                                                        <i className="fa fa-video-camera" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-battery-three-quarters" inline>
                                                        <i className="fa fa-battery-three-quarters" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-headphones" inline>
                                                        <i className="fa fa-headphones" aria-hidden="true">
                                                        </i>
                                                    </Radio><br/>
                                                    <Radio name="icon" value="fa fa-car" inline>
                                                        <i className="fa fa-car" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-motorcycle" inline>
                                                        <i className="fa fa-motorcycle" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-ship" inline>
                                                        <i className="fa fa-ship" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-bicycle" inline>
                                                        <i className="fa fa-bicycle" aria-hidden="true">
                                                        </i>
                                                    </Radio><br/>
                                                    <Radio name="icon" value="fa fa-university" inline>
                                                        <i className="fa fa-university" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-home" inline>
                                                        <i className="fa fa-home" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-industry" inline>
                                                        <i className="fa fa-industry" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-flag" inline>
                                                        <i className="fa fa-flag" aria-hidden="true">
                                                        </i>
                                                    </Radio><br/>
                                                    <Radio name="icon" value="fa fa-shopping-bag" inline>
                                                        <i className="fa fa-shopping-bag" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-info-circle" inline>
                                                        <i className="fa fa-info-circle" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-newspaper-o" inline>
                                                        <i className="fa fa-newspaper-o" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-id-card-o" inline>
                                                        <i className="fa fa-id-card-o" aria-hidden="true">
                                                        </i>
                                                    </Radio><br/>
                                                    <Radio name="icon" value="fa fa-female" inline>
                                                        <i className="fa fa-female" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-shopping-cart" inline>
                                                        <i className="fa fa-shopping-cart" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-money" inline>
                                                        <i className="fa fa-money" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-shopping-basket" inline>
                                                        <i className="fa fa-shopping-basket" aria-hidden="true">
                                                        </i>
                                                    </Radio><br/>
                                                    <Radio name="icon" value="fa fa-diamond" inline>
                                                        <i className="fa fa-diamond" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-cogs" inline>
                                                        <i className="fa fa-cogs" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-scissors" inline>
                                                        <i className="fa fa-scissors" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-star" inline>
                                                        <i className="fa fa-star" aria-hidden="true">
                                                        </i>
                                                    </Radio><br/>
                                                    <Radio name="icon" value="fa fa-leaf" inline>
                                                        <i className="fa fa-leaf" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-lemon-o" inline>
                                                        <i className="fa fa-lemon-o" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-gavel" inline>
                                                        <i className="fa fa-gavel" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-paw" inline>
                                                        <i className="fa fa-paw" aria-hidden="true">
                                                        </i>
                                                    </Radio><br/>
                                                    <Radio name="icon" value="fa fa-truck" inline>
                                                        <i className="fa fa-truck" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-volume-control-phone" inline>
                                                        <i className="fa fa-volume-control-phone" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-handshake-o" inline>
                                                        <i className="fa fa-handshake-o" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-commenting" inline>
                                                        <i className="fa fa-commenting" aria-hidden="true">
                                                        </i>
                                                    </Radio><br/>

                                                    <Radio name="icon" value="fa fa-list-alt" inline>
                                                        <i className="fa fa-list-alt" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-book" inline>
                                                        <i className="fa fa-book" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-bell" inline>
                                                        <i className="fa fa-bell" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-pencil-square-o" inline>
                                                        <i className="fa fa-pencil-square-o" aria-hidden="true">
                                                        </i>
                                                    </Radio><br/>
                                                    <Radio name="icon" value="fa fa-user-circle-o" inline>
                                                        <i className="fa fa-user-circle-o" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-hand-paper-o" inline>
                                                        <i className="fa fa-hand-paper-o" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-users" inline>
                                                        <i className="fa fa-users" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-heart" inline>
                                                        <i className="fa fa-heart" aria-hidden="true">
                                                        </i>
                                                    </Radio><br/>
                                                    <Radio name="icon" value="fa fa-heartbeat" inline>
                                                        <i className="fa fa-heartbeat" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-smile-o" inline>
                                                        <i className="fa fa-smile-o" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-gamepad" inline>
                                                        <i className="fa fa-gamepad" aria-hidden="true">
                                                        </i>
                                                    </Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Radio name="icon" value="fa fa-heart-o" inline>
                                                        <i className="fa fa-heart-o" aria-hidden="true">
                                                        </i>
                                                    </Radio><br/>
                                                </FormGroup>
                                            </Popover>
                                        }>
                                            <Button>
                                                { categoryIcon == "" ?
                                                    'Choose Icon'
                                                    :
                                                    <span>
                                                        <i className={categoryIcon} aria-hidden="true">
                                                        </i>
                                                    </span>
                                                }
                                            </Button>
                                        </OverlayTrigger>
                                    </ButtonToolbar>
                                    <br/>
                                </div>
                            </Col>
                            <Col lg={8} style={{marginTop: '7px'}}>
                                { this.state.iconError ?
                                    <span style={{marginLeft: '-45px', color: "red"}}>Field is require !!</span>
                                    : null
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
                                    <Field name="nameKh" type="text" component={FormField} label="Category name (Khmer)" icon="fa fa-keyboard-o"/>
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
                                    <FormSubmit submitting={submitting} label="Save"/>
                                </Col>
                            </Row>
                        </form>
                    </Row>
                </div>
            </div>
        )
    }
}

EditLevelOneCategory = reduxForm({
    form: 'form_update_level_one_category',
    validate: function (values) {
        const errors = {};
        if (values.nameKh == undefined || values.nameKh == "" || values.nameKh.length < 2 || values.nameKh.length > 100) {
            errors.nameKh = 'Name (Khmer) must in between (2-100) characters !!';
        }
        if (values.nameEn == undefined || values.nameEn == "" || values.nameEn.length < 2 || values.nameEn.length > 100) {
            errors.nameEn = 'Name (English) must in between (2-100) characters !!';
        }
        return errors
    }
})(EditLevelOneCategory);

function mapStateToProps(state, own_props) {
    let category = {
        nameEn: '',
        nameKh: '',
        description: '',
        common: 0
    };
    let data = {};
    if (state.parentCategories.categories != undefined) {
        data = state.parentCategories.categories.find(cat => cat._id.$oid == own_props.params.categoryId) || category;
        categoryIcon = data.categoryIcon;
        category = {
            nameEn: data.categoryName,
            nameKh: data.khName,
            description: data.description,
            common: data.commonCategory
        };
    }

    return ({
        updateCategory: state.updateCategory,
        initialValues: category
    })
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({updateCategoryAction}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(EditLevelOneCategory);