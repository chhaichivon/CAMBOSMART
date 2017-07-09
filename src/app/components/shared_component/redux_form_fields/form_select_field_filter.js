/**
 * Created by CHHAI CHIVON
 */
import React,{ PropTypes } from '../../../../../node_modules/react';
import { FormGroup, FormControl, Glyphicon, HelpBlock } from '../../../../../node_modules/react-bootstrap';
import { date_time } from './../../../utils/languages/date_time';
import { loadLanguage } from './../../../localstorages/local_storage';
export default class FormSelectFieldFilter extends React.Component {
    constructor(props){
        super(props);
    }
    static getTime(time) {
        switch(time) {
            case 'Any Time': return 0;
            case 'Today': return 1;
            case 'This week' : return 2;
            case 'This month' : return 3;
            case 'This year' : return 4;
        }
    }
    render(){
        const { input, type, placeholder, values, disabled, icon, children, meta } = this.props;
        return(
            <FormGroup controlId="formControlsSelect" validationState={!meta.touched ? null : (meta.error ? 'error' : 'success')}>
                <FormControl {...input} componentClass={type} type={type} style={{paddingLeft: '30px', height: '40px'}}>
                    {/*<option value=''>All Status</option>*/}
                    {date_time.map((time, index) => {
                        return(
                            <option key={index} value={`${FormSelectFieldFilter.getTime(time.date[1])}`}>{loadLanguage() == "en" || loadLanguage() == undefined ? time.date[1] : time.date[0]}</option>
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

FormSelectFieldFilter.propTypes = {
    meta: PropTypes.object,
    input: PropTypes.object,
    type: PropTypes.string,
    icon: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.array

};