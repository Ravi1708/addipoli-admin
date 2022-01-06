import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Spinner";
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
import { deletepartner, listpartners } from "../actions/hubActions";
import { logout } from "../actions/userActions";

const DeliveryPartner = ({ match, history }) => {
  const dispatch = useDispatch();

  const partnerList = useSelector((state) => state.partnerList);
  const { loading, partners, error } = partnerList;

  const partnerDelete = useSelector((state) => state.partnerDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = partnerDelete;

  //   const productCreate = useSelector((state) => state.productCreate);
  //   const {
  //     loading: loadingCreate,
  //     error: errorCreate,
  //     success: successCreate,
  //     product: createdProduct,
  //   } = productCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });
    if (!userInfo) {
      history.push("/login");
    }
    // if (successCreate) {
    //   history.push(`/editproduct/${createdProduct._id}/edit`);
    // } else {
    //   dispatch(listProducts());
    // }
    dispatch(listpartners());
    if (error == "Forbidden resource") {
      dispatch(logout);
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    error,
    // successCreate,
    // createdProduct,
  ]);

  const deleteHandler = (id) => {
    dispatch(deletepartner(id));
  };

  //   const createProductHandler = () => {
  //     dispatch(createProduct());
  //   };

  const tabledata = {
    columns: [
      {
        label: "S.NO",
        field: "index",
        sort: "asc",
        width: 150,
      },
      {
        label: "Partner ID",
        field: "partnerId",
        sort: "asc",
        width: 270,
      },
      {
        label: "Product Name",
        field: "partnerName",
        sort: "asc",
        width: 200,
      },
      {
        label: "Phone Number",
        field: "InchargeNumber",
        sort: "asc",
        width: 100,
      },
      {
        label: "Delivery Area",
        field: "location",
        sort: "asc",
        width: 200,
      },
      {
        label: "Incharge Name",
        field: "partnerIncharge",
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

    rows: partners
      ? partners.map((partner, index) => {
          return {
            index: index + 1,
            partnerName: partner.partnerName,
            partnerId: partner.partnerId,
            InchargeNumber: partner.InchargeNumber,
            location: partner.location,
            partnerIncharge: partner.partnerIncharge,
            action: (
              <>
                <LinkContainer
                  role="button"
                  className=" btn btn-circle btn-success"
                  to={`/editdeliverypartner/${partner.partnerId}`}
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
                </LinkContainer>
                <a
                  role="button"
                  className=" btn btn-circle btn-danger "
                  onClick={(e) => {
                    e.preventDefault();
                    deleteHandler(partner.partnerId);
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
              <div className="col-md-5 align-self-center">
                <ol className="breadcrumb justify-content">
                  <li className="breadcrumb-item">
                    <a to="/dashboard">Home</a>
                  </li>
                  <li className="breadcrumb-item active">
                    Delivery Partner Details
                  </li>
                </ol>
              </div>
              <div className="col-md-7 align-self-center text-end">
                <div className="d-flex justify-content-end align-items-center">
                  <a
                    role="button"
                    className="btn waves-effect waves-light btn-rounded btn-outline-success"
                    href="/adddeliverypartner"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-person-plus-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      <path
                        fill-rule="evenodd"
                        d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                      />
                    </svg>
                    Create New Delivery Partner
                  </a>
                </div>
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
                    <h3 className="card-title">Delivery Partner Details</h3>
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

export default DeliveryPartner;
