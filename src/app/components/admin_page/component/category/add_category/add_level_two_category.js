import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Row, Col, Alert} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import FormSelectCategory from './../../../../shared_component/redux_form_fields/form_select_category';
import FormField from './../../../../shared_component/redux_form_fields/form_field';
import FormTextArea from './../../../../shared_component/redux_form_fields/form_textarea';
import FormSubmit from './../../../../shared_component/redux_form_fields/form_submit';
import FormSimpleCheckbox from './../../../../shared_component/redux_form_fields/form_simple_checkbox';
import {fetchParentCategoriesAction, insertCategoryAction} from './../../../../../actions/admin/category/category';
import {loadState} from './../../../../../localstorages/local_storage';
import SweetAlert from 'sweetalert-react';
import './../../../../../../../node_modules/sweetalert/dist/sweetalert.css';

let categories = [];

class AddLevelTwoCategory extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            status: false,
            style: 'danger',
            message: '',
            success : false,
            error : false,
            categoryExist: false
        };
        this.formSubmit = this.formSubmit.bind(this);
        this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
    }

    handleAlertDismiss() {
        this.setState({
            status: false,
            style: 'danger',
            message: ''
        });
        location.reload();
    }

    componentWillMount(){
        this.setState({status: false});
        this.props.fetchParentCategoriesAction({
            token: loadState() != undefined ? loadState.token : '',
            start: 1,
            limit: 0
        });
    }

    componentWillReceiveProps(data){
        if(data.parentCategories.categories != undefined){
            for(let i=0;i<data.parentCategories.categories.length;i++){
                let categoryId = data.parentCategories.categories[i]._id.$oid;
                let categoryName = data.parentCategories.categories[i].categoryName;
                categories[i] = {
                    categoryId: categoryId,
                    categoryName: categoryName
                }
            }
        }
        if(data.insertCategory.code == 200){
            this.setState({success:true});
        }
        if(data.insertCategory.code == 209){
            this.setState({categoryExist:true});
        }
        if(data.insertCategory.code == 400){
            this.setState({error:true});
        }
    }

    formSubmit(value){
        this.props.insertCategoryAction({
            token: loadState() != undefined ? loadState().token : '',
            category: {
                productId: [],
                categoryName: value.nameEn,
                khName: value.nameKh,
                categoryDescription: value.description,
                parentId: {$oid: value.category},
                ancestorId: [{$oid: value.category}],
                categoryIcon: '',
                commonCategory: 0
            }
        });
    }

    render(){
        const {handleSubmit, error, invalid, submitting} = this.props;
        return(
            <div style={{borderStyle: 'groove'}}>
                <center><h4 style={{color:'#f77416'}}><b><u>Add Level Two Category</u></b></h4></center>
                &nbsp;
                <Row>
                    <form onSubmit={handleSubmit(this.formSubmit)}>
                        <Row>
                            <Col lg={3} style={{marginTop: '7px', textAlign: 'right'}}>
                                <strong>Level one categories <span style={{color: 'red'}}> *</span></strong>
                            </Col>
                            <Col lg={9}>
                                <Field name="category" type="select" component={FormSelectCategory} placeholder="Choose category ..." values={categories} icon="fa fa-indent"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={3} style={{marginTop: '7px', textAlign: 'right'}}>
                                <strong>Name (Khmer) <span style={{color: 'red'}}>*</span></strong>
                            </Col>
                            <Col lg={9}>
                                <Field name="nameKh" type="text" component={FormField} label="Category name (Khmer)" icon="fa fa-keyboard-o" />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={3} style={{marginTop: '7px', textAlign: 'right'}}>
                                <strong>Name (English) <span style={{color: 'red'}}>*</span></strong>
                            </Col>
                            <Col lg={9}>
                                <Field name="nameEn" type="text" component={FormField} label="Category name (English)" icon="fa fa-keyboard-o"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={3} style={{marginTop: '7px', textAlign: 'right'}}>
                                <strong>Description</strong>
                            </Col>
                            <Col lg={9}>
                                <Field name="description" type="text" component={FormTextArea} height="100px" label="Description"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lgOffset={3} lg={2}>
                                <FormSubmit error={error} invalid={invalid} submitting={submitting} label="Save" />
                            </Col>
                        </Row>
                    </form>
                    <SweetAlert
                        show={this.state.success}
                        type="success"
                        title="Successfully"
                        text="Successfully added new category."
                        confirmButtonColor="#ff5a00"
                        onConfirm={() => { location.href = "/admin/category/add-category/add-level-two"; }}
                    />
                    <SweetAlert
                        show={this.state.error}
                        type="error"
                        title="Something went wrong"
                        text="Fail with add new category."
                        confirmButtonColor="#ff5a00"
                        onConfirm={() => { location.href = "/admin/category/add-category/add-level-two"; }}
                    />
                    <SweetAlert
                        show={this.state.categoryExist}
                        type="error"
                        title="Something went wrong"
                        text="Category Name is already exist!"
                        confirmButtonColor="#ff5a00"
                        onConfirm={() => { location.href = "/admin/category/add-category/add-level-two"; }}
                    />
                </Row>
            </div>
        )
    }
}

AddLevelTwoCategory = reduxForm({
    form: 'form_add_level_two_category',
    validate: function (values) {
        const errors = {};
        if (values.category == undefined) {
            errors.category = "Please select level one category !!";
        }
        if(values.nameKh == undefined || values.nameKh == "" || values.nameKh.length < 2 || values.nameKh.length > 100){
            errors.nameKh = 'Name (Khmer) must in between (2-100) characters !!';
        }
        if(values.nameEn == undefined || values.nameEn == "" || values.nameEn.length < 2 || values.nameEn.length > 100){
            errors.nameEn = 'Name (English) must in between (2-100) characters !!';
        }
        return errors
    }
})(AddLevelTwoCategory);

function mapStateToProps(state){
    return ({
        parentCategories: state.parentCategories,
        insertCategory: state.insertCategory,
        initialValues: {
            nameKh: '',
            nameEn: '',
            common: false
        }
    })
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchParentCategoriesAction, insertCategoryAction},dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AddLevelTwoCategory);