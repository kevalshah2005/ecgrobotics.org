import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Blog.css'

import logo731 from '/assets/logo731.webp'
import logo5795 from '/assets/logo5795.webp'
import logo6183 from '/assets/logo6183.webp'
import logo10195 from '/assets/logo10195.webp'
import logo1533 from '/assets/logo1533.webp'
import logo from '/assets/logo.webp'

const teamLogos = {
  '731': logo731,
  '5795': logo5795,
  '6183': logo6183,
  '10195': logo10195,
  '1533': logo1533
}

function parseFolderName(folderName) {
  // folderName like "10195_091125_NightOwlsCompeteAtTheCarolinaPremierEvent"
  const parts = folderName.split('_')
  const author = parts[0] || 'Unknown'
  const dateStr = parts[1] || ''
  let titleSlug = parts.slice(2).join('_') || ''

  // Convert camel-case / joinedWords to spaced words (and underscores to spaces)
  titleSlug = titleSlug.replace(/_/g, ' ')
  titleSlug = titleSlug.replace(/([a-z])([A-Z])/g, '$1 $2')
  titleSlug = titleSlug.replace(/\b\w/g, c => c.toUpperCase())

  // Parse MMDDYY -> YYYY-MM-DD (assume 20YY)
  let publishDate = ''
  if (dateStr && dateStr.length === 6) {
    const mm = dateStr.slice(0, 2)
    const dd = dateStr.slice(2, 4)
    const yy = dateStr.slice(4, 6)
    const year = '20' + yy
    publishDate = `${year}-${mm}-${dd}`
  }

  return {
    author,
    publishDate,
    title: titleSlug || 'Untitled'
  }
}

export default function Blog() {
  const [posts, setPosts] = useState([])
 const navigate = useNavigate()
  // simple width calc copied from your original
  const cardWidth = '300px'

  useEffect(() => {
    // <-- IMPORTANT: relative path because Blogs is a sibling folder of this file
    const modules = import.meta.glob('./Blogs/*/Post.jsx', { eager: true })
    console.log('import.meta.glob result:', modules)

    const loaded = Object.entries(modules).map(([path, module]) => {
      // path example: '/src/components/pages/blog/Blogs/10195_091125_NightOwls.../Post.jsx'
      const folderName = path.split('/').slice(-2, -1)[0]
      console.log('found module:', path, 'folderName:', folderName, 'postData:', module.postData)

      // prefer module.postData if present, otherwise parse folder name
      let postData = module.postData || {}

      if (!postData.title || !postData.author || !postData.publishDate || !postData.thumbnail) {
        const parsed = parseFolderName(folderName)
        postData = {
          title: postData.title || parsed.title,
          author: postData.author || parsed.author,
          publishDate: postData.publishDate || parsed.publishDate || '',
          // pick provided thumbnail, otherwise the team logo by author id, otherwise default to 10195 logo
          thumbnail: postData.thumbnail || teamLogos[parsed.author] || logo
        }
      }

      return {
        Component: module.default,
        postData,
        folderName,
        path
      }
    })

    // sort newest -> oldest if publishDate exists
    loaded.sort((a, b) => {
      const da = a.postData.publishDate ? new Date(a.postData.publishDate) : new Date(0)
      const db = b.postData.publishDate ? new Date(b.postData.publishDate) : new Date(0)
      return db - da
    })

    setPosts(loaded)
  }, [])

  return (
    <div className="blogs-main">
      <h1>Welcome to the ECG Robotics Blog!</h1>
      <p className = "blogs-text">
        This is where you can find blogs from ECG Robotics, FTC 731, 5795, 6183, 10195, and FRC 1533.
      </p>

      <div className="blogs-container">
        {posts.length === 0 ? (
          <p className="no-posts">No posts found — check the browser console for debugging output.</p>
        ) : (
          posts.map((post, i) => (
            <div key={i} className="blog-card" style={{ width: cardWidth }} onClick={() => navigate(`/blog/${post.folderName}`)}>
                
                  <p className="blog-author">
                {post.postData?.author}
              </p>
              <p className = "blog-date">
                {post.postData?.publishDate}
                </p>
                 <h2 className = "blog-title">{post.postData?.title}</h2>
              {post.postData?.thumbnail && (
                <img
                  src={post.postData.thumbnail}
                  alt={post.postData.title || 'Blog thumbnail'}
                  className="blog-thumbnail"
                />
              )}
              <p className = "blog-learn-more">
                Click here to learn more!
                </p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}