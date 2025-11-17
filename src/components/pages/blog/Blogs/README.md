CHANGE WHAT YOU LIKE BUT DO NOT REMOVE TITLE, THUMBNAIL, AUTHOR AND PUBLISH DATE
NAME BLOG FOLDERS AS FOLLOWS:
Author_MMDDYY_TitleSeperatedLikeThis


Post.jsx:
 - Add title
 - Add author (ex. 10195, or ECG Robotics)
 - publish date (MM-DD-YYYY)
 - "description"
 - path: "Title-Seperated-Like-This"
 - thumbnail

 Article.jsx
 - Put images/other assets in your team folder. ECGR goes into the ECGRMedia folder
 - For styling, modify the Article.css file in blog
 App.jsx
 - Add import statement:
 ex. import Article2 from './components/pages/blog/Blogs/FTC_Season_Starts_Kick_Off_And_More/Article.jsx';
- Add route
ex. <!--        <Route path='/blog/FTC-Season-Starts-Kick-Off-And-More' exact element={<Article2 />} />      --> 