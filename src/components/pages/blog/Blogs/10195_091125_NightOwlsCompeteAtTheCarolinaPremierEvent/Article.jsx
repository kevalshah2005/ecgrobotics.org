import React from 'react'
import './Article.css'
import image1 from '/assets/Blog/10195/CPE1.png'
import image2 from '/assets/Blog/10195/CPE4.JPG'
import image3 from '/assets/Blog/10195/CPE5.png'
import image4 from '/assets/Blog/10195/CPE6.png'
import image5 from '/assets/Blog/10195/CPE2.png'

export const postData = {
  title: "Night Owls Compete at the Carolina Premier Event",
  author: "10195",
  publishDate: "09-11-2025", //MM-DD-YYYY
}

export default function Article() {
  return (
    <div className="Article-main">
      <h1>{postData.title}</h1>
      <p className = "Article-info"> Written by Hashini Karthick, FTC {postData.author}
        <br />
        Published {postData.publishDate}
      </p>
      <p className = "Article-body">
        On July 25–27, 2024, the Night Owls FTC Robotics Team competed in the Carolina Premier Tournament, facing off against teams from around the world in three days of intense competition. The event featured 15 qualifier matches and a high-stakes playoff bracket, offering students a chance to showcase their engineering skills, strategic thinking, and teamwork.
      </p>
      <img src = {image1} className = "Article-image" alt = "img1"/>
      <p className = "Article-caption">
        Drive team!
      </p>
        <p className = "Article-body">
          Throughout the event, the Night Owls delivered a strong and consistent performance in both the autonomous and tele-operated (teleop) phases. A standout moment came during their six-sample autonomous run—a major highlight of the tournament. This achievement was made possible by their innovative use of gamepad input to guide the robot to precise locations, along with camera vision technology that reduced human error by allowing the claw to rotate and align independently.
        <img src = {image2} className = "Article-image" alt = "img2"/>
         <p className = "Article-caption">
        First match of CPE!
      </p>
        With Ethan as the driver, Gunjan as the human player, and Nikhil and Shanmukh serving as driver coaches, the team secured a tenth-place finish in the qualifiers. They also set a new tournament record with an event-high score of 456 points.
        
           <img src = {image3} className = "Article-image" alt = "img3"/>
         <p className = "Article-caption">
        CPE event high score with 10195 and 19571
      </p>
      In the playoff rounds, the Night Owls allied with Infinite Turtles and advanced to the semifinals, ultimately finishing third overall. Notably, they eliminated all the international teams at the competition, using a newly added “foot” on their robot, SOAR, for strategic defensive maneuvers.
       <img src = {image4} className = "Article-image" alt = "img4"/>
         <p className = "Article-caption">
        BIONIC ROYALS about to score a golden pearl, but Infinite Turtles stops them just in time while the Night Owls aggressively score pearls
      </p>
      The Carolina Premiers were not only a competitive success but also a meaningful opportunity for growth, team bonding, and technical refinement. The Early College at Guilford’s Robotics Team looks forward to building on this momentum in the season ahead.
 <img src = {image5} className = "Article-image" alt = "img5"/>
         <p className = "Article-caption">
        The flags of the various international teams that competed in CPE
      </p>
      <p className = "Article-caption">
        From left to right: China, Mexico and Romania
      </p>
    
      <br />
       <br /> 
      </p>
    </div>
  )
}