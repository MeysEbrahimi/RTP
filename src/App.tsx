import  { useState } from 'react';
import { Reflection } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import ReflectionForm from './components/ReflectionForm';
import ReflectionsList from './components/ReflectionsList';
import PasswordModal from './components/PasswordModal';
import useLocalStorage from './hooks/useLocalStorage';
import { Eye } from 'lucide-react';

const App = () => {
  const [reflections, setReflections] = useLocalStorage<Reflection[]>('reflections', []);
  const [showReflections, setShowReflections] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  
  const addReflection = (reflection: Reflection) => {
    setReflections([reflection, ...reflections]);
  };
  
  const handlePasswordSuccess = () => {
    setShowPasswordModal(false);
    setShowReflections(true);
  };
  
  const handleBackToForm = () => {
    setShowReflections(false);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1499728603263-13726abce5fd?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxyZWZsZWN0aXZlJTIwdGhpbmtpbmclMjBtZWRpdGF0aW9uJTIwcGVhY2VmdWx8ZW58MHx8fHwxNzQ5MTQ2OTIxfDA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200" 
              alt="Mindfulness practice" 
              className="w-full h-64 object-cover rounded-xl card-shadow"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-xl flex items-center justify-center">
              <div className="text-center text-white p-6">
                <h2 className="text-3xl font-bold mb-2 text-shadow">Develop Your Self-Awareness</h2>
                <p className="text-xl text-shadow max-w-lg mx-auto">
                  "The present moment is filled with joy and happiness. If you are attentive, you will see it."
                </p>
                <p className="italic mt-2 text-shadow">― Thich Nhat Hanh</p>
              </div>
            </div>
          </div>
          
          {!showReflections ? (
            <>
              <ReflectionForm addReflection={addReflection} />
              
              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowPasswordModal(true)}
                  className="inline-flex items-center btn-secondary"
                >
                  <Eye className="h-5 w-5 mr-2" />
                  View Reflections
                </button>
              </div>
            </>
          ) : (
            <ReflectionsList 
              reflections={reflections} 
              onBack={handleBackToForm} 
            />
          )}
        </div>
      </main>
      
      <Footer />
      
      <PasswordModal 
        isOpen={showPasswordModal}
        onSuccess={handlePasswordSuccess}
        onCancel={() => setShowPasswordModal(false)}
      />
    </div>
  );
};

export default App;
  