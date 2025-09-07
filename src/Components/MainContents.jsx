import { useEffect, useRef,useState } from 'react';
import { useLocation,BrowserRouter, Routes, Route,NavLink,useMatch} from 'react-router-dom';
import About from "./About";
import Products from "./Products";
import Infrastructure from "./Infrastructure";
import Qualityassurance from "./Qualityassurance";
import Contact from "./Contact";
import Enquiry from "./Enquiry";
import Home from "./Home";
import logo from '/src/assets/images/logo.png';
import whatsappimg from '/src/assets/images/whatsapp-icon.png';
import mobile_menu from '/src/assets/images/mobile_menu_icon.png';

const MainContents = () => {
   const [scrolled, setScrolled] = useState(false);
  const [dynamicleft, setDynamicleft] = useState(100);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const location = useLocation();
  const greenbgRef = useRef(null);
    const isHome = useMatch("/");
  useEffect(() => {
    const updatePosition = ()=>{ 
    const box = greenbgRef.current;
    if (box) {
      const reatgreenref = box.getBoundingClientRect();
      setDynamicleft(reatgreenref.left);
    }
    }
    updatePosition();
      const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop >= 40);
    };
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('resize', updatePosition); 
        window.removeEventListener('scroll', handleScroll);
    }
  }, []); // Empty dependency array = run once on mount
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);
  const handleMainmenu=()=>{
    setMenuOpen(prev => !prev);
  }
  return (
    <div className="main">
      <a href="https://wa.me/+919677833499" target="_blank"><img src={whatsappimg} className="ecotech-whatapp" /></a>

      <div className="white_bg">
        <header className={scrolled  ? 'mobile-menu home-page fixed' : 'mobile-menu home-page'}>
          <div className="head_top_bg position-relative">
            <div className="green-bg-brdr position-absolute" style={{
          left: `${dynamicleft}px`, // dynamically set left
          
        }}></div>
            <div className="container">
              <div className="col-lg-5 col-md-6 col-sm-4 col-xs-5 hidden-xs">
                <p>Welcome to ECOTECH CASTINGS INDIA PVT. LTD</p>
              </div>
              <div className="col-lg-7 col-md-6 col-sm-8 col-xs-12">
                <div className="mobi_txt">
                  <div className="position-absolute"></div>
                  <div className="ph-mail hidden-xs">
                    <div className="hidden-xs contact-num" style={{ float: 'left' }}>
                      <div style={{ float: 'left' }}><a href="mailto:info@ecotechcastings.in" style={{ float: 'left' }}>
                        <i className="fa fa-envelope fa-lg facolor" aria-hidden="true"></i>&nbsp;info@ecotechcastings.in</a></div>
                      <div id="greenbg-id" ref={greenbgRef} style={{ float: 'left' }}>
                        <span className="hidden-xs"><i className="fa fa-mobile fa-lg facolor" aria-hidden="true"></i>&nbsp;+91 96778 33499</span>
                        <span className="hidden-xs"><i className="fa fa-phone fa-lg facolor" aria-hidden="true"></i>&nbsp;0422 - 2248913, 4393037</span>
                      </div>
                    </div>
                  </div>
                  <ul className="socialmedia">
                    <li><a href="mailto:info@ecotechcastings.in" className="icon hidden-lg hidden-md hidden-sm"><i className="fa fa-envelope facolor"></i></a></li>
                    <li><a href="tel:+919344944233" className="icon hidden-lg hidden-md hidden-sm"><i className="fa fa-mobile facolor"></i></a></li>
                    <li><a href="#" className="icon hidden-lg hidden-md hidden-sm"><i className="fa fa-phone facolor"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={isHome ? `ecotech-header-wrap home-component`:`ecotech-header-wrap`}>
            <div className="container">
              <div className="col-lg-2 col-md-3 col-sm-2 col-xs-12">
                <div className="row"> <a href="#" className="logo" alt="Ecotech"><img src={logo} className="img-responsive-ecotech" alt="Ecotech" /></a>
                  <div className="mob_menu_btns pull-right visible-xs">
                    <button type="button" onClick={handleMainmenu} className="navbar-toggle collapsed mob_menu_btn" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"><span className="visible-xs">menu</span>
                    <img src= {mobile_menu} className="mob_menu_btn"/>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-10 col-md-9 col-sm-10 col-xs-12">
                <div className="row">
                
                    <nav className="navbar navbar-default"> 
                      <div className={`collapse navbar-collapse ${menuOpen ? 'in' : ''}`} id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                      <li className="homepage">                        
                        <NavLink 
                        to="/"
                        end
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                      >Home</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About us</NavLink></li>
                        <li><NavLink to="/products" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Products</NavLink></li>
                        <li><NavLink to="/infrastructure" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Infrastructure</NavLink></li>
                        <li><NavLink to="/qualityassurance" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Quality Assurance</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink></li>
                        <li><NavLink to="/enquiry" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Enquiry</NavLink></li>
                        </ul> 
                        <div className="clearfix"></div>
                      </div>
                    </nav>
                    
                  
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="clearfix"></div>
      <div className="home_content_bg">
        <div id="content">          
                       <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/about" element={<About />} />
                          <Route path="/products" element={<Products />} />
                          <Route path="/infrastructure" element={<Infrastructure />} />
                          <Route path="/qualityassurance" element={<Qualityassurance />} />
                          <Route path="/contact" element={<Contact />} />
                          <Route path="/enquiry" element={<Enquiry />} />
                        </Routes>   
        </div>
        <div className="clearfix"></div>
      </div>
      <div className="eco_enqry position-relative">
        <div className="green-bg-brdr position-absolute" style={{
          left: `${dynamicleft}px`
          
        }}></div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <h5>Quick Links</h5>
            <div className="uline"></div>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li onclick="loadHTML('home.html', this)"><a>Home</a></li>
                  <li onclick="loadHTML('about-us.html', this)"><a>About us</a></li>
                  <li onclick="loadHTML('products.html', this)"><a>Products</a></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li onclick="loadHTML('infrastructure.html', this)"><a>Infrastructure</a></li>
                  <li onclick="loadHTML('quality-assurance.html', this)"><a>Quality Assurance</a></li>
                  <li onclick="loadHTML('contact.html', this)"><a>Contact</a></li>
                  <li><a className="ecotech-popup-enquiry">Enquiry</a></li>
                </ul>
              </div>
            </div>
            <div className="row location">
              <div className="col-lg-12">
                <p><i className="fa fa-map-marker facolor1" aria-hidden="true"></i>&nbsp; <a href="contact.html">View Location Map</a></p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
            <h5>Contact Info</h5>
            <div className="uline"></div>
            <div><p><strong>Office : </strong> 1057, Jaya Enclave, 3rd Floor, Avinashi Road, Coimbatore - 641 018</p>
              <p>Phone :  0422 - 2248913, 4393037  |  Mobile : +91 96778 33499, +91 90035 97798 </p></div>
            <div><p><strong>Machine Shop : </strong> 4/396, Maddampalayam, Bilichi PO, Coimbatore - 641 019</p>
              <p>Phone :  04254 - 7140530 </p></div>
            <p>Email : <a href="mailto:info@ecotechcastings.in">info@ecotechcastings.in</a>, <a href="mailto:sales@ecotechcastings.in">sales@ecotechcastings.in</a></p>
          </div>
          <div className="clearfix"></div>
          <br />
          <div className="copyright">
            <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">
              <p>&copy; Copyright 2024 ECOTECH CASTINGS INDIA PVT. LTD. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContents;