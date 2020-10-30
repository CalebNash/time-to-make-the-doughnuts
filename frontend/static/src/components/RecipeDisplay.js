import React from 'react';

class FullRecipe extends React.Component {
  constructor(props){
    super(props);
    this.state ={
    }
  }
  render(){
  return(
    <>
    <div className="card">
      <h5 style={{textAlign: 'center'}}>{this.props.pickedRecipe.name}</h5>
      <img src={this.props.pickedRecipe.image} alt=""/>
      <section id="pages" class="row cook-info-row">
      <div class="col-2 cook-info">
        <p>Recipe Type</p>
        {this.props.pickedRecipe.category}
      </div>
      <div class="col-2 cook-info">
        <p>Prep Time</p>
        {this.props.pickedRecipe.prep_time}
      </div>
      <div class="col-2 cook-info">
        <p>Cook Time</p>
        {this.props.pickedRecipe.cook_time}
      </div>
      <div class="col-2 cook-info">
        <p>Cook Temp</p>
        {this.props.pickedRecipe.cook_temp}
      </div>
      </section>
      <div className='p-4'>
        <p>Ingredients you will need:</p>
        <p>{this.props.pickedRecipe.ingredients}</p>
        <p>Instructions:</p>
        <p>{this.props.pickedRecipe.instructions}</p>
        <p>Notes:</p>
        <p>{this.props.pickedRecipe.notes}</p>
      </div>

    </div>
    </>
  )
 }
}
export default FullRecipe;
