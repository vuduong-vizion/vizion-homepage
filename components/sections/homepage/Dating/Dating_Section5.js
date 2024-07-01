
import Link from "next/link";
export default function Dating_Section5() {
    return (
        <>

            <section className="section spdb">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="spdtb pdr50">
                                <div className="images layout-10">
                                    <div className="inner">
                                        <svg width={460} height={460} xmlns="http://www.w3.org/2000/svg">
                                            <circle cx={250} cy={285} r={230} transform="translate(-20 -55)" fill="var(--sala-shade-background, $shade_background)" fillRule="evenodd" />
                                        </svg>
                                        <img className="img11 wow animate__animated   animate__fadeInUp" src="/assets/images/dating-11.png" alt="Banner" />
                                        <img className="img12 wow animate__animated   animate__fadeInUp" src="/assets/images/dating-12.png" alt="Banner" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pdl50 pdr80">
                                <div className="heading mb24">
                                    <div className="heading-sub color-navy">FEATURE three</div>
                                    <h2 className="heading-title">Features that help you build better.</h2>
                                    <div className="heading-desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                </div>
                                <div className="button-wrap mt32"><Link href="/contact-01" className="button text color-navy" title="Learn More">Learn More <i className="las la-long-arrow-alt-right" /></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}