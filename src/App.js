import useGenerator from './hooks/useGenerator';
import { Input, Code } from './components';
import './App.css';

function App() {
  const { input, setInput, code, copied, setCopied, generateCode, copyCode, loading } = useGenerator();
  return (
    <div className="App">
      <Input
        input={input}
        setInput={setInput}
        generateCode={generateCode}
        loading={loading}
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
