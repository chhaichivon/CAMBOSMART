import React, { PropTypes } from "../../../../../node_modules/react";
import { FormGroup, HelpBlock, Button } from "../../../../../node_modules/react-bootstrap";

export default class FormSimpleButton extends React.Component {
    render() {
        const {error, invalid, submitting, handleClick, label, icon} = this.props;
        return (
            <div>
                {error &&
                <FormGroup validationState="error">
                    <HelpBlock>{error}</HelpBlock>
                </FormGroup>}

                <FormGroup className="submit">
                    <Button style={{background: '#f77416'}} block disabled={invalid || submitting} onClick={handleClick}>
                        <i className={icon} aria-hidden="true">&nbsp;&nbsp;&nbsp;{label}</i>
                    </Button>
                </FormGroup>
            </div>
        );
    }
}
FormSimpleButton.propTypes = {
    error: PropTypes.string,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool,
    buttonSaveLoading: PropTypes.string,
    buttonSave: PropTypes.string
};
