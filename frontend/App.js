import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AdminDashboard from './components/Admin/AdminDashboard';
import AdminRoute from './components/Admin/AdminRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <AdminRoute path="/admin/dashboard" component={AdminDashboard} />
      </Switch>
    </Router>
  );
}

export default App;
