import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Spinner";
import { createitem } from "../actions/productActions";
import { FormContainer } from "../components/FormContainer";

const AddRawmaterialList = ({ match, history }) => {
  const [itemId, setitemId] = useState();
  const [itemName, setitemName] = useState();
  const [quantity, setquantity] = useState();
  const [type, settype] = useState();

  const dispatch = useDispatch();

  const itemCreate = useSelector((state) => state.itemCreate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = itemCreate;

  useEffect(() => {
    if (successUpdate) {
      history.push("/rawmaterial");
    }
  }, [dispatch, history, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createitem({
        itemId,
        itemName,
        quantity,
        type,
      })
    );
  };
  return (
    <div>
      <div className="skin-default fixed-layout">
        {/* <!-- ============================================================== -->
                <!-- Page wrapper  -->
                <!-- ============================================================== --> */}
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
                  <li className="breadcrumb-item">
                    <a href="/rawmaterial">Raw Material Details</a>
                  </li>
                  <li className="breadcrumb-item active">
                    Add Raw Material-Detail
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

            {/* <!-- Row --> */}
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <form onSubmit={submitHandler}>
                    <div className="card-body">
                      <h3 className="card-title">Raw Material Info</h3>
                    </div>
                    <hr />
                    <div className="form-body">
                      <div className="card-body">
                        <div className="row pt-3">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">Item ID</label>
                              <input
                                type="text"
                                id="firstName"
                                className="form-control form-select"
                                placeholder="Enter Your Item ID"
                                value={itemId}
                                onChange={(e) => setitemId(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">Item Name</label>
                              <input
                                type="text"
                                id="firstName"
                                className="form-control form-select"
                                placeholder="Enter your Item Name"
                                value={itemName}
                                onChange={(e) => setitemName(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">Quantity</label>
                              <input
                                type="number"
                                id="firstName"
                                className="form-control form-select"
                                placeholder="Enter your Item Quantity"
                                value={quantity}
                                onChange={(e) =>
                                  setquantity(Number(e.target.value))
                                }
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">Item Type</label>
                              <select
                                className="form-control form-select"
                                data-placeholder="Choose a Item"
                                tabindex="1"
                                value={type}
                                onChange={(e) => settype(e.target.value)}
                              >
                                <option value="choose">
                                  Choose a Categories
                                </option>
                                <option value="count">Quantity</option>
                                <option value="grams">grams</option>
                                <option value="count">M.litres</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <input
                          type="submit"
                          class="btn btn-success"
                          name="submit"
                          value="Submit"
                        />
                        <a
                          href="/rawmaterial"
                          type="submit"
                          class="btn btn-dark"
                        >
                          Cancel
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* <!-- Row --> */}
          </div>
          {/* <!-- ============================================================== -->
                    <!-- End Container fluid  -->
                    <!-- ============================================================== --> */}
        </div>
      </div>
    </div>
  );
};

export default AddRawmaterialList;
