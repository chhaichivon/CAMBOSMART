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
                }else if(file.size < 5*1024){
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
    render() {
        return (
            <input ref="in" type="file" accept="image/*" onChange={this.handleFile} />
        );
    }
}