import React from 'react';
import {FormGroup,FormControl} from 'react-bootstrap';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { adminBlockMerchant,getMerchantDetail } from'./../../../../actions/admin';
import ImageCrop from './../../../crop_image/image_crop';
import ImageUpload from './../../../crop_image/image_upload';
import { loadState } from './../../../../localstorages/local_storage';

var new_status = 1;
class EditMerchant extends React.Component {
    constructor(props){
        super(props);
        this.updateStatusMerchant=this.updateStatusMerchant.bind(this);
        this.waiting=this.waiting.bind(this);
    }
    waiting(){
        if(this.props.blockMerchant.code == 200) sweetAlert("Success", "Success updated status", "success");
    }
    updateStatusMerchant(){
        let status={
            _id:this.props.params.mc_id,
            status:new_status
        };
        this.props.adminBlockMerchant(status);
        setTimeout(this.waiting, 1000);
    }
    handleUpdateStatus(e){
        console.log("Status",new_status);
        if(e.target.value=='-1') new_status = -1;
        else if (e.target.value=='0') new_status =0;
        else new_status=1
    }
    render() {
        return (
            <div className="container">
                <h1 className="page-header">Merchant</h1>
                <div className="row">
                    <div className="col-md-offset-1 col-md-3 col-sm-6 col-xs-12">
                        <div className="text-center">
                            <ImageUpload />
                            <ImageCrop image={"/"+"kaka101964646.png"} />
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}
function mapStateToProps(state){
    return({
        blockMerchant:state.blockMerchant
    })
}
function mapDispatchToProps(dispath){
    return bindActionCreators({adminBlockMerchant},dispath)
}

export default connect(mapStateToProps,mapDispatchToProps) (EditMerchant);