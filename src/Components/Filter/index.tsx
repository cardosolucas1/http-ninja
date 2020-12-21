import React from 'react';
import './styles.css';

interface Props {
  label: string;
};

const Filter: React.FC<Props> = ({ label }) => {
  return (
    <div className="row filter">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
            <textarea id="textarea1" className="materialize-textarea" maxLength={3}/>
          <label htmlFor="textarea1">{label}</label>
        </div>
      </div>
    </form>
  </div>
  );
}

export default Filter;
