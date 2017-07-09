import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionPostSubscribe, actionGetSubscribeByStoreIdAndUserId, actionDeleteSubscribe } from './../../../actions/store/subscribe';
import { Row, Col, Image } from 'react-bootstrap';
import { saveState,loadState } from '../../../localstorages/local_storage';
import moment from 'moment';
import SweetAlert from 'sweetalert-react';

let storeId = "";
let subscribe = {};

class ProductDetail extends React.Component{
    constructor(props){
        
        super(props);
        this.state = {
            subscribe: {
                storeId: "",
                userId: ""
            },
            subscribeButton: true,
            subscribeId: ""
        };
    }
    
    componentWillReceiveProps(data) {
        /** action get subscribe */
        if(loadState() != undefined){
            if(data.storeId != ""){
                if(data.getSubscribe.code == undefined){
                    this.props.actionGetSubscribeByStoreIdAndUserId({
                        token: loadState().token,
                        store_id: data.storeId,
                        user_id: loadState().user.userId
                    });
                }
            }
        }
        storeId = data.storeId;
    }

    handleSubscribe = () => {
        if(loadState() == undefined) {
            window.location.href = "/sign-in";
            window.sessionStorage.setItem("previousUrl", window.location);
        } else{
            console.log('store id ', storeId)
            this.props.actionPostSubscribe({
                token: loadState().token,
                subscribe: {
                    userId: { $oid: loadState().user.userId},
	                storeId: { $oid: storeId },
                    email: loadState().user.email
                }
            });
            location.reload();
        }
    }

    handleUnSubscribe = () => {
        this.setState({ show: true });
    }

    render(){
        let subscribe_store = "";
        let subscribe_user = "";
        let subscribe_id = "";
        if( subscribe != null) {
            subscribe_store = subscribe.storeId != undefined ? Object.values(subscribe.storeId)[0] : "";
            subscribe_user = subscribe.userId != undefined ? Object.values(subscribe.userId)[0] : "";
            subscribe_id = subscribe._id != undefined ? Object.values(subscribe._id)[0] : "";
        }
        let user_id = "";
        if(loadState() != undefined) user_id = loadState().user.userId
        return(
            <span>
                { loadState() === undefined ? 
                    <button type="submit" className="btn btn-danger" style={{border: 'none'}} onClick={this.handleSubscribe}><i className="fa fa-feed"/> Subscribe</button> 
                    :
                    storeId === subscribe_store && user_id === subscribe_user ? 
                        <button type="submit" className="btn btn-warning" style={{border: 'none'}} onClick={this.handleUnSubscribe}><i className="fa fa-ban"/> Unsubscribe</button>
                        :
                        <button type="submit" className="btn btn-danger" style={{border: 'none'}} onClick={this.handleSubscribe}><i className="fa fa-feed"/> Subscribe</button> 
                }

                <SweetAlert
                    show={this.state.show}
                    title="Unsubscribe !"
                    text="Do you want to unsubscribe?"
                    showCancelButton={true}
                    confirmButtonColor="#ff5a00"
                    onCancel={() => this.setState({ show: false })}
                    onConfirm={() => {
                        this.setState({ 
                            show: false,
                            subscribeButton: false
                        });
                        this.props.actionDeleteSubscribe({
                            token: loadState().token,
                            id: subscribe_id
                        });
                        window.location.href = "";
                    }}
                />
            </span>
        );
    }
}

const mapStateToProps = (state) => {
    if(state.getSubscribe.code == 200){
        subscribe = state.getSubscribe.data;
    }
    return {
        postSubscribe: state.postSubscribe,
        getSubscribe: state.getSubscribe,
        delSubscribe: state.delSubscribe
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ 
        actionPostSubscribe,
        actionGetSubscribeByStoreIdAndUserId,
        actionDeleteSubscribe
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);