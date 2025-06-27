import React from 'react';
import { X, Clock, Star, Users, BookOpen, CheckCircle, Play } from 'lucide-react';

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

interface TutorialModalProps {
  tutorial: Tutorial | null;
  isOpen: boolean;
  onClose: () => void;
}

const TutorialModal: React.FC<TutorialModalProps> = ({ tutorial, isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [completedSteps, setCompletedSteps] = React.useState<number[]>([]);

  if (!isOpen || !tutorial) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const toggleStepCompletion = (stepId: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepId) 
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    );
  };

  const progressPercentage = (completedSteps.length / tutorial.steps.length) * 100;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 scale-100">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                {tutorial.difficulty}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                {tutorial.duration}
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Star className="h-4 w-4 mr-1 text-yellow-400" />
                {tutorial.rating}
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Users className="h-4 w-4 mr-1" />
                {tutorial.views} visualizações
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <div className="flex h-[calc(90vh-80px)]">
            {/* Sidebar - Steps Navigation */}
            <div className="w-80 bg-gray-50 border-r border-gray-200 overflow-y-auto">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Progresso do Tutorial</h3>
                
                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Concluído</span>
                    <span>{Math.round(progressPercentage)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>

                {/* Steps List */}
                <div className="space-y-2">
                  {tutorial.steps.map((step, index) => (
                    <div
                      key={step.id}
                      onClick={() => setCurrentStep(index)}
                      className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                        currentStep === index
                          ? 'bg-blue-100 border-2 border-blue-300'
                          : 'bg-white border border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                            completedSteps.includes(step.id)
                              ? 'bg-green-600 text-white'
                              : currentStep === index
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-300 text-gray-600'
                          }`}>
                            {completedSteps.includes(step.id) ? (
                              <CheckCircle className="h-4 w-4" />
                            ) : (
                              index + 1
                            )}
                          </div>
                          <span className={`text-sm font-medium ${
                            currentStep === index ? 'text-blue-900' : 'text-gray-700'
                          }`}>
                            {step.title}
                          </span>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleStepCompletion(step.id);
                          }}
                          className={`p-1 rounded transition-colors ${
                            completedSteps.includes(step.id)
                              ? 'text-green-600 hover:text-green-700'
                              : 'text-gray-400 hover:text-gray-600'
                          }`}
                        >
                          <CheckCircle className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {tutorial.title}
                </h1>

                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
                  <span>Por {tutorial.author}</span>
                  <span>•</span>
                  <span>{formatDate(tutorial.date)}</span>
                </div>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {tutorial.description}
                </p>

                {/* What you will learn */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    O que você vai aprender
                  </h3>
                  <ul className="space-y-2">
                    {tutorial.whatYouWillLearn.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-4">
                    Requisitos
                  </h3>
                  <ul className="space-y-2">
                    {tutorial.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                        <span className="text-yellow-800">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Current Step Content */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Passo {currentStep + 1}: {tutorial.steps[currentStep]?.title}
                    </h2>
                    <button
                      onClick={() => toggleStepCompletion(tutorial.steps[currentStep]?.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                        completedSteps.includes(tutorial.steps[currentStep]?.id)
                          ? 'bg-green-100 text-green-800 hover:bg-green-200'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <CheckCircle className="h-4 w-4" />
                      <span>
                        {completedSteps.includes(tutorial.steps[currentStep]?.id) 
                          ? 'Concluído' 
                          : 'Marcar como concluído'
                        }
                      </span>
                    </button>
                  </div>

                  <div 
                    className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-6"
                    dangerouslySetInnerHTML={{ __html: tutorial.steps[currentStep]?.content || '' }}
                  />

                  {tutorial.steps[currentStep]?.tip && (
                    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <Play className="h-5 w-5 text-green-400" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-green-700">
                            <strong>Dica:</strong> {tutorial.steps[currentStep].tip}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                    <button
                      onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                      disabled={currentStep === 0}
                      className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      ← Passo Anterior
                    </button>
                    <button
                      onClick={() => setCurrentStep(Math.min(tutorial.steps.length - 1, currentStep + 1))}
                      disabled={currentStep === tutorial.steps.length - 1}
                      className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Próximo Passo →
                    </button>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Tags relacionadas:</h3>
                  <div className="flex flex-wrap gap-2">
                    {tutorial.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full hover:bg-blue-100 cursor-pointer transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialModal;