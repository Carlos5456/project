import React from 'react';
import { Monitor, Mail, MapPin, Phone, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Monitor className="h-8 w-8 text-blue-400" />
              <h3 className="text-xl font-bold">
                Digital<span className="text-blue-400">Inclusão</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Democratizando o acesso ao conhecimento digital para comunidades carentes. 
              Acreditamos que todos têm direito de aprender e se conectar com o mundo digital.
            </p>
            <div className="flex items-center text-sm text-gray-400">
              <Heart className="h-4 w-4 mr-2 text-red-400" />
              Feito com amor para a comunidade
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#tutorials" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Tutoriais
                </a>
              </li>
              <li>
                <a href="#news" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Notícias
                </a>
              </li>
              <li>
                <a href="#questions" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Dúvidas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">contato@digitalinclusao.org</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">(11) 9 9999-9999</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Digital Inclusão. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Acessibilidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;