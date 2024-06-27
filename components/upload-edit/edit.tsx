'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Player from 'next-video/player';
import { Video } from 'lib/api/types';

interface EditVideoFormProps {
  video: Video;
}

//Main component in edit page
const Edit: React.FC<EditVideoFormProps> = ({ video }) => {
  const [url, setUrl] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const username = useSelector((state: RootState) => state.user.username);
  const router = useRouter();

  useEffect(() => {
    //get old video metadata
    setUrl(video.video_url);
    setTitle(video.title);
    setDescription(video.description);
  }, [video]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      try {
        await fetch(`https://take-home-assessment-423502.uc.r.appspot.com/api/videos`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: title,
            description: description,
            video_id: video.id
          })
        });
        // Redirect to the user's page after successful submission
        router.push(`/search/${username}`);
      } catch (err) {
        console.error(err);
        alert('Failed to update video. Please try again.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="edit-video-form">
      <h2 className="mb-4 text-2xl font-bold">Edit Video</h2>
      {url && (
        <div className="my-4">
          <Player src={url} controls={true} />
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full rounded border p-2 pb-4"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full rounded border p-2 pb-4"
        />
        <button type="submit" className="mt-2 rounded bg-blue-500 p-2 text-white">
          Update Video
        </button>
      </form>
    </div>
  );
};

export default Edit;
