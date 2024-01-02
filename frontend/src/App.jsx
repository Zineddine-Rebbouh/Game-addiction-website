import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavigationBar from './components/Home/navbar/navigationbar';
import Footer from './components/Home/footer/footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Login from './components/auth/login';
import Register from './components/auth/register';
import AdminDashboard from './components/Dashboard/main/AdminDashboard/AdminDashboard';
import Profile from './components/Dashboard/main/AdminDashboard/Links/Profile';
import Users from './components/Dashboard/main/AdminDashboard/Links/Users'
import OverviewAdmin from './components/Dashboard/main/AdminDashboard/Links/Overview';
import DoctorDashboard from './components/Dashboard/main/DoctorDashboard/DoctorDashboard';
import OverviewDoctor from './components/Dashboard/main/DoctorDashboard/Links/Overview';
import Patients from './components/Dashboard/main/DoctorDashboard/Links/patients';
import Quiz from './pages/Quiz';
import UserProfile from './pages/Profile'
import Notification from './components/Dashboard/main/AdminDashboard/Links/Notification';
import Messages from './components/Dashboard/main/DoctorDashboard/Links/Messages';
const Layout = ( { children } ) => (
  <div className='min-h-screen w-full relative'>
    {/* Add NavigationBar here */ }
    <div className='h-[4rem]'> <NavigationBar /></div>
    { children }
    {/* Add Footer here */ }
    <Footer />
  </div>
);



const App = () => (
  <BrowserRouter>
    <Routes>
      {/* Wrap the Layout component with a Route component */ }
      <Route path="/" element={ <Layout><Home /></Layout> } />
      <Route path="/user/profile" element={ <Layout><UserProfile /></Layout> } />
      <Route path="/Contact" element={ <Layout><Contact /></Layout> } />
      <Route path="/About" element={ <Layout><About /></Layout> } />
      <Route path="/Quiz" element={ <Layout><Quiz /></Layout> } />
      <Route path="/Services" element={ <Layout><Services /></Layout> } />
      <Route path="/Auth/login" element={ <Layout><Login /></Layout> } />
      <Route path="/Auth/register" element={ <Layout><Register /></Layout> } />
      <Route path="/Dashboard/admin">
        <Route index element={ <AdminDashboard passedComponent={ OverviewAdmin } /> } />
        <Route path="Profile" element={ <AdminDashboard passedComponent={ Profile } /> } />
        <Route path="users" element={ <AdminDashboard passedComponent={ Users } /> } />
        <Route path="Notification" element={ <AdminDashboard passedComponent={ Notification } /> } />
        {/* <Route path="Activity" element={ <ActivityView /> } />
        <Route path="Analytics" element={ <AnalyticsView /> } /> */}
      </Route>
      <Route path="/Dashboard/doctor">
        <Route index element={ <DoctorDashboard passedComponent={ OverviewDoctor } /> } />
        <Route path="Patients" element={ <DoctorDashboard passedComponent={ Patients } /> } />
        <Route path="Messages" element={ <DoctorDashboard passedComponent={ Messages } /> } />
        {/* <Route path="Activity" element={ <ActivityView /> } />
        <Route path="Analytics" element={ <AnalyticsView /> } /> */}
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
