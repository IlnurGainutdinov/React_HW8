const Footer = () => {
  return (
    <footer className="container bgc-footer">
      <section className="container-low">
        <section className="footer__box">
          <div>
            <h2 className="footer__text-h2">© 2021 Brand All Rights Reserved.</h2>
          </div>
          <section className="footer__logo-box">
            <div className="footer__logo">
              <a href="#">
                <svg
                  className="icon"
                  width="11"
                  height="16"
                  viewBox="0 0 11 16"
                  fill="#b2b2b2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.08836 8.28L9.50686 5.61602H6.89022V3.88729C6.89022 3.15847 7.25574 2.44806 8.42765 2.44806H9.61722V0.179975C9.61722 0.179975 8.53772 0 7.50561 0C5.35073 0 3.9422 1.27593 3.9422 3.5857V5.61602H1.54688V8.28H3.9422V14.72H6.89022V8.28H9.08836Z" />
                </svg>
              </a>
            </div>
            <div className="footer__logo">
              <a href="#">
                <svg
                  className="icon"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="#b2b2b2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.4181 4.74107C14.4281 4.88319 14.4281 5.02535 14.4281 5.16747C14.4281 9.50247 11.1509 14.4974 5.16096 14.4974C3.31558 14.4974 1.60132 13.9593 0.159302 13.0253C0.421495 13.0558 0.673569 13.0659 0.94585 13.0659C2.46851 13.0659 3.8702 12.5482 4.98953 11.6649C3.5576 11.6345 2.3576 10.6903 1.94415 9.39081C2.14585 9.42125 2.34751 9.44156 2.5593 9.44156C2.85172 9.44156 3.14418 9.40094 3.41643 9.32991C1.92401 9.02531 0.80465 7.70553 0.80465 6.11163V6.07103C1.23825 6.31469 1.74249 6.46697 2.2769 6.48725C1.39959 5.89841 0.824826 4.89335 0.824826 3.75628C0.824826 3.14716 0.98614 2.58878 1.26851 2.10147C2.87187 4.09131 5.28195 5.39078 7.98443 5.53294C7.93403 5.28928 7.90376 5.0355 7.90376 4.78169C7.90376 2.97457 9.35586 1.5025 11.1609 1.5025C12.0987 1.5025 12.9457 1.89844 13.5407 2.53803C14.2768 2.39591 14.9827 2.12178 15.6079 1.74616C15.3659 2.5076 14.8516 3.14719 14.176 3.55325C14.8315 3.48222 15.4668 3.29944 16.0516 3.04566C15.608 3.69538 15.0533 4.27403 14.4181 4.74107Z" />

                  <defs>
                    <clipPath id="clip0_190_1614">
                      <rect width="15.8924" height="16" fill="white" transform="translate(0.159302)" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
            <div className="footer__logo">
              <a href="#">
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  fill="#b2b2b2"
                  width="20px"
                >
                  <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z" />
                </svg>
              </a>
            </div>
            <div className="footer__logo">
              <a href="#">
                <svg
                  className="icon"
                  width="13"
                  height="16"
                  viewBox="0 0 13 16"
                  fill="#b2b2b2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.7402 0.203125C3.55552 0.203125 0.408081 2.34063 0.408081 5.8C0.408081 8 1.63726 9.25 2.38221 9.25C2.68951 9.25 2.86643 8.3875 2.86643 8.14375C2.86643 7.85313 2.13079 7.23438 2.13079 6.025C2.13079 3.5125 4.03043 1.73125 6.48878 1.73125C8.60259 1.73125 10.167 2.94062 10.167 5.1625C10.167 6.82187 9.50585 9.93437 7.3641 9.93437C6.59121 9.93437 5.93006 9.37187 5.93006 8.56563C5.93006 7.38438 6.74951 6.24062 6.74951 5.02187C6.74951 2.95312 3.83487 3.32812 3.83487 5.82812C3.83487 6.35313 3.90006 6.93437 4.13286 7.4125C3.70451 9.26875 2.82919 12.0344 2.82919 13.9469C2.82919 14.5375 2.91299 15.1188 2.96886 15.7094C3.0744 15.8281 3.02163 15.8156 3.18304 15.7563C4.74744 13.6 4.69157 13.1781 5.39928 10.3562C5.78107 11.0875 6.76814 11.4812 7.55034 11.4812C10.8468 11.4812 12.3274 8.24688 12.3274 5.33125C12.3274 2.22813 9.66415 0.203125 6.7402 0.203125Z" />

                  <defs>
                    <clipPath id="clip0_190_1618">
                      <rect width="11.9193" height="16" fill="white" transform="translate(0.408081)" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
            <div className="footer__logo">
              <a href="#">
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  fill="#b2b2b2"
                  width="22px"
                >
                  <path d="M 17.1875 10.9375 C 9.421875 10.9375 3.125 17.234375 3.125 25 C 3.125 32.765625 9.421875 39.0625 17.1875 39.0625 C 24.953125 39.0625 31.25 32.765625 31.25 25 C 31.25 24.035156 31.144531 23.09375 30.960938 22.1875 L 30.882813 21.875 L 17.1875 21.875 L 17.1875 26.5625 L 26.5625 26.5625 C 25.816406 30.996094 21.832031 34.375 17.1875 34.375 C 12.007813 34.375 7.8125 30.179688 7.8125 25 C 7.8125 19.820313 12.007813 15.625 17.1875 15.625 C 19.53125 15.625 21.667969 16.492188 23.3125 17.914063 L 26.671875 14.625 C 24.171875 12.335938 20.84375 10.9375 17.1875 10.9375 Z M 39.0625 17.1875 L 39.0625 21.875 L 34.375 21.875 L 34.375 25 L 39.0625 25 L 39.0625 29.6875 L 42.1875 29.6875 L 42.1875 25 L 46.875 25 L 46.875 21.875 L 42.1875 21.875 L 42.1875 17.1875 Z" />
                </svg>
              </a>
            </div>
          </section>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
