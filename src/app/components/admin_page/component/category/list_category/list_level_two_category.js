import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Row, Col, Table, Pager } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Link } from 'react-router';
import FormSelectCategory from './../../../../shared_component/redux_form_fields/form_select_category';
import SweetAlert from 'sweetalert-react';
import './../../../../../../../node_modules/sweetalert/dist/sweetalert.css';
import { fetchParentCategoriesAction, fetchChildCategoriesAction, deleteCategoryAction } from './../../../../../actions/admin/category/category';
import {loadState} from './../../../../../localstorages/local_storage';

let id = "";
let dc = {};
let categories = [];
let child = {
    token: loadState() != undefined ? loadState.token : '',
    id: '',
    start: 1,
    limit: 10
};

class ListLevelTwoCategory extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            p_id : false,
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
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillMount(){
        this.props.fetchParentCategoriesAction({
            token: loadState() != undefined ? loadState.token : '',
            start: 1,
            limit: 0
        });
    }
    componentWillReceiveProps(data) {
        if (data.parentCategories.categories != undefined) {
            for (let i = 0; i < data.parentCategories.categories.length; i++) {
                let categoryId = data.parentCategories.categories[i]._id.$oid;
                let categoryName = data.parentCategories.categories[i].categoryName;
                categories[i] = {
                    categoryId: categoryId,
                    categoryName: categoryName
                }
            }
        }
    }

    handleSelect(event){
        if(event.target.value != ""){
            child.id = event.target.value;
            this.props.fetchChildCategoriesAction(child);
        }else{}
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
                                <h4 style={{color:'#232f3e', fontWeight: '800'}}><u>LEVEL 2 : </u></h4>
                            </Col>
                            <Col lg={9}>
                                <Field name="category" type="select" onChange={this.handleSelect} component={FormSelectCategory} placeholder="Choose category ..." values={categories} icon="fa fa-indent"/>
                            </Col>
                        </Row>
                    </form>
                </div>
                <br />
                <div>
                    {/* display content */}
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
                                            <td style={{textAlign: 'center'}}>2</td>
                                            <td style={{textAlign: 'center'}}>
                                                <Link to={"/admin/category/detail-level-two-category/"+Object.values(category._id) }style={{"color": "green"}}>
                                                    <i className="fa fa-eye" aria-hidden="true">&nbsp;View</i>
                                                </Link>&nbsp;&nbsp;
                                                <Link to={"/admin/category/edit-level-two-category/"+Object.values(category._id)} style={{"color": "orange"}}>
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
                                                    window.location.assign('/admin/category/list-category/list-level-two');
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
            </div>
        )
    }
}

ListLevelTwoCategory = reduxForm({
    form: 'form_list_level_two_category'
})(ListLevelTwoCategory);

function mapStateToProps(state){
    if(state.deleteCategory.code != undefined){
        dc = state.deleteCategory;
    }
    return ({
        parentCategories: state.parentCategories,
        childCategories: state.childCategories,
        deleteCategory: state.deleteCategory
    })
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchParentCategoriesAction, fetchChildCategoriesAction, deleteCategoryAction},dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ListLevelTwoCategory);