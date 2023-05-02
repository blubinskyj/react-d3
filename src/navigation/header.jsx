import { Link } from 'react-router-dom';
import './header.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div>
        <Link to="/home" className="home">
          Головна
        </Link>
      </div>
      <div>
        <Link to="/examples">Приклади</Link>
      </div>
      <div>
        <Link to="/examples">Covid-19</Link>
      </div>
      <div>
        <Link to="/examples">Лінійна регресія</Link>
      </div>
    </nav>
  );
};

export default Navigation;
