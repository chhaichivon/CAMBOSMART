import React from 'react';
import axios from 'axios';
import {Button,Image} from 'react-bootstrap';

export default class ImageUpload extends React.Component {
    constructor(props){
        super(props);

        this.uploadImage = this.uploadImage.bind(this);
    }

    loadFile(event) {
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
    }

    uploadImage(){
        var CONFIG = {
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': 'AbCdEfGhIjK1'
            }
        };
        var API_ENDPOINT = 'http://localhost:9000/api/v1/';
        var data = new FormData();
        data.append('file', document.getElementById('file').files[0]);
        console.log("file size",document.getElementById('file').files[0])
        if(document.getElementById('file').files[0].size > 5574656) {
            //file is large than 5MB
            console.log("file size is too large")
        }else {

            axios.post(API_ENDPOINT+'users/uploadimage/'+'5897e45a790000e304de10ec', data, CONFIG)
                .then(function (res) {
                    console.log("success upload",res)
                })
                .catch(function (err) {
                    console.log("fail with upload",err)
                });
        }

    }

    render(){
        return(
            <div>
                <div className="container">
                    <center><h1>Upload Image</h1></center>
                    <form encType="multipart/form-data">
                        <Image id="output" style={{width:'200px',height:'200px'}} responsive thumbnail/>
                        <br/><br/>
                        <input type="file" id="file" size="10" onChange={this.loadFile}/>
                        <br/>
                        <Button onClick={this.uploadImage}>Upload</Button>
                    </form>
                </div>
            </div>

        )
    }
}