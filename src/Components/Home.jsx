import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slideone from '/src/assets/images/ecotechSlide1.jpg';
import slidetwo from '/src/assets/images/ecotechSlide2.jpg';
import slidethre from '/src/assets/images/ecotechSlide3.jpg';
import forgings9 from '/src/assets/images/forgings/forgings (9).jpg';
import steelcastings21 from '/src/assets/images/steelcastings/steelcastings (21).jpeg';
import investment5 from '/src/assets/images/investment/investment (5).jpeg';
import steelcastings5 from '/src/assets/images/steelcastings/steelcastings (5).jpeg';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
  };
 
return(
<> 
   <Slider {...settings} className="banner_bg">
      <div className="fade_slider">
        <img src={slideone} alt="Slide 1" className="slide-img"/>
        <div className="banner_txt">                
                 <div className="large_txt">
                   <span>Welcome to</span><br/> 
                     <span>ECOTECH CASTINGS INDIA PRIVATE LIMITED</span><br/>
                       <span>we are ISO 9001:2015 Certified suppliers of valve internals to all global valve manufacturers</span>
                 </div>          </div>
      </div>
    <div className="fade_slider">
        <img src={slidetwo} alt="Slide 2" className="slide-img"/>
        <div className="banner_txt">                
                <div className="large_txt">
                  <span>Welcome to</span><br/> 
                    <span>ECOTECH CASTINGS INDIA PRIVATE LIMITED</span><br />
                    <span> COMPREHENSIVE SOLUTION FOR ALL TYPES OF MACHINED COMPONENTS</span>
                  </div>
              </div>
      </div>
      <div className="fade_slider">
        <img src={slidethre} alt="Slide 3" className="slide-img"/>
       <div class="banner_txt">                
                <div class="large_txt">   <span>Welcome to</span><br /> 
                  <span>ECOTECH CASTINGS INDIA PRIVATE LIMITED</span><br />
                    <span>we are ISO 9001:2015 Certified suppliers of valve internals to all global valve manufacturers</span>  
                    </div>          </div>
      </div>
    </Slider>

        <div className="inner-content-bg">
    <div className="container">
      <div className="col-lg-12">
        <h1>About us</h1>
            <div className="row">
            <div className="col-lg-12">
            <p>Ecotech Castings India Private Limited was started in the year 2003 in Coimbatore, Tamilnadu and is a sister concern of Peekay Group (Peekay Steel Castings Pvt. Ltd., Calicut, Kerala) which was established in the year 1942</p>
            <p>Our focus is to create market/supply of all precision components in castings, forgings, roundbars, fabrication and internals in different material grades to all kinds of global valve manufacturers at competitive price and quality.</p> 
              </div>
            </div>
         </div> 
      <div className="col-lg-12" id="ecotech-imagecontainer">
        <div id="ecotech-popup" className="ecotech-popup">
          <div className="ecotech-popup-content">
              <span id="ecotech-closePopup" className="ecotech-close">×</span>
              <div className="popup-dimensions">
              <h3>Control Valve Seat Ring</h3>
              <ul>
                <li><span>Material </span><span>Ferrous, Non Ferrous</span></li>
                <li><span>Dimension (upto) inch</span><span>1/2" - 30"</span></li>
              </ul>
              </div>  
          </div>
      </div>

      <div>
        <h1 className="mb-3">Our Products</h1>
            <div className="prod_cont">
              <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="prod_cont_inner">
                      <div><img src={forgings9} className="img-responsive" /></div>
                      <div className="product-heads">BODY</div>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="prod_cont_inner">
                      <div><img src={steelcastings21} className="img-responsive"/></div>
                       <div className="product-heads">BONNET</div>
                  </div>
              </div>
             
              <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="prod_cont_inner">
                      <div><img src={investment5} className="img-responsive" /></div>
                       <div className="product-heads">DISC</div>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="prod_cont_inner">
                      <div><img src={steelcastings5} className="img-responsive" /></div>
                       <div className="product-heads">BODY</div>
                  </div>
              </div>
            </div>
          </div>
          <div className="view-more-btn"  onClick="loadHTML('products.html', this)"><span>View more</span></div>
         </div>  
       
    </div>
</div>
</>
)
}
export default Home;