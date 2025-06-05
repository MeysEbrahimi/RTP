import  { useState } from 'react';
import { Reflection } from '../types';
import { MessageCircle, Calendar, ArrowLeft } from 'lucide-react';

interface ReflectionsListProps {
  reflections: Reflection[];
  onBack: () => void;
}

const ReflectionsList = ({ reflections, onBack }: ReflectionsListProps) => {
  const [showAnalysis, setShowAnalysis] = useState<string | null>(null);
  
  const getRandomAnalysis = () => {
    const messages = [
      "Great insight! You're building awareness — keep practicing.",
      "Your reflection shows personal growth. Keep exploring these thoughts.",
      "I notice patterns of self-awareness developing in your reflections.",
      "Excellent observation about yourself. This awareness will serve you well.",
      "You're making important connections between your actions and outcomes."
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };
  
  return (
    <div className="mt-8">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="h-5 w-5 mr-1" />
          <span>Back to Form</span>
        </button>
        <h2 className="text-xl font-semibold text-gray-800 ml-auto">Your Reflections</h2>
      </div>
      
      {reflections.length === 0 ? (
        <div className="text-center py-10 bg-white rounded-xl card-shadow">
          <MessageCircle className="h-12 w-12 mx-auto text-gray-400 mb-3" />
          <p className="text-gray-500">No reflections found. Start by adding your first reflection.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {reflections.map((reflection) => (
            <div key={reflection.id} className="bg-white rounded-xl p-6 card-shadow">
              <div className="flex items-center text-gray-500 mb-3">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm">{reflection.date}</span>
              </div>
              
              <div className="space-y-4 mb-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-1">Experience:</h3>
                  <p className="text-gray-800">{reflection.experience}</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-1">Learning:</h3>
                  <p className="text-gray-800">{reflection.learning}</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-1">Future Action:</h3>
                  <p className="text-gray-800">{reflection.future}</p>
                </div>
              </div>
              
              {showAnalysis === reflection.id ? (
                <div className="mt-4 p-3 bg-purple-50 border border-purple-200 rounded-lg">
                  <p className="text-purple-800">{getRandomAnalysis()}</p>
                </div>
              ) : (
                <button
                  onClick={() => setShowAnalysis(reflection.id)}
                  className="btn-accent text-sm"
                >
                  Analyze
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReflectionsList;
  