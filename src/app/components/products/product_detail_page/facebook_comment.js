import React from 'react';

class FacebookComment extends React.Component {

    componentWillMount() {
       window.fbAsyncInit = function() {
            FB.init({
            appId      : '1307001952740433',
            cookie     : true,
            xfbml      : true,
            version    : 'v2.8'
            });
            FB.AppEvents.logPageView();   
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    render(){
        var productIdUrl = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        return(
            <div className="fb-comments" 
                data-href={"http://cambosmart.codingate.com/en/single/" + productIdUrl}
                data-width="100%" 
                data-order-by="reverse_time" 
                data-numposts="3">
            </div>
        );
        // data-href={"http://localhost:8080/products/detail/" + productIdUrl} 
    }
}
export default FacebookComment;