import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {Link} from 'react-router';
import {Row, Col, Panel, Table} from 'react-bootstrap';
import {fetchCategoryAction} from './../../../../../actions/admin/category/category';
import {loadState} from './../../../../../localstorages/local_storage';

class DetailLevelOneCategory extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.fetchCategoryAction({
            token: loadState() != undefined ? loadState().token : '',
            id: this.props.params.cat_id
        })
    }

    render() {
        const category = this.props.detailCategory.category;
        return (
            <div>
                <br/><br/><br/>
                <Row>
                    <Col lgOffset={2} lg={8}>
                        <Link to="/admin/category/list-category/list-level-one">
                            <b>
                                <i className="fa fa-angle-double-left" aria-hidden="true">{' '}Back</i>
                            </b>
                        </Link>
                        <br/><br/>
                        <Panel className="advertisement-detail" header={<strong>Level One Category Information</strong>} style={{textAlign: 'center'}}>
                            <Table responsive>
                                { category == undefined ? null :
                                    <tbody>
                                        <tr>
                                            <td style={{textAlign: 'left'}}><strong>Icon</strong></td>
                                            <td style={{textAlign: 'left'}}><i className={category.categoryIcon} aria-hidden="true">{''}</i></td>
                                        </tr>
                                        <tr>
                                            <td style={{textAlign: 'left'}}><strong>Name(Khmer)</strong></td>
                                            <td style={{textAlign: 'left'}}>{category.khName}</td>
                                        </tr>
                                        <tr>
                                            <td style={{textAlign: 'left'}}><strong>Name(English)</strong></td>
                                            <td style={{textAlign: 'left'}}>{category.categoryName}</td>
                                        </tr>
                                        <tr>
                                            <td style={{textAlign: 'left'}}><strong>Description</strong></td>
                                            <td style={{textAlign: 'left'}}>{category.categoryDescription}</td>
                                        </tr>
                                        <tr>
                                            <td style={{textAlign: 'left'}}><strong>Common</strong></td>
                                            <td style={{textAlign: 'left'}}>{category.commonCategory == 1 ? 'Yes' : 'No'}</td>
                                        </tr>
                                        <tr>
                                            <td style={{textAlign: 'left'}}><strong>Level</strong></td>
                                            <td style={{textAlign: 'left'}}>1</td>
                                        </tr>
                                    </tbody>
                                }
                            </Table>
                        </Panel>
                    </Col>
                </Row>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        detailCategory: state.detailCategory
    })
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchCategoryAction}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailLevelOneCategory);
