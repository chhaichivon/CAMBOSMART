import React, { PropTypes } from "../../../../../node_modules/react";
import { FormGroup, HelpBlock } from "../../../../../node_modules/react-bootstrap";

export default class FormSimpleCheckbox extends React.Component {
    render(){
        const { input, meta, type, id, placeholder } = this.props;
        return(
            <FormGroup validationState={!meta.touched ? null : (meta.error ? 'error' : 'success')}>
                <FormGroup>
                    <input {...input} id={id} type={type} value="true"/> &nbsp;
                    <label><em>{placeholder}</em></label>
                </FormGroup>
                <HelpBlock>
                    {meta.touched && meta.error ? meta.error : null }
                </HelpBlock>
            </FormGroup>
        );
    }
}
FormSimpleCheckbox.propTypes = {
    meta: PropTypes.object
};