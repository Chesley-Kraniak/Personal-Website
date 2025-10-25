import self_pic  from './self_3_300_225_2.png';
import './Header.css';

function Header() {
  return(
    <div className="Header">
      <div className="Self-info">
        <p>
          Chesley Kraniak
        </p>
      </div>
      <div className="Self-pic-container">
        <img src={self_pic} alt="Chesley Kraniak" className="Self-pic"/>
      </div>
    </div>
    )
}

export default Header;
