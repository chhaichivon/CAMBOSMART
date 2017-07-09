import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Row, Col, Table, Pager } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Link } from 'react-router';
import FormSelectCategory from './../../../../shared_component/redux_form_fields/form_select_category';
import SweetAlert from 'sweetalert-react';
import './../../../../../../../node_modules/sweetalert/dist/sweetalert.css';
import {listAllCategoryAction}from'./../../../../../actions/categories/category';
import {fetchChildCategoriesAction, deleteCategoryAction} from './../../../../../actions/admin/category/category';
import {loadState} from './../../../../../localstorages/local_storage';

let id='';
let dc = {};

let categories1 = [];
let categories2 = [];
let child = {
    token: loadState() != undefined ? loadState.token : '',
    id: '',
    start: 1,
    limit: 10
};

class ListLevelThreeCategory extends React.Component {
    constructor(props){
        super(props);
        this.state={
            delete:{
                show: false,
                hide: false
            },
            sweetPropsDelete: {
                type:"warning",
                title:"Delete?",
                text:"Are you sure want to delete this category?",
                showCancelButton:true
            }
        };
        this.handleSelectParent = this.handleSelectParent.bind(this);
        this.handleSelectChild = this.handleSelectChild.bind(this);

    }

    componentWillMount(){
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
    }

    handleSelectParent(event){
        if(event.target.value != ""){
            if(this.props.listAll.categories != undefined){
                const category = this.props.listAll.categories.find(cat => cat.id.$oid == event.target.value);
                if(category.sub != undefined){
                    for(let i=0;i<category.sub.length;i++){
                        let categoryId = category.sub[i].id.$oid;
                        let categoryName = category.sub[i].categoryName;
                        categories2[i] = {
                            categoryId: categoryId,
                            categoryName: categoryName
                        }
                    }
                }
            }
        }else {
            categories2 = [];
        }
    }

    handleSelectChild(event){
        if(event.target.value != ""){
            child.id = event.target.value;
            this.props.fetchChildCategoriesAction(child);
        }else {}
    }

    nextPage(){
        child.start = child.start + 1;
        this.props.fetchChildCategoriesAction(child);
    }

    previousPage(){
        if(child.start <= 1) {
            child.start = 1;
            this.props.fetchChildCategoriesAction(child);
        }else {
            child.start = child.start - 1;
            this.props.fetchChildCategoriesAction(child);
        }
    }

    openDeleteCategory(_id){
        id = _id;
        this.setState({
            delete: {
                show: true,
                hide: true
            }
        })
    }

