import React, { useState } from 'react';
import { BookOpen, Clock, Star, Users, Computer, Smartphone, Wifi, CheckCircle } from 'lucide-react';
import TutorialModal from './TutorialModal';

interface TutorialStep {
  id: number;
  title: string;
  content: string;
  image?: string;
  tip?: string;
}

interface Tutorial {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  duration: string;
  rating: number;
  views: number;
  author: string;
  date: string;
  tags: string[];
  steps: TutorialStep[];
  requirements: string[];
  whatYouWillLearn: string[];
}

const Tutorials = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'Todos', icon: BookOpen },
    { id: 'basic', name: 'Básico', icon: Computer },
    { id: 'internet', name: 'Internet', icon: Wifi },
    { id: 'mobile', name: 'Celular', icon: Smartphone },
  ];

  const tutorials: Tutorial[] = [
    {
      id: 1,
      title: 'Como Ligar e Desligar o Computador Corretamente',
      description: 'Aprenda a forma correta de ligar e desligar seu computador para evitar problemas e prolongar a vida útil do equipamento.',
      category: 'basic',
      difficulty: 'Iniciante',
      duration: '5 min',
      rating: 4.8,
      views: 1250,
      author: 'Prof. Carlos Silva',
      date: '2025-01-10',
      tags: ['computador', 'basico', 'iniciante', 'hardware'],
      requirements: [
        'Um computador desktop ou notebook',
        'Acesso físico ao equipamento',
        'Nenhum conhecimento prévio necessário'
      ],
      whatYouWillLearn: [
        'Como ligar o computador de forma segura',
        'A diferença entre desligar e reiniciar',
        'Como usar o botão de energia corretamente',
        'Quando usar cada tipo de desligamento',
        'Como evitar perda de dados'
      ],
      steps: [
        {
          id: 1,
          title: 'Verificando as Conexões',
          content: `
            <p>Antes de ligar o computador, é importante verificar se todas as conexões estão corretas:</p>
            <ol>
              <li><strong>Cabo de energia:</strong> Certifique-se de que o cabo de energia está conectado firmemente na parte traseira do computador e na tomada</li>
              <li><strong>Monitor:</strong> Verifique se o cabo do monitor está conectado tanto no computador quanto no monitor</li>
              <li><strong>Teclado e mouse:</strong> Confirme se estão conectados nas portas USB</li>
              <li><strong>Estabilizador:</strong> Se você usa um, verifique se está ligado</li>
            </ol>
            <p>Essas verificações evitam problemas na hora de ligar o equipamento.</p>
          `,
          tip: 'Sempre verifique as conexões antes de ligar. Isso evita 90% dos problemas comuns.'
        },
        {
          id: 2,
          title: 'Ligando o Computador',
          content: `
            <p>Agora vamos ligar o computador seguindo a ordem correta:</p>
            <ol>
              <li><strong>Ligue o estabilizador primeiro</strong> (se você tiver um)</li>
              <li><strong>Ligue o monitor</strong> pressionando o botão de energia dele</li>
              <li><strong>Pressione o botão de energia do computador</strong> - geralmente fica na frente do gabinete</li>
              <li><strong>Aguarde o sistema inicializar</strong> - pode levar alguns minutos</li>
            </ol>
            <p>Você verá luzes acendendo e ouvirá o ventilador funcionando. Isso é normal!</p>
          `,
          tip: 'Se o computador não ligar, verifique se o estabilizador está funcionando e se há energia na tomada.'
        },
        {
          id: 3,
          title: 'Aguardando a Inicialização',
          content: `
            <p>Durante a inicialização, várias coisas acontecem:</p>
            <ul>
              <li><strong>Tela preta com textos:</strong> O computador está verificando os componentes</li>
              <li><strong>Logo do Windows:</strong> O sistema operacional está carregando</li>
              <li><strong>Tela de login:</strong> Onde você digita sua senha (se tiver)</li>
              <li><strong>Área de trabalho:</strong> Quando tudo estiver pronto para uso</li>
            </ul>
            <p>Seja paciente - computadores mais antigos podem demorar mais para inicializar.</p>
          `,
          tip: 'Nunca desligue o computador durante a inicialização. Isso pode causar problemas no sistema.'
        },
        {
          id: 4,
          title: 'Desligando Corretamente',
          content: `
            <p>Para desligar o computador de forma segura:</p>
            <ol>
              <li><strong>Feche todos os programas abertos</strong> - clique no X de cada janela</li>
              <li><strong>Salve seus trabalhos</strong> - documentos, fotos editadas, etc.</li>
              <li><strong>Clique no botão Iniciar</strong> (canto inferior esquerdo)</li>
              <li><strong>Clique em "Desligar"</strong> ou no ícone de energia</li>
              <li><strong>Aguarde o computador desligar completamente</strong></li>
            </ol>
            <p>Nunca use o botão de energia para desligar, exceto em emergências!</p>
          `,
          tip: 'Sempre use o menu Iniciar para desligar. Isso protege seus arquivos e o sistema.'
        },
        {
          id: 5,
          title: 'Situações Especiais',
          content: `
            <p>Às vezes você precisa de outras opções:</p>
            <h3>Reiniciar:</h3>
            <ul>
              <li>Use quando o computador estiver lento ou travado</li>
              <li>Clique em Iniciar > Reiniciar</li>
              <li>O computador desliga e liga automaticamente</li>
            </ul>
            <h3>Suspender:</h3>
            <ul>
              <li>Economiza energia mantendo seus programas abertos</li>
              <li>Clique em Iniciar > Suspender</li>
              <li>Para voltar, pressione qualquer tecla</li>
            </ul>
            <h3>Emergência:</h3>
            <ul>
              <li>Se o computador travar completamente</li>
              <li>Pressione e segure o botão de energia por 5 segundos</li>
              <li>Use apenas quando necessário</li>
            </ul>
          `,
          tip: 'Use "Suspender" quando for se ausentar por pouco tempo. Economiza energia e mantém tudo aberto.'
        }
      ]
    },
    {
      id: 2,
      title: 'Navegando na Internet com Segurança',
      description: 'Dicas essenciais para usar a internet de forma segura e proteger suas informações pessoais contra golpes e vírus.',
      category: 'internet',
      difficulty: 'Iniciante',
      duration: '12 min',
      rating: 4.9,
      views: 2100,
      author: 'Dra. Ana Santos',
      date: '2025-01-08',
      tags: ['internet', 'seguranca', 'navegacao', 'protecao'],
      requirements: [
        'Computador ou celular com internet',
        'Navegador instalado (Chrome, Firefox, Edge)',
        'Conhecimento básico de como usar o mouse'
      ],
      whatYouWillLearn: [
        'Como identificar sites seguros',
        'Reconhecer golpes na internet',
        'Criar senhas seguras',
        'Navegar sem riscos',
        'Proteger informações pessoais'
      ],
      steps: [
        {
          id: 1,
          title: 'Identificando Sites Seguros',
          content: `
            <p>Antes de inserir qualquer informação, verifique se o site é seguro:</p>
            <h3>Sinais de um site seguro:</h3>
            <ul>
              <li><strong>HTTPS:</strong> O endereço deve começar com "https://" (o "s" significa seguro)</li>
              <li><strong>Cadeado:</strong> Procure um ícone de cadeado ao lado do endereço</li>
              <li><strong>Endereço correto:</strong> Verifique se está escrito corretamente (ex: "banco do brasil" não "banco do brazil")</li>
              <li><strong>Design profissional:</strong> Sites oficiais têm aparência cuidada</li>
            </ul>
            <h3>Sinais de perigo:</h3>
            <ul>
              <li>Endereços estranhos ou com muitos números</li>
              <li>Erros de português</li>
              <li>Promessas impossíveis ("Ganhe R$ 5.000 por dia")</li>
              <li>Pedidos urgentes de informações</li>
            </ul>
          `,
          tip: 'Quando em dúvida, digite o endereço do site diretamente no navegador em vez de clicar em links.'
        },
        {
          id: 2,
          title: 'Criando Senhas Seguras',
          content: `
            <p>Uma senha forte é sua primeira linha de defesa:</p>
            <h3>Como criar uma senha segura:</h3>
            <ol>
              <li><strong>Use pelo menos 8 caracteres</strong> - quanto mais, melhor</li>
              <li><strong>Misture letras maiúsculas e minúsculas</strong></li>
              <li><strong>Inclua números</strong> (mas não apenas no final)</li>
              <li><strong>Use símbolos</strong> como @, #, !, $</li>
              <li><strong>Evite informações pessoais</strong> como nome, data de nascimento</li>
            </ol>
            <h3>Exemplos de senhas fracas:</h3>
            <ul>
              <li>123456</li>
              <li>senha123</li>
              <li>seunome123</li>
              <li>12345678</li>
            </ul>
            <h3>Exemplo de senha forte:</h3>
            <p><code>MinhaC@sa2025!</code> (fácil de lembrar, difícil de descobrir)</p>
          `,
          tip: 'Use uma frase que só você conhece e substitua algumas letras por números e símbolos.'
        },
        {
          id: 3,
          title: 'Reconhecendo Golpes Comuns',
          content: `
            <p>Aprenda a identificar os golpes mais comuns na internet:</p>
            <h3>Phishing (Sites Falsos):</h3>
            <ul>
              <li>Sites que imitam bancos ou lojas famosas</li>
              <li>Pedem login e senha em páginas falsas</li>
              <li>Sempre digite o endereço do banco diretamente</li>
            </ul>
            <h3>E-mails Suspeitos:</h3>
            <ul>
              <li>"Você ganhou um prêmio" sem ter participado de sorteio</li>
              <li>"Sua conta será bloqueada" com links para clicar</li>
              <li>Pedidos urgentes de informações pessoais</li>
            </ul>
            <h3>Golpes em Redes Sociais:</h3>
            <ul>
              <li>Perfis falsos pedindo dinheiro</li>
              <li>Promoções impossíveis</li>
              <li>Links para "vídeos íntimos" que instalam vírus</li>
            </ul>
            <h3>O que fazer:</h3>
            <ul>
              <li><strong>Nunca clique</strong> em links suspeitos</li>
              <li><strong>Não forneça</strong> dados pessoais por e-mail</li>
              <li><strong>Confirme</strong> informações por telefone</li>
            </ul>
          `,
          tip: 'Regra de ouro: se parece bom demais para ser verdade, provavelmente é golpe.'
        },
        {
          id: 4,
          title: 'Configurações de Privacidade',
          content: `
            <p>Configure seu navegador para maior segurança:</p>
            <h3>No Google Chrome:</h3>
            <ol>
              <li>Clique nos <strong>três pontos</strong> no canto superior direito</li>
              <li>Vá em <strong>"Configurações"</strong></li>
              <li>Clique em <strong>"Privacidade e segurança"</strong></li>
              <li>Ative <strong>"Navegação segura"</strong></li>
              <li>Configure <strong>"Cookies"</strong> para bloquear de terceiros</li>
            </ol>
            <h3>Configurações importantes:</h3>
            <ul>
              <li><strong>Bloqueador de pop-ups:</strong> Evita janelas indesejadas</li>
              <li><strong>Aviso de sites perigosos:</strong> Alerta sobre sites maliciosos</li>
              <li><strong>Não salvar senhas:</strong> Em computadores compartilhados</li>
              <li><strong>Limpar dados:</strong> Histórico e cookies regularmente</li>
            </ul>
            <h3>Extensões úteis:</h3>
            <ul>
              <li><strong>AdBlock:</strong> Bloqueia propagandas</li>
              <li><strong>HTTPS Everywhere:</strong> Força conexões seguras</li>
            </ul>
          `,
          tip: 'Mantenha seu navegador sempre atualizado. As atualizações corrigem falhas de segurança.'
        },
        {
          id: 5,
          title: 'Compras Online Seguras',
          content: `
            <p>Como comprar na internet sem riscos:</p>
            <h3>Antes de comprar:</h3>
            <ol>
              <li><strong>Pesquise a loja:</strong> Procure no Google por reclamações</li>
              <li><strong>Verifique o CNPJ:</strong> Sites sérios mostram essa informação</li>
              <li><strong>Leia avaliações:</strong> De outros compradores</li>
              <li><strong>Compare preços:</strong> Se está muito barato, desconfie</li>
            </ol>
            <h3>Durante a compra:</h3>
            <ul>
              <li><strong>Use cartão de crédito:</strong> Mais proteção que débito</li>
              <li><strong>Evite transferências:</strong> PIX ou depósito para desconhecidos</li>
              <li><strong>Guarde comprovantes:</strong> E-mails e prints da compra</li>
              <li><strong>Verifique o endereço:</strong> Se está correto para entrega</li>
            </ul>
            <h3>Sites confiáveis:</h3>
            <ul>
              <li>Mercado Livre</li>
              <li>Amazon</li>
              <li>Magazine Luiza</li>
              <li>Americanas</li>
              <li>Casas Bahia</li>
            </ul>
            <h3>Sinais de alerta:</h3>
            <ul>
              <li>Preços muito abaixo do mercado</li>
              <li>Site sem informações de contato</li>
              <li>Pagamento apenas por transferência</li>
              <li>Pressão para comprar rapidamente</li>
            </ul>
          `,
          tip: 'Sempre que possível, use sites que você já conhece ou que foram recomendados por pessoas de confiança.'
        }
      ]
    },
    {
      id: 3,
      title: 'Como Usar o WhatsApp no Celular',
      description: 'Tutorial completo para enviar mensagens, fotos, fazer chamadas e usar todas as funcionalidades do WhatsApp.',
      category: 'mobile',
      difficulty: 'Iniciante',
      duration: '15 min',
      rating: 4.7,
      views: 3200,
      author: 'Prof. Maria Oliveira',
      date: '2025-01-05',
      tags: ['whatsapp', 'celular', 'mensagens', 'comunicacao'],
      requirements: [
        'Celular com Android ou iPhone',
        'Número de telefone ativo',
        'Conexão com internet (Wi-Fi ou dados móveis)',
        'Espaço livre no celular (pelo menos 100MB)'
      ],
      whatYouWillLearn: [
        'Como instalar e configurar o WhatsApp',
        'Enviar mensagens de texto e áudio',
        'Compartilhar fotos e vídeos',
        'Fazer chamadas de voz e vídeo',
        'Criar e participar de grupos',
        'Usar recursos avançados'
      ],
      steps: [
        {
          id: 1,
          title: 'Instalando o WhatsApp',
          content: `
            <p>Vamos começar instalando o WhatsApp no seu celular:</p>
            <h3>No Android:</h3>
            <ol>
              <li><strong>Abra a Play Store</strong> (ícone colorido com um triângulo)</li>
              <li><strong>Toque na lupa</strong> para pesquisar</li>
              <li><strong>Digite "WhatsApp"</strong> e toque em pesquisar</li>
              <li><strong>Toque em "Instalar"</strong> no app oficial (desenvolvido por WhatsApp LLC)</li>
              <li><strong>Aguarde o download</strong> terminar</li>
            </ol>
            <h3>No iPhone:</h3>
            <ol>
              <li><strong>Abra a App Store</strong> (ícone azul com um "A")</li>
              <li><strong>Toque em "Pesquisar"</strong> na parte inferior</li>
              <li><strong>Digite "WhatsApp"</strong></li>
              <li><strong>Toque em "Obter"</strong> ao lado do WhatsApp Messenger</li>
              <li><strong>Use sua digital ou senha</strong> para confirmar</li>
            </ol>
            <p>O WhatsApp é gratuito e seguro quando baixado das lojas oficiais.</p>
          `,
          tip: 'Sempre baixe o WhatsApp das lojas oficiais (Play Store ou App Store) para garantir segurança.'
        },
        {
          id: 2,
          title: 'Configurando sua Conta',
          content: `
            <p>Agora vamos configurar sua conta do WhatsApp:</p>
            <ol>
              <li><strong>Abra o WhatsApp</strong> tocando no ícone verde</li>
              <li><strong>Toque em "Concordar e continuar"</strong> para aceitar os termos</li>
              <li><strong>Digite seu número de telefone</strong> com DDD (ex: 11987654321)</li>
              <li><strong>Toque em "Avançar"</strong></li>
              <li><strong>Confirme seu número</strong> tocando em "OK"</li>
              <li><strong>Aguarde o código de verificação</strong> chegar por SMS</li>
              <li><strong>Digite o código</strong> de 6 dígitos que você recebeu</li>
            </ol>
            <h3>Configurando seu perfil:</h3>
            <ol>
              <li><strong>Digite seu nome</strong> (como quer aparecer para os contatos)</li>
              <li><strong>Adicione uma foto</strong> tocando no círculo cinza</li>
              <li><strong>Escolha "Câmera"</strong> para tirar uma foto nova ou "Galeria" para usar uma existente</li>
              <li><strong>Toque em "Avançar"</strong> para finalizar</li>
            </ol>
          `,
          tip: 'Use um nome pelo qual as pessoas te conhecem. Você pode mudar depois nas configurações.'
        },
        {
          id: 3,
          title: 'Enviando sua Primeira Mensagem',
          content: `
            <p>Vamos enviar sua primeira mensagem no WhatsApp:</p>
            <h3>Encontrando um contato:</h3>
            <ol>
              <li><strong>Toque no ícone de mensagem</strong> (balão verde no canto inferior direito)</li>
              <li><strong>Escolha um contato</strong> da lista que aparece</li>
              <li><strong>Ou toque em "Novo contato"</strong> para adicionar alguém</li>
            </ol>
            <h3>Enviando mensagem de texto:</h3>
            <ol>
              <li><strong>Toque na caixa de texto</strong> na parte inferior (onde está escrito "Mensagem")</li>
              <li><strong>Digite sua mensagem</strong> usando o teclado</li>
              <li><strong>Toque no ícone de enviar</strong> (setinha verde) ou pressione Enter</li>
            </ol>
            <h3>Entendendo os símbolos:</h3>
            <ul>
              <li><strong>✓ (um check cinza):</strong> Mensagem enviada</li>
              <li><strong>✓✓ (dois checks cinzas):</strong> Mensagem entregue</li>
              <li><strong>✓✓ (dois checks azuis):</strong> Mensagem lida</li>
            </ul>
          `,
          tip: 'Se os checks não ficam azuis, a pessoa pode ter desativado a confirmação de leitura.'
        },
        {
          id: 4,
          title: 'Enviando Fotos e Áudios',
          content: `
            <p>O WhatsApp permite enviar muito mais que texto:</p>
            <h3>Enviando fotos:</h3>
            <ol>
              <li><strong>Abra uma conversa</strong></li>
              <li><strong>Toque no ícone de clipe</strong> (📎) ao lado da caixa de texto</li>
              <li><strong>Escolha "Galeria"</strong> para fotos já salvas ou "Câmera" para tirar uma nova</li>
              <li><strong>Selecione a foto</strong> que quer enviar</li>
              <li><strong>Adicione uma legenda</strong> se quiser</li>
              <li><strong>Toque em enviar</strong> (setinha verde)</li>
            </ol>
            <h3>Gravando áudio:</h3>
            <ol>
              <li><strong>Mantenha pressionado</strong> o ícone do microfone</li>
              <li><strong>Fale sua mensagem</strong> enquanto segura</li>
              <li><strong>Solte o dedo</strong> para enviar automaticamente</li>
              <li><strong>Ou deslize para cima</strong> para gravar sem segurar</li>
            </ol>
            <h3>Outros tipos de arquivo:</h3>
            <ul>
              <li><strong>Documentos:</strong> PDFs, documentos do Word</li>
              <li><strong>Localização:</strong> Compartilhe onde você está</li>
              <li><strong>Contato:</strong> Envie informações de contato</li>
            </ul>
          `,
          tip: 'Para cancelar um áudio, deslize o dedo para a esquerda enquanto grava.'
        },
        {
          id: 5,
          title: 'Fazendo Chamadas',
          content: `
            <p>O WhatsApp permite fazer chamadas gratuitas:</p>
            <h3>Chamada de voz:</h3>
            <ol>
              <li><strong>Abra uma conversa</strong> com a pessoa</li>
              <li><strong>Toque no ícone do telefone</strong> no canto superior direito</li>
              <li><strong>Aguarde a pessoa atender</strong></li>
              <li><strong>Para desligar</strong>, toque no botão vermelho</li>
            </ol>
            <h3>Chamada de vídeo:</h3>
            <ol>
              <li><strong>Abra uma conversa</strong></li>
              <li><strong>Toque no ícone da câmera</strong> no canto superior direito</li>
              <li><strong>Posicione o celular</strong> para que seu rosto apareça bem</li>
              <li><strong>Durante a chamada</strong> você pode desligar o microfone ou câmera</li>
            </ol>
            <h3>Dicas para chamadas:</h3>
            <ul>
              <li><strong>Use Wi-Fi</strong> quando possível para economizar dados</li>
              <li><strong>Fique em local com boa conexão</strong></li>
              <li><strong>Para vídeo</strong>, certifique-se de ter boa iluminação</li>
              <li><strong>Teste o áudio</strong> antes de chamadas importantes</li>
            </ul>
          `,
          tip: 'As chamadas do WhatsApp são gratuitas, mas consomem internet. Use Wi-Fi para economizar.'
        },
        {
          id: 6,
          title: 'Criando e Participando de Grupos',
          content: `
            <p>Os grupos são ótimos para conversar com várias pessoas ao mesmo tempo:</p>
            <h3>Criando um grupo:</h3>
            <ol>
              <li><strong>Toque nos três pontos</strong> no canto superior direito</li>
              <li><strong>Escolha "Novo grupo"</strong></li>
              <li><strong>Selecione os participantes</strong> tocando nos nomes</li>
              <li><strong>Toque na seta verde</strong> para continuar</li>
              <li><strong>Digite o nome do grupo</strong></li>
              <li><strong>Adicione uma foto</strong> se quiser</li>
              <li><strong>Toque no check verde</strong> para criar</li>
            </ol>
            <h3>Participando de grupos:</h3>
            <ul>
              <li><strong>Alguém te adiciona:</strong> Você recebe uma notificação</li>
              <li><strong>Link de convite:</strong> Toque no link que alguém enviou</li>
              <li><strong>QR Code:</strong> Escaneie o código do grupo</li>
            </ul>
            <h3>Administrando grupos:</h3>
            <ul>
              <li><strong>Adicionar pessoas:</strong> Toque no nome do grupo > Adicionar participante</li>
              <li><strong>Remover pessoas:</strong> Toque no nome > Selecione a pessoa > Remover</li>
              <li><strong>Mudar configurações:</strong> Quem pode enviar mensagens, mudar info do grupo</li>
            </ul>
          `,
          tip: 'Em grupos grandes, use @nome para mencionar alguém específico. A pessoa receberá uma notificação especial.'
        }
      ]
    },
    {
      id: 4,
      title: 'Criando e Organizando Pastas no Computador',
      description: 'Aprenda a criar, nomear e organizar pastas para manter seus arquivos organizados e fáceis de encontrar.',
      category: 'basic',
      difficulty: 'Iniciante',
      duration: '8 min',
      rating: 4.6,
      views: 890,
      author: 'Prof. João Santos',
      date: '2025-01-03',
      tags: ['pastas', 'organizacao', 'arquivos', 'windows'],
      requirements: [
        'Computador com Windows',
        'Conhecimento básico de mouse',
        'Alguns arquivos para organizar'
      ],
      whatYouWillLearn: [
        'Como criar pastas novas',
        'Dar nomes úteis às pastas',
        'Mover arquivos entre pastas',
        'Criar uma estrutura organizada',
        'Encontrar arquivos rapidamente'
      ],
      steps: [
        {
          id: 1,
          title: 'Criando sua Primeira Pasta',
          content: `
            <p>Vamos aprender a criar pastas para organizar seus arquivos:</p>
            <h3>Método 1 - Clique direito:</h3>
            <ol>
              <li><strong>Vá para a área de trabalho</strong> ou abra uma pasta existente</li>
              <li><strong>Clique com o botão direito</strong> em um espaço vazio</li>
              <li><strong>Escolha "Novo"</strong> no menu que aparece</li>
              <li><strong>Clique em "Pasta"</strong></li>
              <li><strong>Digite um nome</strong> para sua pasta</li>
              <li><strong>Pressione Enter</strong> para confirmar</li>
            </ol>
            <h3>Método 2 - Explorador de Arquivos:</h3>
            <ol>
              <li><strong>Abra o Explorador de Arquivos</strong> (ícone da pasta na barra de tarefas)</li>
              <li><strong>Navegue até onde quer criar a pasta</strong></li>
              <li><strong>Clique em "Nova pasta"</strong> na barra superior</li>
              <li><strong>Digite o nome</strong> e pressione Enter</li>
            </ol>
          `,
          tip: 'Use nomes descritivos para suas pastas, como "Fotos da Família" em vez de apenas "Fotos".'
        },
        {
          id: 2,
          title: 'Dando Nomes Úteis às Pastas',
          content: `
            <p>Um bom nome de pasta facilita muito encontrar seus arquivos:</p>
            <h3>Dicas para nomes de pastas:</h3>
            <ul>
              <li><strong>Seja específico:</strong> "Receitas de Bolo" é melhor que "Receitas"</li>
              <li><strong>Use datas:</strong> "Fotos 2025" ou "Documentos Janeiro 2025"</li>
              <li><strong>Evite caracteres especiais:</strong> Não use / \ : * ? " < > |</li>
              <li><strong>Use números para ordem:</strong> "01 - Documentos", "02 - Fotos"</li>
            </ul>
            <h3>Exemplos de boa organização:</h3>
            <ul>
              <li><strong>Documentos Pessoais</strong>
                <ul>
                  <li>RG e CPF</li>
                  <li>Comprovantes de Residência</li>
                  <li>Carteira de Trabalho</li>
                </ul>
              </li>
              <li><strong>Fotos da Família</strong>
                <ul>
                  <li>Aniversários</li>
                  <li>Viagens</li>
                  <li>Natal e Festas</li>
                </ul>
              </li>
            </ul>
            <h3>Renomeando pastas:</h3>
            <ol>
              <li><strong>Clique direito na pasta</strong></li>
              <li><strong>Escolha "Renomear"</strong></li>
              <li><strong>Digite o novo nome</strong></li>
              <li><strong>Pressione Enter</strong></li>
            </ol>
          `,
          tip: 'Se você tem muitas pastas, use números no início (01, 02, 03) para manter a ordem que você quer.'
        },
        {
          id: 3,
          title: 'Movendo Arquivos para Pastas',
          content: `
            <p>Agora vamos aprender a mover arquivos para as pastas certas:</p>
            <h3>Método 1 - Arrastar e soltar:</h3>
            <ol>
              <li><strong>Abra duas janelas</strong> do explorador de arquivos</li>
              <li><strong>Em uma janela</strong>, navegue até onde estão os arquivos</li>
              <li><strong>Na outra janela</strong>, abra a pasta de destino</li>
              <li><strong>Clique no arquivo</strong> e arraste até a pasta</li>
              <li><strong>Solte o arquivo</strong> na pasta de destino</li>
            </ol>
            <h3>Método 2 - Recortar e colar:</h3>
            <ol>
              <li><strong>Clique direito no arquivo</strong> que quer mover</li>
              <li><strong>Escolha "Recortar"</strong> (ou Ctrl+X)</li>
              <li><strong>Navegue até a pasta de destino</strong></li>
              <li><strong>Clique direito dentro da pasta</strong></li>
              <li><strong>Escolha "Colar"</strong> (ou Ctrl+V)</li>
            </ol>
            <h3>Diferença entre mover e copiar:</h3>
            <ul>
              <li><strong>Mover (Recortar):</strong> O arquivo sai do local original</li>
              <li><strong>Copiar:</strong> O arquivo fica nos dois lugares</li>
              <li><strong>Para copiar:</strong> Use "Copiar" em vez de "Recortar"</li>
            </ul>
          `,
          tip: 'Use Ctrl+Z para desfazer se mover um arquivo para o lugar errado.'
        },
        {
          id: 4,
          title: 'Criando uma Estrutura Organizada',
          content: `
            <p>Vamos criar uma estrutura de pastas que facilite sua vida:</p>
            <h3>Estrutura sugerida para Documentos:</h3>
            <pre>
📁 Meus Documentos
├── 📁 01 - Documentos Pessoais
│   ├── 📁 RG e CPF
│   ├── 📁 Comprovantes
│   └── 📁 Carteira de Trabalho
├── 📁 02 - Financeiro
│   ├── 📁 Extratos Bancários
│   ├── 📁 Contas a Pagar
│   └── 📁 Impostos
├── 📁 03 - Saúde
│   ├── 📁 Exames
│   ├── 📁 Receitas Médicas
│   └── 📁 Plano de Saúde
└── 📁 04 - Trabalho
    ├── 📁 Currículos
    ├── 📁 Certificados
    └── 📁 Contratos
            </pre>
            <h3>Para fotos e vídeos:</h3>
            <pre>
📁 Minhas Fotos
├── 📁 2025
│   ├── 📁 Janeiro
│   ├── 📁 Fevereiro
│   └── 📁 Março
├── 📁 Família
│   ├── 📁 Aniversários
│   ├── 📁 Viagens
│   └── 📁 Festas
└── 📁 Trabalho
            </pre>
            <h3>Dicas importantes:</h3>
            <ul>
              <li><strong>Não crie muitos níveis:</strong> Máximo 3-4 pastas dentro de pastas</li>
              <li><strong>Seja consistente:</strong> Use sempre o mesmo padrão</li>
              <li><strong>Revise regularmente:</strong> Organize arquivos novos mensalmente</li>
            </ul>
          `,
          tip: 'Comece simples. É melhor ter poucas pastas bem organizadas do que muitas pastas confusas.'
        },
        {
          id: 5,
          title: 'Encontrando Arquivos Rapidamente',
          content: `
            <p>Mesmo bem organizado, às vezes precisamos procurar arquivos:</p>
            <h3>Usando a busca do Windows:</h3>
            <ol>
              <li><strong>Clique na lupa</strong> na barra de tarefas</li>
              <li><strong>Digite o nome do arquivo</strong> ou parte dele</li>
              <li><strong>Veja os resultados</strong> que aparecem</li>
              <li><strong>Clique no arquivo</strong> para abrir</li>
            </ol>
            <h3>Busca no Explorador de Arquivos:</h3>
            <ol>
              <li><strong>Abra o Explorador</strong></li>
              <li><strong>Clique na caixa de busca</strong> no canto superior direito</li>
              <li><strong>Digite o que procura</strong></li>
              <li><strong>Pressione Enter</strong></li>
            </ol>
            <h3>Dicas de busca:</h3>
            <ul>
              <li><strong>Use palavras-chave:</strong> "receita", "conta", "foto"</li>
              <li><strong>Busque por tipo:</strong> "*.pdf" para PDFs, "*.jpg" para fotos</li>
              <li><strong>Use datas:</strong> "modificado:ontem" ou "criado:esta semana"</li>
            </ul>
            <h3>Organizando a área de trabalho:</h3>
            <ul>
              <li><strong>Não deixe muitos arquivos</strong> na área de trabalho</li>
              <li><strong>Crie atalhos</strong> para pastas importantes</li>
              <li><strong>Use a lixeira</strong> para arquivos que não precisa mais</li>
            </ul>
          `,
          tip: 'Crie atalhos na área de trabalho para as pastas que você usa mais. Clique direito na pasta > Enviar para > Área de trabalho.'
        }
      ]
    },
    {
      id: 5,
      title: 'Como Fazer Pesquisas no Google',
      description: 'Dicas para encontrar informações rapidamente usando o Google de forma eficiente e precisa.',
      category: 'internet',
      difficulty: 'Iniciante',
      duration: '10 min',
      rating: 4.8,
      views: 1800,
      author: 'Profa. Carla Lima',
      date: '2025-01-01',
      tags: ['google', 'pesquisa', 'internet', 'busca'],
      requirements: [
        'Computador ou celular com internet',
        'Navegador (Chrome, Firefox, Edge)',
        'Conhecimento básico de digitação'
      ],
      whatYouWillLearn: [
        'Como fazer pesquisas básicas',
        'Usar filtros para refinar resultados',
        'Encontrar imagens e vídeos',
        'Pesquisar informações específicas',
        'Truques avançados de busca'
      ],
      steps: [
        {
          id: 1,
          title: 'Fazendo sua Primeira Pesquisa',
          content: `
            <p>O Google é a ferramenta mais usada para encontrar informações na internet:</p>
            <h3>Acessando o Google:</h3>
            <ol>
              <li><strong>Abra seu navegador</strong> (Chrome, Firefox, Edge)</li>
              <li><strong>Digite "google.com"</strong> na barra de endereços</li>
              <li><strong>Pressione Enter</strong></li>
              <li><strong>Ou use a barra de pesquisa</strong> que já aparece em muitos navegadores</li>
            </ol>
            <h3>Fazendo uma pesquisa simples:</h3>
            <ol>
              <li><strong>Clique na caixa de pesquisa</strong> (onde está escrito "Pesquisar")</li>
              <li><strong>Digite o que você quer encontrar</strong></li>
              <li><strong>Pressione Enter</strong> ou clique na lupa</li>
              <li><strong>Veja os resultados</strong> que aparecem</li>
            </ol>
            <h3>Entendendo os resultados:</h3>
            <ul>
              <li><strong>Título azul:</strong> Nome da página</li>
              <li><strong>Endereço verde:</strong> Site onde está a informação</li>
              <li><strong>Texto cinza:</strong> Resumo do conteúdo</li>
              <li><strong>Anúncios:</strong> Aparecem no topo com "Anúncio" escrito</li>
            </ul>
          `,
          tip: 'Clique no título azul para abrir a página. Se não encontrar o que quer, volte e tente outras palavras.'
        },
        {
          id: 2,
          title: 'Melhorando suas Pesquisas',
          content: `
            <p>Algumas dicas para encontrar exatamente o que você procura:</p>
            <h3>Use palavras-chave específicas:</h3>
            <ul>
              <li><strong>Em vez de:</strong> "como fazer comida"</li>
              <li><strong>Digite:</strong> "receita de bolo de chocolate"</li>
              <li><strong>Seja específico:</strong> "horário ônibus São Paulo Campinas"</li>
            </ul>
            <h3>Truques úteis:</h3>
            <ul>
              <li><strong>Aspas (""):</strong> Para frases exatas - "Prefeitura de São Paulo"</li>
              <li><strong>Sinal de menos (-):</strong> Para excluir palavras - receita bolo -chocolate</li>
              <li><strong>Site específico:</strong> site:gov.br para buscar só em sites do governo</li>
              <li><strong>Tipo de arquivo:</strong> filetype:pdf para encontrar só PDFs</li>
            </ul>
            <h3>Exemplos práticos:</h3>
            <ul>
              <li><strong>"horário de funcionamento" banco do brasil:</strong> Horários específicos</li>
              <li><strong>receita lasanha -carne:</strong> Receitas de lasanha sem carne</li>
              <li><strong>site:detran.sp.gov.br CNH:</strong> Informações sobre CNH no site do Detran</li>
            </ul>
          `,
          tip: 'Se não encontrar na primeira tentativa, tente palavras diferentes. "Médico" e "doutor" podem dar resultados diferentes.'
        },
        {
          id: 3,
          title: 'Pesquisando Imagens',
          content: `
            <p>O Google também é ótimo para encontrar imagens:</p>
            <h3>Acessando a busca de imagens:</h3>
            <ol>
              <li><strong>Vá para google.com</strong></li>
              <li><strong>Clique em "Imagens"</strong> no canto superior direito</li>
              <li><strong>Digite o que procura</strong> na caixa de pesquisa</li>
              <li><strong>Pressione Enter</strong></li>
            </ol>
            <h3>Filtrando imagens:</h3>
            <ol>
              <li><strong>Clique em "Ferramentas"</strong> abaixo da caixa de pesquisa</li>
              <li><strong>Escolha o tamanho:</strong> Grande, médio, pequeno</li>
              <li><strong>Selecione a cor:</strong> Colorida, preto e branco, transparente</li>
              <li><strong>Defina o tipo:</strong> Foto, clipart, desenho</li>
              <li><strong>Escolha o tempo:</strong> Última hora, dia, semana, mês, ano</li>
            </ol>
            <h3>Salvando imagens:</h3>
            <ol>
              <li><strong>Clique na imagem</strong> que você quer</li>
              <li><strong>Clique direito nela</strong></li>
              <li><strong>Escolha "Salvar imagem como"</strong></li>
              <li><strong>Escolha onde salvar</strong> no seu computador</li>
              <li><strong>Clique em "Salvar"</strong></li>
            </ol>
            <h3>Cuidados importantes:</h3>
            <ul>
              <li><strong>Direitos autorais:</strong> Nem toda imagem pode ser usada livremente</li>
              <li><strong>Para uso comercial:</strong> Use filtros de "Direitos de uso"</li>
              <li><strong>Qualidade:</strong> Imagens maiores geralmente têm melhor qualidade</li>
            </ul>
          `,
          tip: 'Para encontrar imagens livres de direitos autorais, use "Ferramentas" > "Direitos de uso" > "Marcadas para reutilização".'
        },
        {
          id: 4,
          title: 'Pesquisas Específicas e Úteis',
          content: `
            <p>O Google pode ajudar com muitas tarefas do dia a dia:</p>
            <h3>Informações rápidas:</h3>
            <ul>
              <li><strong>Tempo:</strong> "tempo em São Paulo" ou "previsão do tempo"</li>
              <li><strong>Conversões:</strong> "10 dólares em reais" ou "5 metros em centímetros"</li>
              <li><strong>Calculadora:</strong> "2+2" ou "15% de 200"</li>
              <li><strong>Definições:</strong> "definição de democracia"</li>
            </ul>
            <h3>Serviços públicos:</h3>
            <ul>
              <li><strong>CEP:</strong> "CEP Rua Augusta São Paulo"</li>
              <li><strong>CNPJ:</strong> "consulta CNPJ receita federal"</li>
              <li><strong>CPF:</strong> "consulta CPF serasa"</li>
              <li><strong>Detran:</strong> "consulta multas detran SP"</li>
            </ul>
            <h3>Saúde e emergência:</h3>
            <ul>
              <li><strong>Farmácias:</strong> "farmácia 24 horas perto de mim"</li>
              <li><strong>Hospitais:</strong> "hospital mais próximo"</li>
              <li><strong>Telefones úteis:</strong> "telefone bombeiros" ou "SAMU"</li>
            </ul>
            <h3>Compras e preços:</h3>
            <ul>
              <li><strong>Comparar preços:</strong> "preço iPhone 13"</li>
              <li><strong>Lojas próximas:</strong> "supermercado perto de mim"</li>
              <li><strong>Horários:</strong> "horário shopping Ibirapuera"</li>
            </ul>
          `,
          tip: 'Use "perto de mim" para encontrar serviços na sua região. O Google usa sua localização para mostrar resultados próximos.'
        },
        {
          id: 5,
          title: 'Verificando se a Informação é Confiável',
          content: `
            <p>Nem tudo que encontramos no Google é verdadeiro. Vamos aprender a verificar:</p>
            <h3>Sinais de sites confiáveis:</h3>
            <ul>
              <li><strong>Sites oficiais:</strong> .gov.br (governo), .edu.br (universidades)</li>
              <li><strong>Grandes portais:</strong> G1, UOL, Folha, Estadão</li>
              <li><strong>Organizações conhecidas:</strong> OMS, IBGE, Banco Central</li>
              <li><strong>Data recente:</strong> Informações atualizadas</li>
            </ul>
            <h3>Sinais de alerta:</h3>
            <ul>
              <li><strong>Títulos sensacionalistas:</strong> "URGENTE", "DESCOBERTA CHOCANTE"</li>
              <li><strong>Erros de português:</strong> Textos mal escritos</li>
              <li><strong>Sem autor:</strong> Não diz quem escreveu</li>
              <li><strong>Muita propaganda:</strong> Mais anúncios que conteúdo</li>
            </ul>
            <h3>Como verificar informações:</h3>
            <ol>
              <li><strong>Compare fontes:</strong> Veja se outros sites falam a mesma coisa</li>
              <li><strong>Verifique a data:</strong> Informação pode estar desatualizada</li>
              <li><strong>Procure o autor:</strong> Quem escreveu tem credibilidade?</li>
              <li><strong>Use fact-checkers:</strong> Agência Lupa, Aos Fatos, E-farsas</li>
            </ol>
            <h3>Para notícias importantes:</h3>
            <ul>
              <li><strong>Confirme em sites oficiais:</strong> Governo, órgãos públicos</li>
              <li><strong>Veja múltiplas fontes:</strong> Pelo menos 2-3 sites diferentes</li>
              <li><strong>Desconfie de "exclusivas":</strong> Notícias importantes aparecem em vários lugares</li>
            </ul>
            <h3>Cuidado especial com:</h3>
            <ul>
              <li><strong>Informações médicas:</strong> Sempre consulte um profissional</li>
              <li><strong>Investimentos:</strong> Desconfie de "ganhos garantidos"</li>
              <li><strong>Notícias políticas:</strong> Verifique em fontes diversas</li>
            </ul>
          `,
          tip: 'Quando em dúvida, procure a mesma informação em sites oficiais ou pergunte para alguém de confiança.'
        }
      ]
    },
    {
      id: 6,
      title: 'Instalando Aplicativos no Celular',
      description: 'Passo a passo para baixar e instalar aplicativos na Play Store com segurança, evitando apps maliciosos.',
      category: 'mobile',
      difficulty: 'Iniciante',
      duration: '7 min',
      rating: 4.5,
      views: 1500,
      author: 'Prof. Roberto Costa',
      date: '2024-12-28',
      tags: ['apps', 'play-store', 'instalacao', 'seguranca'],
      requirements: [
        'Celular Android ou iPhone',
        'Conta Google (Android) ou Apple ID (iPhone)',
        'Conexão com internet',
        'Espaço livre no celular'
      ],
      whatYouWillLearn: [
        'Como acessar a loja de aplicativos',
        'Identificar apps seguros',
        'Instalar e desinstalar aplicativos',
        'Gerenciar permissões',
        'Evitar aplicativos maliciosos'
      ],
      steps: [
        {
          id: 1,
          title: 'Acessando a Loja de Aplicativos',
          content: `
            <p>Cada sistema tem sua loja oficial de aplicativos:</p>
            <h3>No Android (Play Store):</h3>
            <ol>
              <li><strong>Procure o ícone da Play Store</strong> na tela inicial (triângulo colorido)</li>
              <li><strong>Toque no ícone</strong> para abrir</li>
              <li><strong>Se for a primeira vez</strong>, faça login com sua conta Google</li>
              <li><strong>Aceite os termos</strong> se solicitado</li>
            </ol>
            <h3>No iPhone (App Store):</h3>
            <ol>
              <li><strong>Procure o ícone da App Store</strong> (letra "A" azul)</li>
              <li><strong>Toque para abrir</strong></li>
              <li><strong>Faça login com seu Apple ID</strong> se necessário</li>
            </ol>
            <h3>Navegando na loja:</h3>
            <ul>
              <li><strong>Início:</strong> Apps recomendados e em destaque</li>
              <li><strong>Categorias:</strong> Apps organizados por tipo (jogos, produtividade, etc.)</li>
              <li><strong>Pesquisar:</strong> Para encontrar apps específicos</li>
              <li><strong>Meus apps:</strong> Apps que você já instalou</li>
            </ul>
          `,
          tip: 'Sempre use as lojas oficiais (Play Store ou App Store). Evite baixar apps de sites desconhecidos.'
        },
        {
          id: 2,
          title: 'Encontrando Aplicativos Seguros',
          content: `
            <p>Nem todos os aplicativos são seguros. Vamos aprender a identificar os confiáveis:</p>
            <h3>Sinais de um app seguro:</h3>
            <ul>
              <li><strong>Desenvolvedor conhecido:</strong> Google, Microsoft, Facebook, bancos oficiais</li>
              <li><strong>Muitos downloads:</strong> Milhões de instalações</li>
              <li><strong>Boa avaliação:</strong> 4 estrelas ou mais</li>
              <li><strong>Comentários positivos:</strong> Usuários elogiando</li>
              <li><strong>Atualizações recentes:</strong> App mantido atualizado</li>
            </ul>
            <h3>Sinais de alerta:</h3>
            <ul>
              <li><strong>Poucos downloads:</strong> Menos de 1.000 instalações</li>
              <li><strong>Avaliação baixa:</strong> Menos de 3 estrelas</li>
              <li><strong>Comentários negativos:</strong> Reclamações sobre vírus ou problemas</li>
              <li><strong>Desenvolvedor desconhecido:</strong> Nome estranho ou sem informações</li>
              <li><strong>Permissões excessivas:</strong> Pede acesso a tudo no celular</li>
            </ul>
            <h3>Verificando informações do app:</h3>
            <ol>
              <li><strong>Toque no app</strong> que te interessa</li>
              <li><strong>Leia a descrição</strong> completa</li>
              <li><strong>Veja as capturas de tela</strong></li>
              <li><strong>Confira as avaliações</strong> e comentários</li>
              <li><strong>Verifique as permissões</strong> que o app pede</li>
            </ol>
          `,
          tip: 'Leia sempre os comentários recentes. Eles podem alertar sobre problemas que surgiram em atualizações.'
        },
        {
          id: 3,
          title: 'Instalando um Aplicativo',
          content: `
            <p>Agora vamos instalar seu primeiro aplicativo com segurança:</p>
            <h3>Processo de instalação:</h3>
            <ol>
              <li><strong>Encontre o app</strong> que você quer (use a pesquisa se necessário)</li>
              <li><strong>Toque no app</strong> para ver os detalhes</li>
              <li><strong>Leia as informações</strong> e verifique se é seguro</li>
              <li><strong>Toque em "Instalar"</strong> (Android) ou "Obter" (iPhone)</li>
              <li><strong>Confirme com sua senha</strong>, digital ou Face ID se solicitado</li>
              <li><strong>Aguarde o download</strong> terminar</li>
              <li><strong>O app aparecerá</strong> na sua tela inicial</li>
            </ol>
            <h3>Durante a instalação:</h3>
            <ul>
              <li><strong>Verifique as permissões:</strong> O que o app quer acessar</li>
              <li><strong>Leia com atenção:</strong> Câmera, microfone, contatos, localização</li>
              <li><strong>Negue permissões desnecessárias:</strong> Um app de calculadora não precisa acessar seus contatos</li>
            </ul>
            <h3>Após a instalação:</h3>
            <ol>
              <li><strong>Abra o app</strong> tocando no ícone</li>
              <li><strong>Configure as permissões</strong> conforme necessário</li>
              <li><strong>Explore as funcionalidades</strong></li>
              <li><strong>Se não gostar</strong>, pode desinstalar</li>
            </ol>
          `,
          tip: 'Instale um app por vez e teste antes de instalar outros. Isso ajuda a identificar se algum está causando problemas.'
        },
        {
          id: 4,
          title: 'Gerenciando Permissões',
          content: `
            <p>As permissões controlam o que os apps podem fazer no seu celular:</p>
            <h3>Tipos de permissões comuns:</h3>
            <ul>
              <li><strong>Câmera:</strong> Para tirar fotos e gravar vídeos</li>
              <li><strong>Microfone:</strong> Para gravar áudio</li>
              <li><strong>Localização:</strong> Para saber onde você está</li>
              <li><strong>Contatos:</strong> Para acessar sua lista de contatos</li>
              <li><strong>Armazenamento:</strong> Para salvar arquivos no celular</li>
              <li><strong>Telefone:</strong> Para fazer ligações</li>
            </ul>
            <h3>Configurando permissões no Android:</h3>
            <ol>
              <li><strong>Vá em Configurações</strong></li>
              <li><strong>Toque em "Apps" ou "Aplicativos"</strong></li>
              <li><strong>Escolha o app</strong> que quer configurar</li>
              <li><strong>Toque em "Permissões"</strong></li>
              <li><strong>Ative ou desative</strong> cada permissão</li>
            </ol>
            <h3>No iPhone:</h3>
            <ol>
              <li><strong>Vá em Ajustes</strong></li>
              <li><strong>Role para baixo</strong> e encontre o app</li>
              <li><strong>Toque no nome do app</strong></li>
              <li><strong>Configure as permissões</strong> individualmente</li>
            </ol>
            <h3>Dicas de segurança:</h3>
            <ul>
              <li><strong>Seja criterioso:</strong> Só dê permissões que fazem sentido</li>
              <li><strong>Revise regularmente:</strong> Verifique as permissões dos apps</li>
              <li><strong>Desconfie:</strong> App de lanterna que pede acesso aos contatos</li>
            </ul>
          `,
          tip: 'Você pode sempre mudar as permissões depois. Comece negando tudo e vá liberando conforme a necessidade.'
        },
        {
          id: 5,
          title: 'Desinstalando e Organizando Apps',
          content: `
            <p>Manter o celular organizado é importante para o bom funcionamento:</p>
            <h3>Desinstalando apps no Android:</h3>
            <ol>
              <li><strong>Mantenha pressionado</strong> o ícone do app</li>
              <li><strong>Arraste para "Desinstalar"</strong> ou toque no X</li>
              <li><strong>Confirme a desinstalação</strong></li>
              <li><strong>Ou vá em Configurações > Apps</strong> e escolha "Desinstalar"</li>
            </ol>
            <h3>No iPhone:</h3>
            <ol>
              <li><strong>Mantenha pressionado</strong> o ícone do app</li>
              <li><strong>Toque no X</strong> que aparece</li>
              <li><strong>Confirme "Excluir App"</strong></li>
            </ol>
            <h3>Organizando apps:</h3>
            <ul>
              <li><strong>Crie pastas:</strong> Arraste um app sobre outro</li>
              <li><strong>Nomeie as pastas:</strong> "Bancos", "Jogos", "Trabalho"</li>
              <li><strong>Apps mais usados:</strong> Deixe na tela principal</li>
              <li><strong>Apps raramente usados:</strong> Coloque em pastas ou telas secundárias</li>
            </ul>
            <h3>Limpeza regular:</h3>
            <ul>
              <li><strong>Desinstale apps não usados:</strong> Libera espaço</li>
              <li><strong>Atualize apps regularmente:</strong> Para correções de segurança</li>
              <li><strong>Verifique o espaço:</strong> Apps ocupam memória</li>
            </ul>
            <h3>Apps essenciais recomendados:</h3>
            <ul>
              <li><strong>WhatsApp:</strong> Mensagens</li>
              <li><strong>App do seu banco:</strong> Para transações</li>
              <li><strong>Google Maps:</strong> Navegação</li>
              <li><strong>Antivírus:</strong> Proteção (Avast, AVG)</li>
            </ul>
          `,
          tip: 'Faça uma limpeza mensal: desinstale apps que não usa há mais de 30 dias para manter o celular rápido.'
        }
      ]
    }
  ];

  const filteredTutorials = selectedCategory === 'all' 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.category === selectedCategory);

  const openModal = (tutorial: Tutorial) => {
    setSelectedTutorial(tutorial);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTutorial(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="tutorials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tutoriais de Informática
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprenda informática básica com nossos tutoriais passo a passo, 
            desenvolvidos especialmente para iniciantes.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              onClick={() => openModal(tutorial)}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden group cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
                    {tutorial.difficulty}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {tutorial.duration}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {tutorial.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {tutorial.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      {tutorial.rating}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {tutorial.views}
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:underline flex items-center">
                    Iniciar Tutorial
                    <CheckCircle className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => alert('Em breve teremos mais tutoriais! Continue acompanhando nosso site.')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Ver Todos os Tutoriais
          </button>
        </div>
      </div>

      {/* Tutorial Modal */}
      <TutorialModal 
        tutorial={selectedTutorial}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Tutorials;