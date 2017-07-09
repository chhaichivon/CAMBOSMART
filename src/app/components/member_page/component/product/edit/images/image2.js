import React from 'react';
import axios from 'axios';
import FileUpload from './file_upload';
import './style.css';
import './prism.css';
import {API_ENDPOINT, AUTH_CONFIG} from './../../../../../../api/headers';
import {loadState, loadProduct, saveProduct} from './../../../../../../localstorages/local_storage';
import {imageCompressor, dataURItoFile} from './../../../../../../utils/image_file_handling';

let product2 = {
    id: loadProduct() != undefined ? loadProduct()._id.$oid : '',
    image2: loadProduct() != undefined ? (loadProduct().productImage.length > 1 ? loadProduct().productImage[1] : 'example.png') : 'example.png'
};

export default class Image2 extends React.Component {
    constructor() {
        super();
        this.state = {
            img: ''
        };
        this.handleFileUpload = this.handleFileUpload.bind(this);
    }

    handleFileUpload(data){
        let message = "";
        if(data.size == 1){
            message = "File was too large, please try another !!";
        }else if(data.size == 0){
            message = "File was too small, please try another !!";
        }else if(data.size == -1){
            message = "File did not match any type of (jpeg, jpg, png) !!";
        }else {
            this.setState({img: data.img});
            message = "";
            imageCompressor(data.img, data.size < 1024 ? data.size < 100 ? 0.5 : 0.95 : 0.8);
            setTimeout(() => {
                let formData = new FormData();
                formData.append('file', dataURItoFile(imageCompressor(data.img, data.size < 1024 ? data.size < 100 ? 0.5 : 0.95 : 0.8), data.name.toLowerCase().concat('.jpg')));
                axios.post(API_ENDPOINT + 'member/products/' + product2.id + '/' + product2.image2, formData, AUTH_CONFIG(loadState() != undefined ? loadState().token : ''))
                    .then(function (res) {
                        let productState = loadProduct();
                        let index = productState.productImage.indexOf(product2.image2);
                        if (index !== -1) {
                            productState.productImage[index] = res.data.data.image;
                        }else {
                            productState.productImage.push(res.data.data.image)
                        }
                        product2.image2 = res.data.data.image;
                        saveProduct(productState);
                        //window.location.assign('/' + window.location.pathname.split('/')[1] + '/product/edit');
                    })
                    .catch(function (err) {
                        if(err.response.status == 401){
                            location.href = "/sign-in";
                        }else if(err.response.status == 500) {
                            location.href = "/server/error";
                        }
                    });
            }, 500);
        }
        this.props.handleError2(message);
    }

    /*setDateURI (data) {
        this.setState({dataURI: data.dataURI});
        /!*Try to upload *!/
        let formData = new FormData();
        formData.append('file', data.file);
        axios.post(API_ENDPOINT + 'member/products/' + product2.id + '/' + product2.image2, formData, AUTH_CONFIG(loadState() != undefined ? loadState().token : ''))
            .then(function (res) {
                let productState = loadProduct();
                let index = productState.productImage.indexOf(product2.image2);
                if (index !== -1) {
                    productState.productImage[index] = res.data.data.image;
                }else {
                    productState.productImage.push(res.data.data.image)
                }
                product2.image2 = res.data.data.image;
                saveProduct(productState);
                //window.location.assign('/' + window.location.pathname.split('/')[1] + '/product/edit');
            })
            .catch(function (err) {
                if(err.response.status == 401){
                    window.location.assign("/sign-in");
                }else if(err.response.status == 500) {
                    window.location.assign("/server/error");
                }
            });
    }
    setError(error){
        this.props.handleError2(error);
    }*/

    render() {
        return (
            <div className="row">
                <div encType="multipart/form-data">
                    <div className="avatar-photo product">
                        <FileUpload handleFileChange={this.handleFileUpload} />
                        <div className="avatar-edit product">
                            <i className="fa fa-camera">
                            </i>
                        </div>
                        {this.state.img != "" ?
                            <img src={this.state.img} style={{height:"120px",width:"120px"}}/>
                            :
                            product2.image2 != "example.png" ?
                                <img src={"/images/products/" + product2.image2} style={{height:"120px",width:"120px"}}/>
                                :
                                null
                        }
                    </div>
                </div>
            </div>
        );
    }
}
