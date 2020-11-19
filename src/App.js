// Reacts
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Fragment } from 'react';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './fontawesome';

// Components
import { Users } from '../src/componets/Users';
import { LogIn } from './componets/LogIn';
import { SignUpEmail } from './componets/SignUpEmail';

function App() {
  return (
    <Router>
      <Fragment>
        <div className='first-layer'>
          <Link to='/'>
            <FontAwesomeIcon className='pr-3' icon={['fas', 'fighter-jet']} />
            Ármazon
          </Link>
          <div className='input-group w-50 rounded'>
            <input
              type='text'
              className='form-control'
              placeholder='Busca tu producto'
              aria-label='Busca tu producto'
              aria-describedby='button-addon2'
            />
            <div className='input-group-append'>
              <button
                className=' btn btn-outline-secondary text-white border-light'
                type='button'
                id='button-addon2'
              >
                Buscar
              </button>
            </div>
          </div>
          <div className='buttons'>
            <Link to='/log-in'> Log In </Link>
          </div>
        </div>
      </Fragment>
      <Switch>
        <Route path='/users' component={Users} />
        <Route path='/log-in'>
          <LogIn />
        </Route>
        <Route path='/signupEmail' component={SignUpEmail} />
      </Switch>
    </Router>
  );
}

export default App;
