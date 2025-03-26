import { BrowserRouter,Routes,Route } from "react-router-dom";
// pages and components
import Home from "./pages/Home";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
            path='/about'
            element={<About />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
