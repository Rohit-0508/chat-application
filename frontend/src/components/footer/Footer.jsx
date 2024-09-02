import React from 'react';
import ChatInput from './Input';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AddIcon from '@mui/icons-material/Add';
import MicNoneIcon from '@mui/icons-material/MicNone';

const Footer = () => {
    return (
        <div className='bg-[#ebedee] py-4 px-6'>
            <div className='flex items-center gap-6'>
                <EmojiEmotionsIcon sx={{ color:'#f3a01c' ,cursor:'pointer'}} />
                <AddIcon sx={{cursor:'pointer'}}/>
                <div className='flex-grow'>
                    <ChatInput />
                </div>
                <MicNoneIcon sx={{cursor:'pointer'}}/>
            </div>
        </div>
    );
};

export default Footer;
