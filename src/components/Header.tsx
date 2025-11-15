import React from 'react';
import { Menu, X, BookOpen,  FolderOpen, Mail, GraduationCap } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: 'teaching-areas-section', label: 'תחומי הוראה', icon: GraduationCap },
    { id: 'about-section', label: 'השכלה', icon: BookOpen },
    { id: 'projects-section', label: 'פרויקטים', icon: FolderOpen },
    { id: 'contact-section', label: 'צור קשר', icon: Mail },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => scrollToSection('hero-section')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <img src="./code.png" alt="" />
            </div>
            <div className="mr-3">
              <h1 className="text-xl font-bold text-gray-900">רועי עזרי</h1>
              <p className="text-sm text-gray-600">מרצה למדעי המחשב</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-reverse space-x-8">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 text-gray-700"
                    >
                      <Icon className="h-4 w-4 ml-2" />
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top duration-200">
            <nav>
              <ul className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="w-full flex items-center px-3 py-3 text-base font-medium rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 text-gray-700"
                      >
                        <Icon className="h-5 w-5 ml-3" />
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;