/**
 * Created by CHHAI CHIVON
 */
import React from 'react';
import { Form, FormGroup, FormControl, Col,Row, ControlLabel, InputGroup, Radio, Checkbox, Button } from 'react-bootstrap';




class Pagination extends Reac.Component{
    constructor(props){
       super(props);
    }
    componentDidMount(){

    }
    render(){
        return(
            <Col xs={6} sm={6}>
                <div className="btn-toolbar custom-pagination">
                    <div className="btn-group">
                        <nav aria-label="Page navigation">
                            <ul className="pagination">
                                <li>
                                    <a href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li>
                                    <a href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </Col>
        );
    }
}
export default Pagination;