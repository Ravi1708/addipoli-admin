import React from 'react'

const DailyReport = () => {
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
                                    <li className="breadcrumb-item active">Daily Report</li>
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
                                                        <label className="form-label">Choose a Categories </label>
                                                        <select  className="form-control form-select" data-placeholder="Choose a Item" tabindex="1" >
                                                            <option value="#" > Choose a Categories</option>
                                                            <option value="#">Product</option>
                                                            <option value="#">Profit</option>                                                                                                                     
                                                        </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-5">
                                                        <div className="form-group">
                                                            <label className="form-label">Date</label>
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
                                        <h3 className="card-title">Daily Product Sales Report</h3>
                                        <div className="table-responsive m-t-40">
                                            <table id="myTable" className="table table-striped border">
                                                <thead>
                                                    <tr>
                                                        <th>S.NO</th>                                                        
                                                        <th>Hub Name</th>
                                                        <th>Order ID</th>                                                        
                                                        <th>Customer Name</th>
                                                        <th>Customer Phone Number</th>  
                                                        <th>Order Amount</th>                                                      
                                                        <th>Delivery person Name</th>  
                                                        <th>Delivery person Number</th>  
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>01</td>                                                        
                                                        <td>Peelamedu</td>
                                                        <td>AP001</td>
                                                        <td>Siva</td>                                                        
                                                        <td>95002500040</td>
                                                        <td>250</td>
                                                        <td>Ram</td>
                                                        <td>123456789</td>  
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
                                        <h3 className="card-title">Daily Profit Report</h3>
                                        <div className="table-responsive m-t-40">
                                            <table id="myTable" className="table table-striped border">
                                                <thead>
                                                    <tr>
                                                        <th>S.NO</th>                                                        
                                                        <th>Hub Name</th>
                                                        <th>Product Name</th>                                                                                                               
                                                        <th>Product Price</th>
                                                        <th>Hub Price</th> 
                                                        <th>Different Price</th> 
                                                        <th>Admin Price</th>                                                      
                                                        <th>Profit Amount</th>                                                           
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>01</td>                                                        
                                                        <td>Peelamedu</td>
                                                        <td>Puttus</td>
                                                        <td>100</td>                                                        
                                                        <td>90</td>
                                                        <td>10</td>
                                                        <td>80</td>
                                                        <td>20</td>  
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

export default DailyReport
