import { useState, useEffect } from 'react';
import { copyImageToClipboard } from 'copy-image-clipboard';

const useGenerator = () => {
    const [input, setInput] = useState('');
    const [code, setCode] = useState({ success: null, content: '' });
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const generateCode = (url) => {
      setCode({ success: null, content: '' });
      if (url?.length > 0) {
        setLoading(true);
        fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`)
          .then(data => {
            setTimeout(() => {
              setCode({ success: true, content: data?.url });
              setLoading(false);
            }, 1000)
          })
          .catch(error => console.log('Error fetching data: ', error))
        setInput('');
      } else {
        setCode({ success: false, content: 'Please input a valid url' })
      }
    };

    useEffect(() => {
      loading && code.length > 0 && setLoading(false);
    }, [loading, code]);
  
    const copyCode = code => {
      copyImageToClipboard(code);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 5000);
    }

    return { input, setInput, code, copied, setCopied, generateCode, copyCode, loading }
}

export default useGenerator;
