import React, { useState, useEffect } from 'react';
import './styles.css';

interface Props {
  label: string;
  handleFilter: Function,
};


const Filter: React.FC<Props> = ({ label, handleFilter }) => {
  const [input, setInput] = useState<String>('');

  useEffect(() => {
    handleFilter(input);
  }, [input])

  return (
    <div className="row filter">
    <form className="col s6">
      <div className="row">
        <div className="input-field col s12">
            <textarea
              className="materialize-textarea"
              id="textarea1"
              maxLength={3}
              onChange={(e) => setInput(e.target.value)}
            />
            <label htmlFor="textarea1">{label}</label>
        </div>
      </div>
    </form>
  </div>
  );
}

export default Filter;
