import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import "./Comments.css";

function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentComment, setCurrentComment] = useState(null);
  const [updatedText, setUpdatedText] = useState("");

  // Fetch comments filter by id
  const fetchComments = async () => {
    try {
      const commentsRef = collection(db, "comments");
      const q = query(commentsRef, where("postId", "==", postId));
      const querySnapshot = await getDocs(q);
      const commentsData = querySnapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data()
      }));
      setComments(commentsData);
    } catch (error) {
      console.error("Error fetching comments: ", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  // Add new comment
  const handleAddComment = async () => {
    if (!newComment.trim()) return;
    try {
      await addDoc(collection(db, "comments"), {
        postId,
        text: newComment,
        createdAt: new Date()
      });
      setNewComment("");
      fetchComments();
    } catch (error) {
      console.error("Error adding comment: ", error);
    }
  };

  // Open edit modal
  const openEditModal = (comment) => {
    setCurrentComment(comment);
    setUpdatedText(comment.text);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setCurrentComment(null);
    setUpdatedText("");
  };

  // Save changes (edit)
  const handleEditComment = async () => {
    try {
      await updateDoc(doc(db, "comments", currentComment.id), {
        text: updatedText
      });
      closeEditModal();
      fetchComments();
    } catch (error) {
      console.error("Error editing comment: ", error);
    }
  };

  // Open confirmation delete modal
  const openDeleteModal = (comment) => {
    setCurrentComment(comment);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setCurrentComment(null);
  };

  // Delete comment
  const handleDeleteComment = async () => {
    try {
      await deleteDoc(doc(db, "comments", currentComment.id));
      closeDeleteModal();
      fetchComments();
    } catch (error) {
      console.error("Error deleting comment: ", error);
    }
  };

  return (
    <div className="comments-container">
      <h3>Comments</h3>
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <p>{comment.text}</p>
          <span className="comment-meta">
            {comment.createdAt &&
              (typeof comment.createdAt.toDate === "function"
                ? comment.createdAt.toDate().toLocaleString()
                : new Date(comment.createdAt).toLocaleString())}
          </span>
          <div className="comment-actions">
            <button onClick={() => openEditModal(comment)}>Edit</button>
            <button onClick={() => openDeleteModal(comment)}>Delete</button>
          </div>
        </div>
      ))}
      <div className="add-comment">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>

      {/* Edition modal */}
      {editModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Edit Comment</h3>
            <textarea
              value={updatedText}
              onChange={(e) => setUpdatedText(e.target.value)}
            />
            <div className="modal-actions">
              <button onClick={handleEditComment}>Save</button>
              <button onClick={closeEditModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete confirmation modal */}
      {deleteModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to delete this comment?</p>
            <div className="modal-actions">
              <button onClick={handleDeleteComment}>Yes, Delete</button>
              <button onClick={closeDeleteModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Comments;
