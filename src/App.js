import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm/index'
import NotFound from './components/NotFound/index'
import Profile from './components/Profile/index'
import Home from './components/Home/index'
import ProtectedRoute from './components/ProtectedRoute/index'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/profile/rahulAttuluri" component={Profile} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
