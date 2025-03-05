import { useState } from 'react';
import gallery1 from '../../assets/images/gallery1.jpg';
import gallery2 from '../../assets/images/gallery2.jpg';
import gallery3 from '../../assets/images/gallery3.jpg';
import gallery4 from '../../assets/images/gallery4.jpg';
import gallery5 from '../../assets/images/gallery5.jpg';
import gallery6 from '../../assets/images/gallery6.jpg';

function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery images with Neal's content
  const images = [
    {
      url: gallery1,
      title: 'Valorant Gaming',
      description: 'Playing competitive Valorant with friends to improve my gaming skills'
    },
    {
      url: gallery2,
      title: 'My Pet Cats',
      description: 'My adorable cats that keep me company during gaming and coding sessions'
    },
    {
      url: gallery3,
      title: 'PlayStation Controllers',
      description: 'My gaming setup with PlayStation controllers for casual gaming sessions'
    },
    {
      url: gallery4,
      title: 'My Vehicle',
      description: 'My car that I use for transportation to school and various activities'
    },
    {
      url: gallery5,
      title: 'Friends Gathering',
      description: 'Spending quality time with friends at social events and celebrations'
    },
    {
      url: gallery6,
      title: 'Shopping Mall',
      description: "Spending some leisure time at the mall during my free time between classes"
    }
  ];

  return (
    <section id="gallery" className="animated-bg">
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'white' }}>My Gallery</h2>
        <p style={{ 
          textAlign: 'center', 
          maxWidth: '700px', 
          margin: '0 auto 3rem auto',
          color: 'rgba(255,255,255,0.8)'
        }}>
          A visual journey through my experiences, projects, and interests. Click on any image to view more details.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
          padding: '1rem'
        }}>
          {images.map((image, index) => (
            <div
              key={index}
              className="card"
              style={{
                cursor: 'pointer',
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
                position: 'relative'
              }}
              onClick={() => setSelectedImage(image)}
            >
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '8px',
                marginBottom: '1rem'
              }}>
                <img
                  src={image.url}
                  alt={image.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          ))}
        </div>

        {/* Image Preview Modal */}
        {selectedImage && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.9)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000,
              padding: '2rem'
            }}
            onClick={() => setSelectedImage(null)}
          >
            <div
              style={{
                background: 'rgba(30, 41, 59, 0.8)',
                padding: '1.5rem',
                borderRadius: '12px',
                maxWidth: '90%',
                maxHeight: '90%',
                overflow: 'auto',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
              onClick={e => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                style={{
                  width: '100%',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  marginBottom: '1rem',
                  borderRadius: '8px'
                }}
              />
              <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>{selectedImage.title}</h3>
              <p style={{ marginTop: '0.5rem', color: 'rgba(255,255,255,0.8)' }}>{selectedImage.description}</p>
              <button
                className="button"
                onClick={() => setSelectedImage(null)}
                style={{ 
                  marginTop: '1.5rem',
                  background: 'var(--accent)',
                  color: 'white'
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default PhotoGallery;
