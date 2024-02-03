const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/blogs">Blogs</a>
        </li>
        <li>
          <a href="/login">Account</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
    <p className="developer-credits">
      Developer{" "}
      <a href="https://github.com/SivaJegadeesh">Siva Jegadeesh C B</a>
      <span className="social-icons">
        <a
          href="https://github.com/SivaJegadeesh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/siva-jegadeesh-c-b-b343a4233/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </span>
    </p>
  </footer>
);

export default Footer;
