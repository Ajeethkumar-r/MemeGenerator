import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className='flex justify-between items-center text-white px-4 h-14 bg-gradient-to-r from-purple-600 to-violet-500'>
        <div className='flex items-center space-x-2'>
          <img src='/images/chems.jpg' alt='' className='h-10 w-9 rounded-md' />
          <span className='font-bold text-xl'>Meme Generator</span>
        </div>
        <div className=' text-sm sm:text-base'>React Project-2</div>
      </nav>
    </header>
  );
};

export default Header;
