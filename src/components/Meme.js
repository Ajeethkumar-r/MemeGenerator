import React from 'react';

const Meme = () => {
  return (
    <main className='p-2 flex-col space-y-3' style={{ height: '90vh' }}>
      <div className='w-max mx-auto space-y-2'>
        <form className='flex space-x-10'>
          <input
            type='text'
            placeholder='Text 1'
            className='border-2 rounded-md px-2'
          />
          <input
            type='text'
            placeholder='Text 2'
            className='border-2 rounded-md px-2'
          />
        </form>
        <button className='text-white p-2 w-full bg-gradient-to-r from-purple-600 to-violet-500 rounded-md'>
          Get me a new Meme
          <span></span>
        </button>
      </div>
      <div className='w-2/3 px-6 mx-auto'>
        <img
          src='/images/lowpx.jpg'
          alt=''
          className='object-cover rounded-md'
        />
      </div>
    </main>
  );
};

export default Meme;
