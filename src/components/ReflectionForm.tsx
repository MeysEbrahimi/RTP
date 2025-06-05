import  { useState } from 'react';
import { Reflection } from '../types';
import { CheckCircle } from 'lucide-react';

interface ReflectionFormProps {
  addReflection: (reflection: Reflection) => void;
}

const ReflectionForm = ({ addReflection }: ReflectionFormProps) => {
  const [experience, setExperience] = useState('');
  const [learning, setLearning] = useState('');
  const [future, setFuture] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!experience || !learning || !future) return;
    
    const newReflection: Reflection = {
      id: Date.now().toString(),
      date: new Date().toLocaleString(),
      experience,
      learning,
      future
    };
    
    addReflection(newReflection);
    
    // Reset form
    setExperience('');
    setLearning('');
    setFuture('');
    
    // Show success message
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="mt-8 bg-white rounded-xl p-6 card-shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">3-Step Reflection Method</h2>
      
      {showSuccess && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center text-green-700">
          <CheckCircle className="h-5 w-5 mr-2" />
          <span>Your reflection has been saved successfully!</span>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="experience" className="block mb-2 font-medium text-gray-700">
            1. Describe an experience or event:
          </label>
          <textarea
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus-ring min-h-[100px]"
            placeholder="What happened? Be specific about the situation..."
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="learning" className="block mb-2 font-medium text-gray-700">
            2. What did I learn or notice about myself?
          </label>
          <textarea
            id="learning"
            value={learning}
            onChange={(e) => setLearning(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus-ring min-h-[100px]"
            placeholder="What insights did you gain about your behavior, thoughts, or feelings?"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="future" className="block mb-2 font-medium text-gray-700">
            3. What will I do differently in the future?
          </label>
          <textarea
            id="future"
            value={future}
            onChange={(e) => setFuture(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus-ring min-h-[100px]"
            placeholder="How will you apply this learning going forward?"
            required
          />
        </div>
        
        <div className="flex justify-center mt-6">
          <button type="submit" className="btn-primary px-6">
            Save Reflection
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReflectionForm;
  