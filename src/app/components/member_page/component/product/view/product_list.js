import React from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { Panel, Tabs, Tab, Radio, Button, Pagination, Media, Row, Col, Table, Image, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './../../index.css';
import SweetAlert from 'sweetalert-react';
import './../../../../../../../node_modules/sweetalert/dist/sweetalert.css';
import { actionMemberPromoteProducts, actionMemberListAllPackagesProduct, actionMemberListPromotedProducts, fetchProductAction, updateProductStatusAction, renewProductAction, fetchProductByIdAction } from './../../../../../actions/member/common';
import { loadState, saveProduct, loadLanguage } from './../../../../../localstorages/local_storage';
import {formatDate} from './../../../../../utils/format_date';

let product = {
    token: loadState() != undefined ? loadState().token : '',
    userId: loadState() != undefined ? loadState().user.userId : '',
    start: 1,
    limit: 10
};
let products = {
    token: loadState() != undefined ? loadState().token : '',
    userId: loadState() != undefined ? loadState().user.userId : ''
};
let token = loadState() != undefined ? loadState().token : '';
let promote = {
    token: token,
    promoted : {
        userId: '',
        packageId: '',
        typePromote : '',
        duration : 0,
        price: 0,
        productId: [],
        startDate: '',
        endDate: '',
        status: 0
    }
};
let productId = "";
let packId = "";
let ids = [];
let price = 0;
let success = false;
let error = false;

function roughSizeOfObject( object ) {

    var objectList = [];
    var stack = [ object ];
    var bytes = 0;

    while ( stack.length ) {
        var value = stack.pop();

        if ( typeof value === 'boolean' ) {
            bytes += 4;
        }
        else if ( typeof value === 'string' ) {
            bytes += value.length * 2;
        }
        else if ( typeof value === 'number' ) {
            bytes += 8;
        }
        else if
        (
            typeof value === 'object'
            && objectList.indexOf( value ) === -1
        )
        {
            objectList.push( value );

            for( var i in value ) {
                stack.push( value[ i ] );
            }
        }
    }
    return bytes;
}

class ProductList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            activePage: 1,
            show: false,
            renew: false,
            sweetProps: {
                type:"warning",
                title:"Delete Product !",
                text:"Are you sure want to delete this product ?",
                cancel: true
            },
            sweetRenew: {
                type:"success",
                title:"Successful !!",
                text:"Ads renew successfully !"
            },
            totalCard: ids.length,
            typePayment : "",
            showList: true,
            showPromote: false,
            showPayment: false,
            showCash: false,
            showOnline : false,
            showForm: false,
            total : 0,
            key: 1,
            typeInfo: '',
            typePromote : '',
            duration : 0,
            price: 0,
            pro_id: []
        };
        this.handleSelect = this.handleSelect.bind(this);
        this.props.memberPromoteProducts.code = undefined;
    }

    componentWillMount(){
        this.props.fetchProductAction(product);
        this.props.actionMemberListPromotedProducts(products);
        this.props.actionMemberListAllPackagesProduct(token);

        if((document.URL.match(/([^\/]*)\/*$/)[1]).localeCompare("Wing") == 0){
            this.setState({key: 1})
        }else if((document.URL.match(/([^\/]*)\/*$/)[1]).localeCompare("E-Money") == 0){
            this.setState({key: 2})
        }else  if((document.URL.match(/([^\/]*)\/*$/)[1]).localeCompare("Smart Luy") == 0){
            this.setState({key: 3})
        }
    }

    componentWillReceiveProps(data){
        if(data.product.code == 200){
            if(data.product.products != undefined) {
                saveProduct(data.product.products);
                console.log("Size : " + roughSizeOfObject(data.product.products));
                console.log("OBJ : " + JSON.stringify(data.product.products));
                location.href = '/' + window.location.pathname.split('/')[1] + '/ads/edit';
            }
        }
        if(data.renewProduct.code == 200){
            this.setState({renew: true});
            setTimeout(() => {
                window.location.assign('/' + window.location.pathname.split('/')[1] + '/ads');
            }, 1000);
        }else if(data.renewProduct.code == 400){
            this.setState({
                renew: true,
                sweetRenew: {
                    type:"error",
                    title:"Something wrong !!",
                    text:"Ads renew unsuccessfully !"
                }
            });
        }
    }

    handleSelect(eventKey) {
        this.setState({
            activePage: eventKey
        });
        product.start = eventKey;
        this.props.fetchProductAction(product);
        browserHistory.push('/' + window.location.pathname.split('/')[1] + '/ads?page=' + eventKey);
    }

    static handleItem(total) {
        if (total <= 10) {
            return 1
        } else if (total % 10 == 0) {
            return total / 10
        } else if (total % 10 > 0) {
            return parseInt(total/10) + 1
        }
    }

    handleUpdateProductStatus(id){
        productId = id;
        this.setState({show: true});
    }

    handleRenewProduct(productId){
        this.props.renewProductAction({
            token: loadState() != undefined ? loadState().token : '',
            productId: productId
        });
    }

    handleEdit(productId){
        this.props.fetchProductByIdAction({
            token: loadState() != undefined ? loadState().token : '',
            productId: productId
        })
    }
    /* get product Id when user click on button promoted */
    getProductId(id){
        let proIdValue = Object.values(id);
        this.setState({
            pro_id: proIdValue
        });
        
        if(this.state.pro_id.length != 0){
            var addId = this.state.pro_id
            addId.push(proIdValue[0])
            this.setState({
                pro_id: addId
            });
        }

        let index = ids.indexOf(id)
        if(index >= 0){
            alert("This products already selected.")
        }else{
            ids.push(id)
            this.setState({totalCard:ids.length})
        }
    }
    /* delete product from list */
    deleteProduct(id){
        let proIdValue = Object.values(id)[0];
        let productSelected = this.state.pro_id;
        let index = productSelected.indexOf(proIdValue);
        let removeId = this.state.pro_id;

        removeId.splice(index, 1);
        ids.splice(index, 1);
        this.setState({totalCard: ids.length})
        this.setState({total: price * ids.length})

    }
    /* get type of promoted package */
    getType(event){
        packId = {$oid: event.target.value};
        let packages = this.props.listAllPromotedPackages.packages;
        if( packages != undefined){
            packages.map((pack,index) => {
                if(pack._id.$oid == packId.$oid){
                    price = pack.price;
                    this.setState({typeInfo: (pack.typePromote + " "+ pack.duration + " week")})
                    this.setState({typePromote: pack.typePromote});
                    this.setState({duration: pack.duration});
                    this.setState({price: pack.price});
                    //calculate date
                    let today = new Date();
                    let dd = today.getDate();
                    let mm = today.getMonth()+1; //January is 0!
                    let yyyy = today.getFullYear();
                    promote.promoted.startDate = yyyy+"-"+mm+"-"+dd;
                    let totalDays = new Date(yyyy, mm, 0).getDate();
                    let duration = pack.duration;
                    let promoteDays = duration * 7;
                    if(totalDays == 28){
                        if((dd+promoteDays) > totalDays){
                            mm = mm+1;
                            if(mm > 12){
                                mm = 1;
                                yyyy = yyyy +1;
                                dd = (dd + promoteDays) - totalDays ;
                            }else{
                                dd = (dd + promoteDays) - totalDays ;
                            }
                        }else{
                            dd = dd + promoteDays;
                        }
                        promote.promoted.endDate = yyyy+"-"+mm+"-"+dd;
                        //promote.promoted.endDate = '2017-4-26';
                    }else if(totalDays == 29){
                        if((dd+promoteDays) > totalDays){
                            mm = mm+1;
                            if(mm > 12){
                                mm = 1;
                                yyyy = yyyy +1;
                                dd = (dd + promoteDays) - totalDays ;
                            }else{
                                dd = (dd + promoteDays) - totalDays ;
                            }
                        }else{
                            dd = dd + promoteDays;
                        }
                        promote.promoted.endDate = yyyy+"-"+mm+"-"+dd;
                        //promote.promoted.endDate = '2017-4-26';
                    }else if(totalDays == 30){
                        if((dd+promoteDays) > totalDays){
                            mm = mm+1;
                            if(mm > 12){
                                mm = 1;
                                yyyy = yyyy +1;
                                dd = (dd + promoteDays) - totalDays ;
                            }else{
                                dd = (dd + promoteDays) - totalDays ;
                            }
                        }else{
                            dd = dd + promoteDays;
                        }
                        promote.promoted.endDate = yyyy+"-"+mm+"-"+dd;
                        //promote.promoted.endDate = '2017-4-26';
                    }else{ // totalDay = 31
                        if((dd+promoteDays) > totalDays){
                            mm = mm+1;
                            if(mm > 12){
                                mm = 1;
                                yyyy = yyyy +1;
                                dd = (dd + promoteDays) - totalDays ;
                            }else{
                                dd = (dd + promoteDays) - totalDays ;
                            }
                        }else{
                            dd = dd + promoteDays;
                        }
                        promote.promoted.endDate = yyyy+"-"+mm+"-"+dd;
                        //promote.promoted.endDate = '2017-4-26';
                    }
                } //end if
            })
        }
        this.setState({total : price * ids.length})
    }
    showListPromote(event){
        this.setState({showPromote: true});
        this.setState({showList: false});
        this.setState({showPayment: false});
        this.setState({showCash: false});
        this.setState({showOnline: false});
        this.setState({showForm: false});
        this.setState({total : price * ids.length})
    }
    /* Back to list products */
    showListProduct(event){
        this.setState({showList: true});
        this.setState({showPromote: false});
        this.setState({showPayment: false});
        this.setState({showCash: false});
        this.setState({showOnline: false});
        this.setState({showForm: false});
        this.setState({total : price * ids.length})
    }
    /* go to list promote product */
    backToListPromote(event){
        this.setState({showPromote: true});
        this.setState({showList: false});
        this.setState({showPayment: false});
        this.setState({showCash: false});
        this.setState({showOnline: false});
        this.setState({showForm: false});
        this.setState({total : price * ids.length})
    }
    /* go to form payment */
    promoteProducts(event){
        this.setState({showPayment: true});
        this.setState({showPromote: false});
        this.setState({showList: false});
        this.setState({showCash: false});
        this.setState({showOnline: false});
        this.setState({showForm: false});
    }
    /*get type of payment */
    getTypePayment(event){
        this.setState({typePayment : event.target.value})
    }
    /* calculate money */
    calculation(event){
        if(this.state.typePayment == "cash"){
            this.setState({showCash: true});
            this.setState({showPromote: false});
            this.setState({showList: false});
            this.setState({showPayment: false});
            this.setState({showOnline: false});
            this.setState({showForm: false});
            //console.log(this.state.typePromote+"/"+this.state.duration+"/"+this.state.price)
            promote.promoted.userId = {$oid : (loadState() != undefined ? loadState().user.userId : '') };
            promote.promoted.packageId = packId;
            promote.promoted.typePromote = this.state.typePromote;
            promote.promoted.duration = this.state.duration;
            promote.promoted.price = this.state.price;
            promote.promoted.productId = ids;
            //promote.promoted.price = 0; //this.state.total;
            this.props.actionMemberPromoteProducts(promote);
        }else if(this.state.typePayment == "online"){
            this.setState({showOnline: true});
            this.setState({showCash: false});
            this.setState({showPromote: false});
            this.setState({showList: false});
            this.setState({showPayment: false});
            this.setState({showForm: false});
        }else {

        }
    }
    render(){
        let total = 0;
        return(
            <div>
                { !this.state.showList ? null :
                    <div>
                        {/* show list products */}
                        <br/>
                        <Row style={{marginRight: '1px'}}>
                            <Col xs={11} sm={11} md={11} lg={11}></Col>
                            <Col xs={1} sm={1} md={1} lg={1}>
                                <Button bsStyle="success" onClick={this.showListPromote.bind(this)}>
                                    <i className="fa fa-shopping-basket" aria-hidden="true">&nbsp;&nbsp;{this.state.totalCard}</i>
                                </Button>
                            </Col>
                        </Row>
                        <br/>
                        <div className="row list-product-merchant_normal">
                            {/* display list products */}
                            { this.props.products.products == undefined ? null :
                                <div>
                                    {this.props.products.products.map((product, index) => {
                                        total = product.store.length;
                                        return (
                                            <div key={index} className="col-xs-12 sm-12 md-12">
                                                <Media className="list-product-merchant">
                                                    <div className="col-xs-3 col-sm-3 col-md-3">
                                                        <Media.Left>
                                                            {product.images.length > 0 ?
                                                                <div className="image-wrap-list-product">
                                                                    <a href={ location.origin + "/products/detail/" + Object.values(product.id)[0]}>
                                                                        <img src={"/images/products/"+product.images[0]}
                                                                             width={200} height={200}
                                                                             alt="171x180"/>
                                                                    </a>
                                                                </div>
                                                                :
                                                                <div className="image-wrap-list-product">
                                                                    <a>
                                                                        <img src={"/icon/no_image_available.jpg"}
                                                                             width={200} height={200}
                                                                             style={{ border: '1px solid #232f3e'}}
                                                                             alt="placehold.it/150x100"/>
                                                                    </a>
                                                                </div>
                                                            }
                                                        </Media.Left>
                                                    </div>
                                                    <div className="col-xs-9 col-sm-9 col-md-9">
                                                        <Media.Body>
                                                            <Media.Heading style={{fontWeight: 'bold', marginTop: '2px', paddingBottom: '5px', borderBottom: '1px solid #cccccc', color:'black'}}>
                                                                {loadLanguage() == "en" || undefined ? "Name" : "ឈ្មោះ"}: {product.name}
                                                                { product.type == "normal" ?
                                                                    <div>
                                                                        { product.promote.length > 0 ?
                                                                            <div>
                                                                                {
                                                                                    product.promote[0].status == -1 ?
                                                                                    <div>
                                                                                        { this.state.pro_id.find(findPro => findPro == Object.values(product.id)[0]) !== Object.values(product.id)[0] ?
                                                                                            <Button
                                                                                                style={{float:'right'}}
                                                                                                bsStyle="warning"
                                                                                                onClick={() => this.getProductId(product.id != undefined ? product.id : '')}>
                                                                                                Promote
                                                                                            </Button>
                                                                                            :
                                                                                            <div
                                                                                                style={{float:'right', color: 'green', fontSize: 24}}>
                                                                                                <i className="fa fa-check"/>
                                                                                            </div>
                                                                                        }
                                                                                    </div>
                                                                                    :
                                                                                    null
                                                                                }
                                                                                {
                                                                                    product.promote[0].status == 0 ?
                                                                                        <Button className="promote-button" style={{float:'right'}}
                                                                                                bsStyle="danger"
                                                                                                disabled>Promoting
                                                                                        </Button>
                                                                                        :
                                                                                        null
                                                                                }
                                                                                {
                                                                                    product.promote[0].status == 1 ?
                                                                                        <Button className="promote-button" style={{float:'right'}}
                                                                                                bsStyle="success"
                                                                                                disabled>Promoted
                                                                                        </Button>
                                                                                        :
                                                                                        null
                                                                                }
                                                                            </div>
                                                                            :
                                                                            <div>
                                                                                { this.state.pro_id.find(findPro => findPro == Object.values(product.id)[0]) !== Object.values(product.id)[0] ?
                                                                                    <Button style={{float:'right'}}
                                                                                            bsStyle="warning"
                                                                                            onClick={() => this.getProductId(product.id != undefined ? product.id : '')}>Promote</Button>
                                                                                    :
                                                                                    <div
                                                                                        style={{float:'right', color: 'green', fontSize: 24, marginTop: 10}}>
                                                                                        <i className="fa fa-check"/>
                                                                                    </div>
                                                                                }
                                                                            </div>
                                                                        }
                                                                    </div>
                                                                    :
                                                                    <div>
                                                                        <Button style={{float:'right'}} bsStyle="success" disabled>Promoted</Button>
                                                                    </div>
                                                                }
                                                            </Media.Heading>
                                                            <Row>

                                                                <Col xs={10} lg={10}>
                                                                    <p className="product-description long-title-hidden">
                                                                        {product.description}
                                                                    </p>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg={2} sm={2} xs={2}>
                                                                    <p className="product-price">{loadLanguage() == "en" || undefined ? "Price" : "តម្លៃ"} : </p>
                                                                </Col>
                                                                <Col lg={10}sm={10} xs={10}>
                                                                    <p className="product-price">{product.price} $</p>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg={3} sm={3} xs={3}>
                                                                    <p className="product-price-discount">{loadLanguage() == "en" || undefined ? "Discount" : "បញ្ចុះតម្លៃ"} : </p>
                                                                </Col>
                                                                <Col lg={2} sm={2} xs={2}>
                                                                    <p className="product-price-discount"> {product.discount}
                                                                        %</p>
                                                                </Col>
                                                                { product.discountEndDate < new Date().getTime() ?
                                                                    null
                                                                    :
                                                                    <div>
                                                                        <Col xs={4} lg={4} >
                                                                            <strong>{loadLanguage() == "en" || undefined ? "Discount will expire:" : "ផុតកំណត់"}  </strong>
                                                                        </Col>
                                                                        <Col xs={3}lg={3}>
                                                                            <p className="product-price-discount-end-date">{formatDate(product.discountEndDate)}</p>
                                                                        </Col>
                                                                    </div>
                                                                }
                                                            </Row>
                                                            <Row>
                                                                <Col lg={2} sm={2} xs={2}>
                                                                    <p className="product-view">{loadLanguage() == "en" || undefined ? "​Post date:" : "ថ្ងៃដាក់លក់"}</p>
                                                                </Col>
                                                                <Col lg={2} sm={2} xs={2}>
                                                                    <p>{formatDate(product.createDate)}</p>
                                                                </Col>
                                                                <Col lg={2} sm={2} xs={2}>
                                                                    <p className="product-view">Views: </p>
                                                                </Col>
                                                                <Col lg={2} sm={2} xs={2}>
                                                                    <p className="product-view">{product.view}</p>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg={6} sm={6} className="button-list-product-merchant">
                                                                    <Button className="btn btn-default product-merchant"
                                                                            onClick={() => product.id != undefined ? this.handleEdit(product.id.$oid) : ''}>{loadLanguage() == "en" || undefined ? "Edit" : "កែប្រែ"}</Button>&nbsp;
                                                                    <Button className="btn btn-default product-merchant"
                                                                            onClick={() => this.handleUpdateProductStatus(product.id != undefined ? product.id.$oid : '')}>{loadLanguage() == "en" || undefined ? "Delete" : "លុប"}</Button>&nbsp;
                                                                    {new Date().getTime() - product.createDate >= 86400000 ?
                                                                        <Button className="btn btn-default product-merchant"
                                                                                onClick={() => this.handleRenewProduct(product.id != undefined ? product.id.$oid : '')}>{loadLanguage() == "en" || undefined ? "Renew" : "ធ្វើអោយថ្មី"}</Button>
                                                                        :
                                                                        <Button className="btn btn-default product-merchant"
                                                                                disabled>ReNew</Button>
                                                                    }
                                                                </Col>
                                                            </Row>
                                                        </Media.Body>
                                                    </div>
                                                </Media>
                                            </div>
                                        )
                                    })}
                                    { total <= 10 ? null :
                                        <div>
                                            <br />
                                            <Pagination style={{ float: 'right'}}
                                                        prev
                                                        next
                                                        first
                                                        last
                                                        ellipsis
                                                        boundaryLinks
                                                        items={ProductList.handleItem(total)}
                                                        maxButtons={5}
                                                        activePage={this.state.activePage}
                                                        onSelect={this.handleSelect}
                                            />
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                }
                { !this.state.showPromote ? null :
                    <div>
                        <br/>
                        <Row>
                            <Col xs={10} sm={10} md={10} lg={10}></Col>
                            <Col xs={1} sm={1} md={1} lg={1}>
                                <Button bsStyle="success" onClick={this.showListProduct.bind(this)}>
                                    {loadLanguage() == "en" || undefined ? "Back" : "ត្រលប់ក្រោយ"}
                                </Button>
                            </Col>
                            <Col xs={1} sm={1} md={1} lg={1}></Col>
                        </Row>
                        <Col xs={10} sm={10} md={10} lg={10}></Col>
                        { ids.length <= 0 ?
                            <div>
                                <center>
                                    <div style={{border:'groove', marginLeft: '20px', width: '50%', backgroundColor:'pink'}}><h2>NO PRODUCTS WERE SELECTED!</h2></div>
                                </center>
                            </div>
                            :
                            <div>
                                <Row style={{margin: '20px'}}>
                                    {/* type */}
                                    <Col xs={5} sm={5} md={5} lg={5}>
                                        <FormGroup controlId="types">
                                            <ControlLabel>{loadLanguage() == "en" || undefined ? "Promoted Types": "កញ្ចប់សេវ៉ាកម្ម"}</ControlLabel>
                                            <FormControl componentClass="select"
                                                         placeholder="types"
                                                         onChange={this.getType.bind(this)}
                                            >
                                                <option value="">{loadLanguage() == "en" || undefined ? "All Types": "ប្រភេទទាំងអស់"}</option>
                                                {
                                                    this.props.listAllPromotedPackages.packages == undefined ? null :
                                                        this.props.listAllPromotedPackages.packages.map((pack,index) => {
                                                            return (
                                                                <option key={index} value={pack._id.$oid}>{pack.typePromote + " "+pack.duration+" week"}</option>
                                                            )
                                                        })
                                                }
                                            </FormControl>
                                        </FormGroup>
                                        <br/><br/><br/>
                                        <div style={{border:'groove'}}>
                                            <h5 style={{marginLeft: '15px'}}>{loadLanguage() == "en" || undefined ? "Your Promoted Type is" : "ប្រភេទសេវ៉ាកម្ម"} : <b style={{color:'#E91E63'}}>{this.state.typeInfo}</b></h5>
                                            <h5 style={{marginLeft: '15px'}}>{loadLanguage() == "en" || undefined ? "Price for one product" : "តម្លៃក្នុងមួយផលិតផល"} : <b style={{color:'#E91E63'}}>$ {this.state.price}</b></h5>
                                        </div>
                                    </Col>
                                    <Col xs={1} sm={1} md={1} lg={1}>
                                    </Col>
                                    {/* promote information */}
                                    <Col xs={6} sm={6} md={6} lg={6}>
                                        <br/>
                                        <Table responsive bordered hover>
                                            <thead style={{backgroundColor: '#ff6903', color: 'white', border: '2px solid #ff6903'}}>
                                            <tr>
                                                <th style={{textAlign: 'center',backgroundColor:'green'}} colSpan="3">{loadLanguage() == "en" || undefined ? "Promoted Packages Price" : "តម្លៃកញ្ចប់សេវ៉ាកម្ម"}</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                this.props.listAllPromotedPackages == undefined ?
                                                    <tr>
                                                        <td colSpan="2">
                                                            <center><h3>RESULT NOT FOUND!</h3></center>
                                                        </td>
                                                    </tr>
                                                    :
                                                    this.props.listAllPromotedPackages.packages.map((pack,index) => {
                                                        return(
                                                            <tr key={index}>
                                                                <td>{pack.typePromote}</td>
                                                                <td>{pack.duration+" week "}</td>
                                                                <td>{"$ "+pack.price}</td>
                                                            </tr>
                                                        )
                                                    })
                                            }
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                                <div style={{margin:'20px'}}>
                                    <Table responsive bordered hover>
                                        <thead style={{backgroundColor: '#ff6903', color: 'white', border: '2px solid #ff6903'}}>
                                        <tr>
                                            <th style={{textAlign: 'center'}}>NO</th>
                                            <th style={{textAlign: 'center'}}>IMAGE</th>
                                            <th style={{textAlign: 'center'}}>NAME</th>
                                            <th style={{textAlign: 'center'}}>TYPE</th>
                                            <th style={{textAlign: 'center'}}>PRICE</th>
                                            <th style={{textAlign: 'center'}}>POST DATE</th>
                                            <th colSpan="3" style={{textAlign: 'center'}}>ACTION</th>
                                        </tr>
                                        </thead>
                                        {
                                            ids.map((id,index) => {
                                                    let no = index;
                                                    return(
                                                        <tbody key={index}>
                                                        { this.props.listPromotedProducts.products == undefined ?
                                                            <tr>
                                                                <td colSpan="9">
                                                                    <center><h2>RESULT NOT FOUND!</h2></center>
                                                                </td>
                                                            </tr>
                                                            :
                                                            this.props.listPromotedProducts.products.map((product, index) => {
                                                                // check condition
                                                                if(product.id.$oid == id.$oid ) {
                                                                    return (
                                                                        <tr key={index}>
                                                                            <td >{no + 1}</td>
                                                                            {product.images != undefined && product.images != "" ?
                                                                                <td>
                                                                                    <Image src={"/images/products/" + product.images[0]} circle width="25" height="25"/>
                                                                                </td>
                                                                                :
                                                                                <td>
                                                                                    <Image src="/profile/default-profile.png" circle width="25" height="25"/>
                                                                                </td>
                                                                            }
                                                                            <td >{product.name}</td>
                                                                            <td style={{textAlign: 'center'}}>{product.type}</td>
                                                                            <td >{"$ " + product.price}</td>
                                                                            <td >{formatDate(product.createDate)}</td>
                                                                            <td style={{textAlign: 'center'}}>
                                                                                <Link to="" onClick={()=>{this.deleteProduct(product.id)}} style={{"color": "red"}}>
                                                                                    <i className="fa fa-trash-o" aria-hidden="true">&nbsp;{loadLanguage() == "en" || undefined ? "Delete" : "លុប" }</i>
                                                                                </Link>

                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                }

                                                            })
                                                        }
                                                        </tbody>
                                                    )
                                                }
                                            )
                                        }
                                    </Table>
                                    {/* calculation and submit */}
                                    <div>
                                        <Form inline>
                                            <FormGroup controlId="formInlineName">
                                                <ControlLabel>Total Payment</ControlLabel>
                                                {' '}
                                                <FormControl style={{color:'#E91E63', fontWeight:'bold'}} type="text" value={"$ "+this.state.total} readOnly/>
                                            </FormGroup>
                                            {' '}
                                            <Button bsStyle="primary"
                                                    disabled={ this.state.total <= 0 ? true : false}
                                                    onClick={this.promoteProducts.bind(this)}>
                                                {loadLanguage() == "en" || undefined ? "Promote" : "បន្ត" }
                                            </Button>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                }
                { !this.state.showPayment ? null :
                    <div>
                        {/* show form way to pay */}
                        <br/>
                        <Row>
                            <Col xs={10} sm={10} md={10} lg={10}></Col>
                            <Col xs={1} sm={1} md={1} lg={1}>
                                <Button bsStyle="success" onClick={this.backToListPromote.bind(this)}>
                                    {loadLanguage() == "en" || undefined ? "Back" : "ត្រលប់ក្រោយ"}
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={2} sm={2} md={2} lg={2}></Col>
                            <Col xs={8} sm={8} md={8} lg={8}>
                                <FormGroup onChange={this.getTypePayment.bind(this)}>
                                    <ControlLabel>{loadLanguage() == "en" || undefined ? "Pay By" : "បង់លុយតាម៖"}: </ControlLabel>
                                    <Radio name="paid" value="cash"> {loadLanguage() == "en" || undefined ? "Cash" : "លុយសុទ្ធ"} </Radio>{' '}
                                    <Radio name="paid" value="online"> {loadLanguage() == "en" || undefined ? "Online" : "អេឡិចត្រូនិច"} </Radio>
                                </FormGroup>
                                <br/>
                                <Form inline>
                                    <FormGroup controlId="formInlineName">
                                        <ControlLabel>{loadLanguage() == "en" || undefined ? "Total Amount" : "ទឹកប្រាក់សរុប៖"} </ControlLabel>
                                        {' '}
                                        <FormControl style={{color:'#E91E63', fontWeight:'bold'}} type="text" value={"$ "+ this.state.total} readOnly/>
                                    </FormGroup>
                                    {' '}
                                    <Button
                                        bsStyle="primary"
                                        disabled = {this.state.typePayment == "" ? true : false }
                                        onClick={this.calculation.bind(this)}>
                                        {loadLanguage() == "en" || undefined ? "Next" : "បន្ត"}
                                    </Button>
                                </Form>
                            </Col>
                            <Col xs={2} sm={2} md={2} lg={2}></Col>
                        </Row>
                    </div>
                }
                { !this.state.showCash ? null :
                    <div>
                        {/* pay money by cash*/}
                        <br/>
                        <Row>
                            <Col xs={3} sm={3} md={3} lg={3}></Col>
                            <Col xs={6} sm={6} md={6} lg={6}>
                                {
                                    success ?
                                        <div>
                                            {loadLanguage() == "en" || undefined ?
                                                <div>
                                                    <div>
                                                        <div style={{border:"groove", color:"black"}}>
                                                            <h4 style={{marginLeft: '10px'}}>Please contact to Admin to approve your request.</h4>
                                                            <h4 style={{marginLeft: '10px'}}>Tell: 097 93 93 007</h4>
                                                            <h4 style={{marginLeft: '10px'}}>Email: admin@gmail.com</h4>
                                                            <h5 style={{marginLeft: '10px'}}><p style={{color:'red'}}>Note:</p> You must contact to Admin before 7 days.
                                                                If you do not contact to Admin, your products will be expired after 7 days.
                                                            </h5>
                                                            <h4 style={{marginLeft: '10px'}}>Thanks</h4>
                                                        </div>
                                                        <br/>
                                                        <Button bsStyle="success" onClick={ () => {location.href="/merchant"}}>
                                                            Finish
                                                        </Button>
                                                    </div>​​
                                                </div>
                                                :
                                                <div>
                                                    <div style={{border:"groove", color:"black"}}>
                                                        <h4 style  ={{marginLeft: '10px'}}>សូមធ្វើការទំនាក់ទំនងទៅកាន់ម្ចាស់វេបសាយ ដើម្បីទទួលយកសំនើររបស់លោកអ្នក។</h4>
                                                        <h4 style={{marginLeft: '10px'}}>ទំនាក់ទំនង: 097 93 93 007</h4>
                                                        <h4 style={{marginLeft: '10px'}}>ម៉េល: admin@gmail.com</h4>
                                                        <h5 style={{marginLeft: '10px'}}><p style={{color:'red'}}>ចំណាំ​ :</p> សូមធ្វើការទំនាក់ទំនងទៅកាន់ម្ចាស់វេបសាយអោយបានមុនរយៈពេល៧ថ្ងៃគិតចាប់ពីថ្ងៃនេះត៏ទៅ ពុំដូចឆ្នោះទេ សំនើររបស់លោកអ្នកនិងត្រូវបានលុបចោល។
                                                        </h5>
                                                        <h4 style={{marginLeft: '10px'}}>សូមអរគុណ</h4>
                                                        </div>
                                                        <br/>
                                                    <Button bsStyle="success" onClick={ () => {location.href="/merchant"}}>
                                                    បញ្ចប់
                                                    </Button>
                                                </div>
                                            }
                                        </div>

                                    :
                                    null
                                }
                                {
                                    error ?
                                    <div>
                                        <Panel header="Fail with sending request to Admin." bsStyle="danger"></Panel>
                                        <Button bsStyle="success" onClick={ () => {location.href="/merchant"}}>Cancel Process</Button>
                                    </div>
                                    :
                                        null
                                }
                            </Col>
                            <Col xs={3} sm={3} md={3} lg={3}></Col>
                        </Row>
                        <br/>
                    </div>
                }
                { !this.state.showOnline ? null :
                    <div>
                        {/* pay money by online */}
                        <br/><br/>
                        <div>
                            <div>
                                <Tabs defaultActiveKey={this.state.key} animation={false} id="controlled-tab-example" className="tab-special-category-merchant" >
                                    <Tab eventKey={1} className="tab-title" title={<i className="fa fa-address-card-o" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;Wing</i>}>
                                        <h2>Pay by Wing</h2>
                                        <Button bsStyle="warning" onClick={() => { location.href="/merchant"}}>Cancel</Button>
                                    </Tab>
                                    <Tab eventKey={2} title={<i className="fa fa-address-card-o" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;E-Money</i>}>
                                        <h2>Pay by E-Money</h2>
                                        <Button bsStyle="warning" onClick={() => { location.href="/merchant"}}>Cancel</Button>
                                    </Tab>
                                    <Tab eventKey={3} title={<i className="fa fa-address-card-o" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;Smart Luy</i>}>
                                        <h2>Pay by Smart Luy</h2>
                                        <Button bsStyle="warning" onClick={() => { location.href="/merchant"}}>Cancel</Button>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                }
                {/* delete product */}
                <SweetAlert
                    show={this.state.show}
                    type={this.state.sweetProps.type}
                    title={this.state.sweetProps.title}
                    text={this.state.sweetProps.text}
                    showCancelButton={this.state.sweetProps.cancel}
                    confirmButtonColor="#ff5a00"
                    onConfirm={
                        () => {
                            if(this.state.show) {
                                this.props.updateProductStatusAction({
                                    token: loadState() != undefined ? loadState().token : '',
                                    product: {
                                        productId: productId,
                                        status: loadState().user != undefined ? loadState().user.userType == 'merchant' ? 400 : 0 : 0
                                    }
                                });
                                setTimeout(function() {
                                    if(this.props.productStatus != undefined){
                                        if(this.props.productStatus.code == 200){
                                            this.setState({
                                                sweetProps: {
                                                    type: "success",
                                                    title: "Successful !!",
                                                    text: "Product has been deleted successfully !",
                                                    cancel: false
                                                },
                                                show: true,
                                                renew: false
                                            });
                                            setTimeout(function(){
                                                window.location.assign('/' + window.location.pathname.split('/')[1] + '/ads')
                                            },1000);
                                        }else {
                                            this.setState({
                                                sweetProps: {
                                                    type: "error",
                                                    title: "Something wrong !!",
                                                    text: "Product has not been deleted !",
                                                    cancel: false
                                                },
                                                show: false,
                                                renew: false
                                            });
                                        }
                                    }}.bind(this), 200);
                            }
                        }
                    }
                    onCancel={() => this.setState({show: false})}
                />
                {/* renew product */}
                <SweetAlert
                    show={this.state.renew}
                    type={this.state.sweetRenew.type}
                    title={this.state.sweetRenew.title}
                    text={this.state.sweetRenew.text}
                    showCancelButton={false}
                    confirmButtonColor="#ff5a00"
                    onConfirm={ () => this.setState({renew: false}) }
                />
            </div>
        )
    }
}
ProductList = reduxForm({
    form: 'form_list_products',
    validate: function (values) {
        const errors = {};
        if(values.minPrice != undefined){
            if(values.maxPrice == undefined ){
                errors.maxPrice = "Max Price cannot be empty!!"
            }
        }
        if(values.maxPrice != undefined){
            if(values.minPrice == undefined ){
                errors.minPrice = "Min Price cannot be empty!!"
            }
        }
        if(Number(values.minPrice) > Number(values.maxPrice)){
            errors.maxPrice = 'Max Price must greater or equal Min Price !!'
        }
        return errors
    }
})(ProductList);
function mapStateToProps(state){
    //console.log("Member Product "+ JSON.stringify(state.memberProduct));
    //console.log("PRODUCTS",state.memberProducts)
    if(state.memberPromoteProducts.code != undefined ){
        success = true;
        error = false;
    }else{
        error = true;
        success = false;
    }
    return{
        products: state.memberProducts,
        productStatus: state.productStatus,
        renewProduct: state.renewProduct,
        product: state.memberProduct,
        listPromotedProducts: state.listPromotedProducts,
        listAllPromotedPackages: state.listAllPromotedPackages,
        memberPromoteProducts: state.memberPromoteProducts
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ actionMemberPromoteProducts, actionMemberListAllPackagesProduct, actionMemberListPromotedProducts, fetchProductAction, updateProductStatusAction, renewProductAction, fetchProductByIdAction }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductList);