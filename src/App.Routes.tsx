import { Home } from "./pages/Home";

import { Routes, Route } from "react-router-dom";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/statistics" element={{ ...(<h1>Statistics</h1>) }} />
      <Route path="/customers" element={{ ...(<h1>Customers</h1>) }} />
      <Route path="/diagrams" element={{ ...(<h1>Diagrams</h1>) }} />
    </Routes>
  );
}
