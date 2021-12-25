import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Spinner";
import {
  createProduct,
  listitems,
  listProductDetails,
  updateProduct,
} from "../actions/productActions";
import { FormContainer } from "../components/FormContainer";
import Select from "react-select";

const AddProduct = ({ match, history }) => {
  const [name, setName] = useState("");
  const [itemIds, setitemIds] = useState([]);
  const [ProductId, setProductId] = useState();
  const [websitePrice, setwebsitePrice] = useState();
  const [HubPrice, setHubPrice] = useState();
  const [adminPrice, setadminPrice] = useState();
  const [category, setcategory] = useState();
  const [image, setImage] = useState();
  const [availability, setavailability] = useState("Available");
  const [vegOrNonveg, setvegOrNonveg] = useState();
  const [uploading, setuploading] = useState();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productCreate;

  const listitem = useSelector((state) => state.itemList);
  const { loading: loadingitems, error: erroritems, items } = listitem;

  const itemsavail = items.map((item) => {
    return {
      label: item.itemName,
      value: item.itemId,
    };
  });

  // handle onChange event of the itemIds
  const handleitems = (e) => {
    setitemIds(Array.isArray(e) ? e.map((x) => x.value) : []);
  };

  useEffect(() => {
    if (successUpdate) {
      history.push("/product");
    }
    dispatch(listitems());
  }, [dispatch, history, successUpdate]);

  const formData = new FormData();

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];

    formData.append("file", file);

    // setUploading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-access-token": `${userInfo.accessToken}`,
        },
      };

      const { data } = await axios.post(
        "http://api.addipoli-puttus.com/admin/product",
        formData,
        config
      );

      // setImage(`/uploads/${data}`);
      // setUploading(false);
    } catch (error) {
      console.error(error);
      // setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    formData.append("name", name);
    formData.append("itemIds", itemIds);
    formData.append("ProductId", ProductId);
    formData.append("websitePrice", websitePrice);
    formData.append("HubPrice", HubPrice);
    formData.append("adminPrice", adminPrice);
    formData.append("category", category);
    formData.append("availability", availability);
    formData.append("vegOrNonveg", vegOrNonveg);

    dispatch(createProduct(formData));
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
                    <a href="/product">Product Details</a>
                  </li>
                  <li className="breadcrumb-item active">Add Product-Detail</li>
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
                      <h3 className="card-title">Add Product Info</h3>
                    </div>
                    <hr />
                    <div className="form-body">
                      <div className="card-body">
                        <div className="row pt-3">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">Product ID</label>
                              <input
                                type="text"
                                id="firstName"
                                className="form-control form-select"
                                placeholder="Enter product ID"
                                value={ProductId}
                                onChange={(e) => setProductId(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">Product Name</label>
                              <input
                                type="text"
                                id="firstName"
                                className="form-control form-select"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter Product Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">Product Item</label>
                              <Select
                                className="dropdown"
                                placeholder="Select Option"
                                value={itemsavail.filter((obj) =>
                                  itemIds.includes(obj.value)
                                )} // set selected values
                                options={itemsavail} // set list of the data
                                onChange={handleitems} // assign onChange function
                                isMulti
                                isClearable
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">Veg/Non-Veg</label>
                              <select
                                className="form-control form-select"
                                data-placeholder="Choose a Veg/Non-Veg"
                                tabindex="1"
                                value={vegOrNonveg}
                                onChange={(e) => setvegOrNonveg(e.target.value)}
                              >
                                <option value=" "> Choose a Categories </option>
                                <option value="Vegeterian">Veg</option>
                                <option value="Non-vegeterian">Non-Veg</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">
                                Addipoli Categories
                              </label>
                              <select
                                className="form-control form-select"
                                data-placeholder="Choose a Delivery Partner"
                                tabindex="1"
                                value={category}
                                onChange={(e) => setcategory(e.target.value)}
                              >
                                <option>Choose a Categories</option>
                                <option value="Addipoli Puttus">
                                  Addipoli Puttu
                                </option>

                                <option value="Addipoli Wrappies">
                                  Addipoli Wrappies
                                </option>
                                <option value="Addipoli Dishes">
                                  Addipoli Curry
                                </option>
                                <option value="Others">Others</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">
                                Product Available/unavailable
                              </label>
                              <select
                                className="form-control form-select"
                                data-placeholder="Choose a Product Available/unavailable"
                                tabindex="1"
                                value={availability}
                                onChange={(e) =>
                                  setavailability(e.target.value)
                                }
                              >
                                <option value="Available">Available</option>
                                <option value="Unavailable">Unavailable</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">
                                customer Price (website)
                              </label>
                              <input
                                type="text"
                                id="firstName"
                                className="form-control form-select"
                                value={websitePrice}
                                onChange={(e) =>
                                  setwebsitePrice(e.target.value)
                                }
                                placeholder="Enter Price customer Price (website)"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">Hub Price</label>
                              <input
                                type="text"
                                id="firstName"
                                className="form-control form-select"
                                placeholder="Enter your Hub price"
                                value={HubPrice}
                                onChange={(e) => setHubPrice(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">Admin Price</label>
                              <input
                                type="text"
                                id="firstName"
                                className="form-control form-select"
                                placeholder="Enter your admin price"
                                value={adminPrice}
                                onChange={(e) => setadminPrice(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div control-id="image" className="form-group">
                              <label className="form-label">
                                Product Picture upload
                              </label>
                              {/* <input
                                type="text"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                className="form-control form-select"
                              /> */}
                              <input
                                type="file"
                                id="image-file"
                                custom
                                onChange={uploadFileHandler}
                                label="choose File"
                                className="form-control"
                              />
                              {/* {uploading && <Loader />} */}
                            </div>
                          </div>
                        </div>
                        <input
                          type="submit"
                          class="btn btn-success
                          "
                          name="submit"
                          value="Submit"
                        />

                        <a href="/product" type="submit" class="btn btn-dark">
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

export default AddProduct;
