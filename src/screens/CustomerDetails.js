import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button, Table, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Spinner";
import { deleteUser, listUsers } from "../actions/userActions";
import {
  MDBDataTable,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBDataTableV5,
} from "mdbreact";

const CustomerDetails = ({ match, history }) => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  useEffect(() => {
    if (userInfo) {
      dispatch(listUsers());
    } else {
      history.push("/login");
    }
  }, [dispatch, successDelete, history, userInfo]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteUser(id));
    }
  };
  console.log(userInfo);
  var tabledata = [];

  if (users) {
    tabledata = {
      columns: [
        {
          label: "S.NO",
          field: "index",
          sort: "asc",
          width: 150,
        },
        {
          label: "User Name",
          field: "name",
          sort: "asc",
          width: 270,
        },
        {
          label: "Email ID",
          field: "email",
          sort: "asc",
          width: 200,
        },
        {
          label: "phone Number",
          field: "phone",
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
      rows: users.map((user, index) => {
        return {
          index: index + 1,
          name: user.username,
          email: user.email,
          phone: user.phoneNumber,
          // address: user.address,
          // pincode: user.pincode,
          action: (
            <>
              {/* <a
                role="button"
                className="btn btn-circle btn-info"
                href="/viewcustomers"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-eye"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </a> */}
              <a
                role="button"
                className="btn btn-circle btn-danger"
                href="#"
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
      }),
    };
  }

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
                  <li className="breadcrumb-item active">Customer Details</li>
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
                    <h3 className="card-title">Customer Details</h3>
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

export default CustomerDetails;
