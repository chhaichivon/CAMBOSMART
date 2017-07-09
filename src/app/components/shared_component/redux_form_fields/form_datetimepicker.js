import React,{ PropTypes } from '../../../../../node_modules/react';
import { FormGroup, FormControl, Glyphicon, HelpBlock } from '../../../../../node_modules/react-bootstrap';

export default class FormDateTimePicker extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            provinces: [
                'Phnom Penh', 'Banteay Meanchey',
                'Battambong', 'Kampong Cham', 'Kampong Chhnang',
                'Kampong Speu', 'Kampong Thom', 'Kampot', 'Kandal', 'Koh Kong',
                'Kep', 'Kratie', 'Mondulkiri', 'Oddar Meanchey',
                'Pailin', 'Preah Sihanouk', 'Peah Vihear', 'Pursat',
                'Prey Veng', 'Ratanakiri', 'Siem Reap', 'Stung Treng', 'Svay Rieng',
                'Takeo', 'Tboung Khmum'
            ]
        };
    }

    render(){
        const { input, type, icon, children, meta } = this.props;

        return(
            <FormGroup controlId="formControlsSelect" validationState={!meta.touched ? null : (meta.error ? 'error' : 'success')}>
                <FormControl {...input} componentClass={type} type={type} style={{paddingLeft: '30px', height: '40px'}}>
                    <option value=''>Location</option>
                    {this.state.provinces.sort().map((province, index) => {
                        return(
                            <option key={index} value={province}>{province}</option>
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
FormDateTimePicker.propTypes = {
    meta: PropTypes.object,
    input: PropTypes.object,
    type: PropTypes.string,
    icon: PropTypes.string

};
