/**
 * Created by CHHAI CHIVON
 */
import React, { PropTypes } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router'
import { Form, FormGroup, Button } from 'react-bootstrap';
import { AutoComplete } from 'redux-form-material-ui';
import { AutoComplete as MUIAutoComplete } from 'material-ui';
import Search from 'material-ui/svg-icons/action/search';
import Maps from 'material-ui/svg-icons/maps/place';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const product = {
    width: '330px',
    height: '31px',
    backgroundColor: 'white',
    borderRadius: '2px'
};
const location = {
    width: '100%',
    height: '31px',
    backgroundColor: 'white',
    borderRadius: '2px'
};

class FormSearch extends React.Component {
    constructor(props){
        super(props);
    }

    handleSearch(){
        if((this.state.name == '') && (this.state.location == '')){
            browserHistory.push('/');
        }else if((this.state.name != '') && (this.state.location == '')){
            this.props.loadProducts(this.state.location,this.state.name,this.state.limit);
            browserHistory.push('/products/search?pName='+this.state.name+'&limit='+this.state.limit);
        }else if((this.state.name == '') && (this.state.location != '')){
            this.props.loadProducts(this.state.location,this.state.name,this.state.limit);
            browserHistory.push('/products/search?lName='+this.state.location+'&limit='+this.state.limit);
        }
        else if((this.state.name != '') && (this.state.location != '')){
            this.props.loadProducts(this.state.location,this.state.name,this.state.limit);
            browserHistory.push('/products/search?lName='+this.state.location+'&pName='+this.state.name+'&limit='+this.state.limit);
        }
    }

    render(){

        return(
            <div>
                <MuiThemeProvider>
                    <Form onSubmit={} inline>
                        <FormGroup controlId="formInlineName">
                            <Field
                                name="name"
                                component={ AutoComplete }
                                style={product}
                                hintText="Product name"
                                floatingLabelText={<Search style={{width: '38px',height:'38px',color: 'green',opacity: '0.2'}} />}
                                floatingLabelFixed={true}
                                floatingLabelStyle={{marginTop: '-14px'}}
                                filter={MUIAutoComplete.fuzzyFilter}
                                onUpdateInput={this.handleGetProductNames}
                                underlineShow={false}
                                fullWidth={true}
                                hintStyle={{margin: '-15px 0px 0px 35px'}}
                                inputStyle={{margin: '0px 0px 0px 35px'}}
                                textFieldStyle={{
                                    width:"100%",
                                    height: '100%',
                                    lineHeight: '5px'
                                }}
                            />
                        </FormGroup>
                       {/* <Button style={{"width":'40px',height:'32px', color:'white', opacity: '0.9'}} type="submit" disabled={this.props.submitting}>
                            <Search style={{ margin: '-5px 0px 0px -8px', width: '30px',height:'30px', color: 'green'}} />
                        </Button>*/}
                    </Form>
                </MuiThemeProvider>
            </div>
        )
    }
}

FormSearch = reduxForm({
    form: 'form-search'
})(FormSearch);

export default FormSearch;