import '../App.css';

const Input = (props) => {
  const { input, setInput, generateCode } = props;
  return (
    <div className="Input">
      <input type="text" placeholder='Enter URL' value={input} onChange={e => setInput(e.target.value)} />
      <button className="generate-button" onClick={() => generateCode(input)}>Generate Code</button>
    </div>
  );
}

export default Input;
