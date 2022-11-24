import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './Theme';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CompanyPage from './Pages/CompanyPage';
import DashBoard from './Pages/DashBoard';
import Login from './Components/Login';
import Signup from './Components/Signup';
import News from './Components/News/News';
import Logout from './Components/Logout/Logout';
import AddShare from './Components/AddShare';
import ResetPassword from './Components/ResetPassword';
import ForgetPassword from './Components/ForgetPassword';
import SendLink from './Components/Sendlink'
import ShareCards from './Components/ShareCards'
import EditShare from './Components/EditShare';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} >
            <Route path="/" element={<DashBoard />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/company/:symbol" element={<CompanyPage />} />
            <Route path="/portfolio" element={<HomePage />} />
            <Route path="/user/portfolio" element={<ShareCards />} />
            <Route path="/addShares" element={<AddShare />} />
            <Route path="/addsharest" element={<AddShare />} />
            <Route path="/news" element={<News />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetpassword" element={<ForgetPassword/>} />
          <Route path="/resetpassword/:id/:token" element={<ResetPassword />} />
          <Route path="/sendlink" element={<SendLink />} />
          <Route path="/sharecards" element={<ShareCards />} />
          <Route path="/editshare/:id" element={<EditShare />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider >
  );
}

export default App;