import useGenerator from './hooks/useGenerator';
import Input from './components/Input';
import Code from './components/Code';
import './App.css';

function App() {
  const { input, setInput, code, copied, setCopied, generateCode, copyCode } = useGenerator();
  return (
    <div className="App">
      <Input
        input={input}
        setInput={setInput}
        generateCode={generateCode}
      />
      <Code
        code={code}
        copyCode={copyCode}
        copied={copied}
        setCopied={setCopied}
      />
  </div>
  );
}

export default App;
