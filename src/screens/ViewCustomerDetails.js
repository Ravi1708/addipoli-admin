import React from 'react'

const ViewCustomerDetails = () => {
    return (
        <div>
            <div className="skin-default fixed-layout">
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
                                        <a href="/customers">Customer Details</a>
                                    </li>
                                    <li className="breadcrumb-item active">View Customer Details</li>
                                </ol>
                            </div>
                        </div>
                        {/* <!-- ============================================================== -->
                        <!-- End Bread crumb and right sidebar toggle -->
                        <!-- ============================================================== -->

                        <!-- ============================================================== -->
                        <!-- Start Page Content -->
                        <!-- ============================================================== --> */}
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">Customer Details</h3>
                                        <div className="table-responsive m-t-40">
                                            <table id="myTable" className="table table-striped border">
                                                <tbody>
                                                    <tr>
                                                        <th>Name</th>
                                                        <td>Siva</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Phone Number</th>
                                                        <td>123456789</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Email</th>
                                                        <td>admin@gmail.com</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Address</th>
                                                        <td>Coimbatore</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Pincode</th>
                                                        <td>630000</td>
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <a href="/customers" type="submit" class="btn btn-dark" >Back</a>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        {/* <!-- ============================================================== -->
                        <!-- End PAge Content -->
                        <!-- ============================================================== --> */}
                    </div>
                    {/* <!-- ============================================================== -->
                    <!-- End Container fluid  -->
                    <!-- ============================================================== --> */}
                </div>
            </div>   
        </div>
    )
}


export default ViewCustomerDetails
