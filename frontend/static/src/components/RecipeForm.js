import React from 'react';
import Cookies from 'js-cookie'


class RecipeForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      image: null,
      preview: '',
      name:'',
      ingredients:'',
      instructions:'',
      notes:'',
      is_public: true,
      category:'',
      amount:1,
      prep_time:1,
      cook_time:1,
      cook_temp:350,
      temp:'F',
      type: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
  }
  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }


  handleImage(e){
    let file = e.target.files[0];
    this.setState({
      image: file
    });

    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        preview: reader.result
      });
    }
    reader.readAsDataURL(file);
  }

  async addRecipe(e){
       e.preventDefault();
       let formData = new FormData();
       formData.append('image', this.state.image)
       formData.append('name', this.state.name)
       formData.append('ingredients', this.state.ingredients)
       formData.append('instructions', this.state.instructions)
       formData.append('notes', this.state.notes)
       formData.append('is_public', this.state.is_public)
       formData.append('category', this.state.category)
       formData.append('amount', this.state.amount)
       formData.append('prep_time', this.state.prep_time)
       formData.append('cook_time', this.state.cook_time)
       formData.append('cook_temp', this.state.cook_temp)
       formData.append('temp', this.state.temp)
       formData.append('type', this.state.type)
       console.log(formData);
       const options = {
         method: 'POST',
         headers: {
           'X-CSRFToken': Cookies.get('csrftoken'),
         },
         body: formData
       };

       const handleError = (err) => console.warn(err);
       const responce = await fetch('/api/v1/recipes/', options);
       const data = await responce.json().catch(handleError);
       console.log(data);
       if(data.key){
         Cookies.set('Authorization', `Token ${data.key}`)
       }

     }

  render(){
    return(
      <React.Fragment>
      <form className="col-12 col-md-6 mb-5 form" onSubmit={(e) => this.addRecipe(e)}>
        <div className="form-group">
          <label htmlFor="image">Add picture</label>
          <input type='file' id="image" name="image" onChange={this.handleImage}/>
          <img className='image-preview' src={this.state.preview} alt=''/>
        </div>
        <div className="form-group">
          <label htmlFor="name"></label>
          <input type="text" className ="form-control" id="name" name="name" placeholder='Recipe Name' value={this.state.name} onChange={this.handleChange}/>
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="is_public" name="is_public" onClick={() => this.setState({is_public: true})}/>
          <label className="form-check-label" htmlFor="is_public">Make Public</label>
        </div>
        <div className="form-group">
          <label htmlFor="amount">This recipe will make </label>
          <input type="number" min="0" className ="form-control" id="amount" name="amount" placeholder='Amount' value={this.state.amount} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="type"></label>
          <input type="text" className ="form-control" id="type" name="type" placeholder='cookies, loaves, etc...' value={this.state.type} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="prep_time">Prep Time</label>
          <input type="number" min="0" className ="form-control" id="prep_time" placeholder='Prep Time' name="prep_time" value={this.state.prep_time} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="cook_time">Cook Time</label>
          <input type="number" min="0" className ="form-control" id="cook_time" name="cook_time" placeholder='Cook Time' value={this.state.cook_time} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="cook_temp">Cook Temp</label>
          <input type="number" min="0" className ="form-control" id="cook_temp" name="cook_temp" placeholder='Cook Temp' value={this.state.cook_temp} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="ingredients"></label>
          <textarea className="form-control" id="ingredients" name="ingredients" rows="8" placeholder='Ingredients' value={this.state.ingredients} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="instructions"></label>
          <textarea className="form-control" id="instructions" name="instructions" placeholder='What directions go with this step?' rows="8" value={this.state.instructions} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="notes">Personal Notes</label>
          <textarea className="form-control" id="notes" name="notes" rows="8" placeholder='' value={this.state.notes} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="category"></label>
          <select id="category" className="form-control" name="category" placeholder='Recipe Type' value={this.state.category} onChange={this.handleChange}>
            <option value="BKF">Breakfast</option>
            <option value="LCH">Lunch</option>
            <option value="DNR">Dinner</option>
            <option value="DST">Dessert</option>
          </select>
        </div>
        <div className="form-bottom">
          <label htmlFor="temp"></label>
          <select id="temp" className="form-control" name="temp" value={this.state.temp} onChange={this.handleChange}>
              <option value="F">F</option>
              <option value="C">C</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-2">Add Recipe</button>
      </form>
      </React.Fragment>
    )
  }
}
export default RecipeForm
