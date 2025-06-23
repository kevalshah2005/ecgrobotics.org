import React from "react";
import "./Contact.css";

const Contact = () => (
    <div className="contact-container">
        <h1>Contact Us</h1>
        <p>
            Have a question or need more information? Reach out to us!
        </p>
        <div className="contact-info">
            <p>
                <b>Email:</b> <a href="mailto:info@ecgrobotics.org">info@ecgrobotics.org</a>
            </p>
            <p>
                <b>Instagram:</b> <a href="https://instagram.com/ecg.robotics" target="_blank" rel="noopener noreferrer">@ecg.robotics</a>
            </p>
            <p>
                <b>Mailing Address:</b> <br />
                ECG Robotics<br />
                624D Guilford College Road<br />
                Greensboro, NC 27410
            </p>
            <p>
                <b>Team Contacts:</b><br />
                <b>FRC Team 1533:</b> <a href="mailto:frc1533@ecgrobotics.org">frc1533@ecgrobotics.org</a><br />
                <b>FTC Team 731:</b> <a href="mailto:ftc731@ecgrobotics.org">ftc731@ecgrobotics.org</a><br />
                <b>FTC Team 5795:</b> <a href="mailto:ftc5795@ecgrobotics.org">ftc5795@ecgrobotics.org</a><br />
                <b>FTC Team 6183:</b> <a href="mailto:ftc6183@ecgrobotics.org">ftc6183@ecgrobotics.org</a><br />
                <b>FTC Team 10195:</b> <a href="mailto:ftc10195@ecgrobotics.org">ftc10195@ecgrobotics.org</a>
            </p>
            <p>
                <b>Leadership Contacts:</b><br />
                <b>Parent President:</b> <a href="mailto:boardpresident@ecgrobotics.org">boardpresident@ecgrobotics.org</a><br />
                <b>Student President:</b> <a href="mailto:studentpresident@ecgrobotics.org">studentpresident@ecgrobotics.org</a><br />
            </p>
        </div>
    </div>
);

export default Contact;