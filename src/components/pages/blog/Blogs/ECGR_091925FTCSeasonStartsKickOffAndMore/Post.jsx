import React from 'react'
import thumbnail from '/assets/Blog/ECGR/KickoffDecode1.png'

export const postData = {
  title: "FTC Season Starts! Kickoff and More",
  author: "ECGR",
  publishDate: "09-19-2025", //MM-DD-YYYY
  description: "Presentations, shooter game, good food and more!",
  thumbnail
}

export default function Post() {
  return (
    <div className="Post-main">
      <h1>{postData.title}</h1>
      <img src={postData.thumbnail} alt="thumbnail" />
      <p>By {postData.author} — {postData.publishDate}</p>
    </div>
  )
}