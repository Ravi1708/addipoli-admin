import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOngoingOrders } from "../actions/orderActions";
import Loader from "../components/Spinner";
import { useHistory } from "react-router";
import Message from "../components/Message";
import { PRODUCT_CREATE_RESET } from "../constants/productConstants";
import { LinkContainer } from "react-router-bootstrap";
import {
  MDBDataTable,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBDataTableV5,
} from "mdbreact";
import { NavLink } from "react-router-dom";

const ViewOngoingOrder = ({ match, history }) => {
  const orderID = match.params.id;
  const pageNumber = match.params.pageNumber || 1;
  const dispatch = useDispatch();

  const OngoingOrderList = useSelector((state) => state.OngoingOrderList);
  const { loading, orders, error } = OngoingOrderList;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listOngoingOrders());
  }, [dispatch, history, userInfo]);

  const deleteHandler = (id) => {
    // dispatch(deleteProduct(id));
  };

  const createProductHandler = () => {
    // dispatch(createProduct());
  };

  const order = history.location.state;

  return (
    <div>
      <div className="skin-default fixed-layout">
        <div className="page-wrapper">
          {/* <!-- ============================================================== -->
                    <!-- Container fluid  -->
                    <!-- ============================================================== --> */}
          <div className="container-fluid">
            {/* <!-- ============================================================== -->
                        <!-- Bread crumb and right sidebar toggle -->
                        <!-- ============================================================== --> */}
            <div className="row page-titles">
              <div className="col-md-5 align-self-center">
                <ol className="breadcrumb justify-content">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/completed">View Ongoing Order</a>
                  </li>
                  <li className="breadcrumb-item active">
                    Ongoing Order Details
                  </li>
                </ol>
              </div>
            </div>
            {/* <!-- ============================================================== -->
                        <!-- End Bread crumb and right sidebar toggle -->
                        <!-- ============================================================== -->

                        <!-- ============================================================== -->
                        <!-- Start Page Content -->
                        <!-- ============================================================== --> */}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Ongoing Order Details</h3>
                    <div className="table-responsive m-t-40">
                      <table
                        id="myTable"
                        className="table table-striped border"
                      >
                        {console.log(order)}
                        <tbody>
                          <tr>
                            <th>Order ID</th>
                            <td>{order.orderId}</td>
                          </tr>
                          <tr>
                            <th>Customer Name</th>
                            <td>{order.orderAddress.name}</td>
                          </tr>
                          <tr>
                            <th>Customer Phone Number</th>
                            <td>{order.orderAddress.phoneNumber}</td>
                          </tr>
                          <tr>
                            <th>Delivery Address</th>
                            <td>{order.orderAddress.address}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Product Details</h3>
                    <div className="table-responsive m-t-40">
                      <table
                        id="myTable"
                        className="table table-striped border"
                      >
                        <thead>
                          <tr>
                            <th>S.NO</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                          </tr>
                        </thead>
                        <tbody>
                          {order.orderItems.map((item, index) => {
                            return (
                              <tr>
                                <td>{index + 1}</td>
                                <td>{item.product.name}</td>
                                <td>{item.quantity}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <a href="/ongoing" type="submit" class="btn btn-dark" > Back</a>
                        </div>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- ============================================================== -->
                        <!-- End PAge Content -->
                        <!-- ============================================================== --> */}
          </div>
          {/* <!-- ============================================================== -->
                    <!-- End Container fluid  -->
                    <!-- ============================================================== --> */}
        </div>
      </div>
    </div>
  );
};

export default ViewOngoingOrder;
