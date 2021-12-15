import React from 'react'


const EditCombo = () => {
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
                                        <a href="/combo">Combo Details</a>
                                    </li>
                                    <li className="breadcrumb-item active">Edit Combo-Detail</li>
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
                                            <h3 className="card-title">Edit Combo Info</h3>
                                        </div>
                                        <hr />
                                        <div className="form-body">
                                            <div className="card-body">
                                                <div className="row pt-3">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Combo ID</label>
                                                            <input type="text" id="firstName" className="form-control form-select" placeholder="Enter Your Combo ID" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Combo Name</label>
                                                            <input type="text" id="firstName" className="form-control form-select" placeholder="Enter your Combo Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                        <label className="form-label">Combo Item</label>
                                                        <select  className="form-control form-select" data-placeholder="Choose a Item" tabindex="1" >
                                                            <option value="#" > Choose a Categories </option>
                                                            <option value="#">Puttu</option>
                                                            <option value="#">Egg Masala</option>                                                            
                                                        </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                        <label className="form-label">Categories</label>
                                                        <select  className="form-control form-select" data-placeholder="Choose a Veg/Non-Veg" tabindex="1" >
                                                            <option value="#" > Choose a Categories </option>
                                                            <option value="Veg">Veg</option>
                                                            <option value="Non-Veg">Non-Veg</option>                                                            
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
                                                            <label className="form-label">customer Price (website)</label>
                                                            <input type="text" id="firstName" className="form-control form-select" placeholder="Enter your customer price (Website)" />
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
                                                        <div className="form-group">
                                                            <label className="form-label">Combo Picture upload</label>
                                                            <input type="file" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <input type="submit" class="btn btn-success" name="submit" value="Submit"/>
                                                <a href="/combo" type="submit" class="btn btn-dark" >Cancel</a>
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

export default EditCombo
