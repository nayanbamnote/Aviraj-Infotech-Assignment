
import React from 'react';
import Image from 'next/image';

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Image 
      src={'/ajax-loader.gif'}
      alt='Loading...'
      fill
      />
    </div>
  );
};

export default Loading;