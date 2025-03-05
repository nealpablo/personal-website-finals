import { useState } from 'react';

function Hobbies() {
  const [activeHobby, setActiveHobby] = useState(null);

  const hobbies = [
    {
      title: 'Competitive Gaming',
      icon: '🎮',
      description: 'Playing competitive Valorant with friends to improve my gaming skills',
      details: [
        'Participating in online tournaments',
        'Improving gameplay skills and strategies',
        'Connecting with other gamers in the community',
        'Exploring different game genres and platforms'
      ]
    },
    {
      title: 'Basketball',
      icon: '🏀',
      description: 'Casually playing basketball to stay active, have fun, and connect with friends',
      details: [
        'Playing pickup games with friends',
        'Watching professional basketball games',
        'Improving shooting and dribbling skills',
        'Participating in local casual leagues'
      ]
    },
    {
      title: 'Coding',
      icon: '💻',
      description: 'Enhancing my coding skills and creativity through personal projects and learning new technologies',
      details: [
        'Developing FiveM scripts and mods',
        'Learning new programming languages',
        'Building personal projects',
        'Exploring game development techniques'
      ]
    }
  ];

  return (
    <section id="hobbies">
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'white', fontWeight: '700' }}>Hobbies & Interests</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          padding: '1rem'
        }}>
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="card"
              style={{
                cursor: 'pointer',
                transform: activeHobby === index ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s ease',
                height: activeHobby === index ? 'auto' : '220px',
                overflow: 'hidden'
              }}
              onClick={() => setActiveHobby(activeHobby === index ? null : index)}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <span style={{ fontSize: '2rem', marginRight: '1rem' }}>{hobby.icon}</span>
                <h3 style={{ color: 'white', fontWeight: '600', margin: 0 }}>{hobby.title}</h3>
              </div>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.9)', 
                marginBottom: activeHobby === index ? '1rem' : 0,
                lineHeight: '1.6'
              }}>
                {hobby.description}
              </p>
              {activeHobby === index && (
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '1rem 0 0 0'
                }}>
                  {hobby.details.map((detail, idx) => (
                    <li
                      key={idx}
                      style={{
                        marginBottom: '0.8rem',
                        position: 'relative',
                        paddingLeft: '1.5rem',
                        color: 'rgba(255, 255, 255, 0.9)',
                        lineHeight: '1.4'
                      }}
                    >
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: 'var(--secondary)'
                      }}>•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                right: '1rem',
                color: 'var(--secondary)',
                transform: activeHobby === index ? 'rotate(180deg)' : 'rotate(0)',
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

export default Hobbies;
