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
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../../firebaseConfig";
import "./Comments.css";

function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentComment, setCurrentComment] = useState(null);
  const [updatedText, setUpdatedText] = useState("");
  const [user, setUser] = useState(null);
  const [authMessage, setAuthMessage] = useState("");

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Fetch comments for the current post
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

  // Add a new comment (only if the user is authenticated)
  const handleAddComment = async () => {
    if (!user) {
      setAuthMessage("Please sign in to leave a comment.");
      return;
    }
    if (!newComment.trim()) return;
    try {
      await addDoc(collection(db, "comments"), {
        postId,
        text: newComment,
        createdAt: new Date(),
        author: user.displayName,
        userId: user.uid
      });
      setNewComment("");
      fetchComments();
      setAuthMessage("");
    } catch (error) {
      console.error("Error adding comment: ", error);
    }
  };

  // Open the modal to edit a comment
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

  // Save changes to a comment
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

  // Open the confirmation modal to delete a comment
  const openDeleteModal = (comment) => {
    setCurrentComment(comment);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setCurrentComment(null);
  };

  // Delete the comment
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
            {comment.author ? comment.author : "Anonymous"} -{" "}
            {comment.createdAt &&
              (typeof comment.createdAt.toDate === "function"
                ? comment.createdAt.toDate().toLocaleString()
                : new Date(comment.createdAt).toLocaleString())}
          </span>
          {/* Show edit/delete buttons only if the comment belongs to the current user */}
          {user && comment.userId === user.uid && (
            <div className="comment-actions">
              <button onClick={() => openEditModal(comment)}>Edit</button>
              <button onClick={() => openDeleteModal(comment)}>Delete</button>
            </div>
          )}
        </div>
      ))}
      <div className="add-comment">
        {user ? (
          <>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
            />
            <button onClick={handleAddComment}>Add Comment</button>
          </>
        ) : (
          <p className="error">
            {authMessage || "Please sign in to add a comment."}
          </p>
        )}
      </div>

      {/* Modal to edit a comment */}
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

      {/* Confirmation modal to delete a comment */}
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
