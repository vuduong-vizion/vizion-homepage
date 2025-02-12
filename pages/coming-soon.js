import Link from 'next/link';
export default function ComingSoon() {
  return (
    <>
      <div className="spdtb">
        <div className="container">
          <div className="row flex-align-c">
            <div className="col-lg-6">
              <div className="coming-left pdr80">
                <div className="logo">
                  <Link href="/">
                    <svg
                      width="100px"
                      height="28px"
                      viewBox="0 0 100 28"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <title>logo/black</title>
                      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <g transform="translate(-130.000000, -26.000000)" fillRule="nonzero">
                          <g transform="translate(130.000000, 26.000000)">
                            <path
                              d="M9.386,27.816 C14.136,27.816 18.392,25.118 18.582,20.406 C18.772,17.328 17.328,14.06 11.438,12.426 L8.208,11.476 C5.396,10.792 5.092,9.234 5.092,8.474 C5.092,6.612 6.84,5.396 9.006,5.396 C11.438,5.396 12.92,6.726 12.92,8.816 L17.784,8.816 C17.784,3.952 14.022,0.912 9.082,0.912 C4.256,0.912 0.266,3.99 0.266,8.588 C0.266,10.868 1.178,14.25 6.878,15.884 L10.108,16.72 C12.616,17.404 13.832,18.582 13.718,20.292 C13.604,22.078 12.008,23.446 9.386,23.446 C6.574,23.446 4.978,21.698 4.864,19.76 L0,19.76 C0,24.244 3.8,27.816 9.386,27.816 Z M30.742,27.74 C32.452,27.74 35.15,26.942 36.252,25.118 L36.252,27.398 L40.888,27.398 L40.888,9.652 L36.252,9.652 L36.252,11.856 C34.922,9.918 32.376,9.272 30.742,9.272 C26.068,9.272 21.698,12.844 21.698,18.506 C21.698,24.168 26.068,27.74 30.742,27.74 Z M31.388,23.294 C28.804,23.294 26.486,21.394 26.486,18.506 C26.486,15.618 28.804,13.718 31.388,13.718 C33.82,13.718 36.252,15.466 36.252,18.506 C36.252,21.546 33.934,23.294 31.388,23.294 Z M50.768,27.398 L50.768,0 L46.132,0 L46.132,27.398 L50.768,27.398 Z M63.954,27.74 C65.664,27.74 68.362,26.942 69.464,25.118 L69.464,27.398 L74.1,27.398 L74.1,9.652 L69.464,9.652 L69.464,11.856 C68.134,9.918 65.588,9.272 63.954,9.272 C59.28,9.272 54.91,12.844 54.91,18.506 C54.91,24.168 59.28,27.74 63.954,27.74 Z M64.6,23.294 C62.016,23.294 59.698,21.394 59.698,18.506 C59.698,15.618 62.016,13.718 64.6,13.718 C67.032,13.718 69.464,15.466 69.464,18.506 C69.464,21.546 67.146,23.294 64.6,23.294 Z"
                              fill="#111111"
                            />
                            <g transform="translate(84.000000, 0.000000)" fill="#0057FC">
                              <polygon points="1.88140704 16 13.319933 4.56530476 13.319933 15.1051574 16 15.0569324 16 0 0.940703518 0 0.940703518 2.63362358 11.438526 2.68184863 0 14.1165439" />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Link>
                </div>
                <div className="heading">
                  <h2 className="heading-title size-xl">We are coming here soon</h2>
                  <div className="heading-desc">We are preparing something amazing and exciting for you.</div>
                </div>
                <form action="#">
                  <div className="field-input">
                    <input type="email" name="email" placeholder="Enter your email" />
                  </div>
                  <div className="field-submit">
                    <input type="submit" defaultValue="Submit" name="submit" />
                  </div>
                </form>
                <div className="socials">
                  <Link href="/" title="facebook">
                    <i className="lab la-facebook-f" />
                  </Link>
                  <Link href="/" title="twitter">
                    <i className="lab la-twitter" />
                  </Link>
                  <Link href="/" title="instagram">
                    <i className="lab la-instagram" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="coming-right lg-mt32">
                <img src="/assets/images/coming-soon.svg" alt="Coming Soon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
