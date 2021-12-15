import React from 'react'

const AddInvoice = () => {
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
                                    <li className="breadcrumb-item">
                                        <a href="/invoice">Invoice Details</a>
                                    </li>
                                    <li className="breadcrumb-item active">Add Invoice-Detail</li>
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
                                        <h3 className="card-title" style={{marginLeft:"20px",marginTop:"15px"}}>Add Invoice Details</h3>                                                                                
                                        <div className="form-body" style={{marginLeft:"5px", padding:"10px"}}>                                            
                                            <div className="row pt-3">
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <label className="form-label">Choose a Item </label>
                                                        <select  className="form-control form-select" data-placeholder="Choose a Item" tabindex="1" >
                                                            <option value="#" > Choose a Item</option>
                                                            <option value="#">Puttu</option>
                                                            <option value="#">Egg masala</option>
                                                            <option value="#">Cocount</option>                                                                                                                     
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <label className="form-label">Item Amount</label>
                                                        <input type="text" id="firstName" className="form-control form-select" placeholder="Enter Item Amount" />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <label className="form-label">Item Quantity</label>
                                                        <input type="text" id="firstName" className="form-control form-select" placeholder="Enter Item Quantity" />
                                                    </div>
                                                </div> 
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <label className="form-label">Total Amount</label>
                                                        <input type="text" id="firstName" className="form-control form-select" placeholder="Enter Your Item Quantity" />
                                                    </div>
                                                </div>  
                                                <div className="col-md-12 align-self-center text-end">
                                                    <div className="d-flex justify-content-end align-items-center">
                                                        <a role="button" className="btn waves-effect waves-light btn-rounded btn-outline-success" style={{width:"120px", float:"left",marginRight:"20px"}} href="/adddeliverypartner">
                                                            Add Item
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
                            <div className="col-md-12">
                            <form class="form-horizontal mt-4">                                
                                <div className="card card-body printableArea"> 
                                    <div className="row pt-3">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">customer Name</label>
                                                <input type="text" id="firstName" className="form-control form-select" placeholder="Enter Your Combo ID" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Invoice Date</label>
                                                <input type="Date" id="firstName" className="form-control form-select" placeholder="Enter your Combo Name" />
                                            </div>
                                        </div> 
                                    </div>                              
                                    <div className="table-responsive m-t-40" style={{clear:"both"}}>
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th className="text-center">S.No</th>
                                                    <th>Item Name</th>
                                                    <th >Quantity</th>
                                                    <th >Unit Cost</th>
                                                    <th >Total</th>
                                                    <th className="text-end">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="text-center">1</td>
                                                    <td>Milk Powder</td>
                                                    <td>2 </td>
                                                    <td> $24 </td>
                                                    <td> $48 </td>
                                                    <td className="text-end"> 
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                                        </svg> 
                                                    </td>
                                                </tr>                                            
                                            </tbody>
                                        </table>
                                    </div>                                
                                    <div className="form-group mt-5 row">
                                        <label for="example-text-input" className="col-4 col-form-label">Total Product Amount</label>
                                        <div className="col-8">
                                            <input className="form-control form-select" type="text" value="" id="example-text-input" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="example-text-input" class="col-4 col-form-label">GST</label>
                                        <div className="col-8">
                                            <input className="form-control form-select" type="text" value="" id="example-text-input" />
                                        </div>
                                    </div>
                                    <div className="form-group  row">
                                        <label for="example-text-input" class="col-4 col-form-label">GST Amount</label>
                                        <div className="col-8">
                                            <input className="form-control form-select" type="text" value="" id="example-text-input" />
                                        </div>
                                    </div>
                                    <div className="form-group  row">
                                        <label for="example-text-input" className="col-4 col-form-label">Grand Total Amount</label>
                                        <div className="col-8">
                                            <input className="form-control form-select" type="text" value="" id="example-text-input" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="example-month-input2" className="col-4 col-form-label">Payment Status</label>
                                        <div className="col-8">
                                            <select className="form-select col-12" id="example-month-input2">
                                                <option selected="">Choose...</option>
                                                <option value="1">Paid</option>
                                                <option value="2">Un-paid</option>                                                
                                            </select>
                                        </div>
                                    </div>                                     
                                    <div className="d-flex justify-content-end align-items-center">
                                        <a role="button" className="btn waves-effect waves-light btn-rounded btn-outline-success" style={{width:"160px", float:"left"}} href="/adddeliverypartner">
                                            Create Invoice
                                        </a>
                                    </div>                                                              
                                </div>                                
                            </form>
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

export default AddInvoice
