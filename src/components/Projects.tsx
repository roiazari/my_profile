import React from 'react';
import { ExternalLink, Github, Calendar, TrendingUp } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'סיקור מחקר',
      description: 'חשיפת ההשפעה הנסתרת של חברות מדיה על בריאות הנפש',
      image: './digitalMind.png',
      technologies: ['Html', 'CSS', 'JS'],
      year: '2022',
      demo: 'https://roiazari.github.io/mind-media/',
      category: 'HTML',
      open: 'לפתיחה במחשב ובנייד'
    },
    {
      title: 'פרויקט React אינטראקטיבי',
      description: 'אתר מכירה לתוספי תזונה המבוסס על המלצות מותאמות אישית',
      image: './well.png',
      technologies: ['HTML', 'CSS'],
      year: '2020',
      demo: 'https://welltune.netlify.app/',
      category: 'React',
      open: 'לפתיחה במחשב'
    }
    ,
    {
      title: 'סיקור מחקר',
      description: 'מחקר מקיף הבוחן את הגורמים המשפיעים על נטייה יזמית בקרב סטודנטים',
      image: './group9.png',
      technologies: ['React', 'Bolt AI', 'Google LLM'],
      year: '2022',
      demo: 'https://roiazari.github.io/group9/',
      category: 'React',
      open: 'לפתיחה במחשב ובנייד'
    },
    {
      title: 'אתר תדמית לבונה אתרים',
      description: 'נוצר באמצעות AI בלבד',
      image: './ai.png',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis'],
      year: '2022',
      demo: 'https://roiazari.github.io/Websitebuilding/',
      category: 'AI',
      open: 'לפתיחה במחשב ובנייד'
    },
    {
      title: 'אתר תדמית למדביר',
      description: 'יצירת אתרי תדמית בטכנולוגיות מתקדמות',
      image: './rami.png',
      technologies: ['HTML', 'CSS', 'JS', 'React'],
      year: '2021',
      demo: 'https://roiazari.github.io/rahamim_pest_control/',
      category: 'React',
      open: 'לפתיחה במחשב ובנייד'
    },
    {
      title: 'דף נחיתה לעמותה',
      description: 'דף נחיתה שפותח על יד HTML CSS בלבד',
      image: './all.png',
      technologies: ['HTML', 'CSS'],
      year: '2020',
      demo: 'https://roiazari.github.io/AllOfUs/',
      category: 'HTML',
      open: 'לפתיחה במחשב ובנייד'
    }
    ,
    {
      title: 'דף נחיתה לחנות פרחים',
      description: 'יצירת דף נחיתה באמצעות כלי AI מתקדמים',
      image: './flowers.png',
      technologies: ['React'],
      year: '2022',
      demo: 'https://roiazari.github.io/flower-shop/',
      category: 'JS',
      open: 'לפתיחה במחשב ובנייד'
    },

    {
      title: 'עבודת כיתה לתלמידים ',
      description: 'הטמעה של סרטונים , אייקונים , פונטים',
      image: './cake.png',
      technologies: ['HTML', 'CSS'],
      year: '2020',
      demo: 'https://roiazariprojectconfectionery.netlify.app/#',
      category: 'HTML',
      open: 'לפתיחה במחשב'
    },
    {
      title: 'אתר תדמית למורה',
      description: 'נוצר באמצעות AI בלבד',
      image: './adi.png',
      technologies: ['AI'],
      year: '2022',
      demo: 'https://adiharazi.netlify.app/',
      category: 'AI',
      open: 'לפתיחה במחשב ובנייד'
    },
    {
      title: 'גלריית מכוניות ',
      description: 'תרגול מתקדם בJS - גלריית מכוניות עם אפשרויות חיפוש נרחבות ודפדוף בין עמודים',
      image: './cars.png',
      technologies: ['JS'],
      year: '2020',
      demo: 'https://gallery-of-cars.netlify.app/gallery',
      category: 'JS',
      open: 'לפתיחה במחשב'
    },
    {
      title: 'אוסף תרגילים - עיבוד קלטים ',
      description: 'מגוון תרגילים ברמת קושי עולה - לפתיחה במחשב בלבד',
      image: './kelet.png',
      technologies: ['JS'],
      year: '2020',
      demo: 'https://roiazari-input-tags.netlify.app/',
      category: 'JS',
      open: 'לפתיחה במחשב'
    },


    {
      title: 'אוסף תרגילים - DOM JS',
      description: 'מגוון תרגילים ברמת קושי עולה - לפתיחה במחשב בלבד',
      image: './dom.png',
      technologies: ['JS'],
      year: '2020',
      demo: 'https://domjsroiazari.netlify.app/',
      category: 'JS',
      open: 'לפתיחה במחשב'
    },
    {
      title: 'שליטה באירועי מקלדת ועכבר',
      description: 'מגוון תרגילים ברמת קושי עולה - לפתיחה במחשב בלבד',
      image: './add.png',
      technologies: ['JS'],
      year: '2020',
      demo: 'https://roiazariaddeventlistener.netlify.app/',
      category: 'JS',
      open: 'לפתיחה במחשב'
    },
    {
      title: 'משחק זיכרון',
      description: 'פרויקט גמר בקורס JS - הטמעת לוגיקה ו-UI באמצעות JavaScript',
      image: './mem.png',
      technologies: ['JS'],
      year: '2020',
      demo: 'https://memorygmae.netlify.app/',
      category: 'JS',
      open: 'לפתיחה במחשב'
    },
    {
      title: 'עבודה עם API חיצוני',
      description: 'פרויקט סופי המדגים חיבור ל-API חיצוני (Pixabay API) באמצעות JavaScript',
      image: './pixa.png',
      technologies: ['JS'],
      year: '2020',
      demo: 'https://cool-kitsune-8684d6.netlify.app/',
      category: 'JS',
      open: 'לפתיחה במחשב'
    },
  ];


  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'NLP': return 'bg-blue-100 text-blue-700';
      case 'Education': return 'bg-green-100 text-green-700';
      case 'AI': return 'bg-purple-100 text-purple-700';
      case 'Tools': return 'bg-orange-100 text-orange-700';
      case 'Games': return 'bg-pink-100 text-pink-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="projects-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            הפרויקטים שלי
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            פרויקטים מעשיים וחדשניים בתחומי הבינה המלאכותית, חינוך דיגיטלי ופיתוח תוכנה
          </p>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="flex flex-col justify-between bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative ">
                <div className="relative border">
                  <div
                    // הגדרות הקלאסים של Tailwind נשארות, מלבד bg-[url(...)]
                    className="w-full h-52 bg-cover bg-center bg-no-repeat"

                    // החלפה של הקלאס הדינמי ב-Inline Style
                    style={{ backgroundImage: `url(${project.image})`, backgroundPosition: "center", backgroundSize: 'cover' }}

                    role="img"
                    aria-label={project.title}
                  >
                    {/* ... */}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-sm text-gray-500 flex items-center">
                    <Calendar className="h-4 w-4 ml-1" />
                    {project.year}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3">

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-green-600 hover:text-green-700 transition-colors duration-200 text-sm"
                  >
                    <ExternalLink className="h-4 w-4 ml-1" />
                    {project.open}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Projects;