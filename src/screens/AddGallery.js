import React from 'react'

const AddGallery = () => {
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
                                        <a href="/gallery">Slider Details</a>
                                    </li>
                                    <li className="breadcrumb-item active">Add Slider-Detail</li>
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
                                            <h3 className="card-title">Add Slider Info</h3>
                                        </div>
                                        <hr />
                                        <div className="form-body">
                                            <div className="card-body">
                                                <div className="row pt-3">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Image Name</label>
                                                            <input type="text" id="firstName" className="form-control form-select" placeholder="Enter your Combo Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Date</label>
                                                            <input type="date" id="firstName" className="form-control form-select" placeholder="Enter your Combo Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                        <label className="form-label">Categories</label>
                                                        <select  className="form-control form-select" data-placeholder="Choose a Veg/Non-Veg" tabindex="1" >
                                                            <option value="#" > Choose a Categories </option>
                                                            <option value="Item1">Addipoli Puttu</option>
                                                            <option value="Item2">Addipoli Curry</option>
                                                            <option value="Item3">Addipoli Wrappies</option>
                                                            <option value="Item4">Others</option>                                                           
                                                        </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label"> Picture upload</label>
                                                            <input type="file" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div class="form-group">
                                                            <label class="form-label">Description</label>
                                                            <textarea class="form-control" rows="5"></textarea>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                <input type="submit" class="btn btn-success" name="submit" value="Submit"/>
                                                <a href="/gallery" type="submit" class="btn btn-dark" >Cancel</a>
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
    )
}

export default AddGallery
