import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Spinner";
import { listProductDetails, updateProduct } from "../actions/productActions";
import { FormContainer } from "../components/FormContainer";

const EditProduct = ({ match, history }) => {
  const productId = match.params.id;
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  console.log(product);

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      history.push("/product");
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId));
      } else {
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setCategory(product.category);
      }
    }
  }, [dispatch, history, productId, product, successUpdate]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);
    console.log(formData);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(
        "http://api.addipoli.primespot.tech/api/upload",
        formData,
        config
      );

      setImage(`/uploads/${data}`);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        category,
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
                    <a href="/product">Product Details</a>
                  </li>
                  <li className="breadcrumb-item active">
                    Edit Product-Detail
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
                      <h3 className="card-title">Edit Product Info</h3>
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
                                disabled
                                value={productId}
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
                              <select  className="form-control form-select" data-placeholder="Choose a Item" tabindex="1" >
                                  <option value="#" > Choose a Categories </option>
                                  <option value="#">Puttu</option>
                                  <option value="#">Egg Masala</option>                                                            
                              </select>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group">
                              <label className="form-label">Veg/Non-Veg</label>
                              <select  className="form-control form-select" data-placeholder="Choose a Veg/Non-Veg" tabindex="1" >
                                  <option value="#" > Choose a Categories </option>
                                  <option value="Veg">Veg</option>
                                  <option value="Non-Veg">Non-Veg</option>                                                            
                              </select>
                              </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">Addipoli Categories</label>
                              <select
                                className="form-control form-select"
                                data-placeholder="Choose a Delivery Partner"
                                tabindex="1"
                              >
                                <option
                                  value="#"
                                  onChange={(e) => setCategory(e.target.value)}
                                >
                                  Choose a Categories
                                </option>
                                <option value="Item1">Addipoli Puttu</option>
                                <option value="Item2">Addipoli Curry</option>
                                <option value="Item3">Addipoli Wrappies</option>
                                <option value="Item4">Others</option>
                              </select>
                            </div>
                          </div> 
                          <div className="col-md-6">
                              <div className="form-group">
                              <label className="form-label">Product Available/unavailable</label>
                              <select  className="form-control form-select" data-placeholder="Choose a Product Available/unavailable" tabindex="1" >
                                  <option value="#">Available</option>
                                  <option value="#">Unavailable</option>                                                            
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
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Enter Price customer Price (website)"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label className="form-label">Hub Price</label>
                                  <input type="text" id="firstName" className="form-control form-select" placeholder="Enter your Hub price" />
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label className="form-label">Admin Price</label>
                                  <input type="text" id="firstName" className="form-control form-select" placeholder="Enter your admin price" />
                              </div>
                          </div>     
                          <div className="col-md-6">
                            <div control-id="image" className="form-group">
                              <label className="form-label">
                                Product Picture upload
                              </label>
                              <input
                                type="text"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                className="form-control form-select"
                              />
                              <input
                                type="file"
                                id="image-file"
                                custom
                                onChange={uploadFileHandler}
                                label="choose File"
                                className="form-control"
                              />
                              {uploading && <Loader />}
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

export default EditProduct;
