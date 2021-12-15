import React from 'react'

const ViewRejectOrder = () => {
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
                                        <a href="/">Home</a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a href="/reject">View Reject Orders</a>
                                    </li>
                                    <li className="breadcrumb-item active">View Reject Order Details</li>
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
                                        <h3 className="card-title">Reject Order Details</h3>
                                        <div className="table-responsive m-t-40">
                                            <table id="myTable" className="table table-striped border">
                                                <tbody>
                                                    <tr>
                                                        <th>Order ID</th>
                                                        <td>12345</td>
                                                    </tr>                                                    
                                                    <tr>
                                                        <th>Customer Name</th>
                                                        <td>Siva</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Customer Phone Number</th>
                                                        <td>123456789</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Delivery Location</th>
                                                        <td>Coimbatore</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Reject Reason</th>
                                                        <td>Food Not Available</td>
                                                    </tr>                                                    
                                                </tbody>
                                            </table>
                                        </div>                                        
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">Product Details</h3>
                                        <div className="table-responsive m-t-40">
                                            <table id="myTable" className="table table-striped border">
                                                <thead>
                                                    <tr>
                                                        <th>S.NO</th>                                                        
                                                        <th>Product Name</th>                                                        
                                                        <th>Quantity</th>                                                        
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>Puttus</td>
                                                        <td>02</td>                                                        
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div> 
                                        <div className="row">
                                            <div className="col-12">
                                                <a href="/reject" type="submit" class="btn btn-dark" > Back</a>
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


export default ViewRejectOrder

