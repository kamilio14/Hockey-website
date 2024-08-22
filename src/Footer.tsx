import Nhl from "./pictures/nhl.jpeg";

export const Footer = () => {
  return (
    <footer className="footer">
      <img src={Nhl} className="nhl-img" />
      <div className="footer-text">
        <div className="top-footer-text">
          <h6 className="individual-text-footer"> About |</h6>
          <h6 className="individual-text-footer">Terms |</h6>
          <h6 className="individual-text-footer"> Privacy |</h6>
          <h6 className="individual-text-footer">Disclosure |</h6>
          <h6 className="individual-text-footer">Rss |</h6>
          <h6 className="individual-text-footer">iTunes |</h6>
          <h6 className="individual-text-footer">Spotify |</h6>
          <h6 className="individual-text-footer">Instagram |</h6>
          <h6 className="individual-text-footer">Store |</h6>
          <h6 className="individual-text-footer">Donate </h6>
        </div>
        <div className="button-footer-text">
          <h5 className="copyright">
            Copyright © 2013-2014 Kamil Kacer. All rights reserved
          </h5>
        </div>
      </div>
    </footer>
  );
};
