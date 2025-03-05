import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import FeedbackForm from '../feedback/FeedbackForm';
import CommentCard from '../feedback/CommentCard';

function Feedback() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch initial comments
    fetchComments();

    // Set up real-time subscription
    const channel = supabase
      .channel('public:feedback')
      .on('postgres_changes', 
        {
          event: 'INSERT',
          schema: 'public',
          table: 'feedback'
        }, 
        (payload) => {
          setComments(prevComments => [payload.new, ...prevComments]);
        }
      )
      .subscribe();

    // Cleanup subscription
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchComments = async () => {
    try {
      const { data, error } = await supabase
        .from('feedback')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setComments(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      const { error } = await supabase
        .from('feedback')
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);

      if (error) throw error;
      return true;
    } catch (err) {
      console.error('Error submitting feedback:', err);
      return false;
    }
  };

  return (
    <section id="feedback">
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'white' }}>Leave Your Feedback</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          <div>
            <FeedbackForm onSubmit={handleSubmit} />
          </div>
          
          <div>
            <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>Recent Comments</h3>
            
            {isLoading ? (
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>Loading comments...</p>
            ) : error ? (
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>Error: {error}</p>
            ) : comments.length === 0 ? (
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>No comments yet. Be the first to leave feedback!</p>
            ) : (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                maxHeight: '400px',
                overflowY: 'auto',
                padding: '0.5rem'
              }}>
                {comments.map((comment) => (
                  <CommentCard key={comment.id} comment={comment} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
