import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Spinner";
import { updatepartner, listpartnerDetails } from "../actions/hubActions";
import { FormContainer } from "../components/FormContainer";

const EditHub = () => {
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
              <div className="col-md-5 align-self-center">
                <ol className="breadcrumb justify-content">
                  <li className="breadcrumb-item">
                    <a href="/dashboard">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/hub">Hub Detail</a>
                  </li>
                  <li className="breadcrumb-item active">Edit Hub-Detail</li>
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
                  <form action="#">
                    <div className="card-body">
                      <h3 className="card-title">Edit Hub Info</h3>
                    </div>
                    <hr />
                    <div className="form-body">
                      <div className="card-body">
                        <div className="row pt-3">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">Hub ID</label>
                              <input
                                type="text"
                                id="firstName"
                                className="form-control form-select"
                                placeholder="Enter Your Hub ID"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">Hub Name</label>
                              <input
                                type="text"
                                id="firstName"
                                className="form-control form-select"
                                placeholder="Enter your Hub Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">
                                Hub Incharge Name
                              </label>
                              <input
                                type="text"
                                id="firstName"
                                className="form-control form-select"
                                placeholder="Enter your Hub Incharge Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">Phone Number</label>
                              <input
                                type="text"
                                id="firstName"
                                className="form-control form-select"
                                placeholder="Enter your Phone Number"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">City</label>
                              <input
                                type="text"
                                id="firstName"
                                className="form-control form-select"
                                placeholder="Enter your Hub City"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">Password</label>
                              <input
                                type="text"
                                id="firstName"
                                className="form-control form-select"
                                placeholder="Enter your Hub Password"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">
                                Delivery Partner
                              </label>
                              <select
                                className="form-control form-select"
                                data-placeholder="Choose a Delivery Partner"
                                tabindex="1"
                              >
                                <option value="#">
                                  Choose a Delivery Partner
                                </option>
                                <option value="#">Delivery Partner 1</option>
                                <option value="#">Delivery Partner 2</option>
                                <option value="#">Delivery Partner 3</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">Map Location</label>
                              <input type="file" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <input
                          type="submit"
                          class="btn btn-success"
                          name="submit"
                          value="Submit"
                        />
                        <a href="/hub" type="submit" class="btn btn-dark">
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

export default EditHub;
