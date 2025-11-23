import React from 'react'
import thumbnail from '/assets/Blog/ECGR/RI5WThumbnail.png'

export const postData = {
  title: "Robot In Five Weeks Scrimmage",
  author: "ECGR",
  publishDate: "10-24-2025", //MM-DD-YYYY
  description: "FTC teams compeated with robots they made in five weeks!",
  path: "Robot-In-Five-Weeks-Scrimmage",
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