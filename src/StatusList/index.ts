import Status from '../Interfaces/status';

const StatusList: Status[] = [
  {
    code: '100',
    title: 'Continue',
    description: 'O Status HTTP 100 Continue indica que até o momento tudo está OK e que o cliente pode continuar com a requisição ou ignorar caso já tenha terminado.',
    image: '100.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/100'
  },
  {
    code: '101',
    title: 'Switching Protocols',
    description: 'O código de resposta HTTP 101 Switching Protocols indica para qual protocolo o servidor está trocando, conforme solicitado por um cliente que tenha enviado uma mensagem incluindo Upgrade no cabeçalho da requisição.',
    image: '101.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/101'
  },
  {
    code: '103',
    title: 'Early Hints',
    description: 'O código de informação de status de resposta HTTP 103 Early Hints é destinado principalmente a ser usado com o cabeçalho "Link" para permitir ao agente do usuário começar pré-carregamento de recursos enquanto o servidor ainda está preparando uma resposta.',
    image: '103.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/103'
  },
  
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
    code: '202',
    title: 'Accepted',
    description: 'A requisição foi recebida mas nenhuma ação foi tomada sobre ela. Isto é uma requisição não-comprometedora, o que significa que não há nenhuma maneira no HTTP para enviar uma resposta assíncrona indicando o resultado do processamento da solicitação. Isto é indicado para casos onde outro processo ou servidor lida com a requisição, ou para processamento em lote.',
    image: '202.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/202'
  },
  {
    code: '203',
    title: 'Non-Authoritative Information',
    description: 'Esse código de resposta significa que o conjunto de meta-informações retornadas não é o conjunto exato disponível no servidor de origem, mas coletado de uma cópia local ou de terceiros. Exceto essa condição, a resposta de 200 OK deve ser preferida em vez dessa resposta.',
    image: '203.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/203'
  },
  {
    code: '204',
    title: 'No Content',
    description: 'Não há conteúdo para enviar para esta solicitação, mas os cabeçalhos podem ser úteis. O user-agent pode atualizar seus cabeçalhos em cache para este recurso com os novos.',
    image: '204.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/204'
  },
  {
    code: '205',
    title: 'Reset Content',
    description: 'O 205 Reset Content status de resposta HTTP informa ao cliente para reconfigurar a visualização do documento, por exemplo, para limpar o conteúdo de um formulário, reconfigurar um estado de tela ou para atualizar a IU.',
    image: '205.png',
    source: 'https://docs.w3cub.com/http/status/205'
  },
  {
    code: '206',
    title: 'Partial Content',
    description: 'Esta resposta é usada por causa do cabeçalho de intervalo enviado pelo cliente para separar o download em vários fluxos.',
    image: '206.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/206'
  },
  {
    code: '207',
    title: 'Multi-Status (WebDAV)',
    description: 'Uma resposta Multi-Status transmite informações sobre vários recursos em situações em que vários códigos de status podem ser apropriados.',
    image: '207.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/207'
  },
  {
    code: '208',
    title: 'Multi-Status (WebDAV)',
    description: 'Usado dentro de um elemento de resposta <dav:propstat> para evitar enumerar os membros internos de várias ligações à mesma coleção repetidamente.',
    image: '208.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/208'
  },
  {
    code: '226',
    title: 'IM Used (HTTP Delta encoding)',
    description: 'O servidor cumpriu uma solicitação GET para o recurso e a resposta é uma representação do resultado de uma ou mais manipulações de instância aplicadas à instância atual.',
    image: '226.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/226'
  },
  {
    code: '300',
    title: 'Multiple Choice',
    description: 'A requisição tem mais de uma resposta possível. User-agent ou o user deve escolher uma delas. Não há maneira padrão para escolher uma das respostas.',
    image: '300.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/300'
  },
  {
    code: '301',
    title: 'Moved Permanently',
    description: 'Esse código de resposta significa que a URI do recurso requerido mudou. Provavelmente, a nova URI será especificada na resposta.',
    image: '301.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/301'
  },
  {
    code: '302',
    title: 'Found',
    description: 'Esse código de resposta significa que a URI do recurso requerido foi mudada temporariamente. Novas mudanças na URI poderão ser feitas no futuro. Portanto, a mesma URI deve ser usada pelo cliente em requisições futuras.',
    image: '302.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/302'
  },
  {
    code: '303',
    title: 'See Other',
    description: 'O servidor manda essa resposta para instruir ao cliente buscar o recurso requisitado em outra URI com uma requisição GET.',
    image: '303.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/303'
  },
  {
    code: '304',
    title: 'Not Modified',
    description: 'Essa resposta é usada para questões de cache. Diz ao cliente que a resposta não foi modificada. Portanto, o cliente pode usar a mesma versão em cache da resposta.',
    image: '999.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/304'
  },
  {
    code: '305',
    title: 'Use Proxy',
    description: 'Foi definida em uma versão anterior da especificação HTTP para indicar que uma resposta deve ser acessada por um proxy. Foi depreciada por questões de segurança em respeito a configuração em banda de um proxy.',
    image: '999.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/305'
  },
  {
    code: '306',
    title: 'unused',
    description: 'Esse código de resposta não é mais utilizado, encontra-se reservado. Foi usado numa versão anterior da especificação HTTP 1.1.',
    image: '306.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/306'
  },
  {
    code: '307',
    title: 'Temporary Redirect',
    description: 'O código de estado 307 Redirecionamento temporário indica que o recurso da requisição foi temporariamente alterado para a URL informada no cabeçalho Location.',
    image: '307.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/307'
  },
  {
    code: '308',
    title: 'Permanent Redirect',
    description: 'Esse código significa que o recurso agora está permanentemente localizado em outra URI, especificada pelo cabeçalho de resposta Location. Tem a mesma semântica do código de resposta HTTP 301 Moved Permanently  com a exceção de que o user-agent não deve mudar o método HTTP utilizado: se um POST foi utilizado na primeira requisição, um POST deve ser utilizado na segunda.',
    image: '308.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/308'
  },
  {
    code: '400',
    title: 'Bad Request',
    description: 'Essa resposta significa que o servidor não entendeu a requisição pois está com uma sintaxe inválida.',
    image: '400.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/400'
  },
  {
    code: '401',
    title: 'Unauthorized',
    description: 'O código de resposta de status de erro do cliente HTTP 401 Unauthorized  indica que a solicitação não foi aplicada porque não possui credenciais de autenticação válidas para o recurso de destino.',
    image: '401.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/401'
  },
  {
    code: '402',
    title: 'Payment Required ',
    description: 'Este código de resposta está reservado para uso futuro. O objetivo inicial da criação deste código era usá-lo para sistemas digitais de pagamento porém ele não está sendo usado atualmente.',
    image: '402.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/402'
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
  {
    code: '405',
    title: 'Method Not Allowed',
    description: 'O método de solicitação é conhecido pelo servidor, mas foi desativado e não pode ser usado. Os dois métodos obrigatórios, GET e HEAD, nunca devem ser desabilitados e não devem retornar este código de erro.',
    image: '405.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/405'
  },
  {
    code: '406',
    title: 'Not Acceptable',
    description: 'Essa resposta é enviada quando o servidor da Web após realizar a negociação de conteúdo orientada pelo servidor, não encontra nenhum conteúdo seguindo os critérios fornecidos pelo agente do usuário.',
    image: '406.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/406'
  },
  {
    code: '407',
    title: 'Proxy Authentication Required',
    description: 'Semelhante ao 401 porem é necessário que a autenticação seja feita por um proxy.',
    image: '407.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/407'
  },
  {
    code: '408',
    title: 'Request Timeout',
    description: 'Esta resposta é enviada por alguns servidores em uma conexão ociosa, mesmo sem qualquer requisição prévia pelo cliente. Ela significa que o servidor gostaria de derrubar esta conexão em desuso. Esta resposta é muito usada já que alguns navegadores, como Chrome, Firefox 27+, ou IE9, usam mecanismos HTTP de pré-conexão para acelerar a navegação. Note também que alguns servidores meramente derrubam a conexão sem enviar esta mensagem.',
    image: '408.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/408'
  },
  {
    code: '409',
    title: 'Conflict',
    description: 'Esta resposta será enviada quando uma requisição conflitar com o estado atual do servidor.',
    image: '409.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/409'
  },
  {
    code: '410',
    title: 'Gone',
    description: 'Esta resposta será enviada quando o conteúdo requisitado foi permanentemente deletado do servidor, sem nenhum endereço de redirecionamento. É experado que clientes removam seus caches e links para o recurso. A especificação HTTP espera que este código de status seja usado para "serviços promocionais de tempo limitado". APIs não devem se sentir obrigadas a indicar que recursos foram removidos com este código de status.',
    image: '410.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/410'
  },
  {
    code: '411',
    title: 'Length Required',
    description: 'O servidor rejeitou a requisição porque o campo Content-Length do cabeçalho não está definido e o servidor o requer.',
    image: '411.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/411'
  },
  {
    code: '412',
    title: 'Precondition Failed',
    description: 'O cliente indicou nos seus cabeçalhos pré-condições que o servidor não atende.',
    image: '412.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/412'
  },
  {
    code: '413',
    title: 'Payload Too Large',
    description: 'A entidade requisição é maior do que os limites definidos pelo servidor; o servidor pode fechar a conexão ou retornar um campo de cabeçalho Retry-After.',
    image: '413.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/413'
  },
  {
    code: '414',
    title: 'URI Too Long',
    description: 'O código de resposta 414 URI Too Long indica que o tamanho da URI requisitada pelo cliente é maior do que o tamanho que o servidor aceita interpretar.',
    image: '414.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/414'
  },
  {
    code: '415',
    title: 'Unsupported Media Type',
    description: 'O formato de mídia dos dados requisitados não é suportado pelo servidor, então o servidor rejeita a requisição.',
    image: '415.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/415'
  },
  {
    code: '416',
    title: 'Requested Range Not Satisfiable',
    description: 'O formato de mídia dos dados requisitados não é suportado pelo servidor, então o servidor rejeita a requisição.',
    image: '416.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/416'
  },
  {
    code: '417',
    title: 'Expectation Failed',
    description: 'Este código de resposta significa que a expectativa indicada pelo campo Expect do cabeçalho da requisição não pode ser satisfeita pelo servidor.',
    image: '417.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/417'
  },
  {
    code: '418',
    title: 'I`m a teapot',
    description: 'O servidor recusa a tentativa de coar café num bule de chá.',
    image: '418.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/418'
  },
  {
    code: '421',
    title: 'Misdirected Request',
    description: 'A requisição foi direcionada a um servidor inapto a produzir a resposta. Pode ser enviado por um servidor que não está configurado para produzir respostas para a combinação de esquema ("scheme") e autoridade inclusas na URI da requisição.',
    image: '421.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/421'
  },
  {
    code: '422',
    title: 'Unprocessable Entity (WebDAV)',
    description: 'A requisição está bem formada mas inabilitada para ser seguida devido a erros semânticos.',
    image: '422.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/422'
  },
  {
    code: '423',
    title: 'Locked (WebDAV)',
    description: 'O recurso sendo acessado está travado.',
    image: '423.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/423'
  },
  {
    code: '424',
    title: 'Failed Dependency (WebDAV)',
    description: 'A requisição falhou devido a falha em requisição prévia.',
    image: '424.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/424'
  },
  {
    code: '425',
    title: 'Too Early',
    description: 'Indica que o servidor não está disposto a arriscar processar uma requisição que pode ser refeita.',
    image: '425.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/425'
  },
  {
    code: '426',
    title: 'Upgrade Required',
    description: 'O servidor se recusa a executar a requisição usando o protocolo corrente mas estará pronto a fazê-lo após o cliente atualizar para um protocolo diferente. O servidor envia um cabeçalho Upgrade numa resposta 426 para indicar o(s) protocolo(s) requeridos.',
    image: '426.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/426'
  },
  {
    code: '428',
    title: 'Precondition Required',
    description: 'O servidor de origem requer que a resposta seja condicional. Feito para prevenir o problema da `atualização perdida`, onde um cliente pega o estado de um recurso (GET) , modifica-o, e o põe de volta no servidor (PUT), enquanto um terceiro modificou o estado no servidor, levando a um conflito.',
    image: '428.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/426'
  },
  {
    code: '429',
    title: 'Too Many Requests',
    description: 'O usuário enviou muitas requisições num dado tempo ("limitação de frequência").',
    image: '429.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/429'
  },
  {
    code: '431',
    title: 'Request Header Fields Too Large',
    description: 'O servidor não quer processar a requisição porque os campos de cabeçalho são muito grandes. A requisição PODE ser submetida novemente depois de reduzir o tamanho dos campos de cabeçalho.',
    image: '431.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/431'
  },
  {
    code: '451',
    title: 'Unavailable For Legal Reasons',
    description: 'O usuário requisitou um recurso ilegal, tal como uma página censurada por um governo.',
    image: '451.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/451'
  },
  {
    code: '500',
    title: 'Internal Server Error',
    description: 'O servidor encontrou uma situação com a qual não sabe lidar.',
    image: '500.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/500'
  },
  {
    code: '501',
    title: 'Not Implemented',
    description: 'O método da requisição não é suportado pelo servidor e não pode ser manipulado. Os únicos métodos exigidos que servidores suportem (e portanto não devem retornar este código) são GET e HEAD.',
    image: '501.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/500'
  },
  {
    code: '502',
    title: 'Bad Gateway',
    description: 'Esta resposta de erro significa que o servidor, ao trabalhar como um gateway a fim de obter uma resposta necessária para manipular a requisição, obteve uma resposta inválida.',
    image: '502.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/502'
  },
  {
    code: '503',
    title: 'Service Unavailable',
    description: 'O servidor não está pronto para manipular a requisição. Causas comuns são um servidor em manutenção ou sobrecarregado. Note que junto a esta resposta, uma página amigável explicando o problema deveria ser enviada. Estas respostas devem ser usadas para condições temporárias e o cabeçalho HTTP Retry-After: deverá, se posível, conter o tempo estimado para recuperação do serviço. O webmaster deve também tomar cuidado com os cabaçalhos relacionados com o cache que são enviados com esta resposta, já que estas respostas de condições temporárias normalmente não deveriam ser postas em cache.',
    image: '503.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/503'
  },
  {
    code: '504',
    title: 'Gateway Timeout',
    description: 'Esta resposta de erro é dada quando o servidor está atuando como um gateway e não obtém uma resposta a tempo.',
    image: '504.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/504'
  },
  {
    code: '505',
    title: 'HTTP Version Not Supported',
    description: 'A versão HTTP usada na requisição não é suportada pelo servidor.',
    image: '999.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/505'
  },
  {
    code: '506',
    title: 'Variant Also Negotiates',
    description: 'O servidor tem um erro de configuração interno: a negociação transparente de conteúdo para a requisição resulta em uma referência circular.',
    image: '999.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/506'
  },
  {
    code: '507',
    title: 'Insufficient Storage',
    description: 'O servidor tem um erro interno de configuração: o recurso variante escolhido está configurado para entrar em negociação transparente de conteúdo com ele mesmo, e portanto não é uma ponta válida no processo de negociação.',
    image: '999.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/507'
  },
  {
    code: '508',
    title: 'Loop Detected (WebDAV)',
    description: 'O servidor detectou um looping infinito ao processar a requisição.',
    image: '999.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/508'
  },
  {
    code: '510',
    title: 'Not Extended',
    description: 'Exigem-se extenções posteriores à requisição para o servidor atendê-la.',
    image: '999.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/510'
  },
  {
    code: '511',
    title: 'Network Authentication Required',
    description: 'O código de status 511 indica que o cliente precisa se autenticar para ganhar acesso à rede.',
    image: '999.png',
    source: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/511'
  },
];

export default StatusList;
