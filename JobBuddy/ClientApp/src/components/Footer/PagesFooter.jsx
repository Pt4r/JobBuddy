/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function PagesFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
        <nav>
        <ul>
          <li>
            <a href="/contact" target="_blank">About Us</a>
          </li>
          <li>
            <a href="/blog" target="_blank">Blog</a>
          </li>
        </ul>
      </nav>
        <div className="copyright">
            &copy; {1900 + new Date().getYear()}, Designed by{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Curly Brackets Team
            </a>
            . For{" "}
            <a
              href="https://www.afdemp.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              AFDEmp
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default PagesFooter;
