import React from 'react';
import Register from './components/Register'
import Login from './components/Login.js';
import Cookies from 'js-cookie'
import './App.css';


class Recipe extends React.Component{
  constructor(props){
  super(props)
  this.state = {
    articles: [],
    page: 'home',
    loggedIn: Cookies.get('Authorization')? true: false,
    profile: [],

  }

  this.handleRegistration = this.handleRegistration.bind(this);
  this.handleLogin = this.handleLogin.bind(this);
  this.handleLogout = this.handleLogout.bind(this);
}

// componentDidMount() {
//   fetch('/api/v1/articles/')
//     .then(responce => responce.json())
//     .then(data => this.setState({articles: data}))
//     .catch(error => console.log('Error: ', error));
//   }


  async handleRegistration(e, obj){
  e.preventDefault();

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken'),
    },
    body: JSON.stringify(obj)
  };

  const handleError = (err) => console.warn(err);
  const responce = await fetch('/api/v1/rest-auth/registration/', options);
  const data = await responce.json().catch(handleError);

  if(data.key){
    Cookies.set('Authorization', `Token ${data.key}`)
    localStorage.setItem('is_staff', data.is_staff);
    this.setState({page: 'posts'});
    this.setState({loggedIN: true});
  }

}

async handleLogin(e, obj, reg){
    e.preventDefault();
    if(reg){
      this.setState({page: 'register'});
    }else{
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(obj)
      };

      const handleError = (err) => console.warn(err);
      const responce = await fetch('/api/v1/rest-auth/login/', options);
      const data = await responce.json().catch(handleError);

      if(data.key){
        Cookies.set('Authorization', `Token ${data.key}`)
        this.setState({loggedIn: true});
        localStorage.setItem('is_staff', data.is_staff);
        this.setState({page: 'posts'})
        this.getProfile(data.user_id)
      }
    }
  }

  async handleLogout(e){
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
    };

    const handleError = (err) => console.warn(err);
    const responce = await fetch('/api/v1/rest-auth/logout/', options);
    const data = await responce.json().catch(handleError);

    if(data.detail === "Successfully logged out."){
      Cookies.remove('Authorization');
      this.setState({page: 'home'});
      this.setState({loggedIn: false});
      localStorage.removeItem('is_staff');
    }

  }


  render(){

    return (
      <React.Fragment>
      <nav className="navbar navbar-dark">
        <div className='pages'>
          <div className='nav-buttons'>
            <button className="btn  menu-button"type="button" onClick={() => this.handleClick('home')}>Home</button>
          </div>

            <div className='log-status'><button className="btn  menu-button"type="button" onClick={this.handleLogout}>Logout</button></div>
            <div className='log-status'><button className="btn  menu-button"type="button" onClick={() => this.handleClick('login')}>Login</button></div>

        </div>
      </nav>
      <div className='container fullpage'>
        <Register handleRegistration = {this.handleRegistration}/>
        <Login handleLogin = {this.handleLogin}/>
      </div>
      </React.Fragment>
    );
  }
}

export default Recipe;
