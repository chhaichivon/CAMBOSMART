import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import {fetchThirdCategoriesAction} from './../../../actions/categories/category';
import { loadLanguage } from './../../../localstorages/local_storage';
let data = {
    category : '',
    subCategory : '',
    location: '',
    page: 1,
    dateRang: 0,
    startPrice: 0,
    endPrice: 0
};

class ThirdCategory extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            open: false
        };
        this.handleClick  = this.handleClick.bind(this);
    }

    handleClick(name){
        data.subCategory = name;
        this.props.handleSubCategory(data);
    }

    componentWillMount(){
        this.props.fetchThirdCategoriesAction({
                name: this.props.category
            }
        );
    }

    render(){
        const categories = [];
        const names1 = [];
        if(this.props.listThirdCategories != undefined){
            this.props.listThirdCategories.map((category) => {
                categories.push({nameKh: category.khName, nameEn: category.categoryName});
            })
        }
        if(categories.length > 4){
            for(let i = 0 ; i< categories.length; i++) {
                names1.push(categories[i]);
                if (i == 7) break;
            }
        }
        return(
            <div>
                { categories == undefined ? null :
                    <div>
                        { categories.length <= 0 ? null :
                            <p className="branch-name" style={{marginLeft: "15px", marginTop: "7px"}}>{this.props.categoryName} {loadLanguage() == "en" || loadLanguage() == undefined ? "Brands" : "ម៉ូត"}</p>
                        }
                        { categories.length > 5 ?
                            <div>
                                { this.state.open ?
                                    categories.sort().map((name, index) => {
                                        return (
                                            <ul key={index} className="list-inline">
                                                <div className=" col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <a onClick={() => this.handleClick(name.nameEn)}>
                                                        <li key={index} style={{marginLeft: "10px"}}>{loadLanguage() == "en" || loadLanguage() == undefined ? name.nameEn:name.nameKh}</li>
                                                    </a>
                                                </div>
                                            </ul>

                                        );
                                    })
                                    :
                                    names1.sort().map((name, index) => {
                                        return (
                                            <ul key={index} className="list-inline">
                                                <div className=" col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <a onClick={() => this.handleClick(name.nameEn)}>
                                                        <li key={index} style={{marginLeft: "10px"}}>{loadLanguage() == "en" || loadLanguage() == undefined ? name.nameEn:name.nameKh}</li>
                                                    </a>
                                                </div>
                                            </ul>

                                        );
                                    })
                                }
                                { this.state.open ?
                                    <div>
                                        <a style={{
                                            marginLeft: "10px",
                                            float: "right",
                                            fontWeight: "bold",
                                            fontSize: "16px",
                                            marginRight: "10px"
                                        }}
                                           onClick={ () => this.setState({open: !this.state.open})}><i className="fa fa-angle-double-up" aria-hidden="true"></i></a>
                                    </div>
                                    :
                                    <div>
                                        <a style={{
                                            marginLeft: "10px",
                                            float: "right",
                                            fontWeight: "bold",
                                            fontSize: "16px",
                                            marginRight: "10px"
                                        }}
                                           onClick={ () => this.setState({open: !this.state.open})}><i className="fa fa-angle-double-down" aria-hidden="true"></i></a>
                                    </div>
                                }
                            </div>
                            :
                            categories.sort().map((name, index) => {
                                return (
                                    <ul key={index} className="list-inline">
                                        <div className=" col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                            <a onClick={() => this.handleClick(name.nameEn)}>
                                                <li key={index} style={{marginLeft: "10px"}}>{loadLanguage() == "en" || loadLanguage() == undefined ? name.nameEn:name.nameKh}</li>
                                            </a>
                                        </div>
                                    </ul>
                                );
                            })

                        }
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return ({
        listThirdCategories : state.thirdCategories.categories
    })
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchThirdCategoriesAction}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (ThirdCategory);
