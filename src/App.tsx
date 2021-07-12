import AppRoutes from "./routes";
import AppLayout from "./pages/appLayout";
import React from "react";

export const App: React.FC<any> = () => (
  <div>
    <div>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </div>
  </div>
);

export default App;
