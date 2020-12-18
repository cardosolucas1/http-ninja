import Status from '../Interfaces/status';

const StatusList: Status[] = [
  {
    code: '200',
    title: 'OK',
    description: 'O código HTTP 200 OK é a resposta de status de sucesso que indica que a requisição foi bem sucedida. Uma resposta 200 é cacheável por padrão.',
    image: '200.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/200'
  },
  {
    code: '201',
    title: 'Created',
    description: 'O status HTTP "201 Created" é utilizado como resposta de sucesso, indica que a requisição foi bem sucedida e que um novo recurso foi criado. Este novo recurso é efetivamente criado antes do retorno da resposta e o novo recurso é enviado no corpo da mensagem (pode vir na URL ou na header  Location).',
    image: '201.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/201'
  },
  {
    code: '307',
    title: 'Temporary Redirect',
    description: 'O código de estado 307 Redirecionamento temporário indica que o recurso da requisição foi temporariamente alterado para a URL informada no cabeçalho Location.',
    image: '307.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/307'
  },
  {
    code: '401',
    title: 'Unauthorized',
    description: 'O código de resposta de status de erro do cliente HTTP 401 Unauthorized  indica que a solicitação não foi aplicada porque não possui credenciais de autenticação válidas para o recurso de destino.',
    image: '401.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/401'
    
  },
  {
    code: '403',
    title: 'Forbidden',
    description: 'O código de resposta de status de erro do cliente HTTP 403 Forbidden indica que o servidor entendeu o pedido, mas se recusa a autorizá-lo. Esse status é semelhante ao 401 , mas neste caso, a re-autenticação não fará diferença. O acesso é permanentemente proibido e vinculado à lógica da aplicação (como uma senha incorreta).',
    image: '403.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/403'
  },
  {
    code: '404',
    title: 'Not found',
    description: 'A resposta de erro 404 Not Found indica que o servidor não conseguiu encontrar o recurso solicitado. Normalmente, links que levam para uma página 404 estão quebrados ou desativados, e podem estar sujeitos a link rot/link quebrado.',
    image: '404.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/404'
  },
];

export default StatusList;
