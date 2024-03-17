import PropTypes from 'prop-types';
 
 const Recipes = ({recipe}) => {
    const{recipeName, recipeImage, shortDescription, ingredients, calories, preparingTime} = recipe;
    return (
        <div>
        <div className='w-[380px] h-[700px]'>
        <div className='rounded-2xl border-black bg-[#28282833] w-[380px] h-[700px]'>
            <img className='w-[330px] h-[200px] rounded-2xl p-3 ml-7' src={recipeImage} alt="" />
            <h2 className='text-2xl font-bold w-[330px] mt-4 ml-7'>{recipeName}</h2>
            <p className='text-xl w-[330px] mt-4 text-[#878787] ml-7'>{shortDescription}</p>
            <hr className='mt-2' />
            <h1 className='text-2xl font-semibold w-[330px] mt-2 ml-7'>Ingredients: {ingredients.length}</h1>
            <ul className='mt-4 w-[300px] ml-[60px]'>
                <li className='list-disc text-[#878787]'>{ingredients[0]}</li>
                <li className='mt-2 list-disc text-[#878787]'>{ingredients[1]}</li>
                <li className='mt-2 list-disc text-[#878787]'>{ingredients[2]}</li>
            </ul>
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
            <button className="rounded-[46px] ml-6 mt-10 btn w-[180px] h-[64px] hover:bg-[#0BE58A] bg-[#0BE58A] text-[#150B2B] text-[16px] border-none">Want to Cook</button>
        </div>
        </div>
        </div>
    );
};

Recipes.propTypes ={
    recipe : PropTypes.array.isRequired
}

export default Recipes;