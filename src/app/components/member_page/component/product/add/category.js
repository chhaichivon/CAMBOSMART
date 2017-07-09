import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import './category.css';
import { listAllCategoryAction }from'./../../../../../actions/categories/category';
import { fetchThirdCategoriesAction } from './../../../../../actions/categories/category';
import { loadState, saveCategory,loadLanguage } from './../../../../../localstorages/local_storage';

let main = '';
class Category extends React.Component{
    /** @namespace this.props.secondCategories.categories */

    constructor(props){
        super(props);
        this.state = {
            check: false
        }
    }
    componentWillMount(){
        this.props.listAllCategoryAction();
    }

    handleClick(category){
        saveCategory(category);
        window.location.assign('/' + window.location.pathname.split('/')[1] + '/ads/add-info');
    }

    handleSub(name){
        main = name;
        this.setState({check: true});
        this.props.fetchThirdCategoriesAction({
                token: loadState() != undefined ? loadState().token : '',
                name: name
            }
        );
    }

    render(){
        return(
        <Row>
            <Col xs={3} sm={3} md={3} lg={3}>
                <center className="title-ad-category">
                    {
                        loadLanguage() == "en" || loadLanguage == undefined ?
                            "Please choose category"
                            :
                            "សូមជ្រើសរើសប្រភេទ"
                    }
                    <span style={{color: 'red'}}>*</span>
                </center>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
                <div className="main-cat-nav side-bar-merchant-add">
                    <ul>
                        <Link to="">
                            <li className="main-cat-nav menu-head">
                                <i className="fa fa-bars" style={{fontSize: '16px'}}>&nbsp;&nbsp;MAIN CATEGORIES</i>
                            </li>
                        </Link>
                        {this.props.listAll.categories == undefined ?
                            null
                            :
                            <div className="menu">
                                {this.props.listAll.categories.map((chl,index)=>{
                                    return(
                                        <li className="main-cat-nav dropdown megamenu active" key={index} onClick={() => this.handleSub(chl.categoryName)}>
                                            {
                                                chl.commonCategory ==2 ? null :
                                                    <a className="main-cat-nav dropdown-toggle" data-toggle="dropdown">
                                                        {chl.categoryName}
                                                    </a>
                                            }
                                        </li>
                                    )
                                })
                                }
                            </div>
                        }
                    </ul>
                </div>
            </Col>
            {this.state.check ?
                this.props.secondCategories.categories != undefined ?
                    <Col xs={4} sm={4} md={4} lg={4}>
                        <div className="main-cat-nav side-bar">
                            <ul>
                                <Link to="">
                                    <li className="main-cat-nav menu-head">
                                        <i className="fa fa-bars" style={{fontSize: '16px'}}>&nbsp;&nbsp;SUB CATEGORIES</i>
                                    </li>
                                </Link>
                                <div className="menu">
                                    {this.props.secondCategories.categories.map((child, index)=> {
                                        return (
                                            <li className="main-cat-nav dropdown megamenu active" key={index}>
                                                <a className="main-cat-nav dropdown-toggle" data-toggle="dropdown" onClick={() => this.handleClick({main: main, sub: child})}>
                                                    {child.categoryName}
                                                </a>
                                            </li>
                                        )
                                    })
                                    }
                                </div>
                            </ul>
                        </div>
                    </Col>
                    :
                    null
                :
                null
            }
        </Row>
        );
    }
}
function mapStateToProps(state){
    return({
        listAll:state.listAll,
        secondCategories: state.thirdCategories,
    })
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ listAllCategoryAction, fetchThirdCategoriesAction },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Category);