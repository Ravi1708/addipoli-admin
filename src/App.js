import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./screens/Dashboard";
import CustomerDetails from "./screens/CustomerDetails";
import ViewCustomerDetails from "./screens/ViewCustomerDetails";
import AddHub from "./screens/AddHub";
import EditHub from "./screens/EditHub";
import HubDetails from "./screens/HubDetails";
import OngoingOrder from "./screens/OngoingOrder";
import RejectOrder from "./screens/RejectOrder";
import ViewRejectOrder from "./screens/ViewRejectOrder";
import CompletedOrder from "./screens/CompletedOrder";
import ViewCompletedOrder from "./screens/ViewCompletedOrder";
import DeliveryPartner from "./screens/DeliveryPartner";
import AddDeliveryPartner from "./screens/AddDeliveryPartner";
import EditDeliveryPartner from "./screens/EditDeliveryPartner";
import Enquiry from "./screens/Enquiry";
import ViewEnquiry from "./screens/ViewEnquiry";
import RawmaterialList from "./screens/RawmaterialList";
import AddRawmaterialList from "./screens/AddRawmaterialList";
import EditRawmaterialList from "./screens/EditRawmaterialList";
import ProductList from "./screens/ProductList";
import AddProduct from "./screens/AddProduct";
import EditProduct from "./screens/EditProduct";
import ComboList from "./screens/ComboList";
import AddCombo from "./screens/AddCombo";
import EditCombo from "./screens/EditCombo";
import CouponList from "./screens/CouponList";
import AddCoupon from "./screens/AddCoupon";
import EditCoupon from "./screens/EditCoupon";
import CookedOrder from "./screens/CookedOrder";
import AddCookedOrder from "./screens/AddCookedOrder";
import Dispatch from "./screens/Dispatch";
import DispatchList from "./screens/DispatchList";
import ViewDispatch from "./screens/ViewDispatch";
import Slider from "./screens/Slider";
import AddSlider from "./screens/AddSlider";
import Blog from "./screens/Blog";
import AddBlog from "./screens/AddBlog";
import EditBlog from "./screens/EditBlog";
import Gallery from "./screens/Gallery";
import AddGallery from "./screens/AddGallery";
import Invoice from "./screens/Invoice";
import AddInvoice from "./screens/AddInvoice";
import DailyReport from "./screens/DailyReport";
import MonthlyReport from "./screens/MonthlyReport";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginScreen from "./screens/LoginScreen";
import ViewOngoingOrder from "./screens/ViewOngoingOrder";
import NewOrders from "./screens/NewOrders";

const App = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <Router>
      {!userInfo ? (
        <LoginScreen />
      ) : (
        <>
          <Sidebar />
          <Switch>
            {/* <Route path="/" component={NewOrders} /> */}
            <Route path="/customers" component={CustomerDetails} />
            <Route path="/customers" component={CustomerDetails} />
            <Route path="/viewcustomers" component={ViewCustomerDetails} />
            <Route path="/hub" component={HubDetails} />
            <Route path="/addhub" component={AddHub} />
            <Route path="/edithub/:id" component={EditHub} />
            <Route path="/viewongoing/:id" component={ViewOngoingOrder} />
            <Route path="/ongoing" component={OngoingOrder} />
            <Route path="/reject" component={RejectOrder} />
            <Route path="/viewreject" component={ViewRejectOrder} />
            <Route path="/completed" component={CompletedOrder} />
            <Route path="/viewcompleted" component={ViewCompletedOrder} />
            <Route path="/deliverypartner" component={DeliveryPartner} />
            <Route path="/adddeliverypartner" component={AddDeliveryPartner} />
            <Route
              path="/editdeliverypartner/:id"
              component={EditDeliveryPartner}
            />
            <Route path="/enquiry" component={Enquiry} />
            <Route path="/viewenquiry" component={ViewEnquiry} />
            <Route path="/rawmaterial" component={RawmaterialList} />
            <Route path="/addrawmaterial" component={AddRawmaterialList} />
            <Route
              path="/editrawmaterial/:id"
              component={EditRawmaterialList}
            />
            <Route path="/product" component={ProductList} />
            <Route path="/addproduct" component={AddProduct} />
            <Route path="/editproduct/:id" component={EditProduct} />
            <Route path="/combo" component={ComboList} />
            <Route path="/addcombo" component={AddCombo} />
            <Route path="/editcombo/:id" component={EditCombo} />
            <Route path="/coupon" component={CouponList} />
            <Route path="/addcoupon" component={AddCoupon} />
            <Route path="/editcoupon" component={EditCoupon} />
            <Route path="/cooked" component={CookedOrder} />
            <Route path="/addcooked" component={AddCookedOrder} />
            <Route path="/dispatch" component={Dispatch} />
            <Route path="/dispatchlist" component={DispatchList} />
            <Route path="/viewdispatch" component={ViewDispatch} />
            <Route path="/slider" component={Slider} />
            <Route path="/addslider" component={AddSlider} />
            <Route path="/blog" component={Blog} />
            <Route path="/addblog" component={AddBlog} />
            <Route path="/editblog" component={EditBlog} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/addgallery" component={AddGallery} />
            <Route path="/invoice" component={Invoice} />
            <Route path="/addinvoice" component={AddInvoice} />
            <Route path="/dailyreport" component={DailyReport} />
            <Route path="/monthlyreport" component={MonthlyReport} />
            <Route path="/" exact component={Dashboard} />
          </Switch>
          <footer class="footer">
            All rights Reserved.Copyright © 2021 Radhe Food Industries | Design
            & Developed by <a href="https://sr-mediatech.com/"> SR-MediaTech</a>
          </footer>
        </>
      )}
    </Router>
  );
};

export default App;
