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

const OngoingOrder = ({ match }) => {
  let history = useHistory();
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
    const interval = setInterval(() => {
      dispatch(listOngoingOrders());
    }, 60000);
    return () => clearInterval(interval);
  }, [dispatch, history, userInfo]);

  const deleteHandler = (id) => {
    // dispatch(deleteProduct(id));
  };

  const createProductHandler = () => {
    // dispatch(createProduct());
  };

  const tabledata = {
    columns: [
      {
        label: "S.NO",
        field: "index",
        sort: "asc",
        width: 150,
      },
      {
        label: "Order ID",
        field: "orderId",
        sort: "asc",
        width: 270,
      },
      {
        label: "customer name",
        field: "customerName",
        sort: "asc",
        width: 200,
      },
      {
        label: "Phone Number",
        field: "phone",
        sort: "asc",
        width: 100,
      },
      {
        label: "Delivery Status",
        field: "status",
        sort: "asc",
        width: 100,
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 200,
      },
    ],

    rows: orders
      ? orders
          .filter((filteredorders) => filteredorders.orderStatus === "Ongoing")
          .map((order, index) => {
            return {
              index: index + 1,
              orderId: order.orderId,
              customerName: order.orderAddress.name,
              phone: order.orderAddress.phoneNumber,
              status: order.orderStatus,
              action: (
                <>
                  <NavLink
                    to={{
                      pathname: `/viewongoing/${order.orderId}`,
                      state: order,
                    }}
                    role="button"
                    className="btn btn-circle btn-info"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-pencil"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg>
                  </NavLink>
                  <a
                    role="button"
                    className="btn btn-circle btn-danger"
                    onClick={(e) => {
                      e.preventDefault();
                      deleteHandler(order.orderId);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </a>
                </>
              ),
            };
          })
      : [],
  };

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
              <div className="col-md-12 align-self-center">
                <ol className="breadcrumb justify-content">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
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
                      {loading ? (
                        <Loader />
                      ) : error ? (
                        <Message variant="danger">{error}</Message>
                      ) : (
                        <MDBDataTable
                          striped
                          medium
                          bordered
                          data={tabledata}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Ongoing Order Details</h3>
                    <div className="table-responsive m-t-40">
                      <table
                        id="myTable"
                        className="table table-striped border"
                      >
                        <thead>
                          <tr>
                            <th>S.NO</th>
                            <th>Order ID</th>
                            <th>Product Name</th>
                            <th>Customer Name</th>
                            <th>Customer Phone Number</th>
                            <th>Delivery Address</th>
                            <th>Delivery partner Name</th>
                            <th>Delivery partner Phone Number</th>
                            <th>Order Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>01</td>
                            <td>12345</td>
                            <td>Siva</td>
                            <td>12345</td>
                            <td>Peelamedu</td>
                            <td>12345</td>
                            <td>Siva</td>
                            <td>123456789</td>
                            <td>Waiting for Delivery Partner</td>
                            <td>
                              <a
                                to="/dashboard"
                                role="button"
                                className="btn btn-success waves-effect btn-rounded waves-light"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  className="bi bi-pencil"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                </svg>
                              </a>
                              <a
                                to="/deleteorder"
                                role="button"
                                className="btn btn-danger waves-effect btn-rounded waves-light"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  className="bi bi-trash"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                  <path
                                    fill-rule="evenodd"
                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                  />
                                </svg>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
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

export default OngoingOrder;
