import { useState } from 'react';
import { copyImageToClipboard } from 'copy-image-clipboard';
import { FaCheckCircle } from 'react-icons/fa';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [code, setCode] = useState('');
  const [copied, setCopied] = useState(false);

  const generateCode = (e, url) => {
    e.preventDefault();
    fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`)
      .then(data => setCode(data?.url))
      .catch(error => console.log('Error fetching data: ', error))
    return false;
  }

  const copyCode = code => {
    copyImageToClipboard(code);
    setCopied(true);
  }

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <form onSubmit={(e) => generateCode(e, url)}>
        <input type="text" placeholder='URL' onChange={e => setUrl(e.target.value)} />
        <button type="button" onClick={(e) => generateCode(e, url)}>Generate</button>
      </form>
      <div className={`code-container ${!code && 'hide'}`} onClick={() => { copyCode(code); setCopied(true) }}>
        <img src={code} alt='qr code' />
        {copied && <p>Copied!<FaCheckCircle className='check'/></p>}
      </div>
    </div>
  );
}

export default App;
