import { useState } from 'react';

function Goals() {
  const [expandedGoal, setExpandedGoal] = useState(null);

  const goals = [
    {
      title: 'Financial Success',
      progress: 25,
      shortTerm: [
        'Build a strong portfolio of FiveM development projects',
        'Secure freelance development opportunities',
        'Develop marketable skills in game development',
        'Create passive income streams through digital products'
      ],
      longTerm: [
        'Achieve significant wealth and financial independence',
        'Establish a successful career in game development',
        'Create innovative digital products with high market value',
        'Build a sustainable business model around my skills'
      ]
    },
    {
      title: 'Luxury Lifestyle',
      progress: 15,
      shortTerm: [
        'Save for initial investments',
        'Research wealth-building strategies',
        'Network with successful individuals',
        'Develop a personal brand'
      ],
      longTerm: [
        'Own luxury cars and properties',
        'Travel to exclusive destinations',
        'Enjoy high-end experiences',
        'Maintain a comfortable and luxurious lifestyle'
      ]
    },
    {
      title: 'Personal Growth',
      progress: 40,
      shortTerm: [
        'Continuously improve technical skills',
        'Read books on personal development',
        'Learn from mentors and successful people',
        'Develop good financial habits'
      ],
      longTerm: [
        'Become a wise and knowledgeable individual',
        'Mentor others on their path to success',
        'Maintain a balanced and fulfilling life',
        'Leave a positive legacy'
      ]
    }
  ];

  return (
    <section id="goals">
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'white', fontWeight: '700' }}>Life Goals</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          padding: '1rem'
        }}>
          {goals.map((goal, index) => (
            <div
              key={index}
              className="card"
              style={{
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.3s ease',
                transform: expandedGoal === index ? 'scale(1.02)' : 'scale(1)',
              }}
              onClick={() => setExpandedGoal(expandedGoal === index ? null : index)}
            >
              <h3 style={{ color: 'white', marginBottom: '1.5rem', fontWeight: '600' }}>
                {goal.title}
              </h3>
              
              {/* Progress Bar */}
              <div style={{
                width: '100%',
                height: '8px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '4px',
                marginBottom: '1.5rem',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${goal.progress}%`,
                  height: '100%',
                  background: '#8B5CF6', /* Purple color to match the new theme */
                  borderRadius: '4px',
                  transition: 'width 1s ease'
                }} />
              </div>
              
              <div style={{ 
                textAlign: 'right', 
                color: '#A78BFA', /* Lighter purple for better visibility */
                marginBottom: '1rem',
                fontWeight: 'bold'
              }}>
                {goal.progress}% Complete
              </div>

              {expandedGoal === index && (
                <div style={{
                  marginTop: '1.5rem',
                  borderTop: '1px solid rgba(255,255,255,0.2)',
                  paddingTop: '1.5rem'
                }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ 
                      color: '#A78BFA', /* Lighter purple for better visibility */
                      marginBottom: '1rem',
                      fontWeight: '600'
                    }}>
                      Short-term Goals
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {goal.shortTerm.map((item, idx) => (
                        <li
                          key={idx}
                          style={{
                            marginBottom: '0.8rem',
                            paddingLeft: '1.5rem',
                            position: 'relative',
                            color: 'rgba(255,255,255,0.9)',
                            lineHeight: '1.5'
                          }}
                        >
                          <span style={{
                            position: 'absolute',
                            left: 0,
                            color: '#A78BFA' /* Lighter purple for better visibility */
                          }}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 style={{ 
                      color: '#A78BFA', /* Lighter purple for better visibility */
                      marginBottom: '1rem',
                      fontWeight: '600'
                    }}>
                      Long-term Goals
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {goal.longTerm.map((item, idx) => (
                        <li
                          key={idx}
                          style={{
                            marginBottom: '0.8rem',
                            paddingLeft: '1.5rem',
                            position: 'relative',
                            color: 'rgba(255,255,255,0.9)',
                            lineHeight: '1.5'
                          }}
                        >
                          <span style={{
                            position: 'absolute',
                            left: 0,
                            color: '#A78BFA' /* Lighter purple for better visibility */
                          }}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <div style={{
                position: 'absolute',
                bottom: '1rem',
                right: '1rem',
                color: '#A78BFA', /* Lighter purple for better visibility */
                transform: expandedGoal === index ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 0.3s ease'
              }}>
                ▼
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Goals;
