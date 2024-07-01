import Link from "next/link";
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
export default function Shopify_App_Section1() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="section background-grey opt120 spdb">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="heading mb32">
                                <h2 className="heading-title size-xl">
                                    Ready for <br /> more <span>Profits</span>
                                </h2>
                                <div className="heading-desc size-l">
                                    Instantly increase sales up to 20% <br /> with one click upsell,
                                    cross sell
                                </div>
                            </div>
                            <div className="flex flex-wrap flex-align-c">
                                <div className="mr16 xs-mb10">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={158}
                                        height={45}
                                        viewBox="0 0 158 45"
                                        className="injected-svg attachment-full size-full"
                                    >
                                        <g fill="none" fillRule="evenodd">
                                            <g fillRule="nonzero">
                                                <g>
                                                    <g>
                                                        <path
                                                            fill="#95BF47"
                                                            d="M34.158 8.472c-.03-.222-.225-.345-.387-.358-.16-.014-3.307-.061-3.307-.061s-2.631-2.544-2.891-2.803c-.26-.259-.767-.18-.965-.122l-1.322.407c-.138-.446-.342-.996-.632-1.547-.937-1.78-2.309-2.721-3.967-2.724h-.006c-.115 0-.229.011-.344.021-.05-.059-.098-.116-.15-.172C19.465.343 18.54-.031 17.43.002c-2.14.061-4.273 1.6-6.002 4.335-1.216 1.924-2.142 4.34-2.404 6.212l-4.215 1.3c-1.241.388-1.28.426-1.442 1.59C3.247 14.32 0 39.316 0 39.316L27.208 44 39 41.081S34.189 8.695 34.158 8.472zM23.924 5.955l-2.111.651c-.016-1.08-.145-2.58-.65-3.878 1.625.306 2.424 2.136 2.761 3.227zm-3.535 1.09c-1.425.44-2.981.92-4.542 1.4.439-1.673 1.271-3.34 2.294-4.432.38-.406.912-.86 1.542-1.118.592 1.23.721 2.973.706 4.15zM17.473 1.42c.502-.01.925.1 1.287.336-.579.3-1.138.729-1.662 1.29-1.36 1.452-2.402 3.707-2.818 5.882l-3.73 1.15c.736-3.424 3.618-8.562 6.923-8.658z"
                                                            transform="translate(-135.000000, -467.000000) translate(134.000000, 221.000000) translate(1.000000, 246.000000)"
                                                        />
                                                        <path
                                                            fill="#5E8E3E"
                                                            d="M33.679 8.038c-.164-.014-3.365-.062-3.365-.062s-2.678-2.549-2.942-2.808C27.273 5.07 27.14 5.02 27 5l.001 39L39 41.076S34.104 8.62 34.073 8.397c-.031-.222-.23-.346-.394-.36z"
                                                            transform="translate(-135.000000, -467.000000) translate(134.000000, 221.000000) translate(1.000000, 246.000000)"
                                                        />
                                                        <path
                                                            fill="#FFF"
                                                            d="M21 14.468l-1.326 5.172s-1.48-.702-3.233-.587c-2.572.17-2.6 1.86-2.573 2.284.14 2.313 5.978 2.818 6.306 8.235.257 4.262-2.17 7.177-5.666 7.407C10.31 37.255 8 34.675 8 34.675l.89-3.942s2.325 1.829 4.187 1.706c1.216-.08 1.65-1.11 1.606-1.84-.182-3.017-4.936-2.838-5.237-7.795-.253-4.172 2.376-8.399 8.176-8.78 2.235-.15 3.378.444 3.378.444z"
                                                            transform="translate(-135.000000, -467.000000) translate(134.000000, 221.000000) translate(1.000000, 246.000000)"
                                                        />
                                                        <path
                                                            fill="var(--sala-neutral-dark, $neutral_dark)"
                                                            d="M54.894 25.072c-1.386-.747-2.098-1.378-2.098-2.244 0-1.103.99-1.811 2.534-1.811 1.798 0 3.404.748 3.404.748L60 17.906S58.836 17 55.408 17c-4.769 0-8.074 2.717-8.074 6.536 0 2.166 1.543 3.82 3.602 5 1.663.944 2.257 1.614 2.257 2.598 0 1.023-.832 1.85-2.375 1.85-2.3 0-4.472-1.181-4.472-1.181L45 35.66S47.007 37 50.383 37c4.909 0 8.432-2.402 8.432-6.733-.002-2.32-1.782-3.975-3.921-5.195zM74.526 16.851c-2.415 0-4.315 1.11-5.778 2.795l-.08-.038L70.766 9h-5.463L60 35.999h5.462l1.82-9.23c.713-3.484 2.573-5.628 4.315-5.628 1.226 0 1.702.804 1.702 1.954 0 .727-.08 1.608-.237 2.336L71.004 36h5.463l2.136-10.914c.238-1.15.397-2.528.397-3.447-.002-2.988-1.625-4.788-4.474-4.788zM90.73 17C84.274 17 80 22.883 80 29.432 80 33.628 82.565 37 87.387 37 93.723 37 98 31.275 98 24.568 98 20.686 95.745 17 90.73 17zm-2.644 15.845c-1.828 0-2.605-1.569-2.605-3.53 0-3.098 1.594-8.157 4.51-8.157 1.905 0 2.526 1.647 2.526 3.255 0 3.333-1.592 8.432-4.431 8.432zM111.621 17c-3.529 0-5.531 3.181-5.531 3.181h-.075l.303-2.87h-4.621c-.227 1.94-.645 4.887-1.06 7.099L97 44h5.228l1.438-7.914h.115s1.072.698 3.068.698c6.136 0 10.151-6.44 10.151-12.958 0-3.606-1.554-6.826-5.379-6.826zm-5 15.75c-1.357 0-2.16-.776-2.16-.776l.871-5.004c.607-3.336 2.31-5.548 4.13-5.548 1.59 0 2.083 1.513 2.083 2.949 0 3.453-2.008 8.38-4.924 8.38zM124.202 9C122.42 9 121 10.41 121 12.221c0 1.651 1.054 2.779 2.635 2.779h.08c1.745 0 3.244-1.168 3.285-3.221 0-1.61-1.095-2.779-2.798-2.779zM117 36L122.352 36 126 17 120.607 17zM139.598 17.811h-3.722l.194-.9c.31-1.841 1.396-3.486 3.179-3.486.951 0 1.704.274 1.704.274L142 9.469S141.07 9 139.092 9c-1.9 0-3.797.548-5.232 1.801-1.822 1.566-2.675 3.837-3.101 6.11l-.154.9h-2.482l-.775 4.073h2.482L127 37h5.35l2.83-15.116h3.682l.736-4.073zM152.494 17.001s-3.3 8.56-4.78 13.231h-.078c-.1-1.504-1.3-13.23-1.3-13.23h-5.546l3.176 17.68c.077.393.038.63-.115.906-.613 1.22-1.645 2.402-2.869 3.269-.994.748-2.103 1.22-2.982 1.535L139.453 45c1.071-.236 3.288-1.142 5.162-2.954 2.41-2.323 4.627-5.907 6.922-10.79L158 17h-5.506v.001z"
                                                            transform="translate(-135.000000, -467.000000) translate(134.000000, 221.000000) translate(1.000000, 246.000000)"
                                                        />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div className="badge-review">
                                    <div className="star">
                                        <span style={{ width: "100%" }} />
                                    </div>
                                    <div className="total-review">5.0 (+645 reviews)</div>
                                </div>
                            </div>
                            <div className="button-wrap popup-wrapper mt32">
                                <Link
                                    href="/contact-01"
                                    className="button fullfield xs-mb10"
                                    title="Get Started"
                                >
                                    Get Started
                                    <i className="las la-long-arrow-alt-right" />
                                </Link>
                                <Link
                                    href="/"
                                    className="button underline icon-popup"
                                    onClick={() => setOpen(true)}
                                >
                                    <i className="las la-play-circle" />
                                    Watch the Video
                                </Link>
                            </div>
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
                        </div>
                        <div className="col-lg-6">
                            <div className="images mt32 layout-02">
                                <div className="inner">
                                    <img
                                        className="img01 wow animate__animated   animate__fadeInUp"
                                        src="/assets/images/hsa-01.png"
                                        alt="Image"
                                    />
                                    <img
                                        className="img08 wow animate__animated   animate__fadeInLeft"
                                        src="/assets/images/hsa-02.png"
                                        alt="Image"
                                    />
                                    <img
                                        className="img09 wow animate__animated   animate__fadeInRight"
                                        src="/assets/images/hsa-03.png"
                                        alt="Image"
                                    />
                                    <img
                                        className="img10   img-jump"
                                        src="/assets/images/hsa-04.png"
                                        alt="Image"
                                    />
                                    <img
                                        className="img11   img-jump"
                                        src="/assets/images/hsa-05.png"
                                        alt="Image"
                                    />
                                    <img
                                        className="img12   img-jump"
                                        src="/assets/images/hsa-06.png"
                                        alt="Image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}