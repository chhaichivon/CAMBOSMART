import React from 'react';

class ProductItem extends React.Component{
    render(){
        return (
            <div className="col-xs-3 col-sm-3">
                <div className="thumbnail">
                    <img src="icon/cambodia.jpg" alt="..."/>
                    <div className="caption">
                        <h3>Thumbnail label</h3>
                        <p>hello every one</p>
                        <p>
                            <a href="#" className="btn btn-primary" role="button">Button</a>
                            <a href="#" className="btn btn-default" role="button">Button</a>
                        </p>
                    </div>
                </div>
            </div>

        )
    }

}
export default ProductItem;