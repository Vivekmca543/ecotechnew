import React from "react";
import innerbanner from '/src/assets/images/inner-banner-about.jpg';
import isocertificate from '/src/assets/images/ISOCertificate_page.jpg'
const Qualityassurance = () => {
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
                <div className="qty_policy">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3>Quality Policy</h3>
                            <div className="line"></div>
                            <p>We, ECOTECH CASTINGS INDIA PVT. LTD., are committed to achieve total customer satisfaction through prompt delivery, right quality and at competitive price.”       </p>

                            <h4>Our quality objectives are to</h4>
                            <ul className="quality-policies">
                                <li><span>&#8226;</span>Maintain customer satisfaction always</li>
                                <li><span>&#8226;</span> Reduce non-conformities</li>
                                <li><span>&#8226;</span> Maximum utilization of our resources</li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div align="center"><img src={isocertificate} className="img-responsive" /></div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Qualityassurance;