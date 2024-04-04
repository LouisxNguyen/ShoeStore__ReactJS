import React, { Component } from "react";

class Modal extends Component {
    render() {
        const {showDetails} = this.props
        return (
            <>
                <div className="modal fade" id="showDetails" tabIndex={-1} role="dialog" aria-labelledby="showDetails" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="showDetails">{showDetails?.name}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            <img className="card-img-top d-fluid" src={showDetails?.image} alt="" />
                            <small>{showDetails?.alias}</small>
                            <p>{showDetails?.description}</p>
                            <p>In-stock: {showDetails?.quantity}</p>
                            <h4>${showDetails?.price}</h4>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default Modal;