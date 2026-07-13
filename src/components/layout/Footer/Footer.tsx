import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <h3>🌴 Kerala Trip 2026</h3>
          <p>11 September – 21 September 2026</p>
        </div>

        <div className="footer__center">
          <p>Built with ❤️ by Akshay</p>
        </div>

        <div className="footer__right">
          <p>© {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
