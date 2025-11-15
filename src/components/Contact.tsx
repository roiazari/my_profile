import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
// אין צורך בייבוא של useForm או ValidationError אם משתמשים בגישה הפשוטה

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  // נשמור על isSubmitted כדי להציג את הודעת ההצלחה שלך
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    // נמנע את רענון הדף רק אם אנחנו לא משתמשים ב-Formspree באופן ישיר דרך ה-action/method
    // במקרה הזה, אנחנו רוצים ש-Formspree תעשה את העבודה, אז לא נמנע את ה-default
    // אבל כן נרצה להציג את הודעת ההצלחה שלנו
    
    // Formspree תטפל בשליחה לדף אחר, אז אם רוצים להישאר באותו עמוד עם הודעה משלנו,
    // צריך עדיין למנוע את ה-default ולבצע בקשת fetch/axios ידנית ל-Formspree.
    // אבל אמרת "הכי פשוט", אז נלך על Formspree שמטפלת בהכל כולל ניתוב מחדש.
    // לכן, כדי ש-Formspree תעבוד, אסור למנוע את ה-default כאן.
    // הפתרון הפשוט ביותר: Formspree מטפלת בניווט לעמוד אישור משלה.
    // אם רוצים להישאר באותו עמוד, צריך קצת יותר קוד (כמו עם useForm או fetch ידני).

    // לכן, אם רוצים את הודעת ה-isSubmitted שלך, צריך לשלוח את הטופס ב-AJAX.
    // אם "הכי פשוט" זה ש-Formspree תעשה את כל העבודה (כולל ניתוב מחדש לדף תודה),
    // אז פשוט מסירים את ה-handleSubmit כולו ונותנים ל-HTML action לטפל.

    // נלך על הדרך השלישית, שמאפשרת לך להישאר באותו דף עם ההודעה שלך,
    // ועדיין פשוטה יחסית באמצעות `fetch` ל-Formspree.
    e.preventDefault(); // מונע את הניווט לדף אחר

    fetch("https://formspree.io/f/mkgkwbkn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
      } else {
        // Formspree returns errors in JSON, you might want to handle them
        // For simplicity, we'll just log
        console.error("Formspree error:", response.statusText);
        alert("אירעה שגיאה בשליחת ההודעה. אנא נסה שוב.");
      }
    })
    .catch(error => {
      console.error("Network error:", error);
      alert("אירעה שגיאה בשליחת ההודעה. אנא נסה שוב.");
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'דוא״ל',
      content: 'roiazari148@gmail.com',
      link: 'mailto:roiazari148@gmail.com'
    },
    {
      icon: Phone,
      title: 'טלפון',
      content: '054-2412474',
      link: 'tel:054-2412474'
    },
    {
      icon: MapPin,
      title: 'אזורי שירות',
      content: 'אזור המרכז',
      link: null
    },
    {
      icon: Clock,
      title: 'שעות פעילות',
      content: '9:00-22:00',
      link: null
    }
  ];

  return (
    <section className="py-20 bg-white" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            צור קשר
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            מוזמנים לפנות אליי לשאלות, שיתופי פעולה או ייעוץ אקדמי
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-50 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">פרטי יצירת קשר</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-blue-600" />
                        </div>
                      </div>
                      <div className="mr-4">
                        <h4 className="font-medium text-gray-900 mb-1">{info.title}</h4>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">שלח הודעה</h3>
              
              {isSubmitted ? ( // נשאר עם ה-isSubmitted שלך
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">ההודעה נשלחה בהצלחה!</h4>
                  <p className="text-gray-600">תודה על פנייתך. אחזור אליך בהקדם האפשרי.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6"> {/* השתמש בפונקציית handleSubmit החדשה */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        שם מלא *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="הכנס את שמך המלא"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        דוא״ל *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="הכנס כתובת דוא״ל"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      נושא *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">בחר נושא</option>
                      <option value="research">הדרכת קבוצות</option>
                      <option value="teaching"> קורסים</option>
                      <option value="thesis">שיעורים פרטיים</option>
                      <option value="consultation">בניית אתרים</option>
                      <option value="other">אחר</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      הודעה *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                      placeholder="כתב את הודעתך כאן..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center group"
                  >
                    <Send className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    שלח הודעה
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;