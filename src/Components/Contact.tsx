import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { FaHackerrank } from "react-icons/fa";
import { SiHackerearth, SiLeetcode } from "react-icons/si";

const Contact = () => {
  const formData = useRef<any>();

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
    <div className="flex flex-row ">
      <div className="flex flex-col w-5/6">
        <div className="text-zone">
          <h1>Contact me</h1>
          <p className="text-xs">
            I am interested in opportunities - especially on ambitious or large
            projects. However, if you have any other requests or questions,
            don't hesitate to contact me using below form either.
          </p>
        </div>
        <form className="ml-8" ref={formData} onSubmit={sendEmail}>
          <h2 className="mt-2 mb-2">Fill the form to connect me</h2>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
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

            <div className="flex flex-row justify-between mt-4">
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
        <Tooltip title="https://github.com/sushma801">
          <IconButton>
            <AiFillGithub
              style={{
                color: "#181515",
              }}
            />
          </IconButton>
        </Tooltip>

        <Tooltip title="https://www.linkedin.com/in/sushma-kumari-shaw-5b384817a/">
          <IconButton>
            <AiFillLinkedin
              style={{
                color: "#0177B5",
              }}
            />
          </IconButton>
        </Tooltip>

        <Tooltip title="sushmashaw801@gmail.com">
          <IconButton>
            <AiOutlineMail
              style={{
                color: "#DE5347",
              }}
            />
          </IconButton>
        </Tooltip>

        <Tooltip title="hackerrank.com/sushmashaw801">
          <IconButton>
            <FaHackerrank
              style={{
                color: "#2DB85D",
              }}
            />
          </IconButton>
        </Tooltip>

        <Tooltip title="hackerearth.com/@sushmakumari3">
          <IconButton>
            <SiHackerearth
              style={{
                color: "#2B3150",
              }}
            />
          </IconButton>
        </Tooltip>

        <Tooltip title="leetcode.com/sushma801/">
          <IconButton>
            <SiLeetcode
              style={{
                color: "#E39E3D",
              }}
            />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default Contact;
