import React from 'react'
import './Article.css'
import image1 from '/assets/Blog/ECGR/KickoffDecode2.png'
import image2 from '/assets/Blog/ECGR/KickoffDecode3.png'
import image3 from '/assets/Blog/ECGR/KickoffDecode4.png'
import image4 from '/assets/Blog/ECGR/KickoffDecode5.png'
import image5 from '/assets/Blog/ECGR/KickoffDecode6.png'
import image6 from '/assets/Blog/ECGR/KickoffDecode7.png'
import image7 from '/assets/Blog/ECGR/KickoffDecode8.png'
import image8 from '/assets/Blog/ECGR/KickoffDecode9.png'
import image9 from '/assets/Blog/ECGR/KickoffDecode10.png'
import image10 from '/assets/Blog/ECGR/KickoffDecode11.png'

export const postData = {
  title: "FTC Season Starts! Kickoff and More",
  author: "ECGR",
  publishDate: "09-19-2025", //MM-DD-YYYY
}

export default function Article() {
  return (
    <div className="Article-main">
      <h1>{postData.title}</h1>
      <p className = "Article-info"> Written by Jessie Stinson and Ethan Kim, {postData.author}
        <br />
        Published {postData.publishDate}
      </p>
      <p className = "Article-body">
On September 6, just before 8:00 am, FTC 731, 5795, 6183, and 10195 went to A&T. Once everybody was admitted, the members split into different rooms to view the opening presentation. During the opening presentation an archaeologist spoke about the importance of archaeology and the need for STEM in archaeology, leading to the reveal of this seasons theme: FIRST AGE.
      </p>
      <img src = {image1} className = "Article-image" alt = "img1"/>
      <p className = "Article-caption">
        5795 Back to the Drawing Board! From left to right accordingly:
        <br />
        Bharadwaj, Nick, Ohm, Ishaan, Suhaan
      </p>
        <p className = "Article-body">
After the opening presentation, people split into their workshops. In these workshops, a team (or more) present and explain a robotics topic.        <img src = {image2} className = "Article-image" alt = "img2"/>
         <p className = "Article-caption">
        People watching a presentation in a workshop
      </p>
<br />
731 presented on Marketing Basics
        
           <img src = {image3} className = "Article-image" alt = "img3"/>
         <p className = "Article-caption">
        Patra - Captain 731 LEFT. Nikunj - Vice Captain 731 RIGHT
      </p>
5795 & 21351 Presented on 3D Printing and Manufacturing for FTC
       <img src = {image4} className = "Article-image" alt = "img4"/>
         <p className = "Article-caption">
          Cybotz Members LEFT. Achint 5795 RIGHT
                </p>
5795 & 10195 presented an Overview of OpenCV & Camera Vision
 <img src = {image5} className = "Article-image" alt = "img5"/>
         <p className = "Article-caption">
        From left to right accordingly:
        <br />
        Suhaan - Captain 5795. Gunjan - Programming 10195. Ethan - Captain 10195. Dev - Programming 5795
      </p>

10195 presented on Introduction to FTC Wiring
 <img src = {image6} className = "Article-image" alt = "img5"/>
         <p className = "Article-caption">
        From left to right accordingly:
        <br />
        Jessie - Mechanical. Nikhil - President of ECGR + Lead Mechanical 10195. Aryan - Mechanical
      </p>
<br /><br />
      After the workshops and a twenty minute break, it was time for the game reveal!
 <img src = {image7} className = "Article-image" alt = "img5"/>
         <p className = "Article-caption">
        Members focusing on the game reveal. From left to right accordingly:
        <br />
        Nikhil - President of ECGR + Lead Mechanical 10195. Shanmukh - Captain 10195. Sahaij - Vice President of ECGR + Programming 1533. Ethan - Captain 10195
      </p>
<br />
<br />
      Everybody was shocked! DECODE turned out to be a very interesting game. For the last few years, each robot game has been a pick and place type game, where a robot would intake some piece and place it somewhere else. DECODE is different, its a shooter game.
 <img src = {image8} className = "Article-image" alt = "img5"/>
         <p className = "Article-caption">
        DECODE field
      </p>
<br />
      
After the initial shock and awe of the game reveal, FTC 731, 5795 and 6183 decided to meet up at Nazareths to eat and help fuel ideas.

 <img src = {image9} className = "Article-image" alt = "img5"/>
         <p className = "Article-caption">
        Team 10195 + Saihej
      </p>
<br />
<br />
Before long, break time was over and it was back to work. All four FTC teams in ECGR had signed up for the Robot in 5 Weeks (RI5W) Scrimmage—an event held just five weeks after kickoff. With such a tight deadline, teams don’t have the luxury of extended design phases or intricate custom parts. Instead, the scrimmage pushes everyone to move quickly, giving rookie members a chance to gain hands-on experience while helping the teams shift into “game mode” much earlier in the season.
<br />
 <img src = {image10} className = "Article-image" alt = "img5"/>
         <p className = "Article-caption">
        Drivetrain built by 6183 for robot in 5 weeks
        <br />
        <br />
      </p>
    
      </p>
    </div>
  )
}