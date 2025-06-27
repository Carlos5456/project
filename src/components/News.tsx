import React, { useState } from 'react';
import { Calendar, Clock, ExternalLink, TrendingUp } from 'lucide-react';
import NewsModal from './NewsModal';

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
  author: string;
  tags: string[];
  likes: number;
  shares: number;
}

const News = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const news: NewsArticle[] = [
    {
      id: 1,
      title: 'WhatsApp Lança Nova Funcionalidade de Chamadas em Grupo',
      excerpt: 'Agora é possível fazer chamadas de vídeo com até 8 pessoas ao mesmo tempo. Saiba como usar.',
      content: `
        <p>O WhatsApp anunciou uma importante atualização que permite chamadas de vídeo em grupo com até 8 participantes simultaneamente. Esta funcionalidade representa um grande avanço para quem precisa se comunicar com família e amigos de forma mais prática.</p>
        
        <h3>Como usar a nova funcionalidade:</h3>
        <ol>
          <li><strong>Abra uma conversa em grupo</strong> ou crie um novo grupo com as pessoas que deseja incluir na chamada</li>
          <li><strong>Toque no ícone de telefone</strong> no canto superior direito da tela</li>
          <li><strong>Selecione "Chamada de vídeo"</strong> no menu que aparecer</li>
          <li><strong>Escolha os participantes</strong> que deseja incluir na chamada (máximo 8 pessoas)</li>
          <li><strong>Toque em "Iniciar"</strong> para começar a chamada</li>
        </ol>
        
        <h3>Dicas importantes:</h3>
        <ul>
          <li>Certifique-se de ter uma boa conexão com a internet (Wi-Fi recomendado)</li>
          <li>Mantenha seu WhatsApp sempre atualizado para ter acesso às novas funcionalidades</li>
          <li>Durante a chamada, você pode desligar o microfone ou câmera tocando nos ícones na tela</li>
          <li>Para adicionar mais pessoas durante a chamada, toque no ícone "+" na tela</li>
        </ul>
        
        <h3>Requisitos técnicos:</h3>
        <p>Para usar esta funcionalidade, você precisa:</p>
        <ul>
          <li>WhatsApp versão 2.21.3 ou superior no Android</li>
          <li>WhatsApp versão 2.21.30 ou superior no iPhone</li>
          <li>Conexão estável com a internet</li>
          <li>Celular com câmera frontal funcionando</li>
        </ul>
        
        <p>Esta atualização torna o WhatsApp ainda mais útil para reuniões familiares virtuais, aulas online e encontros com amigos, especialmente importante nos tempos atuais onde a comunicação à distância se tornou essencial.</p>
      `,
      date: '2025-01-15',
      readTime: '3 min',
      category: 'Apps',
      featured: true,
      author: 'Maria Santos',
      tags: ['whatsapp', 'chamadas', 'video', 'grupos', 'comunicacao'],
      likes: 127,
      shares: 43
    },
    {
      id: 2,
      title: 'Como Proteger Seus Dados no Celular',
      excerpt: 'Dicas importantes sobre senhas, bloqueio de tela e aplicativos de segurança para proteger suas informações.',
      content: `
        <p>A segurança dos dados no celular é fundamental nos dias de hoje. Com tantas informações pessoais armazenadas em nossos dispositivos, é essencial saber como protegê-las adequadamente.</p>
        
        <h3>1. Configure um bloqueio de tela seguro</h3>
        <p>O primeiro passo para proteger seu celular é configurar um bloqueio de tela:</p>
        <ul>
          <li><strong>Senha numérica:</strong> Use pelo menos 6 dígitos, evite sequências óbvias como 123456</li>
          <li><strong>Padrão:</strong> Crie um desenho complexo, evite formas simples como "L" ou quadrados</li>
          <li><strong>Impressão digital:</strong> Se seu celular tem essa função, é uma opção prática e segura</li>
          <li><strong>Reconhecimento facial:</strong> Disponível em celulares mais modernos</li>
        </ul>
        
        <h3>2. Cuidados com senhas de aplicativos</h3>
        <ul>
          <li>Use senhas diferentes para cada aplicativo importante</li>
          <li>Combine letras, números e símbolos</li>
          <li>Evite usar informações pessoais como data de nascimento</li>
          <li>Troque suas senhas regularmente (a cada 3-6 meses)</li>
        </ul>
        
        <h3>3. Configurações de privacidade importantes</h3>
        <p>Ajuste as configurações do seu celular:</p>
        <ul>
          <li><strong>Localização:</strong> Desative para apps que não precisam saber onde você está</li>
          <li><strong>Microfone e câmera:</strong> Permita acesso apenas para apps confiáveis</li>
          <li><strong>Contatos:</strong> Não permita que todos os apps acessem sua lista de contatos</li>
          <li><strong>Fotos:</strong> Controle quais apps podem ver suas imagens</li>
        </ul>
        
        <h3>4. Aplicativos de segurança recomendados</h3>
        <ul>
          <li><strong>Antivírus gratuitos:</strong> Avast, AVG, Kaspersky</li>
          <li><strong>Gerenciadores de senha:</strong> Google Password Manager (já vem no Android)</li>
          <li><strong>Autenticação em duas etapas:</strong> Google Authenticator</li>
        </ul>
        
        <h3>5. Sinais de que seu celular pode estar comprometido</h3>
        <ul>
          <li>Bateria descarregando muito rápido</li>
          <li>Celular esquentando sem motivo</li>
          <li>Apps abrindo sozinhos</li>
          <li>Conta de internet muito alta</li>
          <li>Mensagens ou ligações que você não fez</li>
        </ul>
        
        <p><strong>Lembre-se:</strong> A segurança digital é um hábito diário. Mantenha sempre seu celular atualizado e seja cauteloso ao baixar aplicativos ou clicar em links suspeitos.</p>
      `,
      date: '2025-01-12',
      readTime: '5 min',
      category: 'Segurança',
      featured: false,
      author: 'João Silva',
      tags: ['seguranca', 'privacidade', 'senhas', 'antivirus', 'protecao'],
      likes: 89,
      shares: 31
    },
    {
      id: 3,
      title: 'Internet 5G Chega a Mais Cidades do Brasil',
      excerpt: 'Tecnologia promete internet mais rápida. Entenda como funciona e se seu celular é compatível.',
      content: `
        <p>A tecnologia 5G está se expandindo pelo Brasil e promete revolucionar a forma como usamos a internet móvel. Com velocidades até 100 vezes mais rápidas que o 4G, o 5G traz novas possibilidades para o dia a dia.</p>
        
        <h3>O que é o 5G?</h3>
        <p>O 5G é a quinta geração da tecnologia de internet móvel. Principais características:</p>
        <ul>
          <li><strong>Velocidade:</strong> Download de até 1GB por segundo</li>
          <li><strong>Latência baixa:</strong> Resposta quase instantânea</li>
          <li><strong>Mais conexões:</strong> Suporta mais dispositivos conectados simultaneamente</li>
          <li><strong>Economia de bateria:</strong> Mais eficiente energeticamente</li>
        </ul>
        
        <h3>Cidades que já têm 5G no Brasil:</h3>
        <ul>
          <li>São Paulo (SP)</li>
          <li>Rio de Janeiro (RJ)</li>
          <li>Belo Horizonte (MG)</li>
          <li>Brasília (DF)</li>
          <li>Salvador (BA)</li>
          <li>Fortaleza (CE)</li>
          <li>Porto Alegre (RS)</li>
          <li>Curitiba (PR)</li>
          <li>Goiânia (GO)</li>
          <li>João Pessoa (PB)</li>
        </ul>
        
        <h3>Como saber se meu celular é compatível?</h3>
        <p>Para usar o 5G, você precisa de um celular compatível. Verifique:</p>
        <ol>
          <li><strong>Vá em Configurações</strong> do seu celular</li>
          <li><strong>Procure por "Sobre o telefone"</strong> ou "Informações do dispositivo"</li>
          <li><strong>Veja as especificações de rede</strong></li>
          <li><strong>Se aparecer "5G" nas opções</strong>, seu celular é compatível</li>
        </ol>
        
        <h3>Celulares compatíveis com 5G (principais modelos):</h3>
        <ul>
          <li><strong>Samsung:</strong> Galaxy S21, S22, S23, A54, A34</li>
          <li><strong>Apple:</strong> iPhone 12, 13, 14, 15 (todos os modelos)</li>
          <li><strong>Motorola:</strong> Edge 30, Edge 40, Moto G 5G</li>
          <li><strong>Xiaomi:</strong> Redmi Note 12 5G, Mi 11, Mi 12</li>
        </ul>
        
        <h3>Vantagens do 5G no dia a dia:</h3>
        <ul>
          <li><strong>Vídeos em alta qualidade:</strong> Assista sem travamentos</li>
          <li><strong>Jogos online:</strong> Menos lag e melhor experiência</li>
          <li><strong>Videochamadas:</strong> Qualidade superior e sem cortes</li>
          <li><strong>Downloads rápidos:</strong> Baixe apps e arquivos em segundos</li>
          <li><strong>Trabalho remoto:</strong> Melhor para home office</li>
        </ul>
        
        <h3>Preços e planos:</h3>
        <p>As operadoras estão oferecendo planos 5G a partir de R$ 60/mês, mas muitos planos 4G já incluem acesso ao 5G sem custo adicional. Consulte sua operadora para mais informações.</p>
        
        <p><strong>Importante:</strong> Mesmo com celular compatível, você só terá acesso ao 5G nas áreas com cobertura da tecnologia. A expansão continua acontecendo gradualmente.</p>
      `,
      date: '2025-01-10',
      readTime: '4 min',
      category: 'Tecnologia',
      featured: true,
      author: 'Ana Costa',
      tags: ['5g', 'internet', 'velocidade', 'tecnologia', 'celular'],
      likes: 156,
      shares: 67
    },
    {
      id: 4,
      title: 'Banco Central Lança Nova Versão do PIX',
      excerpt: 'Novas funcionalidades incluem PIX parcelado e melhorias na segurança. Veja o que muda.',
      content: `
        <p>O Banco Central do Brasil anunciou importantes atualizações no sistema PIX que trarão mais facilidades e segurança para os usuários. As principais novidades incluem o PIX parcelado e novos recursos de proteção contra fraudes.</p>
        
        <h3>PIX Parcelado - Como funciona:</h3>
        <p>A nova modalidade permite dividir pagamentos PIX em até 12 vezes:</p>
        <ul>
          <li><strong>Para o pagador:</strong> Pode parcelar compras como no cartão de crédito</li>
          <li><strong>Para quem recebe:</strong> Recebe o valor integral na hora</li>
          <li><strong>Taxas:</strong> Definidas por cada banco, similar ao cartão de crédito</li>
          <li><strong>Disponibilidade:</strong> Gradual a partir de fevereiro de 2025</li>
        </ul>
        
        <h3>Como usar o PIX Parcelado:</h3>
        <ol>
          <li><strong>Abra o app do seu banco</strong></li>
          <li><strong>Vá na opção PIX</strong></li>
          <li><strong>Escolha "PIX Parcelado"</strong> (quando disponível)</li>
          <li><strong>Escaneie o QR Code</strong> ou cole a chave PIX</li>
          <li><strong>Selecione o número de parcelas</strong> desejado</li>
          <li><strong>Confirme o pagamento</strong> com sua senha</li>
        </ol>
        
        <h3>Melhorias na Segurança:</h3>
        <p>O Banco Central implementou novos recursos de proteção:</p>
        
        <h4>1. Limite por período:</h4>
        <ul>
          <li>Limite diário: R$ 1.000 (pode ser alterado pelo usuário)</li>
          <li>Limite noturno (20h às 6h): R$ 1.000</li>
          <li>Possibilidade de criar limites personalizados</li>
        </ul>
        
        <h4>2. Verificação em duas etapas:</h4>
        <ul>
          <li>Confirmação por SMS para valores altos</li>
          <li>Biometria obrigatória para transações acima de R$ 500</li>
          <li>Token de segurança para empresas</li>
        </ul>
        
        <h4>3. Bloqueio preventivo:</h4>
        <ul>
          <li>Sistema detecta padrões suspeitos automaticamente</li>
          <li>Bloqueio temporário em caso de atividade anormal</li>
          <li>Notificação imediata ao usuário</li>
        </ul>
        
        <h3>PIX Agendado Recorrente:</h3>
        <p>Nova funcionalidade para pagamentos regulares:</p>
        <ul>
          <li><strong>Contas mensais:</strong> Água, luz, telefone</li>
          <li><strong>Assinaturas:</strong> Netflix, Spotify, academia</li>
          <li><strong>Mesada:</strong> Transferências regulares para filhos</li>
          <li><strong>Flexibilidade:</strong> Pode cancelar ou alterar a qualquer momento</li>
        </ul>
        
        <h3>PIX Offline:</h3>
        <p>Em desenvolvimento para 2025:</p>
        <ul>
          <li>Pagamentos sem internet usando tecnologia NFC</li>
          <li>Ideal para locais com sinal fraco</li>
          <li>Sincronização automática quando voltar a conexão</li>
        </ul>
        
        <h3>Dicas de Segurança PIX:</h3>
        <ul>
          <li><strong>Nunca compartilhe</strong> suas chaves PIX com desconhecidos</li>
          <li><strong>Confira sempre</strong> os dados antes de confirmar</li>
          <li><strong>Use limites baixos</strong> se não faz muitas transações</li>
          <li><strong>Ative notificações</strong> para todas as movimentações</li>
          <li><strong>Mantenha o app do banco atualizado</strong></li>
        </ul>
        
        <p><strong>Importante:</strong> Todas as funcionalidades serão implementadas gradualmente pelos bancos. Consulte sua instituição financeira para saber quando estarão disponíveis em sua conta.</p>
      `,
      date: '2025-01-08',
      readTime: '6 min',
      category: 'Financeiro',
      featured: false,
      author: 'Carlos Mendes',
      tags: ['pix', 'pagamentos', 'banco-central', 'financeiro', 'seguranca'],
      likes: 203,
      shares: 89
    },
    {
      id: 5,
      title: 'Curso Gratuito de Informática para Idosos',
      excerpt: 'Prefeitura oferece curso presencial e online para ensinar uso do computador e internet.',
      content: `
        <p>A Prefeitura de São Paulo, em parceria com organizações sociais, lançou um programa abrangente de inclusão digital voltado especialmente para pessoas com mais de 60 anos. O projeto visa reduzir a exclusão digital e proporcionar autonomia tecnológica para a terceira idade.</p>
        
        <h3>Sobre o Programa:</h3>
        <ul>
          <li><strong>Público-alvo:</strong> Pessoas com 60 anos ou mais</li>
          <li><strong>Modalidades:</strong> Presencial e online</li>
          <li><strong>Duração:</strong> 3 meses (12 semanas)</li>
          <li><strong>Carga horária:</strong> 2 horas por semana</li>
          <li><strong>Custo:</strong> Totalmente gratuito</li>
        </ul>
        
        <h3>Conteúdo do Curso:</h3>
        
        <h4>Módulo 1 - Primeiros Passos (Semanas 1-3):</h4>
        <ul>
          <li>Como ligar e desligar o computador</li>
          <li>Conhecendo o mouse e teclado</li>
          <li>Área de trabalho e ícones</li>
          <li>Abrindo e fechando programas</li>
        </ul>
        
        <h4>Módulo 2 - Internet Básica (Semanas 4-6):</h4>
        <ul>
          <li>O que é internet e como funciona</li>
          <li>Navegando em sites</li>
          <li>Fazendo pesquisas no Google</li>
          <li>Segurança na internet</li>
        </ul>
        
        <h4>Módulo 3 - Comunicação Digital (Semanas 7-9):</h4>
        <ul>
          <li>Criando e usando email</li>
          <li>WhatsApp no computador</li>
          <li>Videochamadas pelo Google Meet</li>
          <li>Redes sociais básicas (Facebook)</li>
        </ul>
        
        <h4>Módulo 4 - Serviços Úteis (Semanas 10-12):</h4>
        <ul>
          <li>Serviços bancários online</li>
          <li>Agendamento médico pela internet</li>
          <li>Compras online seguras</li>
          <li>Aplicativos úteis para o dia a dia</li>
        </ul>
        
        <h3>Locais das Aulas Presenciais:</h3>
        <ul>
          <li><strong>Centro:</strong> Biblioteca Mário de Andrade</li>
          <li><strong>Zona Norte:</strong> CEU Paz</li>
          <li><strong>Zona Sul:</strong> CEU Meninos</li>
          <li><strong>Zona Leste:</strong> CEU Azul da Cor do Mar</li>
          <li><strong>Zona Oeste:</strong> CEU Butantã</li>
        </ul>
        
        <h3>Horários Disponíveis:</h3>
        <ul>
          <li><strong>Manhã:</strong> 9h às 11h (terças e quintas)</li>
          <li><strong>Tarde:</strong> 14h às 16h (segundas e quartas)</li>
          <li><strong>Online:</strong> 19h às 21h (sábados)</li>
        </ul>
        
        <h3>Como se Inscrever:</h3>
        <ol>
          <li><strong>Presencial:</strong> Compareça a um dos locais com RG e comprovante de residência</li>
          <li><strong>Online:</strong> Acesse o site da prefeitura (sp.gov.br/inclusaodigital)</li>
          <li><strong>Telefone:</strong> Ligue para 156 (Central de Atendimento)</li>
          <li><strong>WhatsApp:</strong> (11) 9 9999-1560</li>
        </ol>
        
        <h3>Requisitos:</h3>
        <ul>
          <li>Ter 60 anos ou mais</li>
          <li>Residir na cidade de São Paulo</li>
          <li>Não ter conhecimento prévio de informática</li>
          <li>Para aulas online: ter acesso a computador ou celular</li>
        </ul>
        
        <h3>Material Fornecido:</h3>
        <ul>
          <li>Apostila impressa gratuita</li>
          <li>Acesso aos computadores durante as aulas</li>
          <li>Certificado de conclusão</li>
          <li>Suporte técnico durante todo o curso</li>
        </ul>
        
        <h3>Depoimentos de Participantes:</h3>
        <blockquote>
          <p>"Aos 68 anos, finalmente consegui falar com meus netos por videochamada. O curso mudou minha vida!" - <strong>Dona Maria, 68 anos</strong></p>
        </blockquote>
        
        <blockquote>
          <p>"Agora consigo fazer meus pagamentos pelo celular e não preciso mais sair de casa para ir ao banco." - <strong>Seu João, 72 anos</strong></p>
        </blockquote>
        
        <p><strong>Inscrições abertas até 31 de janeiro de 2025.</strong> As turmas começam em fevereiro e as vagas são limitadas. Garante já a sua!</p>
      `,
      date: '2025-01-05',
      readTime: '2 min',
      category: 'Educação',
      featured: false,
      author: 'Lucia Oliveira',
      tags: ['educacao', 'idosos', 'curso-gratuito', 'inclusao-digital', 'prefeitura'],
      likes: 94,
      shares: 52
    },
    {
      id: 6,
      title: 'Como Economizar Dados do Celular',
      excerpt: 'Dicas práticas para usar menos internet móvel e evitar surpresas na conta do celular.',
      content: `
        <p>Com o uso crescente de aplicativos e redes sociais, é fácil ultrapassar o limite de dados do plano de celular. Aqui estão dicas práticas para economizar internet móvel e evitar cobranças extras na sua conta.</p>
        
        <h3>1. Configure o Wi-Fi como prioridade</h3>
        <p>Sempre que possível, use Wi-Fi em vez dos dados móveis:</p>
        <ul>
          <li><strong>Em casa:</strong> Configure sua rede Wi-Fi no celular</li>
          <li><strong>No trabalho:</strong> Peça a senha da rede corporativa</li>
          <li><strong>Locais públicos:</strong> Shopping, bibliotecas, praças têm Wi-Fi gratuito</li>
          <li><strong>Dica:</strong> Ative a opção "Conectar automaticamente" para redes conhecidas</li>
        </ul>
        
        <h3>2. Controle o consumo de dados por aplicativo</h3>
        
        <h4>No Android:</h4>
        <ol>
          <li>Vá em <strong>Configurações</strong></li>
          <li>Toque em <strong>"Rede e Internet"</strong></li>
          <li>Selecione <strong>"Uso de dados"</strong></li>
          <li>Veja quais apps consomem mais</li>
          <li>Toque no app e ative <strong>"Restringir dados em segundo plano"</strong></li>
        </ol>
        
        <h4>No iPhone:</h4>
        <ol>
          <li>Vá em <strong>Ajustes</strong></li>
          <li>Toque em <strong>"Dados Celulares"</strong></li>
          <li>Veja a lista de apps</li>
          <li>Desative os apps que não precisam de internet móvel</li>
        </ol>
        
        <h3>3. Ajuste as configurações dos principais apps</h3>
        
        <h4>WhatsApp:</h4>
        <ul>
          <li>Vá em <strong>Configurações > Armazenamento e dados</strong></li>
          <li>Em "Download automático de mídia", selecione <strong>"Nunca"</strong> para dados móveis</li>
          <li>Ative <strong>"Usar menos dados para chamadas"</strong></li>
        </ul>
        
        <h4>YouTube:</h4>
        <ul>
          <li>Toque no seu perfil > <strong>Configurações</strong></li>
          <li>Vá em <strong>"Geral"</strong></li>
          <li>Ative <strong>"Restringir dados móveis"</strong></li>
          <li>Escolha qualidade de vídeo mais baixa para dados móveis</li>
        </ul>
        
        <h4>Instagram:</h4>
        <ul>
          <li>Vá no seu perfil > Menu (3 linhas) > <strong>Configurações</strong></li>
          <li>Toque em <strong>"Conta"</strong></li>
          <li>Selecione <strong>"Uso de dados celulares"</strong></li>
          <li>Ative <strong>"Usar menos dados"</strong></li>
        </ul>
        
        <h4>Facebook:</h4>
        <ul>
          <li>Menu (3 linhas) > <strong>Configurações e Privacidade</strong></li>
          <li>Toque em <strong>"Configurações"</strong></li>
          <li>Vá em <strong>"Mídia e Contatos"</strong></li>
          <li>Ative <strong>"Economizar dados"</strong></li>
        </ul>
        
        <h3>4. Use o modo "Economia de dados"</h3>
        
        <h4>Android:</h4>
        <ul>
          <li>Configurações > <strong>"Rede e Internet"</strong></li>
          <li>Toque em <strong>"Economia de dados"</strong></li>
          <li>Ative a função</li>
        </ul>
        
        <h4>iPhone:</h4>
        <ul>
          <li>Ajustes > <strong>"Dados Celulares"</strong></li>
          <li>Toque em <strong>"Opções de Dados Celulares"</strong></li>
          <li>Ative <strong>"Modo de Dados Baixos"</strong></li>
        </ul>
        
        <h3>5. Monitore seu consumo regularmente</h3>
        <ul>
          <li><strong>Defina alertas:</strong> Configure avisos quando atingir 80% do limite</li>
          <li><strong>Verifique semanalmente:</strong> Acompanhe o consumo pelo app da operadora</li>
          <li><strong>Use apps de monitoramento:</strong> My Data Manager, GlassWire</li>
        </ul>
        
        <h3>6. Dicas específicas para economizar</h3>
        
        <h4>Streaming de música:</h4>
        <ul>
          <li>Baixe músicas no Wi-Fi para ouvir offline</li>
          <li>Use qualidade menor quando usar dados móveis</li>
          <li>Spotify, Deezer têm modo "economia de dados"</li>
        </ul>
        
        <h4>Mapas e GPS:</h4>
        <ul>
          <li>Baixe mapas offline no Google Maps</li>
          <li>Use Waze apenas quando necessário</li>
          <li>Planeje rotas no Wi-Fi antes de sair</li>
        </ul>
        
        <h4>Atualizações de apps:</h4>
        <ul>
          <li>Configure para atualizar apenas no Wi-Fi</li>
          <li>Play Store/App Store > Configurações</li>
          <li>Desative atualizações automáticas por dados móveis</li>
        </ul>
        
        <h3>7. Planos e operadoras</h3>
        <ul>
          <li><strong>Compare planos:</strong> Às vezes vale a pena pagar um pouco mais por mais dados</li>
          <li><strong>Planos pré-pagos:</strong> Ajudam a controlar gastos</li>
          <li><strong>Promoções:</strong> Fique atento a ofertas de dados extras</li>
          <li><strong>Apps das operadoras:</strong> Vivo, Claro, TIM, Oi têm apps para controle</li>
        </ul>
        
        <p><strong>Lembre-se:</strong> O segredo é usar Wi-Fi sempre que possível e configurar os apps para consumir menos dados móveis. Com essas dicas, você pode reduzir seu consumo em até 70%!</p>
      `,
      date: '2025-01-03',
      readTime: '4 min',
      category: 'Dicas',
      featured: false,
      author: 'Pedro Almeida',
      tags: ['economia-dados', 'celular', 'internet', 'dicas', 'wifi'],
      likes: 178,
      shares: 95
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const featuredNews = news.filter(item => item.featured);
  const regularNews = news.filter(item => !item.featured);

  const openModal = (article: NewsArticle) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notícias em Destaque
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fique por dentro das últimas novidades sobre tecnologia, 
            aplicativos e dicas que podem facilitar seu dia a dia.
          </p>
        </div>

        {/* Featured News */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredNews.map((article) => (
            <article
              key={article.id}
              onClick={() => openModal(article)}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-200 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {article.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  {article.readTime}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {article.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formatDate(article.date)}
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group-hover:underline">
                  Ler mais
                  <ExternalLink className="h-4 w-4 ml-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Regular News */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularNews.map((article) => (
            <article
              key={article.id}
              onClick={() => openModal(article)}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-200 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full">
                  {article.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  {article.readTime}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {article.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formatDate(article.date)}
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:underline">
                  Ler →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg">
            Ver Todas as Notícias
          </button>
        </div>
      </div>

      {/* News Modal */}
      <NewsModal 
        article={selectedArticle}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default News;