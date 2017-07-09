import React from 'react';
import { Link } from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './index.css';
import {Tabs,Tab,Button,Row,Col,Alert} from 'react-bootstrap';
import ProfileSetting from './profile/profile_setting';
import { loadState, saveLatLng, saveStoreInfo,loadLanguage} from './../../../localstorages/local_storage';
import ProductList from './product/view/product_list';
import StoreMap from './store/store_map';
import StoreSetting from './store/store_setting'
import {fetchStoreAction} from './../../../actions/store/store';
import { actionCheckMerchantExpired } from './../../../actions/admin/merchant/merchant';

class MemberIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            key: 1
        };
    }
    componentWillMount(){
        this.props.fetchStoreAction({
            token: loadState().token,
            id: loadState().user.userId
        });

        if((document.URL.match(/([^\/]*)\/*$/)[1]).localeCompare("ads") == 0){
            this.setState({key: 1})
        }else if((document.URL.match(/([^\/]*)\/*$/)[1]).localeCompare("profile") == 0){
            this.setState({key: 2})
        }else  if((document.URL.match(/([^\/]*)\/*$/)[1]).localeCompare("store") == 0){
            this.setState({key: 3})
        }else  if((document.URL.match(/([^\/]*)\/*$/)[1]).localeCompare("map") == 0){
            this.setState({key: 4})
        }else{
            this.setState({key: 1})
        }

        //check merchant is expired or not
        if(loadState().user != undefined){
            if(loadState().user.userType == 'merchant'){
                this.props.actionCheckMerchantExpired({
                    userId:  loadState().user.userId,
                    token : loadState().token
                });
            }
        }

        console.log("USER : " + JSON.stringify(loadState().user))
    }

    handleSelect(key){
        if(loadState().user.userType == 'normal'){
            if(key == 1){
                location.href = '/normal';
            }else if(key == 2){
                location.href = '/normal/profile';
            }else if(key == 3){
                location.href = '/normal/store';
            }else if(key == 4){
                location.href = '/normal/map';
            }
        }else if(loadState().user.userType == 'merchant'){
            if(key == 1){
                location.href = '/merchant';
            }else if(key == 2){
                location.href = '/merchant/profile';
            }else if(key == 3){
                location.href = '/merchant/store';
            }else if(key == 4){
                location.href = '/merchant/map';
            }
        }
    }

    componentWillReceiveProps(data) {
        if(data.fetchStore.code==200){
            const latLng={
                lat: data.fetchStore.store.latitude,
                lng: data.fetchStore.store.longitude
            };
            saveLatLng(latLng);
            const storeInfo={
                storeName: data.fetchStore.store.storeName,
                storeInformation: data.fetchStore.store.storeInformation,
                storeBanner: data.fetchStore.store.storeBanner
            };
            saveStoreInfo(storeInfo)
        }
    }

    render(){
        return(
            <div className="container manage-ads">
                { loadState().user == undefined ? null :
                    loadState().user.status > 0 ?
                        <div>
                            {/* Normal member */}
                            <br/>
                            <Button bsStyle="warning" className="product-btn-free-post" onClick={() => location.href = '/' + window.location.pathname.split('/')[1] + '/ads/add-cat'}>
                                {
                                    loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                        <i className="fa fa-plus" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;<span className="title_style">POST FREE ADS</span></i>
                                        :
                                        <i className="fa fa-plus" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;<span className="title_style">ដាក់លក់ </span></i>
                                }
                            </Button>
                            <div>
                                <Tabs defaultActiveKey={this.state.key} animation={false} id="controlled-tab-merchant" className="tab-special-category-merchant" onSelect={this.handleSelect.bind(this)}>

                                    <Tab eventKey={1} className="tab-title"
                                         title={
                                             loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                                 <i className="fa fa-product-hunt" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;<span className="title_style">Manage Products</span></i>
                                                 :
                                                 <i className="fa fa-product-hunt" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;<span className="title_style">ការគ្រប់គ្រងទំនិញ</span></i>
                                         }
                                    >
                                        <br />

                                            <Col xs={8} sm={8} md={8} lg={8}></Col>
                                            {
                                                loadState().user.userType=="normal" ?
                                                    <Col xs={4} sm={4} md={4} lg={4} className="blog-upgrade">
                                                        <Link to="/normal/promote-desc">
                                                            <div className="list-inline">
                                                                <span><Button className="upgrade-butt">
                                                                    {
                                                                        loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                                                            <p><img src="/icon/Buttons/Upgrade-to-Business-Account.gif" className="title_style"/></p>
                                                                            :
                                                                            <p><img src="/icon/Buttons/Upgrade-to-Business-Account(Kh).gif" className="title_style"/></p>

                                                                    }
                                                                </Button>
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    </Col>

                                                    :
                                                    null
                                            }

                                        <Row>
                                            <Col xs={12} sm={12} md={12} lg={12} style={{ color:'white',zIndex:'1' }}>
                                                <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example" className="product-sub-nav">
                                                    <Tab eventKey={1} title={ loadLanguage() == "en" || loadLanguage() == undefined ? "Active Products" : "ទំនិញដាក់លក់" }>
                                                        <ProductList/>
                                                    </Tab>
                                                    <Tab eventKey={2} title={ loadLanguage() == "en" || loadLanguage() == undefined ? "Expired Products" : "ទំនិញផុតកំណត់" }>

                                                    </Tab>
                                                </Tabs>
                                            </Col>
                                        </Row>

                                    </Tab>
                                    <Tab eventKey={2}
                                         title={
                                             loadLanguage() == "en" || loadLanguage() == undefined ?
                                                 <i className="fa fa-user" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;<span className="title_style">Profile</span></i>
                                                 :
                                                 <i className="fa fa-user" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;<span className="title_style">ព័ត៏មានផ្ទាល់ខ្លួន</span></i>
                                         }
                                    >
                                        <ProfileSetting />
                                    </Tab>

                                    <Tab eventKey={3}
                                         title={
                                             loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                                 <i className="fa fa-shopping-cart" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;<span className="title_style">Store Setting</span></i>
                                                 :
                                                 <i className="fa fa-shopping-cart" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;<span className="title_style">ស្តុកទំនិញ</span></i>
                                         }
                                    >
                                        <StoreSetting/>
                                    </Tab>

                                    <Tab eventKey={4}
                                         title={
                                             loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                                 <i className="fa fa-map-marker" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;<span className="title_style">Set Map</span></i>
                                                 :
                                                 <i className="fa fa-map-marker" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;<span className="title_style"> ផែនទី </span></i>
                                         }
                                    >
                                        <StoreMap/>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                        :
                        this.props.checkMerchantExpired.code == 200 ?
                            <div>
                                { this.props.checkMerchantExpired.merchant.endDate < (new Date().getTime()) ?
                                    <div>
                                        {/* Merchant is Expired */}
                                        <br/><br/><br/><br/>
                                        <h1 style={{textAlign: "center", color: "red", fontWeight: "bold"}}>
                                            SORRY YOUR ACCOUNT IS EXPIRED !
                                        </h1>
                                        <br/><br/>
                                        <center>
                                            <Link to="/merchant/promote-desc">
                                                <div className="list-inline">
                                                    <span><Button className="upgrade-butt">
                                                        {
                                                            loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                                                <p style={{ fontSize: '15px',marginBottom: '0px', marginLeft: '5px' }}><img src="/icon/Buttons/Upgrade-to-Business-Account.gif"/></p>
                                                                :
                                                                <p style={{ fontSize: '15px',marginBottom: '0px', marginLeft: '5px' }}><img src="/icon/Buttons/Upgrade-to-Business-Account(Kh).gif"/></p>

                                                        }
                                                    </Button>
                                                    </span>
                                                </div>
                                            </Link>
                                        </center>
                                        <br/><br/><br/><br/>
                                    </div>
                                    :
                                    <div>
                                        <br />
                                        <Alert bsStyle="danger">
                                            <h4>គណនីត្រូវបានផ្អាក់ជាបណ្ដោះអាសន្ន !</h4>
                                            <p> សូមអភ័យទោសគណនីរបស់លោកអ្នកត្រូវបានផ្អាកជាបណ្ដោះអាសន្ន ដោយសារអ្នកបានធ្វើខុសលក្ខណដែលក្រុមហ៊ុនយើងខ្ញុំបានកំណត់។</p>
                                            <p> សូមធ្វើការទំនាក់ទំនងមកកាន់ភ្នាក់យើងខ្ញុំផ្ទាល់ តាមរយៈ ៖</p>
                                            <p>ទូរស័ព្ទលេខ ៖ ០១០១១១២២២/០២៣១២៣១២៣</p>
                                            <p>ឬ អ៊ីមែល ៖ cambosmart@gmail.com</p>
                                            <br />
                                            <h4>ERROR ! Account suspended.</h4>
                                            <p>Sorry your account has been suspended due to violate community guide line.</p>
                                            <p>Please do contact our support agent by :</p>
                                            <p>Tel : 010111222/023123123</p>
                                            <p>Email: cambosmart@gmail.com</p>
                                        </Alert>
                                    </div>
                                }
                            </div>
                            :
                            <div>
                                <br />
                                <Alert bsStyle="danger">
                                    <h4>គណនីត្រូវបានផ្អាក់ជាបណ្ដោះអាសន្ន !</h4>
                                    <p> សូមអភ័យទោសគណនីរបស់លោកអ្នកត្រូវបានផ្អាកជាបណ្ដោះអាសន្ន ដោយសារអ្នកបានធ្វើខុសលក្ខណដែលក្រុមហ៊ុនយើងខ្ញុំបានកំណត់។</p>
                                    <p> សូមធ្វើការទំនាក់ទំនងមកកាន់ភ្នាក់យើងខ្ញុំផ្ទាល់ តាមរយៈ ៖</p>
                                    <p>ទូរស័ព្ទលេខ ៖ ០១០១១១២២២/០២៣១២៣១២៣</p>
                                    <p>ឬ អ៊ីមែល ៖ cambosmart@gmail.com</p>
                                    <br />
                                    <h4>ERROR ! Account suspended.</h4>
                                    <p>Sorry your account has been suspended due to violate community guide line.</p>
                                    <p>Please do contact our support agent by :</p>
                                    <p>Tel : 010111222/023123123</p>
                                    <p>Email: cambosmart@gmail.com</p>
                                </Alert>
                            </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    //console.log("USER : ", state.checkMerchantExpired);
    return({
        fetchStore: state.fetchStore,
        checkMerchantExpired : state.checkMerchantExpired
    })
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchStoreAction, actionCheckMerchantExpired},dispatch);
}
export default connect(mapStateToProps , mapDispatchToProps) (MemberIndex);

