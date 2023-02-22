const Input = (props) => {
  const { input, setInput, generateCode, loading } = props;
  return (
    <div className="Input">
      <input type="text" placeholder='Enter URL' value={input} onChange={e => setInput(e.target.value)} />
      {loading ? (
        <div className="loader">
          <p>Generating Code</p>
          <div className="dot-pulse" />
        </div>
      ) : (
        <button className="generate-button" onClick={() => generateCode(input)}>Generate Code</button>
      )}
    </div>
  );
}

export default Input;
