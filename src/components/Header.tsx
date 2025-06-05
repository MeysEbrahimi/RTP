import  { BookOpen } from 'lucide-react';

const Header = () => {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 bg-white shadow-sm">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 rounded-full">
            <BookOpen className="h-6 w-6 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Reflective Thinking Practice</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
  