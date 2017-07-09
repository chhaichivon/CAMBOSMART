import React from 'react';
import ReactDOM from 'react-dom';

export default class FileUpload extends React.Component {
    constructor(props){
        super(props);
        this.handleFileUpload = this.handleFileUpload.bind(this);
    }

    handleFileUpload(e) {
        let reader = new FileReader();
        let file = e.target.files[0];
        if (!file){

        } else {
            if (!file.name.match(/.(jpg|jpeg|png|gif)$/i)){
                this.props.handleError("File didn't match any type (jpg,jpeg,png,gif) !!");
            }else {
                if(file.size > 5242880){ // greater than 5Mb
                    this.props.handleError("File is too large !!");
                }else if(file.size < 10240){ // less than 10kb
                    this.props.handleError("File is too small !!");
                }else {
                    reader.onload = function(img) {
                        ReactDOM.findDOMNode(this.refs.in).value = '';
                        this.props.handleFileChange({file: file, dataURI: img.target.result});
                    }.bind(this);
                    reader.readAsDataURL(file);
                }
            }
        }
    }

    render() {
        return (
            <input ref="in" type="file" accept="image/*" onChange={this.handleFileUpload} />
        );
    }
}