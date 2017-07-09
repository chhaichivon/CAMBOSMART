import React,{ PropTypes } from 'react';
import { FormGroup, FormControl, Glyphicon, HelpBlock } from 'react-bootstrap';

export default class ProductTypeField extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            status: [
                "Hot", "Gold", "Normal"
            ]
        };
    }
    static getStatus(status){
        if(status == "Hot"){
            return "hot"
        }else if(status == "Gold"){
            return "gold"
        }else {
            return "normal"
        }
    }
    render(){
        const { input, type, icon, children, meta } = this.props;
        return(
            <FormGroup controlId="formControlsSelect" validationState={!meta.touched ? null : (meta.error ? 'error' : 'success')}>
                <FormControl {...input} componentClass={type} type={type} style={{paddingLeft: '30px', height: '40px'}}>
                    <option value=''>All Types</option>
                    {this.state.status.sort().map((status, index) => {
                        return(
                            <option key={index} value={ProductTypeField.getStatus(status)}>{status}</option>
                        )
                    })}
                    {children}
                </FormControl>
                <FormControl.Feedback>
                    <i className={icon} aria-hidden="true"></i>
                </FormControl.Feedback>
            </FormGroup>
        );
    }
}
ProductTypeField.propTypes = {
    meta: PropTypes.object,
    input: PropTypes.object,
    type: PropTypes.string,
    icon: PropTypes.string

};