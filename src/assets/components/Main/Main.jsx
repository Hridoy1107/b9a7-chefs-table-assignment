import { useEffect } from "react";
import { useState } from "react";
import Recipes from "../Recipes/Recipes";
import PropTypes from 'prop-types';

const Main = ({btnToAddSidebar}) => {
    const[recipes, setRecipes] = useState([]);

    useEffect( () =>{
        fetch('./recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, [])

    return (
      <div className="w-[780px] gap-4 mt-10 grid grid-cols-2">
        {
          recipes.map(recipe => <Recipes key={recipe.id} recipe={recipe}
            btnToAddSidebar={btnToAddSidebar} ></Recipes>)
        }
      </div>
    );
};

Main.propTypes ={
  btnToAddSidebar : PropTypes.func
}

export default Main;