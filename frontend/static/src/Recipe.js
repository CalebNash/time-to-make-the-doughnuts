import React from 'react';
import {Dropdown} from 'react-bootstrap';
import Register from './components/Register'
import Login from './components/Login.js';
import RecipeList from './components/RecipeList.js';
import RecipeForm from './components/RecipeForm.js';
import RecipeDisplay from './components/RecipeDisplay.js';
import Cookies from 'js-cookie'
import './App.css';


class Recipe extends React.Component{
  constructor(props){
  super(props)
  this.state = {
    recipes: [],
    page: 'Home',
    loggedIn: Cookies.get('Authorization')? true: false,
    pickedRecipe: {}

  }

  this.handleRegistration = this.handleRegistration.bind(this);
  this.handleLogin = this.handleLogin.bind(this);
  this.handleLogout = this.handleLogout.bind(this);
  this.handleClick = this.handleClick.bind(this);
  this.choose = this.choose.bind(this);
}

componentDidMount() {
  fetch('/api/v1/recipes/')
    .then(responce => responce.json())
    .then(data => this.setState({recipes: data}))
    .catch(error => console.log('Error: ', error));
  }


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
    this.setState({page: 'Home'});
    this.setState({loggedIN: true});
  }

}

async handleLogin(e, obj){
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
      const responce = await fetch('/api/v1/rest-auth/login/', options);
      const data = await responce.json().catch(handleError);

      if(data.key){
        Cookies.set('Authorization', `Token ${data.key}`)
        this.setState({loggedIn: true});
        localStorage.setItem('is_staff', data.is_staff);
        this.setState({page: 'New Recipe'})
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
      this.setState({loggedIn: false});
      localStorage.removeItem('is_staff');
      this.setState({page: 'Home'});
    }

  }

  handleClick(display) {
    this.setState({page: display});
  }

  choose(id){
    const recipeId = this.state.recipes.find(recipe => recipe.id === id);
    this.setState({pickedRecipe: recipeId, page: 'Recipe Display'});

  }


  render(){

    let loggedIn = this.state.loggedIn;
    let dropItemBottom
    let dropItemTop

    if(loggedIn){
      dropItemTop = <Dropdown.Item href="#/action-2" onClick={() => this.handleClick('New Recipe')}>New Recipe</Dropdown.Item>
      dropItemBottom = <Dropdown.Item href="#/action-3" onClick={this.handleLogout} >Log Out</Dropdown.Item>
    }else{
      dropItemTop = <Dropdown.Item href="#/action-1" onClick={() => this.handleClick('Login')} >Login</Dropdown.Item>
      dropItemBottom = <Dropdown.Item href="#/action-1" onClick={() => this.handleClick('Register')} >Register</Dropdown.Item>
    }

    let page = this.state.page;
    let display;
    if(page === 'Home'){
      display = <RecipeList recipes={this.state.recipes} choose={this.choose}/>;
    }else if(page === 'Register'){
      display = <Register handleRegistration = {this.handleRegistration}/>;
    }else if(page === 'Login'){
      display = <Login handleLogin = {this.handleLogin}/>;
    }else if(page === 'New Recipe'){
      display = <RecipeForm handleLogin = {this.addRecipe}/>;
    }else if(page === 'Recipe Display'){
      display = <RecipeDisplay pickedRecipe = {this.state.pickedRecipe}/>;
    }

    return (
      <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="btn  menu-button"type="button" onClick={() => this.handleClick('Home')}>Home</button>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic-button" title="Dropdown button">
                <i className="fas fa-user-alt"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {dropItemTop}
                {dropItemBottom}
              </Dropdown.Menu>
            </Dropdown>
      </nav>
      <div className='container fullpage'>
        {display}
      </div>
      </React.Fragment>
    );
  }
}

export default Recipe;
