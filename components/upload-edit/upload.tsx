'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Player from 'next-video/player';

const validVideoExtensions = ['.mp4', '.mov', '.avi', '.mkv', '.webm'];

//checks if url is video file
const isValidVideoUrl = (url: string): boolean => {
  return validVideoExtensions.some((ext) => url.toLowerCase().endsWith(ext));
};

//Main component on upload page
const Upload: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isUrlValid, setIsUrlValid] = useState<boolean>(true);
  const username = useSelector((state: RootState) => state.user.username);
  const router = useRouter();

  useEffect(() => {
    if (url) {
      setIsUrlValid(isValidVideoUrl(url));
    } else {
      setIsUrlValid(true); // Reset to true when the URL is empty
    }
  }, [url]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (url.trim() && title.trim() && description.trim() && isUrlValid) {
      try {
        await fetch('https://take-home-assessment-423502.uc.r.appspot.com/api/videos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            video_url: url,
            title,
            description,
            user_id: username ? username : 'pat_feng_anonymous'
          })
        });
        // Redirect to the user's page after successful submission
        router.push(`/search/${username ? username : 'pat_feng_anonymous'}`);
      } catch (err) {
        console.error(err);
        alert('Failed to post video. Please try again.');
      }
    } else {
      alert('Please fill in all fields with valid data.');
    }
  };

  return (
    <div className="video-post-form">
      <h2 className="mb-4 text-2xl font-bold">Post a Video</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Video URL"
          className={`w-full rounded border p-2 ${isUrlValid ? '' : 'border-red-500'}`}
        />
        {!isUrlValid && (
          <p className="text-red-500">Please enter a valid video URL (e.g., .mp4, .mov).</p>
        )}
        {url &&
          isUrlValid && ( //Provide a preview player with the url's video
            <div className="my-4">
              <Player src={url} controls={true} />
            </div>
          )}
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
        <button
          type="submit"
          className="mt-2 rounded bg-blue-500 p-2 text-white"
          disabled={!isUrlValid}
        >
          Post Video
        </button>
      </form>
    </div>
  );
};

export default Upload;
