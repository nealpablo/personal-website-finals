import profileImage from '../../assets/images/profile.jpg';

function AboutMe() {
  return (
    <section id="about" style={{
      background: 'var(--gradient)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
          padding: '2rem'
        }}>
          {/* Profile Image */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid white',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
            }}>
              <img
                src={profileImage}
                alt="Neal Pablo"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h1 style={{ 
              color: 'white',
              marginBottom: '1rem',
              fontSize: '2.5rem'
            }}>
              Neal Pablo
            </h1>
            <h2 style={{ 
              color: 'var(--accent)',
              marginBottom: '2rem',
              fontSize: '1.5rem'
            }}>
              BSIT-MI Student & FiveM Developer
            </h2>
            <p style={{ 
              fontSize: '1.1rem',
              lineHeight: '1.8',
              marginBottom: '2rem',
              opacity: 0.9
            }}>
              Hello! I'm Neal Pablo, a 20-year-old BSIT-MI student at Asia Pacific College. I'm passionate about game development, particularly for FiveM GTA RP servers, where I create interactive features that enhance player experiences.
            </p>

            {/* Skills */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ 
                color: 'var(--accent)',
                marginBottom: '1rem'
              }}>
                Core Skills
              </h3>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {[
                  'Lua', 'JavaScript', 'CSS',
                  'FiveM Development', 'Game Scripting', 'UI Design',
                  'Player Experience', 'Creative Coding'
                ].map((skill, index) => (
                  <span
                    key={index}
                    style={{
                      background: 'rgba(255,255,255,0.2)',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact/Social Links */}
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              <a
                href="#experience"
                className="button"
                style={{
                  background: 'white',
                  color: 'var(--primary)'
                }}
              >
                My Experience
              </a>
              <a
                href="#feedback"
                className="button"
                style={{
                  background: 'var(--accent)',
                  color: 'white'
                }}
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0.1)) 0 0, linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0.1)) 25px 25px',
        backgroundSize: '50px 50px',
        opacity: 0.1
      }} />
    </section>
  );
}

export default AboutMe;
