import React from 'react'

const DispatchList = () => {
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
                                        <a href="/dispatch">Dispatch Details</a>
                                    </li>
                                    <li className="breadcrumb-item active">Add Dispatch Details</li>
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
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">Add Dispatch Details</h3>
                                        <div className="table-responsive m-t-40">
                                            <table id="myTable" className="table table-striped border">
                                                <thead>
                                                    <tr>
                                                        <th>S.NO</th>
                                                        <th>Item ID</th>
                                                        <th>Item Name</th>
                                                        <th>Quantity</th>
                                                        <th>Dispatch Quantity</th>                                                        
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>12345</td>
                                                        <td>Addipoli</td>
                                                        <td>1234</td> 
                                                        <td>123</td>                                                        
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">                                                
                                                <input type="submit" class="btn btn-success" name="submit" value="Submit"/>
                                                <a href="/dispatch" type="submit" class="btn btn-dark" > Back</a>                                                
                                            </div>                                            
                                        </div>
                                    </div>                                    
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

export default DispatchList
