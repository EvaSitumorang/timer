import React, { useState } from 'react';
import Input from './Input';

const Index = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1 className="font-bold text-4xl text-gray-800 font-[Poppins] bg-slate-400 py-4  ">Warnet Sistem</h1>
      <div>
        <button type="button" class=" bg-yellow-400 text-black font-[Poppins] mt-2 py-2 px-4 border rounded-lg" onClick={() => setShow(!show)}>
          {show === true ? 'Cancel' : 'Register'}
        </button>
        {show && <Input />}
      </div>
    </div>
  );
};

export default Index;
