import React, { Component } from "react";

export default class GioHang extends Component {
    addCart = () => {
        const { addCart } = this.props;
        return addCart.map((product) => {
            return (
                <tr key={product.Id}>
                    <td>{product.Id}</td>
                    <td>{product.Name}</td>
                    <td>${product.Price.toLocaleString()}</td>
                    <td><button className="btn btn-outline-secondary mr-1" onClick={()=>this.changeVolume(product.Id, false)}>-</button>{product.Quantity}<button className="ml-1 btn btn-outline-secondary" onClick={()=>this.changeVolume(product.Id, true)}>+</button></td>
                    <td><img width={50} src={product.Img} /></td>
                    <td>${(product.Price*product.Quantity).toLocaleString()}</td>
                    <td><button className="btn btn-outline-danger" onClick={()=>this.props.deleteCart(product.Id)}>Delete</button></td>
                </tr>
            )
        })
    }
    changeVolume = (id, flag) => {
        this.props.changeVolumeCart(id, flag)
    }
    
    render() {
        return (
            <>
                <div className="modal fade  bd-example-modal-lg" id="cartProduct" tabIndex={-1} role="dialog" aria-labelledby="cartProduct" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="cartProduct">Giỏ hàng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Image</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.addCart()}
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <h5>TOTAL: ${this.props.totalPriceCart().toLocaleString()}</h5>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-success">Check out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}