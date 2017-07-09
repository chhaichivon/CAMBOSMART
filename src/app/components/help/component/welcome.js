import React from 'react';
import { loadLanguage } from './../../../localstorages/local_storage';
export default class Welcom extends React.Component{
    render(){
        return(
            <div>
                <center><h3>{loadLanguage() == "en" || loadLanguage() == undefined ? "Welcom to Cambo-smart" : "ខេមបូស្មាត សូមស្វាគមន៏៏" }</h3></center>
            </div>
        )
    }
}