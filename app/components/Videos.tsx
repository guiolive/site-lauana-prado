'use client'

import { useState } from 'react'

type Video = {
  yt: string
  tag: string
  cover: string
  title: React.ReactNode
  info: React.ReactNode
}

const videos: Video[] = [
  {
    yt: 'dQw4w9WgXcQ',
    tag: 'Clipe oficial',
    cover:
      'https://images.unsplash.com/photo-1499415479124-43c32433a620?w=1200&q=85&fm=webp',
    title: (
      <>
        Cobaia <em className="it">(clipe oficial)</em>
      </>
    ),
    info: (
      <>
        <span className="tnum">04:11</span> · <span className="tnum">12M</span> views
      </>
    ),
  },
  {
    yt: 'dQw4w9WgXcQ',
    tag: 'Ao vivo',
    cover:
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&q=85&fm=webp',
    title: 'Tô Solto · Espelho ao vivo',
    info: (
      <>
        <span className="tnum">03:42</span> · <span className="tnum">3.4M</span>
      </>
    ),
  },
  {
    yt: 'dQw4w9WgXcQ',
    tag: 'Acústico',
    cover:
      'https://images.unsplash.com/photo-1483721310020-03333e577078?w=1200&q=85&fm=webp',
    title: 'Pinga em Mim · acústico',
    info: (
      <>
        <span className="tnum">03:28</span> · <span className="tnum">1.8M</span>
      </>
    ),
  },
  {
    yt: 'dQw4w9WgXcQ',
    tag: 'Bastidor',
    cover:
      'https://images.unsplash.com/photo-1574391884720-bbc049ec09ad?w=1200&q=85&fm=webp',
    title: 'Estrada · making of',
    info: (
      <>
        <span className="tnum">06:14</span> · <span className="tnum">820K</span>
      </>
    ),
  },
  {
    yt: 'dQw4w9WgXcQ',
    tag: 'Documental',
    cover:
      'https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=1200&q=85&fm=webp',
    title: 'Origens · documental',
    info: (
      <>
        <span className="tnum">22:40</span> · <span className="tnum">410K</span>
      </>
    ),
  },
]

function PlayIcon() {
  return (
    <svg width="22" height="26" viewBox="0 0 14 16" fill="currentColor">
      <path d="M0 0L14 8L0 16Z" />
    </svg>
  )
}

function VideoCard({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false)
  return (
    <article className="video-card" role="listitem">
      <div className="video-frame">
        <span className="video-tag">{video.tag}</span>
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.yt}?autoplay=1&rel=0`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={typeof video.title === 'string' ? video.title : 'Vídeo'}
          />
        ) : (
          <button
            className="video-frame-cover"
            aria-label="Tocar vídeo"
            onClick={() => setPlaying(true)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="video-cover-img" src={video.cover} alt="" />
            <span className="play">
              <PlayIcon />
            </span>
          </button>
        )}
      </div>
      <div className="video-meta">
        <h3 className="video-title">{video.title}</h3>
        <span className="video-info">{video.info}</span>
      </div>
    </article>
  )
}

export default function Videos() {
  return (
    <section className="videos" id="videos">
      <div className="section-mark">
        <span>§03 · Visualidade</span>
      </div>

      <header className="section-head">
        <h2 className="section-title">
          No <em>vídeo</em>.
        </h2>
        <p className="section-aside">
          Clipes oficiais, performances ao vivo e bastidores. Fonte: canal oficial
          no YouTube.
        </p>
      </header>

      <div className="videos-strip" role="list">
        {videos.map((v, i) => (
          <VideoCard key={i} video={v} />
        ))}
      </div>
    </section>
  )
}
