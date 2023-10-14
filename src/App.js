import "./App.css";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./Components/Common/Navbar";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OpenRoute from "./Components/Core/Auth/OpenRoute"
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import MyProfile from "./Components/Core/Dashboard/MyProfile";
import PrivateRoute from "./Components/Core/Auth/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error"
import Settings from "./Components/Core/Dashboard/Settings/index";
import EnrolledCourses from "./Components/Core/Dashboard/EnrolledCourses";
import Cart from "./Components/Core/Dashboard/Cart";
import { ACCOUNT_TYPE } from "./utils/constants";
import { useDispatch, useSelector } from "react-redux";
import EditCourse from "./Components/Core/Dashboard/EditCourse/index"
import { useNavigate } from "react-router-dom";
import AddCourse from "./Components/Core/Dashboard/AddCourses/index";
import Catalog from "./pages/Catalog"
import MyCourses from "./Components/Core/Dashboard/MyCourses"
import CourseDetails from "./pages/CourseDetails";
import ViewCourse from "./pages/ViewCourse";
import VideoDetails from "./Components/Core/ViewCourse/VideoDetails";
import Instructor from "./Components/Core/InstructorDashboard/Instructor";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { user } = useSelector((state) => state.profile)
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/catalog/:catalogName" element={<Catalog/>}/>
        <Route path="/courses/:courseId" element={<CourseDetails/>}/>
        <Route

          path="signup"
          element={
           <OpenRoute>
            <Signup />
           </OpenRoute>
              
          }
        />
    <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

    <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />  

      <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        /> 

        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />  


        <Route
          path="about"
          element={
              <About />
          }
        />  

      <Route
          path="contact"
          element={
              <ContactUs/>
          }
        />  

        <Route
          element={
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>
          }
        >
          <Route 
            path="dashboard/my-profile"
            element={
                <MyProfile/>
            }
          /> 
          <Route path="dashboard/Settings" element={<Settings />} />
          

          {
            user?.accountType === ACCOUNT_TYPE.STUDENT && (
              <>
              <Route path="dashboard/enrolled-courses" element={<EnrolledCourses/>} />
              <Route path="dashboard/cart" element={<Cart/>} />
              </>
            )
          }


          { 
            user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
              <>
              <Route path="dashboard/instructor" element={<Instructor />} />
              <Route path="dashboard/add-course" element={<AddCourse/>}/>
              <Route path="dashboard/my-courses" element={<MyCourses/>}/>
              <Route path="dashboard/edit-course/:courseId" element={<EditCourse/>}/>
              </>
            )
          }
          
        </Route> 
        
        <Route path="*"
        element={<Error/>}/>


        <Route element={
          <PrivateRoute>
            <ViewCourse/>
          </PrivateRoute>
        }>

          {
            user?.accountType === ACCOUNT_TYPE.STUDENT &&(
              <>
                <Route
                path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                element={<VideoDetails/>}/>
              </>
            )
          }

        </Route>

      </Routes>
      <Toaster/>

    </div>
  );
}

export default App;
