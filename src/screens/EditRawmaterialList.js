import React from 'react'

const EditRawmaterialList = () => {
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
                                        <a href="/rawmaterial">Raw Material Details</a>
                                    </li>
                                    <li className="breadcrumb-item active">Edit Raw Material-Detail</li>
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
                                            <h3 className="card-title">Raw Material Info</h3>
                                        </div>
                                        <hr />
                                        <div className="form-body">
                                            <div className="card-body">
                                                <div className="row pt-3">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Item ID</label>
                                                            <input type="text" id="firstName" className="form-control form-select" placeholder="Enter Your Item ID" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Item Name</label>
                                                            <input type="text" id="firstName" className="form-control form-select" placeholder="Enter your Item Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Quantity</label>
                                                            <input type="text" id="firstName" className="form-control form-select" placeholder="Enter your Item Quantity" />
                                                        </div>
                                                    </div>  
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                        <label className="form-label">Item Type</label>
                                                        <select  className="form-control form-select" data-placeholder="Choose a Item" tabindex="1" >
                                                            <option value="#" > Choose a Categories </option>
                                                            <option value="#">Quantity</option>
                                                            <option value="#">grams</option>  
                                                            <option value="#">Liters</option>                                                          
                                                        </select>
                                                        </div>
                                                    </div>                                                                                                       
                                                </div>
                                                <input type="submit" class="btn btn-success" name="submit" value="Submit"/>
                                                <a href="/rawmaterial" type="submit" class="btn btn-dark" >Cancel</a>
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

export default EditRawmaterialList
