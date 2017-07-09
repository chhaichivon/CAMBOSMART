import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Row, Col, Alert} from 'react-bootstrap';
import FormSelectCategory from './../../../../shared_component/redux_form_fields/form_select_category';
import FormField from './../../../../shared_component/redux_form_fields/form_field';
import FormTextArea from './../../../../shared_component/redux_form_fields/form_textarea';
import FormSubmit from './../../../../shared_component/redux_form_fields/form_submit';
import FormSimpleCheckbox from './../../../../shared_component/redux_form_fields/form_simple_checkbox';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import {insertCategoryAction} from './../../../../../actions/admin/category/category';
import {listAllCategoryAction}from'./../../../../../actions/categories/category';
import {loadState} from './../../../../../localstorages/local_storage';
import SweetAlert from 'sweetalert-react';
import './../../../../../../../node_modules/sweetalert/dist/sweetalert.css';

let categories1 = [];
let categories2 = [];

class AddLevelThreeCategory extends React.Component {
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
        this.handleSelect = this.handleSelect.bind(this);
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
        this.props.listAllCategoryAction();
    }

    componentWillReceiveProps(data){
        if(data.listAll.categories != undefined){
            for(let i=0;i<data.listAll.categories.length;i++){
                let categoryId = data.listAll.categories[i].id.$oid;
                let categoryName = data.listAll.categories[i].categoryName;
                categories1[i] = {
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

    handleSelect(event){
        if(event.target.value != "") {
            if (this.props.listAll.categories != undefined) {
                const category = this.props.listAll.categories.find(cat => cat.id.$oid == event.target.value);
                if (category.sub != undefined) {
                    for (let i = 0; i < category.sub.length; i++) {
                        let categoryId = category.sub[i].id.$oid;
                        let categoryName = category.sub[i].categoryName;
                        categories2[i] = {
                            categoryId: categoryId,
                            categoryName: categoryName
                        }
                    }
                }
            }
        }else{
            categories2 = [];
        }

    }

    formSubmit(value) {
        this.props.insertCategoryAction({
            token: loadState() != undefined ? loadState().token : '',
            category: {
                productId: [],
                categoryName: value.nameEn,
                khName: value.nameKh,
                categoryDescription: value.description,
                parentId: {$oid: value.category2},
                ancestorId: [{$oid: value.category1}, {$oid: value.category2}],
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
                                <strong>Please choose categories <span style={{color: 'red'}}> *</span></strong>
                            </Col>
                            <Col lg={4}>
                                <Field name="category1" type="select" onChange={this.handleSelect} component={FormSelectCategory} placeholder="Choose level one category ..." values={categories1} icon="fa fa-indent"/>
                            </Col>
                            <Col lg={5}>
                                <Field name="category2" type="select" component={FormSelectCategory} placeholder="Choose level two category ..." values={categories2} icon="fa fa-indent"/>
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
                        onConfirm={() => { location.href = "/admin/category/add-category/add-level-three"; }}
                    />
                    <SweetAlert
                        show={this.state.error}
                        type="error"
                        title="Something went wrong"
                        text="Fail with add new category."
                        confirmButtonColor="#ff5a00"
                        onConfirm={() => { location.href = "/admin/category/add-category/add-level-three"; }}
                    />
                    <SweetAlert
                        show={this.state.categoryExist}
                        type="error"
                        title="Something went wrong"
                        text="Category Name is already exist!"
                        confirmButtonColor="#ff5a00"
                        onConfirm={() => { location.href = "/admin/category/add-category/add-level-three"; }}
                    />
                </Row>
            </div>
        )
    }
}

AddLevelThreeCategory = reduxForm({
    form: 'form_add_level_three_category',
    validate: function (values) {
        const errors = {};
        if (values.category1 == undefined) {
            errors.category1 = "Please select level one category !!";
        }
        if (values.category2 == undefined) {
            errors.category2 = "Please select level two category !!";
        }
        if(values.nameKh == undefined || values.nameKh == "" || values.nameKh.length < 2 || values.nameKh.length > 100){
            errors.nameKh = 'Name (Khmer) must in between (2-100) characters !!';
        }
        if(values.nameEn == undefined || values.nameEn == "" || values.nameEn.length < 2 || values.nameEn.length > 100){
            errors.nameEn = 'Name (English) must in between (2-100) characters !!';
        }
        return errors
    }
})(AddLevelThreeCategory);

function mapStateToProps(state){
    return ({
        listAll: state.listAll,
        insertCategory: state.insertCategory,
        initialValues: {
            nameKh: '',
            nameEn: '',
            common: false
        }
    })
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({listAllCategoryAction, insertCategoryAction},dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AddLevelThreeCategory);