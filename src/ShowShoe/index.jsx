import React, { Component } from "react";
import DanhSachSanPham from "./productList";
import Modal from "./modal";
import data from './data.json'
import GioHang from './cart'
import Search from "./search";
export default class ShowShoe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listProduct: data,
            detailProduct: null,
            arrCart: [],
            volume: 0,
            keyword: '',
        }
    }
    showDetails = (product) => {
        this.setState({ detailProduct: product });
    }

    findIndexProduct = (id) => {
        return this.state.arrCart.findIndex((product) => product.Id == id);
    }
    addCart = (product) => {
        const productCart = {
            Id: product.id,
            Name: product.name,
            Price: product.price,
            Quantity: 1,
            Img: product.image,
            Total: '',
        }
        const arrCartClone = [...this.state.arrCart];
        const index = this.findIndexProduct(product.id);
        console.log(index)
        if( index !== -1){
            arrCartClone[index].Quantity += 1;
        }
        else{
            arrCartClone.push(productCart);
        }
        this.setState({
            arrCart: arrCartClone,
        })
    }
    deleteCart = (id) => {
        const afterDel = this.state.arrCart.filter((product) => product.Id !== id);
        this.setState({
            arrCart: afterDel,
        })
    }
    changeVolumeCart = (id, flag) =>{
        const arrCartClone = [...this.state.arrCart];
        const index = this.findIndexProduct(id);
        console.log(index)
        if( index !== -1){
            if(flag){arrCartClone[index].Quantity += 1;}
            else{
                if( arrCartClone[index].Quantity>1){
                    arrCartClone[index].Quantity -= 1;}
                }
        }
        this.setState({
            arrCart: arrCartClone,})
    }
    showVolumeCart = () =>{
        return this.state.arrCart.reduce((total, product) => total += product.Quantity, 0);
    }
    totalPriceCart = () =>{
        return this.state.arrCart.reduce((total, product) => total += (product.Quantity*product.Price), 0);
    }
    getKeyWord = (keyword) => {
        this.setState({
            keyword,
        })
    }
    render() {
        // filter 
        const {keyword, listProduct } = this.state;
        const afterSearch = listProduct.filter((product) => {
            return product.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        });
        return (
            <>
                <div className="container pb-4">
                    <nav className=" container navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">SHOE STORE</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Brands
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Adidas</a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">Nike</a>
                                    </div>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <Search getKeyWord={this.getKeyWord}/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="button" data-toggle="modal" data-target="#cartProduct">Cart ({this.showVolumeCart()})</button>
                            </form>
                        </div>
                    </nav>
                </div>
                <DanhSachSanPham addCart={this.addCart} renderList={afterSearch} getId={this.showDetails} />
                <Modal showDetails={this.state?.detailProduct} />
                <GioHang changeVolumeCart={this.changeVolumeCart} addCart={this.state.arrCart} deleteCart={this.deleteCart} totalPriceCart={this.totalPriceCart}/>
            </>
        );
    }
}
