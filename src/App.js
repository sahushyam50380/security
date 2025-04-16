import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClientSidebar from "./pages/ClientsideSidebar"

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/ClientSidebar" element={<ClientSidebar/>} />
        </Routes>
    </Router>
  );
}

export default App;
