import React from 'react';
import dummy from '../../assets/dummy_profile.png';
import global from '../../assets/global.svg';
import group from '../../assets/groups.svg';
import heart from '../../assets/heart.svg';
import sun from '../../assets/sun.svg';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveComponent } from '../../context/sidebarSlice';

const Sidebar = () => {
    const dispatch = useDispatch();
    const activeComponent = useSelector((state) => state.sidebar.activeComponent);

    const handleClick = (componentName) => {
        dispatch(setActiveComponent(componentName));
    };

    return (
        <div className='2xl:py-12 py-8 flex flex-col justify-between items-center w-[72px] h-screen bg-[#EBE0E9]'>
            <div className='w-10 flex flex-col gap-8 2xl:gap-12 rounded-full'>
                <img src={dummy} className='rounded-full cursor-pointer' alt="profile" />
                <hr className="h-0.5 bg-gradient-to-r from-[#c9b9c6] via-[#662c5d] to-[#b897b3]" />
            </div>
            <div className='flex flex-col gap-8'>
                <img
                    className={`cursor-pointer p-2 ${activeComponent === 'global' ? 'bg-white drop-shadow-lg rounded-lg' : ''}`}
                    src={global}
                    alt="global"
                    onClick={() => handleClick('global')}
                />
                <img
                    className={`cursor-pointer p-2 ${activeComponent === 'group' ? 'bg-white drop-shadow-lg rounded-lg' : ''}`}
                    src={group}
                    alt="group"
                    onClick={() => handleClick('group')}
                />
                <img
                    className={`cursor-pointer p-2 ${activeComponent === 'heart' ? 'bg-white drop-shadow-lg rounded-lg' : ''}`}
                    src={heart}
                    alt="heart"
                    onClick={() => handleClick('heart')}
                />
                <img
                    className={`cursor-pointer p-2 ${activeComponent === 'sun' ? 'bg-white drop-shadow-lg rounded-lg' : ''}`}
                    src={sun}
                    alt="sun"
                    onClick={() => handleClick('sun')}
                />
            </div>
            <div className='flex flex-col item-center gap-8'>
                <hr className="h-0.5 bg-gradient-to-r from-[#c9b9c6] via-[#662c5d] to-[#b897b3]" />
                <AddBoxIcon sx={{ color: '#734B6D', width: 40, height: 40, cursor: 'pointer' }} />
            </div>
        </div>
    );
};

export default Sidebar;
