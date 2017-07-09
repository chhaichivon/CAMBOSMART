/**
 * Created by chhaichivon on 4/20/2017.
 */
import React,{ PropTypes } from '../../../../../node_modules/react';
import { FormGroup, FormControl, HelpBlock } from '../../../../../node_modules/react-bootstrap';
import {languages} from './../../../utils/languages/location';
import { loadLanguage } from './../../../localstorages/local_storage';
export default class FormSelectFieldLocation extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const { input, type, placeholder, values, disabled, icon, children, meta } = this.props;

        return(
            <FormGroup controlId="formControlsSelect" validationState={!meta.touched ? null : (meta.error ? 'error' : 'success')}>
                <FormControl {...input} componentClass={type} type={type} disabled={disabled} style={{paddingLeft: '30px', paddingRight: '5px', height: '40px'}}>
                    <option value=''>{loadLanguage() == "en" || loadLanguage() == undefined ? "Location" : "ទីតាំងទាំងអស់"}</option>
                    {languages.sort().map((value, index) => {
                        return(
                            <option key={index} value={value.lang[1]}>{loadLanguage() == "en" || loadLanguage() == undefined ? value.lang[1] : value.lang[0]}​</option>
                        )
                    })}
                    {children}
                </FormControl>
                <FormControl.Feedback style={{left: 0, marginTop: '13px', width: '30px', height: '30px'}}>
                    <i className={icon} aria-hidden="true"></i>
                </FormControl.Feedback>
                <HelpBlock>
                    {meta.touched && meta.error ? meta.error : null}
                </HelpBlock>
            </FormGroup>
        );
    }
}
FormSelectFieldLocation.propTypes = {
    meta: PropTypes.object,
    input: PropTypes.object,
    type: PropTypes.string,
    icon: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.array

};
