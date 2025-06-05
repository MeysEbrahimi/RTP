import  { useState } from 'react';
import { Lock } from 'lucide-react';

interface PasswordModalProps {
  onSuccess: () => void;
  onCancel: () => void;
  isOpen: boolean;
}

const PasswordModal = ({ onSuccess, onCancel, isOpen }: PasswordModalProps) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  
  if (!isOpen) return null;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '4007') {
      onSuccess();
      setPassword('');
      setError(false);
    } else {
      setError(true);
    }
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <Lock className="h-6 w-6 text-blue-600" />
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-center mb-4">Protected Area</h3>
        
        <form onSubmit={handleSubmit}>
          <p className="text-gray-600 mb-4 text-center">
            Please enter the password to view your reflections.
          </p>
          
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              className={`w-full p-3 border rounded-lg focus-ring ${
                error ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter password"
              autoFocus
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">Incorrect password. Please try again.</p>
            )}
          </div>
          
          <div className="flex justify-between">
            <button type="button" onClick={onCancel} className="btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordModal;
  