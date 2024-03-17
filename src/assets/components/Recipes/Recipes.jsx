import PropTypes from 'prop-types';
import { useState } from 'react';
import Toast from '../Toast/Toast';
 
 const Recipes = ({recipe, btnToAddSidebar}) => {
    const{recipeName, recipeImage, shortDescription, ingredients, calories, preparingTime} = recipe;
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div>
        <div className='w-[380px] h-[750px]'>
        <div className='rounded-2xl border-black bg-[#28282833] w-[380px] h-[750px]'>
            <img className='w-[330px] h-[200px] rounded-2xl p-3 ml-6' src={recipeImage} alt="" />
            <h2 className='text-2xl font-bold w-[330px] mt-4 ml-7 h-[50px]'>{recipeName}</h2>
            <p className='text-xl w-[330px] mt-4 text-[#878787] ml-7 h-[100px]'>{shortDescription}</p>
            <hr className='mt-2' />
            <h1 className='text-2xl font-semibold w-[330px] mt-2 ml-7'>Ingredients: {ingredients.length}</h1>
            <ul className='mt-4 w-[300px] ml-[60px] h-[120px]'>
                <li className='list-disc text-[#878787]'>{ingredients[0]}</li>
                <li className='mt-2 list-disc text-[#878787]'>{ingredients[1]}</li>
                <li className='mt-2 list-disc text-[#878787]'>{ingredients[2]}</li>
            </ul>
            <hr className='mt-2' />
            <div className='mt-4 flex w-[330px] justify-between ml-7'>
            <div className='flex'>
            <img className='w-[18px] h-[18px] mt-[6px]' src="https://i.ibb.co/cFpKZBG/3643779-clock-hour-ticker-time-times-icon.png" alt="" />
            <p className='text-[#878787] text-xl ml-3'>{preparingTime}</p>
            </div>
            <div className='flex'>
            <img className='w-[20px] h-[20px] mt-1' src="https://i.ibb.co/bWfW42g/8680118-fire-line-icon.png" alt="" />
            <p className='text-[#878787] text-xl ml-3'>{calories}</p>
            </div>
            </div>
            <button onClick={() => {btnToAddSidebar(recipe); setIsClicked(true)}} 
            className={`rounded-[46px] ml-6 mt-10 btn w-[180px] h-[64px] 
            ${isClicked ? 'bg-[#0BE58A] hover:bg-[#0BE58A] cursor-not-allowed' : 'hover:bg-[#0BE58A] bg-[#0BE58A]'} 
          text-[#150B2B] text-[16px] border-none`}
            disabled={isClicked}>Want to Cook</button>
            <div  className={isClicked ? '' : 'hidden'}>
            <Toast></Toast>
            </div>
        </div>
        </div>
        </div>
    );
};

Recipes.propTypes ={
    recipe : PropTypes.array.isRequired,
    btnToAddSidebar : PropTypes.func
}

export default Recipes;