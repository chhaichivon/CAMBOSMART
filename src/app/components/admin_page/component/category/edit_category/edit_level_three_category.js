import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { Link } from 'react-router';
import { Row, Col} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import FormField from './../../../../shared_component/redux_form_fields/form_field';
import FormTextArea from './../../../../shared_component/redux_form_fields/form_textarea';
import FormSubmit from './../../../../shared_component/redux_form_fields/form_submit';
import FormSimpleCheckbox from './../../../../shared_component/redux_form_fields/form_simple_checkbox';
import {updateCategoryAction} from './../../../../../actions/admin/category/category';
import {loadState} from './../../../../../localstorages/local_storage';

class EditLevelThreeCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            message: ''
        };
        this.formSubmit = this.formSubmit.bind(this);
        this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
    }

    handleAlertDismiss() {
        this.setState({
            status: false,
            message: ''
        });
    }

    formSubmit(value) {
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
                categoryIcon: '',
                commonCategory: value.common || value.common == 1 ? 1 : 0
            }
        });
    }

    componentWillReceiveProps(data){
        if(data.updateCategory.code == 200){
            location.href = '/admin/category/list-category/list-level-three';
        }else if(data.updateCategory.code == 400){
            this.setState({
                status: true,
                message: data.updateCategory.message
            });
        }
    }
    render(){
        const {handleSubmit, submitting} = this.props;
        return (
            <div>
                <br />
                <Link to="/admin/category/list-category/list-level-two">
                    <strong><i className="fa fa-angle-double-left" aria-hidden="true">
                        {' '}Back
                    </i></strong>
                </Link><br/><br/>
                <div style={{borderStyle: 'groove'}}>
                    <center><h4 style={{color: '#f77416'}}><b><u>Update Level Three Category</u></b></h4></center>
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

EditLevelThreeCategory = reduxForm({
    form: 'form_update_level_three_category',
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
})(EditLevelThreeCategory);

function mapStateToProps(state, own_props){
    let category = {
        nameEn: '',
        nameKh: '',
        description: '',
        common: 0
    };
    let data = {};
    if (state.childCategories.categories != undefined) {
        data = state.childCategories.categories.find(cat => cat._id.$oid == own_props.params.categoryId) || category;
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
function mapDispatchToProps(dispatch){
    return bindActionCreators({updateCategoryAction},dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(EditLevelThreeCategory);