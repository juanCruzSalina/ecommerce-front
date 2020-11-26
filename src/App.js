// Reacts
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Fragment } from 'react';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import { User } from './componets/user-related-componets/User';
import { LogIn } from './componets/user-related-componets/LogIn';
import { SignUpEmail } from './componets/user-related-componets/SignUpEmail';
import { Navigation } from './componets/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Route path='/user' component={User} />
      <Route path='/log-in' component={LogIn} />
      <Route path='/signupEmail' component={SignUpEmail} />
    </Router>
  );
}

export default App;
