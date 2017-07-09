import React,{ PropTypes } from '../../../../../node_modules/react';
import { FormGroup, FormControl, Glyphicon, HelpBlock } from '../../../../../node_modules/react-bootstrap';

export default class AsyncFormField extends React.Component {
    render(){
        const { input, label, children, type, meta: { asyncValidating, touched, error } } = this.props;
        return(
            <div className={asyncValidating ? 'async-validating' : ''}>
                <FormGroup validationState={!touched ? null : (error ? 'error' : 'success')}>
                    <FormControl {...input} type={type} placeholder={label} style={{paddingLeft: '30px', height: '40px'}} autoComplete="off">
                        {children}
                    </FormControl>
                    <FormControl.Feedback style={{left: 0, marginTop: '13px', width: '30px', height: '30px'}}>
                        <i className="fa fa-phone" aria-hidden="true"/>
                    </FormControl.Feedback>
                    <HelpBlock>
                        {touched && error && <span>{error}</span>}
                    </HelpBlock>
                </FormGroup>
            </div>
        );
    }
}
AsyncFormField.propTypes = {
    meta: PropTypes.object,
    input: PropTypes.object,
    label: PropTypes.string,
    type: PropTypes.string
};
