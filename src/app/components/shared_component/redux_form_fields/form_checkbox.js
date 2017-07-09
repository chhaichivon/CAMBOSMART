import React, { PropTypes } from "../../../../../node_modules/react";
import { FormGroup, HelpBlock } from "../../../../../node_modules/react-bootstrap";
import { loadLanguage } from './../../../localstorages/local_storage';
export default class FormCheckbox extends React.Component {
    render(){
        const { input, meta, type, id } = this.props;
        return(
            <FormGroup validationState={!meta.touched ? null : (meta.error ? 'error' : 'success')}>
                <FormGroup>
                    <input {...input} id={id} type={type} value="true"/> &nbsp;
                    <label><em>{  loadLanguage() == "en" ||  loadLanguage() == undefined ? "Agree Term and condition" : "យល់ព្រម"} <a href="/">{ loadLanguage() == "en" || loadLanguage() == undefined ? "Learn more" :"មើលលំអិត" }</a></em></label>
                </FormGroup>
                <HelpBlock>
                    {meta.touched && meta.error ? meta.error : null }
                </HelpBlock>
            </FormGroup>
        );
    }
}
FormCheckbox.propTypes = {
    meta: PropTypes.object
};