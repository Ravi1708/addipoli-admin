import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Spinner";
import { updatepartner, listpartnerDetails } from "../actions/hubActions";
import { FormContainer } from "../components/FormContainer";

const EditDeliveryPartner = ({ history, match }) => {
  const partnerid = match.params.id;
  const [partnerId, setpartnerId] = useState();
  const [partnerName, setpartnerName] = useState();
  const [InchargeNumber, setInchargeNumber] = useState();
  const [location, setlocation] = useState();
  const [partnerIncharge, setpartnerIncharge] = useState();
  const [pincode, setpincode] = useState("641035");

  const dispatch = useDispatch();

  const partnerUpdate = useSelector((state) => state.partnerUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = partnerUpdate;

  const partnerDetails = useSelector((state) => state.partnerDetails);
  const { loading, error, partner } = partnerDetails;

  useEffect(() => {
    if (successUpdate) {
      //   <Redirect to="/deliverypartner" />;
      history.push("/deliverypartner");
    } else {
      if (!partner.partnerName || partner.partnerId !== partnerid) {
        dispatch(listpartnerDetails(partnerid));
      } else {
        setpartnerName(partner.partnerName);
        setpartnerId(partner.partnerId);
        setInchargeNumber(partner.InchargeNumber);
        setlocation(partner.location);
        setpartnerIncharge(partner.partnerIncharge);
      }
    }
  }, [dispatch, history, partnerid, partner, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updatepartner({
        partnerName,
        partnerId,
        partnerIncharge,
        InchargeNumber,
        location,
        pincode,
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
                    <a href="/dashboard">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/deliverypartner">Delivery Partner Details</a>
                  </li>
                  <li className="breadcrumb-item active">
                    Add Delivery Partner-Detail
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
                      <h3 className="card-title">Add Delivery Partner Info</h3>
                    </div>
                    <hr />
                    <div className="form-body">
                      <div className="card-body">
                        <div className="row pt-3">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">
                                Delivery Partner ID
                              </label>
                              <input
                                type="text"
                                id="firstName"
                                value={partnerId}
                                onChange={(e) => setpartnerId(e.target.value)}
                                className="form-control form-select"
                                placeholder="Enter Your Delivery Partner ID"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">
                                Delivery Partner Name
                              </label>
                              <input
                                type="text"
                                id="firstName"
                                className="form-control form-select"
                                placeholder="Enter your Delivery Partner Name"
                                value={partnerName}
                                onChange={(e) => setpartnerName(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">
                                Delivery Partner Incharge Name
                              </label>
                              <input
                                type="text"
                                id="firstName"
                                value={partnerIncharge}
                                onChange={(e) =>
                                  setpartnerIncharge(e.target.value)
                                }
                                className="form-control form-select"
                                placeholder="Enter your Delivery Partner Incharge Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">
                                Delivery Partner Phone Number
                              </label>
                              <input
                                type="text"
                                id="firstName"
                                value={InchargeNumber}
                                onChange={(e) =>
                                  setInchargeNumber(e.target.value)
                                }
                                className="form-control form-select"
                                placeholder="Enter your Delivery Partner Phone Number"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">
                                Delivery Partner Area
                              </label>
                              <input
                                type="text"
                                id="firstName"
                                value={location}
                                onChange={(e) => setlocation(e.target.value)}
                                className="form-control form-select"
                                placeholder="Enter your Delivery Partner Area"
                              />
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
                          href="/deliverypartner"
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

export default EditDeliveryPartner;
