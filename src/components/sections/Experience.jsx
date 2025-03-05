function Experience() {
  const experiences = [
    {
      role: 'FiveM GTA RP Developer',
      company: 'FiveM Roleplay Servers',
      period: '2022 - Present',
      responsibilities: [
        'Develop custom scripts and features for GTA RP servers using Lua, JavaScript, and CSS',
        'Create interactive elements that enhance player immersion and experience',
        'Design and implement user interfaces for in-game systems',
        'Optimize code for improved server performance and gameplay experience'
      ]
    },
    {
      role: 'Game World Designer',
      company: 'FiveM Community Projects',
      period: '2021 - 2022',
      responsibilities: [
        'Designed immersive game environments and interactive elements',
        'Collaborated with server owners to implement custom features',
        'Created scripts to enhance roleplay scenarios and player interactions',
        'Developed custom UI elements for improved player experience'
      ]
    },
    {
      role: 'Coding Enthusiast',
      company: 'Personal Projects',
      period: '2020 - 2021',
      responsibilities: [
        'Self-taught Lua, JavaScript, and CSS for game modification',
        'Experimented with game scripting and modification techniques',
        'Participated in online coding communities focused on game development',
        'Built small-scale projects to develop programming skills'
      ]
    }
  ];

  return (
    <section id="experience" style={{ background: 'var(--primary)', color: 'white' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'white' }}>FiveM Development Experience</h2>
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
                height: '100%',
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              <div style={{
                borderLeft: '4px solid var(--accent)',
                paddingLeft: '1rem',
                marginBottom: '1rem'
              }}>
                <h3 style={{ color: 'white' }}>{exp.role}</h3>
                <h4 style={{ 
                  color: 'var(--accent)',
                  marginTop: '0.5rem'
                }}>{exp.company}</h4>
                <p style={{ 
                  color: 'white',
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
                      paddingLeft: '1.5rem',
                      color: 'rgba(255,255,255,0.8)'
                    }}
                  >
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: 'var(--accent)'
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

export default Experience; 