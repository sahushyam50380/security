import { BrowserRouter as Router } from "react-router-dom";
import ClientSidebar from "./Pages/ClientsideSidebar"
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
          <Route path="/ClientSidebar" element={<ClientSidebar />} />





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
