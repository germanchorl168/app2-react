import React from "react";

export const ProductItem = ({ id, name, description, img, price }) => {
    const Section = (props) => {
        return (
          <div className="card-body">
            <p className="card-text">{description}</p>
          </div>
        );
      }
    var state={ show: true };
    function toggle(){
      this.setState({show:!state.show});
    }
    return(
    <div>
      <div className="product">
        <a href="#">
          <div className="product_img">
            <img src={img.default} alt="" />
          </div>
        </a>
        <div className="product_footer">
          <h1>{name}</h1>
          <p className="description">{description}</p>
          <p className="price">{price}</p>
        </div>
        <div className="buttom">
          <button className="btn btn-primary" onClick={toggle.bind(this)}>
            Ver más
          </button>
          {state.show ? <Section /> : null}
        </div>
      </div>
    </div>
  );
};



 
