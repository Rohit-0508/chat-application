import React from 'react'

const ChatInput = () => {
  return (
    <div className='w-full'>
        <input 
          className='w-full py-3 pl-6 rounded-full border border-transparent focus:border-[#734B6D] focus:outline-none' 
          type="text" 
          placeholder='Say Something...' 
        />
    </div>
  )
}

export default ChatInput;