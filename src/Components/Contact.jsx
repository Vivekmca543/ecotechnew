import React from "react";
import innerbanner from '/src/assets/images/inner-banner-about.jpg';
const Contact = () => {
    return (
        <>
            <div className="inner-banner-about" style={{
                backgroundImage: `url(${innerbanner})`,
              }}>
                <div className="container">
                    <div className="col-lg-12">
                        <h1>Comprehensive Solution For All Types Of Machined Components</h1>
                    </div>
                </div>
            </div>

            <div className="inner-content-bg">
                <div className="container">
                    <div className="col-lg-12">
                        <h1 className="m-3">Contact Us</h1>

                        <div className="contact">


                            <div className=" col-sm-12 col-xs-12 col-lg-4 bodr contact_hgt">
                                <div className="call">
                                    <div className="pull-right mob_ico_cont">
                                        <p>Phone : 0422-2248913, 4393037<br />
                                            <span className="float-left email-sec">Mobile : </span>  <span className="float-left email-sec"> +91 - 96778 33499 <br />
                                                +91 90035 97798</span></p>
                                        <div className="float-left">
                                            <p><span className="float-left email-sec">Email : </span>
                                                <span className="float-left email-sec"> &nbsp;info@ecotechcastings.in, <br />
                                                    &nbsp;sales@ecotechcastings.in</span></p>
                                        </div>

                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                            <div className=" col-sm-12 col-xs-12 col-lg-4 bodr contact_hgt">
                                <div className="address">
                                    {/* <div className="pull-left mob_ico"><img src="images/ico_location.png" className="img-responsive"></div> */}
                                    <div className="pull-left mob_ico_cont">
                                        <p><strong>Machine Shop :</strong><br />
                                            4/396, Maddampalayam,<br /> Bilichi PO,<br /> Coimbatore - 641 019
                                        </p>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                            <div className=" col-sm-12 col-xs-12 col-lg-4 contact_hgt address-eco">
                                <div className="address">
                                    {/* <!-- <div className="pull-left mob_ico"><img src="images/ico_location.png" className="img-responsive"></div> --> */}
                                    <div className="pull-left mob_ico_cont">
                                        <p><strong>Office :</strong><br />
                                            1057, Jaya Enclave, 3rd Floor,<br /> Avinashi Road,<br /> Coimbatore - 641 018
                                        </p>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="map">
                {/* <iframe src="" style="border:0;" ></iframe> */}
                <iframe
                    title="Google Map" width="100%" height="450" frameborder="0" allowfullscreen=""
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15665.693021425814!2d76.96116554284252!3d11.006836496475144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b1da3142c5%3A0x64fae37555ac292d!2sEco%20Tech%20Castings%20India%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1720250580337!5m2!1sen!2sin"

                ></iframe>
            </div>

        </>
    )
}
export default Contact;