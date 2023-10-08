import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { FaHackerrank } from "react-icons/fa";
import { SiHackerearth, SiLeetcode } from "react-icons/si";
import { StyledContact } from "./Contact.styled";

const Contact = () => {
  const formData = useRef<any>();

  const handleMailClick = () => {
    // Replace 'recipient@example.com', 'Subject', and 'Body' with your desired email details.
    const emailAddress = "sushmashaw801@gmail.com";
    const emailSubject = "Subject";
    const emailBody = "Body";

    // Create a mailto link with the specified parameters.
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Open the user's default email client.
    window.location.href = mailtoLink;
  };

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_in2zzml",
        "template_pcxi3if",
        formData.current,
        "qwVVGYKg0r-u6-ezV"
      )
      .then(
        () => {
          alert("Message Successfully sent!");
          window.location.reload();
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <StyledContact>
      <div className="left-container">
        <div className="contact-details">
          <h1>Contact me</h1>
          <span>
            I am interested in opportunities - especially on ambitious or large
            projects. However, if you have any other requests or questions,
            don't hesitate to contact me using below form either.
          </span>
        </div>
        <form ref={formData} onSubmit={sendEmail}>
          <h2>Fill the form to connect me</h2>
          <div className="form-container">
            <div className="row-container">
              <TextField
                placeholder="Full Name"
                label="Full Name"
                sx={{ width: "45%" }}
                name="name"
              />
              <TextField
                placeholder="Email"
                label="E-mail"
                sx={{ width: "45%" }}
                name="email"
              />
            </div>

            <div className="row-container">
              <TextField
                placeholder="Subject"
                label="Subject"
                sx={{ width: "45%" }}
                name="subject"
              />
              <TextField
                placeholder="Message"
                label="Message"
                sx={{ width: "45%" }}
                name="message"
              />
            </div>

            <input type="submit" value="Send" className="flat-button" />
          </div>
        </form>
      </div>
      <div className="flex flex-col w-1/6 ml-44">
        <Tooltip title="github.com/sushma801">
          <IconButton
            onClick={() => window.open("https://github.com/sushma801")}
          >
            <AiFillGithub
              style={{
                color: "#181515",
              }}
            />
          </IconButton>
        </Tooltip>

        <Tooltip title="sushma-kumari-shaw-5b384817a/">
          <IconButton
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/sushma-kumari-shaw-5b384817a/"
              )
            }
          >
            <AiFillLinkedin
              style={{
                color: "#0177B5",
              }}
            />
          </IconButton>
        </Tooltip>

        <Tooltip title="sushmashaw801@gmail.com">
          {/* window.open("https://mail.google.com/mail/") */}
          <IconButton onClick={handleMailClick}>
            <AiOutlineMail
              style={{
                color: "#DE5347",
              }}
            />
          </IconButton>
        </Tooltip>

        <Tooltip title="hackerrank.com/sushmashaw801">
          <IconButton
            onClick={() =>
              window.open("https://www.hackerrank.com/sushmashaw801")
            }
          >
            <FaHackerrank
              style={{
                color: "#2DB85D",
              }}
            />
          </IconButton>
        </Tooltip>

        <Tooltip title="hackerearth.com/@sushmakumari3">
          <IconButton
            onClick={() =>
              window.open("https://www.hackerearth.com/@sushmakumari3")
            }
          >
            <SiHackerearth
              style={{
                color: "#2B3150",
              }}
            />
          </IconButton>
        </Tooltip>

        <Tooltip title="leetcode.com/sushma801/">
          <IconButton
            onClick={() => window.open("https://leetcode.com/sushma801/")}
          >
            <SiLeetcode
              style={{
                color: "#E39E3D",
              }}
            />
          </IconButton>
        </Tooltip>
      </div>
    </StyledContact>
  );
};

export default Contact;
