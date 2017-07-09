/**
 * Created by chhaichivon on 4/21/2017.
 */
import React from 'react';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import './store.css';
import { loadLanguage } from './../../localstorages/local_storage';
import { Tabs,Tab } from 'react-bootstrap';
import Products from './products';
import Contact from './contact';
import Footer from './../shared_component/footer/footer_web';
import { getUserWithStoreAction } from './../../actions/store/store';


let category = [
    {nameKh: 'ពាណិជ្ជកម្មទាំងអស់', nameEn: 'All Items'},
    {nameKh: 'ទំនាក់ទំនង', nameEn: 'Contact Us'}
];

let product = {
    username: '',
    page : 1,
    limit : 10
};
let store ={
    username :''
};



class IndexStore extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            key: 1
        };
        this.renderEvent = this.renderEvent.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

   componentWillMount(){
       const param = this.props.params;
       product.username = param.name != undefined ? param.name  : '';
       product.page = param.page != undefined ? param.page  : 1;

       store.username = param.name != undefined ? param.name  : '';

       this.props.getUserWithStoreAction(store);


       let href = location.href;
      if(href.match(/([^\/]*)\/*$/)[1] == 1){
           this.setState({key: 1})
       }
       if(href.match(/([^\/]*)\/*$/)[1] == 'contact'){
           this.setState({key: 2})
       }
    }

    handleSelect(eventKey) {
        this.setState({
            key: eventKey
        });

        if(eventKey == 1){
            location.href=`/store/${product.username}/${1}`;
        }
        if(eventKey == 2) {
             location.href=`/store/${product.username}/contact`;
        }
    }

    renderEvent(key,userInformationOrStoreName){
        if(key == 1){
            return(<Products products={product} username={product.username} page={product.page} userInformation={userInformationOrStoreName} />);
        }
        if(key == 2){
            return(<Contact username={product.username} userInformation={userInformationOrStoreName} />);
        }
    }
    render(){

        let storeName = '';
        let phoneNumber = '';
        let email = '';
        let address = '';
        let storeBanner = '';
        let otherPhones = [];
        let latitude ='';
        let longitude = '';
        if(this.props.listUserWithStoreReducer != undefined){
            if(this.props.listUserWithStoreReducer.products != undefined){
                this.props.listUserWithStoreReducer.products.map((userWithStore) => {
                    storeName = userWithStore.storeName;
                    phoneNumber = userWithStore.phone;
                    email = userWithStore.email;
                    address = userWithStore.address;
                    storeBanner = userWithStore.storeBanner;
                    otherPhones = userWithStore.otherPhones;
                    latitude = userWithStore.latitude;
                    longitude = userWithStore.longitude;
                })
            }
        }

        let userInformation = [
            {
                storeName: storeName,
                phoneNumber: phoneNumber,
                email:email,
                address : address,
                otherPhones :otherPhones,
                latitude : latitude,
                longitude : longitude
            }
        ];

        var styleHideBoarder = {
            border: '0px solid white'
        };
        return(
            <div className="container-fluid store-component">
                <div className="wrap-content-stote">
                    <div className="container">
                        <div className="col-md-10 col-lg-10 col-xs-10">
                            <a href="/"><img src="/icon/cambo-smart3.png" alt="cambosmart"/></a>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xs-2">
                            <div className="go-home-page">
                                <a href="/"><i className="fa fa-home"
                                               aria-hidden="true">&nbsp;{loadLanguage() == "en" || loadLanguage() == undefined ? "Home" : "ទំព័រដើម"}</i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="">
                        <div className="row row-banner-store">
                            <div className="col-xs-12 col-lg-12 col-md-12">
                                <div className="image-banner">
                                    {
                                         storeBanner != undefined && storeBanner != "" ?
                                             <img src={`/images/stores/` + storeBanner } style={{width:'100%', height:'200px'}}/>
                                             :
                                             <img src="/images/stores/storebanner.jpg" style={{width:'100%', height:'200px'}}/>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="row store">
                            <div className="col-md-12 col-lg-12 col-xs-12 store-list">
                                <div className="wrap-store-list">
                                    <Tabs activeKey={this.state.key} onSelect={this.handleSelect}
                                          id="controlled-tab-store" className="tab-special-category"
                                          style={styleHideBoarder}>
                                        {
                                            category.map((cat, index) => {
                                                return (
                                                    <Tab key={index} eventKey={index +1}
                                                         title={loadLanguage() == "en" || loadLanguage() == undefined ? cat.nameEn : cat.nameKh}
                                                    >
                                                        {
                                                            this.state.key == 1 ?
                                                                this.renderEvent(this.state.key, userInformation)
                                                                :
                                                                this.renderEvent(this.state.key, userInformation)
                                                        }
                                                    </Tab>
                                                )
                                            })
                                        }
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer/>
            </div>
        )
    }
}
function mapStateToProps(state){
    return ({
        listUserWithStoreReducer: state.userWithStoreReducer
    })
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ getUserWithStoreAction }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps) (IndexStore);

