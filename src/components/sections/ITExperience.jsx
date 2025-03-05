function ITExperience() {
  const experiences = [
    {
      role: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      responsibilities: [
        'Led a team of 5 developers in building enterprise-level web applications',
        'Implemented microservices architecture using Node.js and Docker',
        'Optimized application performance resulting in 40% faster load times',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      role: 'Frontend Developer',
      company: 'Digital Innovations Co.',
      period: '2020 - 2022',
      responsibilities: [
        'Developed responsive web applications using React and TypeScript',
        'Created reusable component libraries and design systems',
        'Collaborated with UX designers to implement pixel-perfect designs',
        'Improved website accessibility to meet WCAG standards'
      ]
    },
    {
      role: 'Software Engineering Intern',
      company: 'StartUp Tech',
      period: '2019 - 2020',
      responsibilities: [
        'Assisted in developing features for a React Native mobile app',
        'Fixed bugs and improved app performance',
        'Participated in daily stand-ups and sprint planning',
        'Learned industry best practices and agile methodologies'
      ]
    }
  ];

  return (
    <section id="experience" style={{ background: 'var(--background)' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>IT Experience</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          padding: '1rem'
        }}>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              <div style={{
                borderLeft: '4px solid var(--secondary)',
                paddingLeft: '1rem',
                marginBottom: '1rem'
              }}>
                <h3 style={{ color: 'var(--primary)' }}>{exp.role}</h3>
                <h4 style={{ 
                  color: 'var(--secondary)',
                  marginTop: '0.5rem'
                }}>{exp.company}</h4>
                <p style={{ 
                  color: 'var(--text)',
                  opacity: 0.7,
                  fontSize: '0.9rem',
                  marginTop: '0.25rem'
                }}>{exp.period}</p>
              </div>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                flex: 1
              }}>
                {exp.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    style={{
                      marginBottom: '0.5rem',
                      position: 'relative',
                      paddingLeft: '1.5rem'
                    }}
                  >
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: 'var(--secondary)'
                    }}>•</span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ITExperience;
