import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './Theme';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompanyPage from './Pages/CompanyPage';
import DashBoard from './Pages/DashBoard';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} >
            <Route path="/" element={<DashBoard />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/news" element={<HomePage />} />
            <Route path="/company/:symbol" element={<CompanyPage />} />
            <Route path="/portfolio" element={<HomePage />} />
            <Route path="/user/portfolio" element={<HomePage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addShares" element={<CompanyPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider >
  );
}

export default App;