import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import './home.css';
import './carosoul.css';
import {fetchPopularCategoriesAction, listAllCategoryAction, countViewCategoryAction}from'./../../actions/categories/category';
import { loadLanguage } from './../../localstorages/local_storage';
import {sortBy} from './../../utils/sort_obj_array';

class Menu_left extends React.Component{
    constructor(props){
        super(props);
        this.state={
            p_id:'',
            show_child: false,
            open: false
        }
    }
    componentWillMount(){
        this.props.fetchPopularCategoriesAction(27);
        this.props.listAllCategoryAction();
    }

    handleSelectCategory(category){
        this.props.countViewCategoryAction(category.id);
        location.href = `/products/category/grid/category?c=${category.name.split(' ').join('+')}&n=${''}&s=${''}&l=${''}&dr=${0}&sp=${0}&ep=${0}&p=${1}`;
    }

    render(){
        const getAdvertisement = (advertisements, name) => {
            return advertisements.find(advertisement => advertisement.name == name)
        };
        let categories = [];
        const allCategories = this.props.listAll.categories;
        if(allCategories != undefined){
            if(allCategories.length > 5){
                for(let i = 0 ; i < allCategories.length; i++) {
                    categories.push(allCategories[i]);
                    if (i == 4) break;
                }

            }
        }
        return(
            <div className="side-bar">
                <ul>
                    <a href={`/products/category/grid/category?c=${'all'}&s=${''}&n=${''}&l=${''}&dr=${0}&sp=${0}&ep=${0}&p=${1}`}>
                        <li className="menu-head">
                            <span className="menu-left glyphicon glyphicon-align-justify"></span>
                            {loadLanguage() == "en" || loadLanguage() == undefined ? "All Categories" : "ប្រភេទផលិតផលទាំងអស់"}
                        </li>
                    </a>
                    <div className="menu">
                        <li className="dropdown megamenu active">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <span className="menu-left"><i className="fa fa-heart"/></span>
                                <p className="main-category">{loadLanguage() == "en" || loadLanguage() == undefined ? "Popular Categories" : "ប្រភេទផលិតផលពេញនិយម"}</p>
                                <span className="glyphicon glyphicon-menu-right pull-right"></span>
                            </a>
                            <div className="dropdown-menu pop">
                                { this.props.popularCategories == undefined ? null :
                                    this.props.popularCategories.categories == undefined ? null:
                                        <div className="wrapper-category col-md-12">
                                            {/* Advertise in category */}
                                            <div className="wrap-image">
                                                {/*<img src="/icon/back_category.png" />*/}
                                            </div>
                                            <div className="title-category col-xs-9 col-sm-9 ">
                                                <h5> {loadLanguage() == "en" || loadLanguage() == undefined ? "Popular Categories" : "ប្រភេទផលិតផលពេញនិយម"}</h5>
                                            </div>
                                            <div className="wrapper-category col-xs-12 col-sm-12 col-md-12">
                                                { this.props.popularCategories.categories.map((popular, i)=> {
                                                        if(popular.sub != undefined) {
                                                            return (
                                                                <ul className="category list-unstyled col-lg-4 col-md-4 col-sm-6"
                                                                    style={{marginTop: '0'}} role="menu" key={i}>
                                                                    <li>
                                                                        <a href={`/products/category/grid/category?c=${popular.sub.categoryName.split(' ').join('+')}&n=${''}&s=${''}&l=${''}&dr=${0}&sp=${0}&ep=${0}&p=${1}`}>
                                                                            <span className="menu-left">
                                                                                {loadLanguage() == "en" || loadLanguage() == undefined ? popular.sub.categoryName : popular.sub.khName}
                                                                            </span>
                                                                        </a>
                                                                        <a style={{
                                                                            marginTop: '-10px',
                                                                            fontSize: '13px',
                                                                            opacity: '0.5',
                                                                            textDecoration: 'none'
                                                                        }}>
                                                                            {loadLanguage() == "en" || loadLanguage() == undefined ? popular.categoryName : popular.khName}
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            )
                                                        }
                                                    })
                                                }
                                            </div>
                                        </div>
                                }
                            </div>
                        </li>
                    </div>
                    {/* list Common Category */}
                    {/*{
                        this.props.listAll.categories==undefined ? null :
                            <div className="menu">
                                {
                                    this.props.listAll.categories.sort(sortBy('categoryName', false, function(a){return a.toUpperCase()})).map((chl,index)=>{
                                        return(
                                            <li className="dropdown megamenu active" key={index}>
                                                /!*List Parent Category *!/
                                                {
                                                    chl.commonCategory !==1 ? null :
                                                        <Link to={"/products/category/grid/"+chl.categoryName} className="dropdown-toggle" data-toggle="dropdown">
                                                            <span className="menu-left"><i className={chl.categoryIcon}/></span>
                                                            {loadLanguage() == "en" || loadLanguage() == undefined ? chl.categoryName  : chl.khName}
                                                            <span className="glyphicon glyphicon-menu-right pull-right"></span></Link>
                                                }
                                                /!* List Child Category *!/
                                                <div className="dropdown-menu my-drop">
                                                    <div className="wrapper-category col-xs-12 col-sm-12 col-md-12">
                                                        /!* Advertise in category *!/
                                                        <div className="wrap-image">
                                                            { getAdvertisement(this.props.advertisements, chl.categoryName) != undefined ?
                                                                <img src={`/images/advertisements/${getAdvertisement(this.props.advertisements, chl.categoryName).image}`} />
                                                                :
                                                                <img src="/icon/back_category.png" />
                                                            }
                                                        </div>
                                                        <div className="title-category col-xs-9 col-sm-9 col-sm-9">
                                                            <h5>{loadLanguage() == "en" || loadLanguage() == undefined ? chl.categoryName : chl.khName}</h5>
                                                        </div>
                                                        <div className="wrapper-category col-xs-9 col-sm-9 col-md-9">
                                                            { chl.sub.sort(sortBy('categoryName', false, function(a){return a.toUpperCase()})).map((cat, i)=> {
                                                                return (
                                                                    <ul className="category list-unstyled col-lg-4 col-md-4 col-sm-4 col-xs-4" role="menu" key={i}>
                                                                        <a onClick={() => this.handleSelectCategory({id: cat.id.$oid, name: cat.categoryName})}>
                                                                            <p className="child">
                                                                                {loadLanguage() == "en" || loadLanguage() == undefined ? cat.categoryName  :  cat.khName}
                                                                            </p>
                                                                        </a>
                                                                    </ul>
                                                                )
                                                            })
                                                            }
                                                        </div>
                                                        /!*<div className="img-menu-category col-sm-6 col-md-4">
                                                         <div className="wrap-category-image-sub">
                                                         <img src="/icon/back_category.png"></img>
                                                         </div>
                                                         </div>*!/
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </div>
                    }*/}


                    { allCategories == undefined ? null :
                        allCategories.length > 5 ?
                            <div>
                                { this.state.open ?
                                    <div className="menu">
                                        { allCategories.sort(sortBy('categoryName', false, function(a){return a.toUpperCase()})).map((chl,index)=>{
                                                return(
                                                    <li className="dropdown megamenu active" key={index}>
                                                        {/*List Parent Category */}
                                                        {
                                                            chl.commonCategory !==1 ? null :
                                                                <Link to={"/products/category/grid/"+chl.categoryName} className="dropdown-toggle" data-toggle="dropdown">
                                                                    <span className="menu-left"><i className={chl.categoryIcon}/></span>
                                                                    <p className="main-category"> {loadLanguage() == "en" || loadLanguage() == undefined ? chl.categoryName  : chl.khName}</p>
                                                                    <span className="glyphicon glyphicon-menu-right pull-right"></span></Link>
                                                        }
                                                        {/* List Child Category */}
                                                        <div className="dropdown-menu my-drop">
                                                            <div className="wrapper-category col-xs-12 col-sm-12 col-md-12">
                                                                {/* Advertise in category */}
                                                                <div className="wrap-image">
                                                                    { this.props.advertisements != undefined ?
                                                                        getAdvertisement(this.props.advertisements, chl.categoryName) != undefined ?

                                                                            <img onClick={() => window.open(getAdvertisement(this.props.advertisements, chl.categoryName).url != "" ? getAdvertisement(this.props.advertisements, chl.categoryName).url : `/images/advertisements/${getAdvertisement(this.props.advertisements, chl.categoryName).image}`)} src={`/images/advertisements/${getAdvertisement(this.props.advertisements, chl.categoryName).image}`} />
                                                                            :
                                                                            <img onClick={() => window.open('/icon/back_category.png')} src="/icon/back_category.png" />
                                                                        :
                                                                        <img  src="/icon/back_category.png" />
                                                                    }
                                                                </div>
                                                                <div className="title-category col-xs-9 col-sm-9 col-sm-9">
                                                                    <h5>{loadLanguage() == "en" || loadLanguage() == undefined ? chl.categoryName : chl.khName}</h5>
                                                                </div>
                                                                <div className="wrapper-category col-xs-9 col-sm-9 col-md-9">
                                                                    { chl.sub.sort(sortBy('categoryName', false, function(a){return a.toUpperCase()})).map((cat, i)=> {
                                                                        return (
                                                                            <ul className="category list-unstyled col-lg-4 col-md-4 col-sm-4 col-xs-4" role="menu" key={i}>
                                                                                <a onClick={() => this.handleSelectCategory({id: cat.id.$oid, name: cat.categoryName})}>
                                                                                    <p className="child">
                                                                                        {loadLanguage() == "en" || loadLanguage() == undefined ? cat.categoryName  :  cat.khName}
                                                                                    </p>
                                                                                </a>
                                                                            </ul>
                                                                        )
                                                                    })
                                                                    }
                                                                </div>
                                                                {/*<div className="img-menu-category col-sm-6 col-md-4">
                                                                 <div className="wrap-category-image-sub">
                                                                 <img src="/icon/back_category.png"></img>
                                                                 </div>
                                                                 </div>*/}
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </div>
                                    :
                                    <div className="menu">
                                        { categories.sort(sortBy('categoryName', false, function(a){return a.toUpperCase()})).map((chl,index)=>{
                                                return(
                                                    <li className="dropdown megamenu active" key={index}>
                                                        {/*List Parent Category */}
                                                        {
                                                            chl.commonCategory !==1 ? null :
                                                                <Link to={"/products/category/grid/"+chl.categoryName} className="dropdown-toggle" data-toggle="dropdown">
                                                                    <span className="menu-left"><i className={chl.categoryIcon}/></span>
                                                                    <p className="main-category">{loadLanguage() == "en" || loadLanguage() == undefined ? chl.categoryName  : chl.khName}</p>
                                                                    <span className="glyphicon glyphicon-menu-right pull-right"></span></Link>
                                                        }
                                                        {/* List Child Category */}
                                                        <div className="dropdown-menu my-drop">
                                                            <div className="wrapper-category col-xs-12 col-sm-12 col-md-12">
                                                                {/* Advertise in category */}
                                                                <div className="wrap-image">
                                                                    { this.props.advertisements != undefined ?
                                                                        getAdvertisement(this.props.advertisements, chl.categoryName) != undefined ?

                                                                            <img onClick={() => window.open(getAdvertisement(this.props.advertisements, chl.categoryName).url != "" ? getAdvertisement(this.props.advertisements, chl.categoryName).url : `/images/advertisements/${getAdvertisement(this.props.advertisements, chl.categoryName).image}`)} src={`/images/advertisements/${getAdvertisement(this.props.advertisements, chl.categoryName).image}`} />
                                                                            :
                                                                            <img onClick={() => window.open('/icon/back_category.png')} src="/icon/back_category.png" />
                                                                        :
                                                                        <img src="/icon/back_category.png" />
                                                                    }
                                                                </div>
                                                                <div className="title-category col-xs-9 col-sm-9 col-sm-9">
                                                                    <h5>{loadLanguage() == "en" || loadLanguage() == undefined ? chl.categoryName : chl.khName}</h5>
                                                                </div>
                                                                <div className="wrapper-category col-xs-9 col-sm-9 col-md-9">
                                                                    { chl.sub.sort(sortBy('categoryName', false, function(a){return a.toUpperCase()})).map((cat, i)=> {
                                                                        return (
                                                                            <ul className="category list-unstyled col-lg-4 col-md-4 col-sm-4 col-xs-4" role="menu" key={i}>
                                                                                <a onClick={() => this.handleSelectCategory({id: cat.id.$oid, name: cat.categoryName})}>
                                                                                    <p className="child">
                                                                                        {loadLanguage() == "en" || loadLanguage() == undefined ? cat.categoryName  :  cat.khName}
                                                                                    </p>
                                                                                </a>
                                                                            </ul>
                                                                        )
                                                                    })
                                                                    }
                                                                </div>
                                                                {/*<div className="img-menu-category col-sm-6 col-md-4">
                                                                 <div className="wrap-category-image-sub">
                                                                 <img src="/icon/back_category.png"></img>
                                                                 </div>
                                                                 </div>*/}
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </div>
                                }
                                { this.state.open ?
                                    <div>
                                        <center>
                                            <a className="menu-left-hide-show" onClick={() => this.setState({open: !this.state.open})}>
                                                {loadLanguage() == "en" || loadLanguage() == undefined ? "SEE LESS" : "បង្រួម"}
                                            </a>
                                        </center>
                                    </div>
                                    :
                                    <div>
                                        <center>
                                            <a className="menu-left-hide-show" onClick={() => this.setState({open: !this.state.open})}>
                                                {loadLanguage() == "en" || loadLanguage() == undefined ? "SEE MORE" : "មើលបន្ថែម"}
                                            </a>
                                        </center>
                                    </div>
                                }
                            </div>
                            :
                            <div className="menu">
                                { allCategories.sort(sortBy('categoryName', false, function(a){return a.toUpperCase()})).map((chl,index)=>{
                                        return(
                                            <li className="dropdown megamenu active" key={index}>
                                                {/*List Parent Category */}
                                                {
                                                    chl.commonCategory !==1 ? null :
                                                        <Link to={"/products/category/grid/"+chl.categoryName} className="dropdown-toggle" data-toggle="dropdown">
                                                            <span className="menu-left"><i className={chl.categoryIcon}/></span>
                                                            <p className="main-category">{loadLanguage() == "en" || loadLanguage() == undefined ? chl.categoryName  : chl.khName}</p>
                                                            <span className="glyphicon glyphicon-menu-right pull-right"></span></Link>
                                                }
                                                {/* List Child Category */}
                                                <div className="dropdown-menu my-drop">
                                                    <div className="wrapper-category col-xs-12 col-sm-12 col-md-12">
                                                        {/* Advertise in category */}
                                                        <div className="wrap-image">
                                                            { this.props.advertisements != undefined ?
                                                                getAdvertisement(this.props.advertisements, chl.categoryName) != undefined ?

                                                                    <img src={`/images/advertisements/${getAdvertisement(this.props.advertisements, chl.categoryName).image}`} />
                                                                    :
                                                                    <img src="/icon/back_category.png" />
                                                                :
                                                                <img src="/icon/back_category.png" />
                                                            }
                                                        </div>
                                                        <div className="title-category col-xs-9 col-sm-9 col-sm-9">
                                                            <h5>{loadLanguage() == "en" || loadLanguage() == undefined ? chl.categoryName : chl.khName}</h5>
                                                        </div>
                                                        <div className="wrapper-category col-xs-9 col-sm-9 col-md-9">
                                                            { chl.sub.sort(sortBy('categoryName', false, function(a){return a.toUpperCase()})).map((cat, i)=> {
                                                                return (
                                                                    <ul className="category list-unstyled col-lg-4 col-md-4 col-sm-4 col-xs-4" role="menu" key={i}>
                                                                        <a onClick={() => this.handleSelectCategory({id: cat.id.$oid, name: cat.categoryName})}>
                                                                            <p className="child">
                                                                                {loadLanguage() == "en" || loadLanguage() == undefined ? cat.categoryName  :  cat.khName}
                                                                            </p>
                                                                        </a>
                                                                    </ul>
                                                                )
                                                            })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </div>
                    }
                </ul>
            </div>
        );
    }
}
function mapStateToProps(state){
    return({
        popularCategories: state.popularCategories,
        listAll: state.listAll,
        countViewCategory: state.countViewCategory

    })
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchPopularCategoriesAction, listAllCategoryAction, countViewCategoryAction},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Menu_left);