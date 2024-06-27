'use client';

import React, { useState, useEffect } from 'react';
import { Comment } from 'lib/api/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface CommentSectionProps {
  initialComments?: Comment[];
  videoId: string;
}

//comment section component in video page
const CommentSection: React.FC<CommentSectionProps> = ({ initialComments = [], videoId }) => {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState<string>('');
  const username = useSelector((state: RootState) => state.user.username);

  //get comments from api
  const fetchComments = async () => {
    try {
      const response = await fetch(
        `https://take-home-assessment-423502.uc.r.appspot.com/api/videos/comments?video_id=${videoId}`
      );
      const data = await response.json();
      if (data && data.comments) {
        setComments(data.comments);
      } else {
        setComments([]);
      }
    } catch (err) {
      console.error(err);
      setComments([]);
    }
  };

  //post another comment
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newComment.trim()) {
      try {
        await fetch(
          'https://take-home-assessment-423502.uc.r.appspot.com/api/videos/comments?video_id=',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              content: newComment,
              user_id: username ? username : 'Anonymous',
              video_id: videoId
            })
          }
        );
        setNewComment('');
        //fetch comments again after a new comment is added
        fetchComments();
      } catch (err) {
        console.error(err);
        alert('Failed to post comment. Please try again.');
      }
    }
  };

  useEffect(() => {
    fetchComments();
  }, [videoId]);

  return (
    <div className="comment-section">
      <h2 className="mb-4 text-2xl font-bold">Comments</h2>
      <ul>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <li key={comment.id} className="mb-4 flex items-start justify-between">
              <div>
                <strong>{comment.user_id}:</strong> {comment.content}
              </div>
              <div className="ml-4 text-sm text-gray-500">
                {new Date(comment.created_at).toLocaleDateString()}
              </div>
            </li>
          ))
        ) : (
          <li className="pb-3">No comments yet.</li>
        )}
      </ul>
      <form onSubmit={handleSubmit}>
        <textarea
          value={newComment}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full rounded border p-2"
        />
        <button type="submit" className="mt-2 rounded bg-blue-500 p-2 text-white">
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
