import React, { useState, ReactNode } from 'react';
import StatusContext from './statusContext';
import Status from '../Interfaces/status';
import StatusList from '../StatusList';

interface Props {
  children: ReactNode,
}

const StatusProvider: React.FC<Props> = ({ children }) => {
  const [statusHttp, setStatusHttp] = useState<Status[]>(StatusList);
  const [statusHttpFiltered, setStatusHttpFiltered] = useState<Status[]>(StatusList);

  const context = {
    statusHttp,
    setStatusHttp,
    statusHttpFiltered,
    setStatusHttpFiltered
  };
  
  return (
    <StatusContext.Provider value={ context }>
      {children}
    </StatusContext.Provider>
  );
};

export default StatusProvider;
