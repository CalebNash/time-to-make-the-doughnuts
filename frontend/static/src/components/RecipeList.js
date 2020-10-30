import React from 'react';




function RecipeItem(props){
  return(

      <div className='list-group col-3' onClick={() => props.choose(props.recipe.id)}>
        <div className='list-group-item recipe-preview'>
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

    const recipes = this.props.recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} choose={this.props.choose}/>);
    return(
      <div className="recipe-list row">
            {recipes}
        </div>
    )
  }
}
export default RecipeList;
