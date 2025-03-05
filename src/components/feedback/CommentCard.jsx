function CommentCard({ comment }) {
  const formattedDate = new Date(comment.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="card" style={{ marginBottom: '1rem' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '0.75rem'
      }}>
        <h4 style={{ 
          color: 'white', 
          margin: 0,
          fontSize: '1.1rem'
        }}>
          {comment.name}
        </h4>
        <span style={{ 
          fontSize: '0.85rem', 
          color: 'rgba(255,255,255,0.6)'
        }}>
          {formattedDate}
        </span>
      </div>
      <p style={{ 
        margin: 0,
        color: 'rgba(255,255,255,0.8)',
        lineHeight: '1.5'
      }}>
        {comment.message}
      </p>
    </div>
  );
}

export default CommentCard;
