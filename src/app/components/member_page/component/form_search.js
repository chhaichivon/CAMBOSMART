import React from 'react';
import { FormGroup,InputGroup, Button, FormControl,Row, Col, Glyphicon } from 'react-bootstrap';
import Autosuggest from 'react-autosuggest';
import './auto_suggest.css';
import './styles.css';

const languages = [
    {
        name: 'C'
    },
    {
        name: 'Elm'
    }
];

const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : languages.filter(lang =>
        lang.name.toLowerCase().slice(0, inputLength) === inputValue
    );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
    <div>
        {suggestion.name}
    </div>
);

let cate = '';

class FormSearch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectValue: '',
            value: '',
            suggestions: []
        };
        this.handleSelect = this.handleSelect.bind(this);
        this.handelSearch = this.handelSearch.bind(this);
    }

    onChange (event, { newValue }) {
        console.log(newValue);
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested ({ value }) {
        this.setState({
            suggestions: getSuggestions(value)
        });
        console.log(this.state.suggestions);
    };

    onSuggestionsClearRequested () {
        this.setState({
            suggestions: []
        });
    };

    componentWillMount(){
        this.setState({selectValue: 'cc'})
    }
    handleSelect (event) {
        cate = event.target.value;
    }

    handelSearch () {
        console.log(this.state.value + ' : ' + cate);
    };

    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: 'What you are looking for...',
            value,
            onChange: this.onChange.bind(this)
        };
        return (
           <div className="main-header">
               <div className="container form-search">
                   <Row className="form-search">
                       <Col sm={3} lg={3} className="wrapper-logo">
                          <a href="/"> <img className="hidden-xs small-logo" src="/icon/cambo-smart3.png" alt="cambo logo"/></a>
                       </Col>
                       <Col xs={12} sm={7} md={7} lg={7}>
                           <FormGroup>
                               <InputGroup>
                                   <InputGroup.Addon style={{color: 'white', border: '2px', padding: '0px', borderTopLeftRadius: '4px', background: '#f77416'}}>
                                       <FormGroup>
                                           <FormControl onChange={this.handleSelect} componentClass="select" type="select" name="username" ref="username"
                                                        style={{ width: '150px', height: '40px', color: 'white', borderColor:'gray', background: '#f77416', padding: '0px 0px 0px 30px'}}>
                                               <option  value="Categories">Categories</option>
                                               <option value='Location'>Location</option>
                                           </FormControl>
                                           <FormControl.Feedback style={{left: 0, top: 2}}>
                                               <Glyphicon glyph="list" />
                                           </FormControl.Feedback>
                                       </FormGroup>
                                   </InputGroup.Addon>
                                   <Autosuggest
                                       suggestions={suggestions}
                                       onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
                                       onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
                                       getSuggestionValue={getSuggestionValue}
                                       renderSuggestion={renderSuggestion}
                                       inputProps={inputProps}
                                   />
                                   <InputGroup.Button>
                                       <Button onClick={this.handelSearch} bsStyle="warning" style={{color: 'white', background: '#f77416', height: '40px'}}>
                                           <i className="fa fa-search" aria-hidden="true"><span className="hidden-xs hidden-sm">&nbsp;&nbsp;SEARCH</span></i>
                                       </Button>
                                   </InputGroup.Button>
                               </InputGroup>
                           </FormGroup>
                       </Col>
                       <Col md={2} lg={2} sm={2}>
                           <Button bsStyle="warning" className="btn_free_post hidden-xs">FREE POST</Button>
                       </Col>
                   </Row>
               </div>
           </div>

        );
    }
}

export default FormSearch;