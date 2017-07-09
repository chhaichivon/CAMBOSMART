import React from 'react';
import { Pagination } from 'react-bootstrap';
import { browserHistory } from "react-router";
import { loadLanguage } from './../../../localstorages/local_storage';

export default class PaginationLocation extends React.Component{

    constructor(){
        super();
        this.state = {
            activePage: 1
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillMount(){
        this.setState({
            activePage: Number(this.props.product.page)
        });
    }

    handleSelect(eventKey) {
        this.setState({
            activePage: eventKey
        });
        this.props.handlePaging(eventKey);
        browserHistory.push(`/products/location/${this.props.gridOrList}/location?l=${this.props.product.location.replace(" ", "+")}&dr=${this.props.product.dateRang}&sp=${this.props.product.startPrice}&ep=${this.props.product.endPrice}&p=${eventKey}`);
    }

    static handleItem(total) {
        console.log("Total : " + total);
        if (total <= 12) {
            return 1
        } else if (total % 12 == 0) {
            return total / 12
        } else if (total % 12 > 0) {
            return parseInt(total/12) + 1
        }
    }

    render(){
        let total = 0;
        let  totalHot = 0;
        let  totalGold = 0;
        let  totalNormal = 0;
        if(this.props.hot != undefined && this.props.gold != undefined && this.props.normal != undefined){
            this.props.hot.map((product) => {
                totalHot = product.total;
            });
            this.props.gold.map((product) => {
                totalGold = product.total;
            });
            this.props.normal.map((product) => {
                totalNormal = product.total;
            });
            total = Math.max(totalHot,totalGold,totalNormal);
        }

        return(
            <div>
                {total <= 12 ?
                    null
                    :
                    <div className="row wrap-header-category-page" style={{ marginLeft: "0px",marginRight: "0px",backgroundColor: "white",marginBottom: "10px",border: "1px solid white"}}>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <h5>{ loadLanguage() == "en" || undefined ? "PAGE" : "ទំព័រ"} : {this.state.activePage}</h5>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 wrap-pagination-product-category">
                            <Pagination style={{ float: 'right'}}
                                        prev
                                        next
                                        first
                                        last
                                        ellipsis
                                        boundaryLinks
                                        items={PaginationLocation.handleItem(total)}
                                        maxButtons={3}
                                        activePage={this.state.activePage}
                                        onSelect={this.handleSelect}
                            />
                        </div>
                    </div>
                }
            </div>
        )
    }
}

