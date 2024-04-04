import React, { Component } from "react";
import SanPham from "./productItems";

export default class DanhSachSanPham extends Component {
  renderUI = () => {
    const {renderList, getId, addCart} = this.props;
    return renderList.map((product)=> {
      return <SanPham key={product.id} product={product} id={getId} addCart={addCart}/>
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
         {this.renderUI()}
        </div>
      </div>
    );
  }
}