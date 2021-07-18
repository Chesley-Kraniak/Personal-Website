import self_pic  from './self_300.jpg';
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
