import React from 'react';
import { BookOpen, Users, Lightbulb } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Aprenda <span className="text-blue-600">Informática</span> Básica{' '}
            <span className="text-green-600">Gratuitamente</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Desenvolvemos este espaço para democratizar o acesso ao conhecimento digital.
            Aqui você encontra tutoriais, notícias e pode tirar suas dúvidas sobre informática básica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('#tutorials')}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Começar a Aprender
            </button>
            <button
              onClick={() => scrollToSection('#questions')}
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <Users className="h-5 w-5 mr-2" />
              Tirar Dúvidas
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Tutoriais Práticos</h3>
            <p className="text-gray-600">
              Aprenda informática de forma simples e prática, com explicações claras e exemplos do dia a dia.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Comunidade Ativa</h3>
            <p className="text-gray-600">
              Tire suas dúvidas e ajude outras pessoas. Juntos, construímos conhecimento.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Lightbulb className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Sempre Atualizado</h3>
            <p className="text-gray-600">
              Notícias e dicas sobre tecnologia que realmente importam para o seu dia a dia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;