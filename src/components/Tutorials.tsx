import React, { useState } from 'react';
import { BookOpen, Clock, Star, Users, Computer, Smartphone, Wifi } from 'lucide-react';

const Tutorials = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos', icon: BookOpen },
    { id: 'basic', name: 'Básico', icon: Computer },
    { id: 'internet', name: 'Internet', icon: Wifi },
    { id: 'mobile', name: 'Celular', icon: Smartphone },
  ];

  const tutorials = [
    {
      id: 1,
      title: 'Como Ligar e Desligar o Computador Corretamente',
      description: 'Aprenda a forma correta de ligar e desligar seu computador para evitar problemas.',
      category: 'basic',
      difficulty: 'Iniciante',
      duration: '5 min',
      rating: 4.8,
      views: 1250,
    },
    {
      id: 2,
      title: 'Navegando na Internet com Segurança',
      description: 'Dicas essenciais para usar a internet de forma segura e proteger suas informações.',
      category: 'internet',
      difficulty: 'Iniciante',
      duration: '12 min',
      rating: 4.9,
      views: 2100,
    },
    {
      id: 3,
      title: 'Como Usar o WhatsApp no Celular',
      description: 'Tutorial completo para enviar mensagens, fotos e fazer chamadas pelo WhatsApp.',
      category: 'mobile',
      difficulty: 'Iniciante',
      duration: '15 min',
      rating: 4.7,
      views: 3200,
    },
    {
      id: 4,
      title: 'Criando e Organizando Pastas no Computador',
      description: 'Aprenda a criar, nomear e organizar pastas para manter seus arquivos organizados.',
      category: 'basic',
      difficulty: 'Iniciante',
      duration: '8 min',
      rating: 4.6,
      views: 890,
    },
    {
      id: 5,
      title: 'Como Fazer Pesquisas no Google',
      description: 'Dicas para encontrar informações rapidamente usando o Google de forma eficiente.',
      category: 'internet',
      difficulty: 'Iniciante',
      duration: '10 min',
      rating: 4.8,
      views: 1800,
    },
    {
      id: 6,
      title: 'Instalando Aplicativos no Celular',
      description: 'Passo a passo para baixar e instalar aplicativos na Play Store com segurança.',
      category: 'mobile',
      difficulty: 'Iniciante',
      duration: '7 min',
      rating: 4.5,
      views: 1500,
    },
  ];

  const filteredTutorials = selectedCategory === 'all' 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.category === selectedCategory);

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
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:underline">
                    Ler Tutorial →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg">
            Ver Todos os Tutoriais
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tutorials;