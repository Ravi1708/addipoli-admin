import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Spinner";
import { createhub, listpartners } from "../actions/hubActions";
import { FormContainer } from "../components/FormContainer";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";
import Select from "react-select";

const AddHub = ({ history }) => {
  const [hubId, sethubId] = useState();
  const [hubName, sethubName] = useState();
  const [inchargeName, setinchargeName] = useState();
  const [inchargeNumber, setinchargeNumber] = useState();
  const [city, setcity] = useState();
  const [currentPosition, setCurrentPosition] = useState({});
  const [states, setstates] = useState();
  const [pincode, setpincode] = useState();
  const [country, setcountry] = useState();
  const [address, setaddress] = useState();
  const [password, setpassword] = useState();
  const [partnerIds, setpartnerIds] = useState([]);
  const [latitude, setlatitude] = useState();
  const [longitude, setlongitude] = useState();

  const dispatch = useDispatch();

  const hubCreate = useSelector((state) => state.hubCreate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = hubCreate;

  const partnerList = useSelector((state) => state.partnerList);
  const { loading: loadingitems, error: erroritems, partners } = partnerList;

  const partnersavail = partners.map((partner) => {
    return {
      label: partner.partnerName,
      value: partner.partnerId,
    };
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
    dispatch(listpartners());
    if (successUpdate) {
      history.push("/hub");
    }
  }, [dispatch, history, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(partnerIds);
    dispatch(
      createhub({
        hubId,
        hubName,
        password,
        city,
        latitude,
        street: address,
        district: city,
        state: city,
        pincode,
        longitude,
        hubIncharge: inchargeName,
        InchargeNumber: inchargeNumber,
        allotedPartners: partnerIds,
      })
    );
  };

  //geocoding
  Geocode.setApiKey("AIzaSyCdIB4G6_XT06RkDrqF1IUZpuzRp0vWLr4");
  Geocode.setLanguage("en");
  Geocode.setRegion("es");
  Geocode.setLocationType("ROOFTOP");

  const onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setCurrentPosition({ lat, lng });
    setlatitude(lat);
    setlongitude(lng);

    Geocode.fromLatLng(currentPosition.lat, currentPosition.lng).then(
      (response) => {
        const address = response.results[0].formatted_address;
        setaddress(address);
        let city, state, country, pincode;
        for (
          let i = 0;
          i < response.results[0].address_components.length;
          i++
        ) {
          for (
            let j = 0;
            j < response.results[0].address_components[i].types.length;
            j++
          ) {
            switch (response.results[0].address_components[i].types[j]) {
              case "locality":
                city = response.results[0].address_components[i].long_name;
                setcity(city);
                break;
              case "administrative_area_level_1":
                state = response.results[0].address_components[i].long_name;
                setstates(state);
                break;
              case "postal_code":
                pincode = response.results[0].address_components[i].long_name;
                setpincode(pincode);
              case "country":
                country = response.results[0].address_components[i].long_name;
                setcountry(country);
                break;
            }
          }
        }
      },
      (error) => {
        console.error(error);
      }
    );
  };

  // Get latitude & longitude from address.

  const getltlnfromadd = (e) => {
    e.preventDefault();
    Geocode.fromAddress(address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setCurrentPosition({ lat, lng });
        setlatitude(lat);
        setlongitude(lng);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  // handle onChange event of the itemIds
  const handleitems = (e) => {
    setpartnerIds(Array.isArray(e) ? e.map((x) => x.value) : []);
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
              <div className="col-md-5 align-self-center">
                <ol className="breadcrumb justify-content">
                  <li className="breadcrumb-item">
                    <a href="/dashboard">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/hub">Hub Detail</a>
                  </li>
                  <li className="breadcrumb-item active">Add Hub-Detail</li>
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
                      <h3 className="card-title">Add Hub Info</h3>
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
                                value={hubId}
                                onChange={(e) => sethubId(e.target.value)}
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
                                value={hubName}
                                onChange={(e) => sethubName(e.target.value)}
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
                                value={inchargeName}
                                onChange={(e) =>
                                  setinchargeName(e.target.value)
                                }
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
                                value={inchargeNumber}
                                onChange={(e) =>
                                  setinchargeNumber(e.target.value)
                                }
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
                                value={city}
                                onChange={(e) => setcity(e.target.value)}
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
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">
                                Delivery Partner
                              </label>
                              <Select
                                className="dropdown"
                                placeholder="Select Option"
                                value={partnersavail.filter((obj) =>
                                  partnerIds.includes(obj.value)
                                )} // set selected values
                                options={partnersavail} // set list of the data
                                onChange={handleitems} // assign onChange function
                                isMulti
                                isClearable
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">Map Location</label>
                              <LoadScript googleMapsApiKey="AIzaSyCdIB4G6_XT06RkDrqF1IUZpuzRp0vWLr4">
                                <div style={{ display: "flex" }}>
                                  <button
                                    type="button"
                                    class="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                  >
                                    choose locaton
                                  </button>
                                  <input
                                    type="text"
                                    className="form-control form-select"
                                    placeholder={address}
                                    value={address}
                                    disabled="true"
                                  />
                                </div>
                                {/* <!-- Modal --> */}
                                <div
                                  class="modal fade"
                                  id="exampleModal"
                                  tabindex="-1"
                                  aria-labelledby="exampleModalLabel"
                                  aria-hidden="true"
                                >
                                  <div class="modal-dialog">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5
                                          class="modal-title"
                                          id="exampleModalLabel"
                                        >
                                          Modal title
                                        </h5>
                                        <button
                                          type="button"
                                          class="btn-close"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                        ></button>
                                      </div>
                                      <div class="modal-body">
                                        <GoogleMap
                                          mapContainerStyle={mapStyles}
                                          zoom={13}
                                          center={currentPosition}
                                        >
                                          {currentPosition.lat ? (
                                            <Marker
                                              position={currentPosition}
                                              onDragEnd={(e) =>
                                                onMarkerDragEnd(e)
                                              }
                                              draggable={true}
                                            />
                                          ) : null}
                                        </GoogleMap>
                                      </div>
                                      <div>
                                        <form>
                                          <input
                                            value={address}
                                            onChange={(e) =>
                                              setaddress(e.target.value)
                                            }
                                            className="form-control form-select"
                                            placeholder="Enter Address"
                                          />
                                        </form>
                                      </div>
                                      <button
                                        class="btn btn-success"
                                        onClick={getltlnfromadd}
                                      >
                                        search
                                      </button>
                                    </div>

                                    <div class="modal-footer">
                                      <button
                                        type="button"
                                        class="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                      <button
                                        type="button"
                                        class="btn btn-primary"
                                      >
                                        Save
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </LoadScript>
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

export default AddHub;
