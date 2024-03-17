import PropTypes from 'prop-types';
import SideInfo from '../SideInfo/SideInfo';

const Sidebar = ({sidebar}) => {
    return (
        <div className="mt-10 ml-5 rounded-2xl border-black bg-[#28282833] w-[500px] h-[750px]">
            <div className="mt-3">
            <h1 className="font-semibold text-3xl text-center">Want to cook: {sidebar.length}</h1>
            <hr className="mt-3"/>
            <div className='w-[400px]'>
            <table className="table">
            <thead>
            <tr>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
            </tr>
            </thead>
            </table>
            </div>
            {
                sidebar.map( sidebars => <SideInfo key={sidebars.id} sidebars={sidebars}></SideInfo>) }
            </div>
        </div>
    );
};

Sidebar.propTypes ={
    sidebar: PropTypes.array
}
export default Sidebar;