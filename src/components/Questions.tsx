import React, { useState } from 'react';
import { MessageCircle, Search, Plus, ThumbsUp, Clock, User, Send } from 'lucide-react';

const Questions = () => {
  const [newQuestion, setNewQuestion] = useState('');
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const questions = [
    {
      id: 1,
      question: 'Como faço para conectar meu celular ao Wi-Fi?',
      answer: 'Para conectar seu celular ao Wi-Fi: 1) Vá em Configurações, 2) Toque em Wi-Fi, 3) Escolha a rede desejada, 4) Digite a senha se necessário, 5) Toque em Conectar.',
      author: 'Maria S.',
      date: '2025-01-14',
      likes: 15,
      category: 'Celular',
    },
    {
      id: 2,
      question: 'Meu computador está muito lento, o que posso fazer?',
      answer: 'Algumas dicas para melhorar a velocidade: 1) Feche programas desnecessários, 2) Limpe arquivos temporários, 3) Reinicie o computador regularmente, 4) Verifique se há vírus, 5) Libere espaço no disco rígido.',
      author: 'João P.',
      date: '2025-01-12',
      likes: 23,
      category: 'Computador',
    },
    {
      id: 3,
      question: 'Como criar uma conta no WhatsApp?',
      answer: 'Para criar uma conta no WhatsApp: 1) Baixe o app na Play Store, 2) Abra o WhatsApp, 3) Digite seu número de telefone, 4) Aguarde o código de verificação por SMS, 5) Digite o código recebido, 6) Configure seu perfil com nome e foto.',
      author: 'Ana L.',
      date: '2025-01-10',
      likes: 31,
      category: 'Apps',
    },
    {
      id: 4,
      question: 'Como fazer backup das minhas fotos?',
      answer: 'Você pode fazer backup de várias formas: 1) Google Fotos (gratuito até 15GB), 2) Salvar em um cartão de memória, 3) Enviar para seu email, 4) Usar serviços como Dropbox ou OneDrive.',
      author: 'Carlos M.',
      date: '2025-01-08',
      likes: 18,
      category: 'Segurança',
    },
    {
      id: 5,
      question: 'O que é PIX e como usar?',
      answer: 'PIX é um sistema de pagamentos instantâneos do Brasil. Para usar: 1) Baixe o app do seu banco, 2) Cadastre uma chave PIX (CPF, email, celular), 3) Para pagar, use a chave ou QR Code, 4) Confirme a transação.',
      author: 'Rosa F.',
      date: '2025-01-05',
      likes: 27,
      category: 'Financeiro',
    },
  ];

  const filteredQuestions = questions.filter(q =>
    q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmitQuestion = () => {
    if (newQuestion.trim()) {
      // Aqui seria enviada a pergunta para um sistema backend
      alert('Sua pergunta foi enviada! Em breve alguém da comunidade irá responder.');
      setNewQuestion('');
      setShowQuestionForm(false);
    }
  };

  return (
    <section id="questions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dúvidas da Comunidade
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para suas dúvidas ou faça uma nova pergunta. 
            Nossa comunidade está aqui para ajudar!
          </p>
        </div>

        {/* Search and Add Question */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Pesquisar dúvidas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
          <button
            onClick={() => setShowQuestionForm(!showQuestionForm)}
            className="flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <Plus className="h-5 w-5 mr-2" />
            Fazer Pergunta
          </button>
        </div>

        {/* Question Form */}
        {showQuestionForm && (
          <div className="bg-white p-6 rounded-xl shadow-md mb-8 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Faça sua pergunta
            </h3>
            <textarea
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              placeholder="Digite sua dúvida aqui... Seja específico para receber uma resposta mais precisa."
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
              rows={4}
            />
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setShowQuestionForm(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleSubmitQuestion}
                className="flex items-center px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Send className="h-4 w-4 mr-2" />
                Enviar Pergunta
              </button>
            </div>
          </div>
        )}

        {/* Questions List */}
        <div className="space-y-6">
          {filteredQuestions.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
                        {item.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <User className="h-4 w-4 mr-1" />
                        {item.author}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {new Date(item.date).toLocaleDateString('pt-BR')}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {item.question}
                    </h3>
                  </div>
                  <MessageCircle className="h-5 w-5 text-gray-400 flex-shrink-0 ml-4" />
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg mb-4">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <button className="flex items-center text-gray-500 hover:text-green-600 transition-colors">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    <span className="text-sm">{item.likes} útil</span>
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Responder
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredQuestions.length === 0 && (
          <div className="text-center py-12">
            <MessageCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Nenhuma pergunta encontrada
            </h3>
            <p className="text-gray-600">
              Tente pesquisar com outros termos ou faça a primeira pergunta!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Questions;