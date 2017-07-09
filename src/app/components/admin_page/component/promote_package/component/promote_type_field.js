import React,{ PropTypes } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

export default class TypeField extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            status: [
                'hot', 'gold'
            ]
        };
    }
    static getStatus(status){
        if(status == 'hot'){
            return 'hot';
        }else if(status == 'gold'){
            return 'gold';
        }else {
            return "";
        }
    }
    render(){
        const { input, type, icon, children, meta } = this.props;
        return(
            <FormGroup controlId="formControlsSelect" validationState={!meta.touched ? null : (meta.error ? 'error' : 'success')}>
                <FormControl {...input} componentClass={type} type={type} style={{paddingLeft: '15px', height: '40px'}}>
                    <option value=''>All promote types</option>
                    {this.state.status.sort().map((status, index) => {
                        return(
                            <option key={index} value={TypeField.getStatus(status)}>{status}</option>
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
TypeField.propTypes = {
    meta: PropTypes.object,
    input: PropTypes.object,
    type: PropTypes.string,
    icon: PropTypes.string

};