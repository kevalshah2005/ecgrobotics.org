import React from 'react'
import thumbnail from '/assets/Blog/10195/CPE4.JPG'

export const postData = {
  title: "Night Owls Compete at the Carolina Premier Event",
  author: "FTC 10195",
  publishDate: "09-11-2025", //MM-DD-YYYY
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