import React from 'react';




function RecipeItem(props){
  return(
    <div className='list-group row'>
      <div className='list-group-item recipe-preview col-3'>
      <img src={props.recipe.image} alt=""/>
        <p className='recipe-name'>{props.recipe.name}</p>
        <p className='side-art-author'>by {props.recipe.user}</p>
      </div>
    </div>
  )
}


class RecipeList extends React.Component{
  constructor(props){
  super(props)
  this.state = {

  }

}

  render(){

    const recipes = this.props.recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} pickRecipe={this.props.pickRecipe}/>);
    return(
      <div className="recipe-list">
            {recipes}
        </div>
    )
  }
}
export default RecipeList;
