import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./Layouts/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import Register from "./pages/Register";
const App = () => {

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="register" element={<Register />} ></Route>
          <Route element={<AppLayout />} >
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;