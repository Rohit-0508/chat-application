import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const GroupSidebar = () => {
    return (
        <div className='2xl:w-[404px] w-[300px] h-full bg-[#f7f6f7] flex justify-center pt-11 '>
            <div className='relative w-3/4 '>
                <SearchIcon sx={{cursor:'pointer'}} className='absolute 2xl:top-[14px] top-[10px] left-3'/>
                <input type="text" placeholder='Search' className='placeholder:text-base placeholder:text-[#42275A] font-normal w-full 2xl:py-3 py-2 pr-4 pl-12 border border-[#42275A] rounded-full focus:outline-none focus:border-2 focus:border-[#42275A] ' />
            </div>
        </div>
    )
}

export default GroupSidebar