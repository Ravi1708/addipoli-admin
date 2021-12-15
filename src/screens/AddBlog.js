import React from 'react'

const AddBlog = () => {
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
                                        <a href="/blog">Blog Details</a>
                                    </li>
                                    <li className="breadcrumb-item active">Add Blog-Detail</li>
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
                                            <h3 className="card-title">Add Blog Info</h3>
                                        </div>
                                        <hr />
                                        <div className="form-body">
                                            <div className="card-body">
                                                <div className="row pt-3">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Blog Name</label>
                                                            <input type="text" id="firstName" className="form-control form-select" placeholder="Enter Your Combo ID" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Blog Authar</label>
                                                            <input type="text" id="firstName" className="form-control form-select" placeholder="Enter your Combo Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Blog Date</label>
                                                            <input type="date" id="firstName" className="form-control form-select" placeholder="Enter your Combo Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Categories</label>
                                                            <select className="form-control form-select" data-placeholder="Choose a Delivery Partner" tabindex="1">
                                                            <option value="#">Choose a Categories</option>
                                                                <option value="Item1">Addipoli Puttu</option>
                                                                <option value="Item2">Addipoli Curry</option>
                                                                <option value="Item3">Addipoli Wrappies</option>
                                                                <option value="Item4">Others</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="form-group row pt-3">
                                                    <label className="form-label">Popular Tags</label>
                                                        <div class="col-sm-2">
                                                            <div class="form-check">
                                                                <input type="checkbox" class="form-check-input" id="customCheck1" />
                                                                <label class="form-check-label" for="customCheck1">Item 1</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <div class="form-check">
                                                                <input type="checkbox" class="form-check-input" id="customCheck1" />
                                                                <label class="form-check-label" for="customCheck1">Item 2</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <div class="form-check">
                                                                <input type="checkbox" class="form-check-input" id="customCheck1" />
                                                                <label class="form-check-label" for="customCheck1">Item 3</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <div class="form-check">
                                                                <input type="checkbox" class="form-check-input" id="customCheck1" />
                                                                <label class="form-check-label" for="customCheck1">Item 4</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <div class="form-check">
                                                                <input type="checkbox" class="form-check-input" id="customCheck1" />
                                                                <label class="form-check-label" for="customCheck1">Item 5</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <div class="form-check">
                                                                <input type="checkbox" class="form-check-input" id="customCheck1" />
                                                                <label class="form-check-label" for="customCheck1">Item 6</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <div class="form-check">
                                                                <input type="checkbox" class="form-check-input" id="customCheck1" />
                                                                <label class="form-check-label" for="customCheck1">Item 7</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <div class="form-check">
                                                                <input type="checkbox" class="form-check-input" id="customCheck1" />
                                                                <label class="form-check-label" for="customCheck1">Item 8</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <div class="form-check">
                                                                <input type="checkbox" class="form-check-input" id="customCheck1" />
                                                                <label class="form-check-label" for="customCheck1">Item 9</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <div class="form-check">
                                                                <input type="checkbox" class="form-check-input" id="customCheck1" />
                                                                <label class="form-check-label" for="customCheck1">Item 10</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <div class="form-check">
                                                                <input type="checkbox" class="form-check-input" id="customCheck1" />
                                                                <label class="form-check-label" for="customCheck1">Item 11</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <div class="form-check">
                                                                <input type="checkbox" class="form-check-input" id="customCheck1" />
                                                                <label class="form-check-label" for="customCheck1">Item 12</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div class="form-group">
                                                            <label class="form-label">Blog Text area</label>
                                                            <textarea class="form-control" rows="5"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Blog Picture upload</label>
                                                            <input type="file" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <input type="submit" class="btn btn-success" name="submit" value="Submit"/>
                                                <a href="/blog" type="submit" class="btn btn-dark" >Cancel</a>
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

export default AddBlog
