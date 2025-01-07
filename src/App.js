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





        </Routes>
      </div>
  </Router>
);

}

export default App;
