import React from 'react'

const Profile = () => {
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
                                    <li className="breadcrumb-item active">Edit Profile</li>
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
                                            <h3 className="card-title">HUB Account Details</h3>
                                        </div>
                                        <hr />
                                        <div className="form-body">
                                            <div className="card-body">
                                                <div className="row pt-3">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">HUB ID</label>
                                                            <input type="text" id="firstName" className="form-control form-select" disabled/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">HUB Name</label>
                                                            <input type="text" id="firstName" className="form-control form-select" disabled/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">HUB Incharge Name</label>
                                                            <input type="text" id="firstName" className="form-control form-select" disabled/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">HUB Incharge Phone Number</label>
                                                            <input type="text" id="firstName" className="form-control form-select" placeholder="Enter your HUB Incharge Phone Number" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Change Password</label>
                                                            <input type="text" id="firstName" className="form-control form-select" placeholder="Enter your Change Password" />
                                                        </div>
                                                    </div>                                                    
                                                </div>
                                                <input type="submit" class="btn btn-success me-2 text-white" name="submit" value="Submit"/>
                                                <a href="/" type="submit" class="btn btn-dark" >Cancel</a>
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

export default Profile
