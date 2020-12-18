import Status from '../Interfaces/status';

const StatusList: Status[] = [
  {
    code: '401',
    title: 'Unauthorized',
    description: 'O código de resposta de status de erro do cliente HTTP 401 Unauthorized  indica que a solicitação não foi aplicada porque não possui credenciais de autenticação válidas para o recurso de destino.',
    image: '401.png',
  },
  {
    code: '404',
    title: 'Not found',
    description: 'A resposta de erro 404 Not Found indica que o servidor não conseguiu encontrar o recurso solicitado. Normalmente, links que levam para uma página 404 estão quebrados ou desativados, e podem estar sujeitos a link rot/link quebrado.',
    image: '404.png',
  }
];

export default StatusList;
