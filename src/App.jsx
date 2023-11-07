import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import ProtectedRoute from "./authentication/ProtectedRoute";
import AddMember from "./pages/AddMember";
import Course from "./pages/Courses";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoPageFound from "./pages/NoPageFound";
import Register from "./pages/Register";
import Registrations from "./pages/Registrations";
import TechAllianceTeam from "./pages/TechAllianceTeam";
import GlobalStyles from "./styles/GlobalStyles";
import EditProfilePage from "./pages/EditProfilePage";
const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0
        // staleTime: 60 * 1000
      }
    }
  })
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>} >
              <Route index element={<Navigate replace to="home" />} />
              <Route path="courses" element={<Course />} />
              <Route path="home" element={<Home />} />
              <Route path="registrations" element={<Registrations />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="addmember" element={<AddMember />} />
              <Route path="techallianceteam" element={<TechAllianceTeam />} />
              <Route path="profile" element={<EditProfilePage />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NoPageFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster position="top-center"
          gutter={12}
          containerStyle={
            {
              margin: '8px'
            }
          }
          toastOptions={{
            success: {
              duration: 2000,
            },
            error: {
              duration: 4000
            },
            style: {
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 24px',
              backgroundColor: 'var(--color-grey-0)',
              color: 'var(--color-grey-700)',
            }
          }}
        />
      </QueryClientProvider>
    </>
  )
}
export default App;