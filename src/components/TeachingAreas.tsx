import React from 'react';
import { Code, Globe, Smartphone, Server, Coffee, FileCode, Gamepad2, Zap, Sparkles, GraduationCap, LayoutList, Handshake, Smile } from 'lucide-react';

const TeachingAreas: React.FC = () => {
  const teachingAreas = [
    {
      title: 'HTML & CSS',
      icon: Globe,
      description: 'יסודות פיתוח אתרים, עיצוב רספונסיבי ו-CSS מתקדם',
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700'
    },
    {
      title: 'JavaScript',
      icon: FileCode,
      description: 'תכנות דינמי, DOM manipulation ו-ES6+ מתקדם',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-700'
    },
    {
      title: 'React',
      icon: Smartphone,
      description: 'פיתוח אפליקציות אינטראקטיביות עם ספריית React',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700'
    },

    {
      title: 'Java',
      icon: Coffee,
      description: 'אלגוריתמיקה, תכנות מונחה עצמים ומבנה נתונים',
      color: 'from-red-400 to-pink-500',
      bgColor: 'bg-red-50',
      textColor: 'text-red-700'
    },
    {
      title: 'Python',
      icon: Code,
      description: 'אלגוריתמיקה ותכנות',
      color: 'from-indigo-400 to-purple-500',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-700'
    },
    {
      title: 'Game Maker',
      icon: Gamepad2,
      description: 'פיתוח משחקים 2D עם כלים ויזואליים מתקדמים',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700'
    },
    {
      title: 'MakeCode Arcade',
      icon: Zap,
      description: 'תכנות משחקים חינוכי עם סביבה ויזואלית',
      color: 'from-teal-400 to-cyan-500',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-700'
    },
    {
      title: 'יצירת דפי נחיתה ואתרי תדמית בעזרת בינה מלאכותית',
      icon: Sparkles,
      description: 'פיתוח אתרים מתקדמים בעזרת כלי AI וטכנולוגיות חדשניות',
      color: 'from-violet-400 to-purple-500',
      bgColor: 'bg-violet-50',
      textColor: 'text-violet-700'
    },
    {
      title: 'הכנה לבגרות במדעי המחשב',
      icon: GraduationCap,
      description: 'הכנה מקיפה לבחינת הבגרות במדעי המחשב - תכנות, אלגוריתמיקה ומבני נתונים',
      color: 'from-emerald-400 to-teal-500',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-700'
    }
  ];

  return (
    <section className="py-20 bg-white" id="teaching-areas-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            תחומי הוראה
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            מגוון רחב של טכנולוגיות ושפות תכנות המותאמות לכל רמות הלמידה
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachingAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className={`${area.bgColor} rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group  `}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className={`text-lg font-bold ${area.textColor} mb-3`}>
                    {area.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Teaching Philosophy for Programming */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">גישת ההוראה שלי בתכנות</h3>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold text-gray-900">למידה מעשית</h4>
                <p className="text-gray-600 text-sm">
                  כל קורס כולל פרויקטים אמיתיים ותרגול מעשי מהיום הראשון
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-2xl">🔄</span>
                </div>
                <h4 className="font-semibold text-gray-900">למידה הדרגתית</h4>
                <p className="text-gray-600 text-sm">
                  בניית ידע שלב אחר שלב, מהיסודות ועד לרמה מתקדמת
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="font-semibold text-gray-900">עבודת צוות</h4>
                <p className="text-gray-600 text-sm">
                  פיתוח כישורי עבודה בצוות ושיתוף פעולה בפרויקטים
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                  {/* אייקון מתאים מ-lucide-react */}
                  <LayoutList className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">תוכנית לימודים מקיפה</h4> {/* ניסוח משופר לכותרת */}
                <p className="text-gray-600 text-sm">
                  כל קורס מגיע עם סילבוס ומערכי שיעור מוגדרים מראש, לבניית ידע שיטתי ומסודר
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                  {/* אייקון מתאים מ-lucide-react */}
                  <Handshake className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900">יחס אישי לכל תלמיד</h4> {/* ניסוח משופר לכותרת */}
                <p className="text-gray-600 text-sm">
                  יחס אישי וסבלני לכל תלמיד בהתאם לקצב וליכולותיו האישיות
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto">
                  {/* אייקון מתאים מ-lucide-react */}
                  <Smile className="h-6 w-6 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-900">למידה חווייתית באווירה מהנה</h4> {/* ניסוח משופר לכותרת */}
                <p className="text-gray-600 text-sm">
                  החשוב מכולם! אוירת למידה חיובית וכיפית ✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingAreas;