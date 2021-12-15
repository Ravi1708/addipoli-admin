import React from 'react'

const AddCoupon = () => {
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
                                        <a href="/combo">Coupon Details</a>
                                    </li>
                                    <li className="breadcrumb-item active">Add Coupon-Detail</li>
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
                                            <h3 className="card-title">Add Coupon Info</h3>
                                        </div>
                                        <hr />
                                        <div className="form-body">
                                            <div className="card-body">
                                                <div className="row pt-3">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Coupon ID</label>
                                                            <input type="text" id="firstName" className="form-control form-select" placeholder="Enter Your Combo ID" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Coupon Name</label>
                                                            <input type="text" id="firstName" className="form-control form-select" placeholder="Enter your Combo Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Coupon Amount</label>
                                                            <input type="text" id="firstName" className="form-control form-select" placeholder="Enter your Combo Amount" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Coupon Min Amount</label>
                                                            <input type="text" id="firstName" className="form-control form-select" placeholder="Enter your Combo Amount" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Coupon Max Amount</label>
                                                            <input type="text" id="firstName" className="form-control form-select" placeholder="Enter your Combo Amount" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Coupon Percentage</label>
                                                            <input type="text" id="firstName" className="form-control form-select" placeholder="Enter your Combo Percentage" />
                                                        </div>
                                                    </div>
                                                    {/* <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Coupon Picture upload</label>
                                                            <input type="file" className="form-control" />
                                                        </div>
                                                    </div> */}
                                                </div>
                                                <input type="submit" class="btn btn-success" name="submit" value="Submit"/>
                                                <a href="/coupon" type="submit" class="btn btn-dark" >Cancel</a>
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

export default AddCoupon
