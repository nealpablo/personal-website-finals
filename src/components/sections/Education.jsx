function Education() {
  const education = [
    {
      year: 'Present',
      degree: 'Bachelor of Science in Information Technology',
      school: 'Asia Pacific College',
      description: 'Currently pursuing a degree in Information Technology with a specialization in Multimedia and Information (BSIT-MI). Focusing on developing technical skills and knowledge in both IT and multimedia design.'
    },
    {
      year: '2018 - 2022',
      degree: 'Senior High School - STEM',
      school: 'Senior High School',
      description: 'Specialized in the STEM (Science, Technology, Engineering, and Mathematics) strand. Developed a strong foundation in analytical thinking, problem-solving, and scientific principles.'
    },
    {
      year: '2012 - 2018',
      degree: 'Elementary Education',
      school: 'Elementary School',
      description: 'Completed elementary education with a focus on foundational learning and early development of academic skills.'
    }
  ];

  return (
    <section id="education">
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'white', fontWeight: '700' }}>Education</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {education.map((edu, index) => (
            <div
              key={index}
              className="card"
              style={{
                marginBottom: '2rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}
            >
              <div style={{ 
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                color: 'var(--secondary)',
                fontWeight: 'bold',
                fontSize: '1.1rem'
              }}>
                {edu.year}
              </div>
              <h3 style={{ color: 'white', fontWeight: '600', marginBottom: '0.5rem' }}>{edu.degree}</h3>
              <h4 style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '0.5rem' }}>{edu.school}</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.6' }}>
                {edu.description}
              </p>
              {/* Timeline connector */}
              {index !== education.length - 1 && (
                <div style={{
                  position: 'absolute',
                  bottom: '-2rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '2px',
                  height: '2rem',
                  background: 'var(--secondary)',
                  opacity: 0.5
                }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
