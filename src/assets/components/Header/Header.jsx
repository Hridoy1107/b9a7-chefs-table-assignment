const header = () => {
    return (
        <div>
        <div className="flex justify-around w-[1280px]">
            <h1 className="font-bold text-3xl">Recipe Calories</h1>
            <div className="w-[370px] h-[40px] flex gap-x-8 mt-1 ml-10">
            <h1 className="font-normal text-xl text-[#150B2BB3]">Home</h1>
            <h1 className="font-normal text-xl text-[#150B2BB3]">Recipes</h1>
            <h1 className="font-normal text-xl text-[#150B2BB3]">About</h1>
            <h1 className="font-normal text-xl text-[#150B2BB3]">Search</h1>
            </div>
            <div className="flex gap-x-4">
            <label className="input input-bordered flex items-center">
            <input type="text" className="grow" placeholder="Search" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 rounded-[50px]"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>
            <div className="avatar">
            <div className="w-[48px] h-[48px] rounded-full">
            <img src="https://i.ibb.co/0qPSLs3/9035990-person-circle-sharp-icon.png" />
            </div>
            </div>
            </div>
        </div>
        <div className="mt-10">
            <img  className="h-[600px] w-[1280px]" src="https://i.ibb.co/mGvtT3v/food-1898194-12801.jpg" alt="" />
            <div className="flex justify-center">
            <div className="absolute top-[240px]">
            <h1 className="font-bold h-[152px] w-[880px] text-5xl text-center text-white">Discover an exceptional cooking class tailored for you!</h1>
            <h1 className="font-normal h-[60px] w-[940px] text-xl text-center text-white">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</h1>
            <div className="flex mt-10">
            <button className="ml-[270px] rounded-[46px] absolute btn w-[180px] h-[64px] hover:bg-[#0BE58A] bg-[#0BE58A] text-[#150B2B] text-[16px] border-none">Explore Now</button>
            <button className="ml-[480px] rounded-[46px] absolute btn w-[180px] h-[64px] hover:bg-[#797DFC] bg-[#797DFC] text-[#FFFFFF] text-[16px] border-none">Our Feedback</button>
            </div>
            </div>
            </div>
        </div>
        <div>
        <div className="flex justify-center">
        <div>
            <h1 className="font-bold text-4xl text-center mt-20">Our Recipes</h1>
            <h1 className="mt-8 font-normal h-[60px] w-[940px] text-xl text-center text-[#150B2B99]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </h1>
        </div>
        </div>
        </div>
        </div>
    );
};

export default header;