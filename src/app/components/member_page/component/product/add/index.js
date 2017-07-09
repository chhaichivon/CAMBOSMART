import React from 'react';
import { Link } from 'react-router';
import { Tabs,Tab,Button } from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Category from './category';
import Product from './product';
import './../../index.css';
import './../../../../home/special_category/special_category.css';
import { loadLanguage } from './../../../../../localstorages/local_storage';
class MemberAddProduct extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            key:2
        };
    }
    componentWillMount(){
        if((document.URL.match(/([^\/]*)\/*$/)[1]).localeCompare("add-info") == 0){
            this.setState({key: 3});
        }else{
            this.setState({key: 2});
        }
    }

    render(){
        return(
            <div className="container manage-ads">
                <br/>
                <div>
                    <Tabs defaultActiveKey={this.state.key} className="merchant-add-sub-nav" animation={false} id="controlled-tab-merchant-add">
                        <Tab eventKey={1} title={<center><i style={{ border: '3px solid white', borderRadius: '100%', fontWeight: 'bold'}}>&nbsp;&nbsp;Start&nbsp;&nbsp;</i></center>} disabled>
                        </Tab>
                        <Tab eventKey={2} className="tab-title"
                             title={<div><i style={{ border: '3px solid white', borderRadius: '60%', fontWeight: 'bold'}}>&nbsp;1&nbsp;&nbsp;</i>&nbsp;
                             {
                                loadLanguage() == "en" || loadLanguage() == undefined ?
                                    "Select Category"
                                    :
                                    "ជ្រើសរើសប្រភេទ"
                             }
                             </div>}
                             disabled
                        >
                            <br />
                            <Category />
                        </Tab>
                        <Tab eventKey={3}
                             title={<div><i style={{ border: '3px solid white', borderRadius: '60%', fontWeight: 'bold'}}>&nbsp;2&nbsp;&nbsp;</i>&nbsp;
                             {
                                loadLanguage() == "en" || loadLanguage() == undefined ?
                                    "Ads Information"
                                    :
                                    "បន្ថែមព័ត៏មាន"
                             }
                             </div>}
                             disabled
                        >
                            <br />
                            <Product/>
                        </Tab>
                        <Tab eventKey={4} title={<center><i style={{ border: '3px solid white', borderRadius: '100%', fontWeight: 'bold'}}>&nbsp;&nbsp;Finish&nbsp;&nbsp;</i></center>} disabled>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        )
    }
}
export default connect() (MemberAddProduct);
