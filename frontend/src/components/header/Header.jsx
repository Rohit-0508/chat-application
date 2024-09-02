import React from 'react'
import globalPf from '../../assets/globalProfile.jpeg'
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return (
        <div className='py-3 2xl:py-4 px-6 h-fit bg-[#f5f7f9]'style={{ boxShadow: '0 4px 4px -4px rgba(0, 0, 0, 0.5)' }} >
            <div className='flex  justify-between items-center'>
                <div className='flex gap-3'>
                    <img src={globalPf} className='w-12 h-12 rounded-xl'></img>
                    <div className='flex flex-col gap-1'>
                        <h2 className='2xl:text-lg text-base font-medium'>Global Chat</h2>
                        <div className='flex items-center gap-1'>
                            <div className='w-2 h-2 bg-[#734B6D] rounded-full'></div>
                            <p className='text-xs font-medium text-[#6E7FA9]'>103 participants Online</p>
                        </div>
                    </div>
                </div>
                <SearchIcon sx={{cursor:'pointer'}} />
            </div>
        </div>
    )
}

export default Header