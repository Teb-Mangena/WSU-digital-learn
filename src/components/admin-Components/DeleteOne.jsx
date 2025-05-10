import { useState } from "react";

const DeleteOne = ({ id, onDeleteSuccess }) => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    // Reset states
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
      const response = await fetch(`https://wsu-dl-server.onrender.com/api/documents/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Add authorization header if needed
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete the document");
      }

      setSuccess(data.message || "Document deleted successfully");
      if (onDeleteSuccess) {
        onDeleteSuccess(id);
      }
      
    } catch (error) {
      setError(error.message);

    } finally {
      setIsLoading(false);
    }
  };

  return ( 
    <div className="delete-container">
      <button 
        onClick={handleDelete} 
        disabled={isLoading}
        className={`delete-button ${isLoading ? 'disabled' : ''}`}
      >
        {isLoading ? 'Deleting...' : 'Delete'}
      </button>
      
      {success && (
        <div className="success-message">
          ✅ {success}
        </div>
      )}

      {error && (
        <div className="error-message">
          ❌ {error}
        </div>
      )}
    </div>
  );
};

export default DeleteOne;