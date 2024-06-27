'use client';
import { useState, useEffect } from 'react';
import { Video } from 'lib/api/types';
import Player from 'next-video/player';

//Main video player on video page
export function Gallery({ video }: { video: Video }) {
  return (
    <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
      {video.video_url ? (
        <Player className="h-full w-full object-contain" src={video.video_url}></Player>
      ) : (
        <div>Loading video...</div>
      )}
    </div>
  );
}
