import { BrowserRouter,Routes,Route } from "react-router-dom";
// pages and components
import Home from "./pages/Home";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LearnerGuide from "./pages/LearnerGuide";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
            index
            element={<Home />}
            />
            <Route 
            path='/login'
            element={<Login />}
            />
            <Route 
            path='/signup'
            element={<Signup />}
            />
            <Route 
            path='/student-dashboard'
            element={<StudentDashboard />}
            />
            <Route 
            path='/admin-dashboard'
            element={<AdminDashboard />}
            />
            <Route 
            path='/learner-guide'
            element={<LearnerGuide />}
            />
            <Route 
            path='/about'
            element={<About />}
            />
            <Route 
            path='/contact'
            element={<Contact />}
            />
            <Route 
            path='/reviews'
            element={<Reviews />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
