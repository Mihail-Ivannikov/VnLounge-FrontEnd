import './Logo.css';
import '/src/assets/images/logo.png';

function Logo() {
  return (
    <div className='logo-container'>
      <img
        src='/src/assets/images/logo.png'
        alt='Logo image'
        className='logo-image'
      />
      <h2 className='logo-text'>VNLounge</h2>
    </div>
  );
}

export default Logo;
