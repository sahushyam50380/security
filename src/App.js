import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Pages/Sidebar";
import Dashboard from "./Pages/Dashboard";
import MyServicesPage from "./Pages/MyServices";
import ProposalsPage from "./Pages/ProposalsPage";
import DisputeHistory from "./Pages/DisputeHistory";
import MyPackage from "./Pages/MyPackage";
import Wallet from "./Pages/Wallet";
import ProfileSettings from "./Pages/ProfileSettings";
import SkillsPage from "./Pages/SkillPage";
import SettingsPage from "./Pages/SettingsPage";
import Chat from "./Pages/Chat";
import Portfolio from "./Pages/Portfolie";
import ProjectManagementPage from "./Pages/ProjectManagement";
import EmployeeSidebar from "./Employee/EmployeeSidebar";
import EmployerDashboard from "./Employee/EmployerDashboard";
import MyProjects from "./Employee/MyProjects";
import CreateProject from "./Employee/CreateProject";
import MyServices from "./Employee/MyServices";
import DisputeHistoryPage from "./Employee/DisputeHistoryPage";
import MyCompany from "./Employee/MyCompany";
import CreateCompany from "./Employee/CreateCompany";
import MyPackages from "./Employee/MyPackages";
import EmployerSettings from "./Employee/EmployerSetting";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-services" element={<MyServicesPage />} />
          <Route path="/my-proposals" element={<ProposalsPage />} />
          <Route path="/my-DisputeHistory" element={<DisputeHistory />} />
          <Route path="/my-package" element={<MyPackage />} />
          <Route path="/my-wallet" element={<Wallet />} />
          <Route path="/my-profile-setting" element={<ProfileSettings />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/manage" element={<ProjectManagementPage />} />




          <Route path="/employee-sidebar" element={<EmployeeSidebar />} />
          <Route path="/employee-dashboard" element={<EmployerDashboard/>} />
          <Route path="/employee-projects" element={<MyProjects/>} />
          <Route path="/employee-create-project" element={<CreateProject/>} />
          <Route path="/employee-services" element={<MyServices/>} />
          <Route path="/employee-dispute" element={<DisputeHistoryPage/>} />
          <Route path="/employee-companies" element={<MyCompany/>} />
          <Route path="/employee-creatcompany" element={<CreateCompany/>} />
          <Route path="/employee-packages" element={<MyPackages/>} />
          <Route path="/employee-settings" element={<EmployerSettings/>} />














        </Routes>
      </div>
  </Router>
);

}

export default App;
