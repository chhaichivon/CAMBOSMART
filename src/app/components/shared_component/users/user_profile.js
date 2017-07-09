/**
 * Created by CHHAI CHIVON
 */
import React from 'react';
import {DropdownButton,MenuItem } from 'react-bootstrap';
import {loadState,clearState } from './../../../localstorages/local_storage';
export default class UserProfile extends React.Component{
    constructor(props){
        super(props);

        this.getUserName = this.getUserName.bind(this);

    }
    getUserName(){
        let user_name ;
        if (loadState() !== undefined){
            user_name = loadState().firstName;
        }
        return user_name;
    }

    render(){
        const user =(loadState()!== undefined) ? (
                                                    <DropdownButton title={this.getUserName()} id="dropdown_user"  >
                                                        <MenuItem eventKey="1">Action</MenuItem>
                                                        <MenuItem eventKey="2">Another action</MenuItem>
                                                        <MenuItem eventKey="3" active>Active Item</MenuItem>
                                                        <MenuItem divider />
                                                        <MenuItem eventKey="4">Separated link</MenuItem>
                                                    </DropdownButton>
                                                 ):(
                                                    <span>

                                                    </span>
                                                     );
        return(
            <span className="user_profile">
               <user />
            </span>
        );
    }
}