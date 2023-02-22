import { copyIcon, copiedIcon } from '../assets';
import '../App.css';

const Code = (props) => {
  const { code, copyCode, copied, setCopied } = props;
  return (
    code?.success ? (
      <div className={`qr-code ${code?.success == null && 'hide'}`} onClick={() => { copyCode(code?.content); setCopied(true) }}>
        <img src={code?.content} alt='qr code' />
        <div className="copy">
          <p>{copied ? 'Copied' : 'Copy'}</p>
          <img className="copy-icon" src={copied ? copiedIcon : copyIcon} alt="copy-icon" />
        </div>
      </div>
    ) : (
      <p className="error">{!code?.success && code?.content}</p>
    )
  );
}

export default Code;
