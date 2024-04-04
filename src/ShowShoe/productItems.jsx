import React, { Component } from "react";

export default class SanPham extends Component {
  showDetails = (product) => {
    this.props.id(product);
  }
  addCart = (product) => {
    this.props.addCart(product);
  }
  render() {
    const {product} = this.props;
    return (
      <div className="col-sm-4">
        <div className="card mb-4">
          <img className="card-img-top" src={product.image} alt="" />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p>{product.shortDescription}</p>
            <button className="btn btn-outline-secondary" data-toggle="modal" data-target="#showDetails" onClick={()=>this.showDetails(product)}>Chi tiết</button>
            <button className="btn btn-dark ml-1" onClick={()=>this.addCart(product)}>Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    );
  }
}