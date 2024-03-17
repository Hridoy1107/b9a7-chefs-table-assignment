import PropTypes from 'prop-types';

const SideInfo = ({sidebars}) => {
    const{recipeName, calories, preparingTime} = sidebars;
    return (
        <div className='flex gap-2 mt-2 ml-4 justify-between w-[460px]'>
            <div className='flex gap-16 my-4'>
            <p className='w-[60px] h-[48px]'>{recipeName}</p>
            <p className='w-[60px] h-[48px]'>{preparingTime}</p>
            <p className='w-[60px] h-[48px]'>{calories}</p>
            </div>
            <button className="rounded-[46px] my-3 btn w-[100px] h-[30px] hover:bg-[#0BE58A] bg-[#0BE58A] text-[#150B2B] text-[12px] border-none">Preparing</button>
        </div>
    );
};

SideInfo.propTypes ={
    sidebars: PropTypes.array
}
export default SideInfo;