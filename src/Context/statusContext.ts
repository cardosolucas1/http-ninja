import { createContext } from 'react';
import Status from '../Interfaces/status';

interface Context {
  statusHttp: Array<Status>,
  setStatusHttp: Function,
  statusHttpFiltered: Array<Status>,
  setStatusHttpFiltered:Function,
}

const statusContext = createContext<Context>({} as Context);

export default statusContext;
