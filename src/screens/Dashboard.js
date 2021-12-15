import React, { useEffect, useState } from "react";

const Dashboard = ({ history }) => {
  const [refresh, setrefresh] = useState(false);

  // useEffect(() => {
  //   history.push("/ongoing");
  // }, []);
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
                  <li className="breadcrumb-item active">Dashboard</li>
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
              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="row p-t-10 p-b-10">
                      <div className="col p-r-0">
                        <h1 className="font-light">86</h1>
                        <h6 className="text-muted">Total HUB</h6>
                      </div>
                      <div className="col text-end align-self-center">
                        <div
                          data-label="20%"
                          className="css-bar m-b-0 css-bar-primary css-bar-20"
                        >
                          <i className="mdi mdi-account-circle"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="row p-t-10 p-b-10">
                      <div className="col p-r-0">
                        <h1 className="font-light">248</h1>
                        <h6 className="text-muted">Total Customer</h6>
                      </div>
                      <div className="col text-end align-self-center">
                        <div
                          data-label="30%"
                          className="css-bar m-b-0 css-bar-danger css-bar-20"
                        >
                          <i className="mdi mdi-briefcase-check"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="row p-t-10 p-b-10">
                      <div className="col p-r-0">
                        <h1 className="font-light">352</h1>
                        <h6 className="text-muted">New Customer</h6>
                      </div>
                      <div className="col text-end align-self-center">
                        <div
                          data-label="40%"
                          className="css-bar m-b-0 css-bar-warning css-bar-40"
                        >
                          <i className="mdi mdi-star-circle"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="row p-t-10 p-b-10">
                      <div className="col p-r-0">
                        <h1 className="font-light">15</h1>
                        <h6 className="text-muted">Daily Orders</h6>
                      </div>
                      <div className="col text-end align-self-center">
                        <div
                          data-label="60%"
                          className="css-bar m-b-0 css-bar-info css-bar-60"
                        >
                          <i className="mdi mdi-receipt"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="row p-t-10 p-b-10">
                      <div className="col p-r-0">
                        <h1 className="font-light">86</h1>
                        <h6 className="text-muted">On-Going Orders</h6>
                      </div>
                      <div className="col text-end align-self-center">
                        <div
                          data-label="20%"
                          className="css-bar m-b-0 css-bar-primary css-bar-20"
                        >
                          <i className="mdi mdi-account-circle"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="row p-t-10 p-b-10">
                      <div className="col p-r-0">
                        <h1 className="font-light">248</h1>
                        <h6 className="text-muted">Daily Orders</h6>
                      </div>
                      <div className="col text-end align-self-center">
                        <div
                          data-label="30%"
                          className="css-bar m-b-0 css-bar-danger css-bar-20"
                        >
                          <i className="mdi mdi-briefcase-check"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="row p-t-10 p-b-10">
                      <div className="col p-r-0">
                        <h1 className="font-light">352</h1>
                        <h6 className="text-muted">Completed Orders</h6>
                      </div>
                      <div className="col text-end align-self-center">
                        <div
                          data-label="40%"
                          className="css-bar m-b-0 css-bar-warning css-bar-40"
                        >
                          <i className="mdi mdi-star-circle"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="row p-t-10 p-b-10">
                      <div className="col p-r-0">
                        <h1 className="font-light">159</h1>
                        <h6 className="text-muted">Total Orders</h6>
                      </div>
                      <div className="col text-end align-self-center">
                        <div
                          data-label="60%"
                          className="css-bar m-b-0 css-bar-info css-bar-60"
                        >
                          <i className="mdi mdi-receipt"></i>
                        </div>
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
  );
};

export default Dashboard;
