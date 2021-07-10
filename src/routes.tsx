import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./app-store/store";
import Home from "./pages/home";

// routes prepended with "/app" shall be auth protected routes
export default function AppRoutes() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        {/* Public routes */}
        <Route path="/" exact={true} render={() => <Home />} />
      </Switch>
    </ConnectedRouter>
  );
}
