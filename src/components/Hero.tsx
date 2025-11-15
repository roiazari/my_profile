import React from 'react';
import { ChevronLeft, Award, Users, BookOpen } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Hero: React.FC = () => {
  const stats = [
    { icon: BookOpen, label: 'שנות הוראה', value: '5+' },
    { icon: Users, label: 'סטודנטים', value: '2000+' },
    { icon: Award, label: 'תארים', value: '2' },
  ];

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20" id="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                רועי עזרי
              </h1>

              <h2 className="text-xl lg:text-2xl text-blue-600 font-semibold">
                מרצה למדעי המחשב
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                בעל 5 שנות ניסיון בהוראת מדעי המחשב לקהלים מגוונים: מבוגרים במכללות מובילות ועד קורסים מותאמים לילדים ונוער. תחומי ההתמחות שלי כוללים שפות תכנות פופולריות וכן שפות No Code ללימוד ילדים, במטרה להעניק לכל לומד את היכולת לבנות ולהצליח בעולם הטכנולוגי. <strong>פועל גם כשכיר וגם כעצמאי, ומציע לכם שירות מקצועי ואדיב ומתן חשבוניות כחוק.</strong>
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="./RoiAzari-CV.pdf" // שנה נתיב זה לנתיב המדויק של קובץ ה-PDF שלך
                download="רועי-עזרי-קורות-חיים.pdf" // כאן אתה קובע את השם שיופיע כברירת מחדל בהורדה
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center group"
              >
                הורד קורות חיים
                <ChevronLeft className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="https://github.com/roiazari" // החלף בקישור לפרופיל GitHub שלך
                target="_blank" // פותח את הקישור בלשונית חדשה
                rel="noopener noreferrer" // מומלץ לאבטחה בעת שימוש ב-target="_blank"
                className="border border-gray-300 hover:border-blue-300 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center" // הוספתי flex, items-center, justify-center כדי למרכז את הטקסט והאייקון
              >
                <FaGithub className="h-5 w-5 ml-2" /> {/* האייקון של GitHub */}
                צפייה בפרויקטים בגיטאהב
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-2 group-hover:bg-blue-200 transition-colors duration-200">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-200 to-cyan-200 rounded-2xl overflow-hidden">
              <img
                src="./myPic.png"
                alt="רועי עזרי"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-70"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-100 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;