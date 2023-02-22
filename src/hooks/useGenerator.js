import { useState } from 'react';
import { copyImageToClipboard } from 'copy-image-clipboard';

const useGenerator = () => {
    const [input, setInput] = useState('');
    const [code, setCode] = useState('');
    const [copied, setCopied] = useState(false);
    
    const generateCode = (url) => {
      fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`)
        .then(data => setCode(data?.url))
        .catch(error => console.log('Error fetching data: ', error))
      setInput('')
    }
  
    const copyCode = code => {
      copyImageToClipboard(code);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 5000);
    }

    return { input, setInput, code, copied, setCopied, generateCode, copyCode }
}

export default useGenerator;
