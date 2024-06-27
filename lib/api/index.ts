import { Video, Menu, Comment } from './types.js';

type ExtractVariables<T> = T extends { variables: object } ? T['variables'] : never;

//gives menu options with their links
export async function getMenu(frag_id: string): Promise<Menu[]> {
  if (frag_id === 'next-js-frontend-header-menu') {
    return [
      { title: 'Upload', path: '/upload' },
      { title: 'Watch', path: '/' }
    ];
  }
  if (frag_id === 'next-js-frontend-footer-menu') {
    return [
      { title: 'Home', path: '/' },
      { title: 'About', path: '/about' },
      { title: 'Terms & Conditions', path: '/terms' },
      { title: 'Privacy Policy', path: '/privacy' },
      { title: 'FAQ', path: '/faq' }
    ];
  }
  return [];
}

//API calls:
export async function getVideosByUserId(id: string | undefined): Promise<Video[]> {
  const response = await fetch(
    `https://take-home-assessment-423502.uc.r.appspot.com/api/videos?user_id=${id}`,
    { cache: 'no-store' }
  );
  const data = await response.json();
  return data.videos;
}
export async function getVideoById(id: string): Promise<Video | undefined> {
  const response = await fetch(
    `https://take-home-assessment-423502.uc.r.appspot.com/api/videos/single?video_id=${id}`,
    { cache: 'no-store' }
  );
  console.log('id ' + id);
  const data = await response.json();
  return data.video;
}

export async function getHomepageVideos(): Promise<Video[]> {
  const response = await fetch(
    `https://take-home-assessment-423502.uc.r.appspot.com/api/videos?user_id=pat_feng_homepage`,
    { cache: 'no-store' }
  );
  const data = await response.json();
  return data.videos;
}
