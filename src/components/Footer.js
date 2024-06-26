import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillMail, AiTwotonePhone } from "react-icons/ai";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Ryo Ishiwari</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} AP</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/acepatterson"
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:donaldpunkworld@gmail.com?subject=The%20Subject&body=Hello%2C%20world!"
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
              >
                <AiFillMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="tel:14848099633"
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
              >
                <AiTwotonePhone />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://t.me/donald_punky"
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ryo-ishiwari-5862a6307/"
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
