import React from 'react';
import Status from '../../Interfaces/status';
import './styles.css';

const StatusCard: React.FC<Status> = ({
  code = '',
  description = '',
  title = '',
  image = '',
  source = '',
}) => {
  return (
    <div className="col s12 m7 card-status">
      <div className="card">
        <div className="card-image">
          <img
            src={`${require(`../../Images/${image}`).default}`}
            alt="Foto de personagem de naruto"
          />
        </div>
        <div className="card-content" >
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a className="link-title" target="_blank" href={source}>{`${code} - ${title}`}</a>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;