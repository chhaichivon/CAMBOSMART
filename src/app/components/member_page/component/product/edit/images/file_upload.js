import React from 'react';
import ReactDOM from 'react-dom';

export default class FileUpload extends React.Component {
    constructor(props){
        super(props);
        this.handleFile = this.handleFile.bind(this);
    }

    handleFile(e) {
        let reader = new FileReader();
        let file = e.target.files[0];
        if (!file){
            this.props.handleFileChange({img: null, size: -1, name: ''});
        } else {
            if (!file.name.match(/.(jpg|jpeg|png)$/i)){
                this.props.handleFileChange({img: null, size: -1, name: ''});
            }else {
                if(file.size > 10*1024*1024){
                    this.props.handleFileChange({img: null, size: 1, name: ''});
                }else if(file.size < 10*1024){
                    this.props.handleFileChange({img: null, size: 0, name: ''});
                }else {
                    reader.onload = function(img) {
                        ReactDOM.findDOMNode(this.refs.in).value = '';
                        this.props.handleFileChange({img: img.target.result, size: file.size/1024, name: file.name.split('.')[0]});
                    }.bind(this);
                    reader.readAsDataURL(file);
                }
            }
        }
    }

    /*handleFileUpload(e) {
        let reader = new FileReader();
        let file = e.target.files[0];
        if (!file){

        } else {
            if (!file.name.match(/.(jpg|jpeg|png|gif)$/i)){
                this.props.handleError("File didn't match any type !!");
            }else {
                if(file.size > 5242880){
                    this.props.handleError("File is too large !!");
                }else if(file.size < 10240){
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
    }*/

    render() {
        return (
            <input ref="in" type="file" accept="image/*" onChange={this.handleFile} />
        );
    }
}