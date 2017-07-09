import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { DropdownButton, MenuItem} from 'react-bootstrap';
import { Link } from 'react-router';
import { Row, Col, Button, Table, Panel } from 'react-bootstrap';
import {fetchViewWebsiteAction} from '../../../../actions/admin/common';

class VisitorDetail extends React.Component {

    componentWillMount(){
        this.props.fetchViewWebsiteAction({
            year: 0,
            month: 0,
            day: 0
        })
    }

    render(){
        return(
          <Row style={{marginTop: '25px', marginLeft: '-20px'}}>
              <Col lg={4}>
                  <Panel className="advertisement" header={<strong>Number of Visitors</strong>} style={{textAlign: 'center'}}>
                      <Table responsive>
                        <tbody>
                            { this.props.fetchWebsite.visitors == undefined ? null :
                                this.props.fetchWebsite.visitors.length <= 0 ? null :
                                    <tr>
                                        <td>Today</td>
                                        <td>{this.props.fetchWebsite.visitors.length}</td>
                                    </tr>
                            }
                            { this.props.fetchWebsite.visitors == undefined ? null :
                                this.props.fetchWebsite.visitors.length <= 0 ? null :
                                    <tr>
                                        <td>Total</td>
                                        <td>{this.props.fetchWebsite.visitors[0].total}</td>
                                    </tr>
                            }
                        </tbody>
                      </Table>
                  </Panel>
              </Col>
          </Row>
        );
    }
}

function mapStateToProps(state){
    return{
        fetchWebsite: state.fetchWebsite
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchViewWebsiteAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (VisitorDetail);