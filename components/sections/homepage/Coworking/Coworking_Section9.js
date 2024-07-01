
import Link from "next/link";
export default function Coworking_Section9() {

    return (
        <>
            <section className="section linear-gradient-03 overflow-hidden">
                <div className="container">
                    <div className="row row-full">
                        <div className="col-lg-6">
                            <div className="spdtb pdr50">
                                <div className="heading mb32">
                                    <div className="heading-sub color-navy">Connect with us</div>
                                    <h2 className="heading-title size-l">Send us a message.</h2>
                                </div>
                                <div className="contact-boxs">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="contact-box">
                                                <Link href="/tel:1-335-670-6542" title="Call us" className="background-navy">Call us<span>1-335-670-6542</span></Link>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="contact-box">
                                                <Link href="/mailto:hello@uxper.co" title="Email us" className="background-dark">Email us<span>hello@uxper.co</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="heading">
                                    <h2 className="heading-title">Address</h2>
                                    <div className="heading-desc">
                                        <p><i className="las la-map-marker-alt" /> 2866  Oakway Lane, New York, USA</p>
                                        <p><i className="las la-map-marker-alt" /> 662 Diane Street, Los Angeles, USA</p>
                                        <p><i className="las la-map-marker-alt" /> 165 Saint Marys Avenue, New York, USA</p>
                                    </div>
                                </div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button text color-navy" title="View Full Locations">View Full Locations <i className="las la-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-full-right">
                            <iframe className="iframe-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83988669535!2d-0.2664033999507271!3d51.52873980503857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2zTHXDom4gxJDDtG4sIFbGsMahbmcgUXXhu5FjIEFuaA!5e0!3m2!1svi!2s!4v1672298826574!5m2!1svi!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}