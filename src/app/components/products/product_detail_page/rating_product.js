import React from 'react';
import { zoom } from 'jquery-zoom';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionPostStarRating, actionGetStarRatingByProIdAndIp } from './../../../actions/products/rating';
import StarRating from 'react-star-rating';
import '../../../../../node_modules/react-star-rating/dist/css/react-star-rating.min.css';
import { Link } from 'react-router';

let productIdUrl = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

class ProductDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rate_number: 1,
            star_rated: 1,
            onrating: true,
            onEditRating: false,
        };
    }

    componentWillMount() {
        //TODO: get start rating by product id
        this.props.actionGetStarRatingByProIdAndIp(productIdUrl);   
    }
    componentWillReceiveProps(data) {
         this.setState({
            star_rated: data.getOneStarRating[0] != undefined ? data.getOneStarRating[0].raters.star : 1,
        });
    }

    // handle star rating in react class
    handleRatingClick = (e, data) => {
        this.setState({rate_number: data.rating});

        this.props.actionPostStarRating({
            starRating: {
                productId: { $oid: productIdUrl},
                raters: [
                    {
                        ip: "",
                        star: data.rating
                    }
                ]
            }
        });
    }
    handleEditRating = () => {
        this.setState({onEditRating: true});
    }

    render(){
        $(document).ready(function(){
            $("#rater").hover(function(){
                $("#editStar").show();
            }, function () {
                $("#editStar").hide();
            });
        });
        
        return(
            <span>
                {this.state.star_rated != 1 ? 
                    <span>
                        <Link id="rater">
                            {this.state.onEditRating === false ? 
                                <StarRating name="small-rating" caption="" size={30} totalStars={5} rating={this.state.star_rated} onRatingClick={this.handleRatingClick} />
                                : null
                            }
                            {this.state.onEditRating === true ? 
                                <StarRating name="small-rating" caption="" size={30} totalStars={5} onRatingClick={this.handleRatingClick} /> 
                                : null
                            }
                            &nbsp;<button id="editStar" className="btn btn-xs" style={{display: 'none'}} onClick={this.handleEditRating}><i className="fa fa-pencil" /></button>
                        </Link>
                    </span>
                    : 
                    null
                }
                {this.state.star_rated === 1 ? 
                    <StarRating name="small-rating" caption="" size={30} totalStars={5} onRatingClick={this.handleRatingClick} />
                    : 
                    null
                }
            </span>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        postStarRating: state.postStarRating,
        getOneStarRating: state.getOneStarRating
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ 
        actionPostStarRating, 
        actionGetStarRatingByProIdAndIp
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);