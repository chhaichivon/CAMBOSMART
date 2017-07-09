import React from 'react';
import './form_search.css';
class ButtonFreePost extends React.Component{

    static selectCategory(){
        window.location.assign("/member/ads/add-cat");
    }

    render(){
        return(
            <div className="custome-button-free-post">
               <button type="button" className="m-btn-free-post">
                    &nbsp;&nbsp;&nbsp;<span className="m-text" onClick={ButtonFreePost.selectCategory}>Post Free Ads</span>
                </button>
            </div>
        );
    }
}
export default ButtonFreePost;