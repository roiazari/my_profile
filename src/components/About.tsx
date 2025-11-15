import React from 'react';
import { GraduationCap, Users, Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const education = [
    {
      degree: 'תואר ראשון בניהול טכנולוגיה',
      institution: 'אוניברסיטת בר אילן',
      icon: GraduationCap,
      image: './data.jpg'
    },
    {
      degree: ' הנדסאי תוכנה',
      institution: 'מכללת אורט סינגאלובסקי',
      icon: Award,
      image: './programing.jpg'
    }
  ];

  return (
    <section className="py-20 bg-white" id="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            השכלה
          </h2>

        </div>

        {/* Education Section */}
        <div className="mb-16">


          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <img
                        src={edu.image}
                        alt={edu.institution}
                        className="w-24 h-24 rounded-full object-cover shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {edu.degree}
                    </h4>

                    <p className="text-blue-600 font-semibold text-lg">
                      {edu.institution}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;