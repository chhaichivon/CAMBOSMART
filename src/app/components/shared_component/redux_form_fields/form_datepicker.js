import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { FormGroup, FormControl, HelpBlock } from "../../../../../node_modules/react-bootstrap";
import './../../admin_page/component/merchant/list/style.css';
const FormDatePicker = ({input, dateFormat, placeholder, defaultDate, handleChange, meta }) => (
    <FormGroup validationState={!meta.touched ? null : (meta.error ? 'error' : 'success')}>
        <DatePicker
            {...input}
            //dateForm={dateFormat}
            dateFormat="YYYY-MM-DD"
            placeholderText={placeholder}
            selected={defaultDate}
            onChange={handleChange}
            //isClearable={true}
            showYearDropdown
            dropdownMode="select"
            className="form_datepicker_style"
            highlightDates={[moment(), moment()]}
        />
        <FormControl.Feedback style={{left: 0, marginTop: '13px', width: '30px', height: '30px'}} autoComplete="off">
            <i className="fa fa-calendar" aria-hidden="true"></i>
        </FormControl.Feedback>
        <HelpBlock>
            {meta.touched && meta.error ? meta.error : null}
        </HelpBlock>
    </FormGroup>
);


export default FormDatePicker