import { FaCheckCircle } from 'react-icons/fa';
import '../App.css';

const Code = (props) => {
  const { code, copyCode, copied, setCopied } = props;
  return (
    <div className={`Code ${!code && 'hide'}`} onClick={() => { copyCode(code); setCopied(true) }}>
        <img src={code} alt='qr code' />
        <p className="copy">{!copied ? 'Copy' : <FaCheckCircle className='check'/>}</p>
    </div>
  );
}

export default Code;
