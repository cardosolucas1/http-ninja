import React from 'react';
import './styles.css';

interface Props {
  title: string;
};

const Header: React.FC<Props> = ({ title }) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo center">{title}</a>
        <ul className="left hide-on-med-and-down">
          <li className="active"><a href="collapsible.html">Contribua</a></li>
        </ul>
      </div>
    </nav>    
  );
}

export default Header;
