import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./Layouts/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import Register from "./pages/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Registrations from "./pages/Registrations";
import TechAllianceTeam from "./pages/TechAllianceTeam";
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
            <Route path="register" element={<Register />} ></Route>
            <Route element={<AppLayout />} >
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Home />} />
              <Route path="registrations" element={<Registrations />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="techallianceteam" element={<TechAllianceTeam />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}
export default App;