    render(){
        return(
            <div>
                <br />
                <div style={{marginLeft: '-15px'}}>
                    <form onSubmit={this.props.handleSubmit}>
                        <Row>
                            <Col lg={3} style={{textAlign: 'right'}}>
                                <h4 style={{color:'#232f3e', fontWeight: '800'}}><u>LEVEL 3 : </u></h4>
                            </Col>
                            <Col lg={4}>
                                <Field name="category1" type="select" onChange={this.handleSelectParent} component={FormSelectCategory} placeholder="Choose level one category ..." values={categories1} icon="fa fa-indent"/>
                            </Col>
                            <Col lg={5}>
                                <Field name="category2" type="select" onChange={this.handleSelectChild} component={FormSelectCategory} placeholder="Choose level two category ..." values={categories2} icon="fa fa-indent"/>
                            </Col>
                        </Row>
                    </form>
                </div>
                <br />
                <div>
                    <div className="table-responsive">
                        <Table bordered condensed hover>
                            <thead style={{color: 'white'}}>
                            <tr style={{backgroundColor:'#f77416'}}>
                                <th style={{textAlign: 'center'}}>NO</th>
                                <th style={{textAlign: 'center'}}>NAME (Khmer)</th>
                                <th style={{textAlign: 'center'}}>NAME (English)</th>
                                <th style={{textAlign: 'center'}}>COMMON</th>
                                <th style={{textAlign: 'center'}}>LEVEL</th>
                                <th style={{textAlign: 'center'}}>ACTIONS</th>
                            </tr>
                            </thead>
                            <tbody>
                            { this.props.childCategories.categories != undefined ?
                                this.props.childCategories.categories.map((category, index) => {
                                    return(
                                        <tr key={index}>
                                            <td style={{textAlign: 'center'}}>{((child.start*10)-10)+(index+1)}</td>
                                            <td style={{textAlign: 'center'}}>{category.khName}</td>
                                            <td style={{textAlign: 'center'}}>{category.categoryName}</td>
                                            <td style={{textAlign: 'center'}}>{category.commonCategory == 1 ? 'Yes' : 'No'}</td>
                                            <td style={{textAlign: 'center'}}>3</td>
                                            <td style={{textAlign: 'center'}}>
                                                <Link to={"/admin/category/detail-level-three-category/"+Object.values(category._id) }style={{"color": "green"}}>
                                                    <i className="fa fa-eye" aria-hidden="true">&nbsp;View</i>
                                                </Link>&nbsp;&nbsp;
                                                <Link to={"/admin/category/edit-level-three-category/"+Object.values(category._id)} style={{"color": "orange"}}>
                                                    <i className="fa fa-pencil-square-o" aria-hidden="true">&nbsp;Edit</i>
                                                </Link>&nbsp;&nbsp;
                                                { loadState().user.userType !== 'editor' ? 
                                                <Link to="" onClick={() => {this.openDeleteCategory(Object.values(category._id))} }
                                                      style={{"color": "red"}}>
                                                    <i className="fa fa-trash-o" aria-hidden="true">&nbsp;Delete</i>
                                                </Link>
                                                : null }
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                <tr>
                                    <td colSpan="6" style={{textAlign:'center'}}>CATEGORIES NOT FOUND</td>
                                </tr>
                            }
                            </tbody>
                        </Table>
                        { this.props.childCategories.categories != undefined ?
                            <Pager>
                                { parent.start == 1 ?
                                    <Pager.Item onClick={this.previousPage.bind(this)} disabled>Previous</Pager.Item>
                                    :
                                    <Pager.Item onClick={this.previousPage.bind(this)}>Previous</Pager.Item>
                                }
                                {' '}
                                { this.props.childCategories.categories.length < 10 ?
                                    <Pager.Item onClick={this.nextPage.bind(this)} disabled>Next</Pager.Item>
                                    :
                                    <Pager.Item onClick={this.nextPage.bind(this)}>Next</Pager.Item>
                                }
                            </Pager>
                            :
                            null
                        }
                    </div>
                </div>

                {/* sweet alert to delete category */}
                <SweetAlert
                    show={this.state.delete.show}
                    type={this.state.sweetPropsDelete.type}
                    title={this.state.sweetPropsDelete.title}
                    text={this.state.sweetPropsDelete.text}
                    showCancelButton={this.state.sweetPropsDelete.showCancelButton}
                    confirmButtonColor="green"
                    onConfirm={
                            () => {
                                if(this.state.delete.show && this.state.delete.hide) {
                                    this.props.deleteCategoryAction({
                                        token: loadState() != undefined ? loadState().token : '',
                                        id: id
                                    });
                                    setTimeout(function() {
                                        if(dc != undefined){
                                            if(dc.code == 200){
                                                this.setState({
                                                    sweetPropsDelete: {
                                                        type:"success",
                                                        title:"Successful",
                                                        text:"Category have been deleted successfully.",
                                                        showCancelButton:false
                                                    },
                                                    delete: {
                                                        show: true,
                                                        hide: false
                                                    }
                                                });
                                                setTimeout(function(){
                                                    window.location.assign('/admin/category/list-category/list-level-three');
                                                },1000);
                                            }else {
                                                this.setState({
                                                        sweetPropsDelete: {
                                                        type:"error",
                                                        title:"Something Wrong !",
                                                        text:"Cannot delete this category.",
                                                        showCancelButton:false
                                                    },
                                                    delete: {
                                                        show: true,
                                                        hide: false
                                                    }
                                                })
                                            }
                                        }}.bind(this), 200);
                                }else {
                                    this.setState({
                                        sweetPropsDelete: {
                                            type:"warning",
                                            title:"Are you sure?",
                                            text:"You want to delete this category?",
                                            showCancelButton:true
                                        },
                                        delete: {
                                            show: false,
                                            hide: false
                                        }
                                    })
                                }
                            }
                        }
                    onCancel={() => this.setState({delete: {show: false, hide: false}})}
                />

            </div>
        )
    }
}

ListLevelThreeCategory = reduxForm({
    form: 'form_list_level_three_category'
})(ListLevelThreeCategory);

function mapStateToProps(state){
    if(state.deleteCategory.code != undefined){
        dc = state.deleteCategory;
    }
    return ({
        listAll: state.listAll,
        childCategories: state.childCategories,
        deleteCategory: state.deleteCategory
    })
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({listAllCategoryAction, fetchChildCategoriesAction, deleteCategoryAction},dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ListLevelThreeCategory);
