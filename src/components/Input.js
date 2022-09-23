import { useState, useEffect } from 'react';
import Timer from './Timer';

function Input() {
  const [text, setText] = useState([]);
  const [input, setInput] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (input === '') {
      return alert('please input a text');
    }

    const newText = {
      id: Date.now(),
      title: input.text,
      timer: 3600,
    };

    setText((prevText) => {
      return [...prevText, newText];
    });
    setInput('');
  };

  return (
    <div>
      <form className="p-2 space-x-2 mt-20 flex justify-center">
        <input
          className="p-2 w-80 text-black bg-white shadow-md rounded-xl placeholder-gray-500 italic"
          placeholder="Input your name..."
          value={input ? input.text : input}
          onChange={(e) => {
            setInput({ ...input, text: e.target.value });
          }}
        ></input>
        <button className="bg-green-500 p-2 rounded-lg shadow-md text-white" onClick={onSubmit}>
          Start
        </button>
      </form>

      <div className="mt-10 flex justify-center">
        <table className="w-96 table-fixed">
          {text.map((i) => (
            <Timer key={i.id} data={i} />
          ))}
        </table>
      </div>
    </div>
  );
}

export default Input;
