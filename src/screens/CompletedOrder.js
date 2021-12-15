import React from 'react'

const CompletedOrder = () => {
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
                            <div className="col-md-12 align-self-center">
                                <ol className="breadcrumb justify-content">
                                    <li className="breadcrumb-item">
                                        <a href="/">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">Completed Order Details</li>
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
                            <div className="col-lg-12">
                                <div className="card">
                                    <form action="#">                                        
                                        {/* <h3 className="card-title" style={{marginLeft:"20px",marginTop:"15px"}}>Filter</h3>                                                                                 */}
                                        <div className="form-body" style={{marginLeft:"5px", padding:"10px"}}>                                            
                                            <div className="row pt-3">
                                                <div className="col-md-5">
                                                    <div className="form-group">
                                                        <label className="form-label">From Date</label>
                                                        <input type="date" id="firstName" className="form-control form-select" placeholder="Enter Your Start Date" />
                                                    </div>
                                                </div>
                                                <div className="col-md-5">
                                                    <div className="form-group">
                                                        <label className="form-label">To Date</label>
                                                        <input type="date" id="firstName" className="form-control form-select" placeholder="Enter Your End Date" />
                                                    </div>
                                                </div>  
                                                <div className="col-md-2 align-self-center text-end">
                                                    <div className="d-flex justify-content-end align-items-center">
                                                        <a role="button" className="btn waves-effect waves-light btn-rounded btn-outline-success" style={{width:"140px", marginRight:"5px"}} href="/adddeliverypartner">
                                                            Submit
                                                        </a>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>   
                                    </form>                                   
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">Completed Order Details</h3>
                                        <div className="table-responsive m-t-40">
                                            <table id="myTable" className="table table-striped border">
                                                <thead>
                                                    <tr>
                                                        <th>S.NO</th>
                                                        <th>Order Date</th>
                                                        <th>Hub Name</th>
                                                        <th>Order ID</th>                                                        
                                                        <th>Customer Name</th>
                                                        <th>Customer Phone Number</th>                                                        
                                                        <th>Delivery person Name</th>                                                        
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>01/01/2020</td>
                                                        <td>Peelamedu</td>
                                                        <td>AP001</td>
                                                        <td>Siva</td>                                                        
                                                        <td>95002500040</td>
                                                        <td>Ram</td>                                                        
                                                        <td><a href="/viewcompleted" role="button" className="btn btn-circle btn-info" >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                                            </svg>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
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

export default CompletedOrder
