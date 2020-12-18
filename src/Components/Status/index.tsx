import React from 'react';
import unathorized from '../../Images/401.png';
import Status from '../../Interfaces/status';
import './styles.css';

const StatusCard: React.FC<Status> = ({
  code = '',
  description = '',
  title = '',
  image,
}) => {
  return (
    <div className="col s12 m7 card-status" >
      <div className="card">
        <div className="card-image">
          <img src={require('../../Images/401.png')} alt="Foto de personagem de naruto" />
          <span className="card-title">{`${code} - ${title}`}</span>
        </div>
        <div className="card-content" >
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a href="#">{'Saiba Mais'}</a>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;