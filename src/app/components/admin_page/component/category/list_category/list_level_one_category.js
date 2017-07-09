import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Form, FormGroup, FormControl, ControlLabel, Button, Table, Pager } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { fetchParentCategoriesAction, deleteCategoryAction } from './../../../../../actions/admin/category/category';
import SweetAlert from 'sweetalert-react';
import './../../../../../../../node_modules/sweetalert/dist/sweetalert.css';
import {loadState} from './../../../../../localstorages/local_storage';

let id='';
let dc = {};
let parent = {
    token: loadState() != undefined ? loadState.token : '',
    start: 1,
    limit: 10
};

class ListLevelOneCategory extends React.Component {
    constructor(props){
        super(props);
        this.state={
            delete:{
                show: false,
                hide: false
            },
            sweetPropsDelete: {
                type:"warning",
                title:"Delete Category?",
                text:"Are you sure want to delete this category?",
                showCancelButton:true
            }
        }
    }

    componentWillMount(){
        this.props.fetchParentCategoriesAction(parent);
    }

    nextPage(){
        parent.start = parent.start + 1;
        this.props.fetchParentCategoriesAction(parent);
    }

    previousPage(){
        if(parent.start <= 1) {
            parent.start = 1;
            this.props.fetchParentCategoriesAction(parent);
        }else {
            parent.start = parent.start - 1;
            this.props.fetchParentCategoriesAction(parent);
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
                <h4 style={{color:'#232f3e', fontWeight: '800'}}><u>LEVEL 1</u></h4>
                {/* display content */}
                <div className="table-responsive">
                    <Table bordered condensed hover>
                        <thead style={{color: 'white'}}>
                            <tr style={{backgroundColor:'#f77416'}}>
                                <th style={{textAlign: 'center'}}>NO</th>
                                <th style={{textAlign: 'center'}}>ICON</th>
                                <th style={{textAlign: 'center'}}>NAME (Khmer)</th>
                                <th style={{textAlign: 'center'}}>NAME (English)</th>
                                <th style={{textAlign: 'center'}}>COMMON</th>
                                <th style={{textAlign: 'center'}}>LEVEL</th>
                                <th style={{textAlign: 'center'}}>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                        { this.props.parentCategories.categories != undefined ?
                            this.props.parentCategories.categories.map((category, index) => {
                                return(
                                    <tr key={index}>
                                        <td style={{textAlign: 'center'}}>{((parent.start*10)-10)+(index+1)}</td>
                                        <td style={{textAlign: 'center'}}><i className={category.categoryIcon} aria-hidden="true"></i></td>
                                        <td>{category.khName}</td>
                                        <td>{category.categoryName}</td>
                                        <td style={{textAlign: 'center'}}>{category.commonCategory == 1 ? 'Yes' : 'No'}</td>
                                        <td style={{textAlign: 'center'}}>1</td>
                                        <td style={{textAlign: 'center'}}>
                                            <Link to={"/admin/category/detail-level-one-category/"+Object.values(category._id) }style={{"color": "green"}}>
                                                <i className="fa fa-eye" aria-hidden="true">&nbsp;View</i>
                                            </Link>&nbsp;&nbsp;
                                            <Link to={"/admin/category/edit-level-one-category/"+Object.values(category._id)} style={{"color": "orange"}}>
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
                    { this.props.parentCategories.categories != undefined ?
                        <Pager>
                            { parent.start == 1 ?
                                <Pager.Item onClick={this.previousPage.bind(this)} disabled>Previous</Pager.Item>
                                :
                                <Pager.Item onClick={this.previousPage.bind(this)}>Previous</Pager.Item>
                            }
                            {' '}
                            { this.props.parentCategories.categories.length < 10 ?
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
                                                        text:"Category has been deleted successfully.",
                                                        showCancelButton:false
                                                    },
                                                    delete: {
                                                        show: true,
                                                        hide: false
                                                    }
                                                });
                                                setTimeout(function(){
                                                    window.location.assign('/admin/category/list-category/list-level-one');
                                                },1000);
                                            }else {
                                                this.setState({
                                                        sweetPropsDelete: {
                                                        type:"error",
                                                        title:"Something Wrong!",
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

function mapStateToProps(state){
    if(state.deleteCategory != undefined){
        dc = state.deleteCategory;
    }
    return ({
        parentCategories: state.parentCategories,
        deleteCategory: state.deleteCategory
    })
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchParentCategoriesAction, deleteCategoryAction},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListLevelOneCategory);