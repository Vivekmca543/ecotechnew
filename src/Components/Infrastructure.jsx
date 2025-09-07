import React from "react";
import innerbanner from '/src/assets/images/inner-banner-about.jpg';
import dnm4500 from '/src/assets/images/dnm4500.jpg';
import DOOSANMYNX6500 from '/src/assets/images/DOOSANMYNX 6500.jpg';
import DOOSANMYNX650011 from '/src/assets/images/DOOSAN-MYNX-6500.png';
import DOOSANV8300 from '/src/assets/images/DOOSANV8300.jpg';
import VTL1 from '/src/assets/images/VTL-1.png';
import DOOSANLYNX300 from '/src/assets/images/DOOSAN LYNX 300.jpeg';
import HTC1 from '/src/assets/images/HTC-1.jpeg';
import iweldingmachine from "/src/assets/images/400i-welding-machine.jpg";
import LATHEGMTChuckDia from "/src/assets/images/LATHE–GMT Chuck Dia.jpeg";
import Lathe1 from "/src/assets/images/Lathe1.jpg";
import Lathe from "/src/assets/images/Lathe.jpg";
import LATHENEW from "/src/assets/images/LATHE-NEW .jpeg";
import product500x500 from "/src/assets/images/product-500x500.webp"

const Infrastructure = ()=>{
    return(
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
        		<h1 className="m-3">Infrastructure</h1>
                
                <p>We have an exclusive machine shop equipped with 3 VTL, 3 VMC , 3 HTC, Radial Drilling  and 5 lathes in order to meet the requirements of our customers. </p>
                
                <p>We take responsibility 	to supply the product as a whole and we could outsource certain operations wherever required.  We also associated with some foundries for our various requirements/operations</p>
                
               
             </div>  
        </div>
  </div>


<div className="infra">
        <div className="container">
        	<div className="col-lg-12">
        		<h3>List of Machines</h3>
                
                <div className="infra_cont">
                	<div className="">
                    
                     <div className="col-lg-12">
                      <div className="infra_cont_inner">
                          <div className="row">
                              <div className="col-lg-5">
                                  <img src={dnm4500} className="img-responsive" />
                                </div>
                                <div className="col-lg-7">
                                    <p>DOOSAN - DNM 4500 - VERTICAL MACHINING CENTER - 1 No.
                                        <br/> Table Size	800 x 450
                                        Height		650 mm with high pressure through coolent.</p>
                                </div>
                            </div>
                        </div>
                    </div>
              
                        <div className="col-lg-12">
                        	<div className="infra_cont_inner">
                            	<div className="row">
                                	<div className="col-lg-5">
                                    	<img src={DOOSANMYNX6500} className="img-responsive" />
                                    </div>
                                    <div className="col-lg-7">
                                        <p>DOOSAN MYNX 6500 WITH 4TH AXIS - VERTICAL MACHINING CENTER - 1 No.
                                            <br/> Table Size	1400 x 670
                                            Height		650 mm with high pressure through coolent  
                                            4th Axis		Ø320</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                         <div className="col-lg-12">
                        	<div className="infra_cont_inner">
                            	<div className="row">
                                	<div className="col-lg-12 DOOSAN-V8300">
                                    	<img src={DOOSANMYNX650011} className="img-responsive" />
                                    </div>
                                    <div className="col-lg-12 text-center">
                                        <p> DOOSAN DNM 6700XL - VERTICAL MACHINING CENTER - 1 No.
                                            <br/> Table Size 1500 x 670
                                            Height 700 mm with high pressure through coolent.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                         
                        <div className="col-lg-12">
                        	<div className="infra_cont_inner">
                            	<div className="row">
                                	<div className="col-lg-5 DOOSAN-V8300">
                                    	<img src={DOOSANV8300} className="img-responsive" />
                                    </div>
                                    <div className="col-lg-7">
                                        <p>DOOSAN V8300 - VERTICAL TURNING LATHE - 2 Nos.
                                            <br/> Maximum Turning Height is 750 mm
                                            Chuck Dia	605 mm
                                            Maximum Turning Dia is 830 mm
                                          </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-12">
                        	<div className="infra_cont_inner">
                            	<div className="row">
                                	<div className="col-lg-5 DOOSAN-V8300">
                                    	<img src={VTL1} className="img-responsive" />
                                    </div>
                                    <div className="col-lg-7">
                                        <p>HWACHEON -  VT450(R) - VERTICAL TURNING LATHE - 1 No.
                                            <br/> Maximum Turning Height is 490 mm
                                            Chuck Dia 400 mm
                                            Maximum Turning Dia is 460 mm
                                          </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                        	<div className="infra_cont_inner">
                            	<div className="row">
                                	<div className="col-lg-5">
                                    	<img src={DOOSANLYNX300} className="img-responsive" />
                                    </div>
                                    <div className="col-lg-7">
                                        <p>DOOSAN LYNX 300  - HORIZONTAL TURNING CENTER - 2 Nos.
                                            <br/> Maximum Turning Dia -	550 mm 
                                            Chuck Dia -	300 mm
                                            Turning Length - 600 mm
                                          </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                          <div className="col-lg-12">
                        	<div className="infra_cont_inner">
                            	<div className="row">
                                	<div className="col-lg-5">
                                    	<img src={HTC1} className="img-responsive" />
                                    </div>
                                    <div className="col-lg-7">
                                        <p>HWACHEON -  HORIZONTAL TURNING CENTER - 1 No.
                                            <br/> Maximum Turning Dia - 350 mm 
                                            Chuck Dia -	250 mm
                                            Turning Length - 610 mm
                                          </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-12">
                        	<div className="infra_cont_inner">
                            	<div className="row">
                                	<div className="col-lg-5">
                                    	<img src={product500x500} className="img-responsive" />
                                    </div>
                                    <div className="col-lg-7">
                                        <p>RADIAL DRILLING MACHINE   - MMT  MAG.3
                                          <br/>  Maximum Drilling Size		-	50
                                            Working Surface		-	1270 X 770 mm
                                            Table Size			-	600 X 445 mm
                                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                         <div className="col-lg-12">
                        	<div className="infra_cont_inner">
                            	<div className="row">
                                	<div className="col-lg-12 DOOSAN-V8300">
                                    	<img src={LATHENEW} className="img-responsive" />
                                    </div>
                                    <div className="col-lg-12 text-center">
                                        <p>LATHE 	-  NEW PUNJAB PMW 410
                                            Chuck Dia			-	24”
                                            Length				-	9 feet
                                          </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                        	<div className="infra_cont_inner">
                            	<div className="row">
                                	<div className="col-lg-12 DOOSAN-V8300">
                                    	<img src={Lathe} className="img-responsive" />
                                    </div>
                                    <div className="col-lg-12 text-center">
                                        <p>LATHE - NEW PUNJAB PMW  Chuck Dia - 24” Length - 10 Feet-1, NOS</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                         <div className="col-lg-12">
                        	<div className="infra_cont_inner">
                            	<div className="row">
                                	<div className="col-lg-12 DOOSAN-V8300">
                                    	<img src={Lathe1} className="img-responsive" />
                                    </div>
                                    <div className="col-lg-12 text-center">
                                        <p>HEAVY DUTY LATHE MACHINE</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                         <div className="col-lg-12">
                        	<div className="infra_cont_inner">
                            	<div className="row">
                                	<div className="col-lg-5 DOOSAN-V8300">
                                    	<img src={LATHEGMTChuckDia} className="img-responsive" />
                                    </div>
                                    <div className="col-lg-7">
                                        <p>LATHE - GMT
                                            Chuck Dia	- 	12”
                                            Length		-	7 feet
                                          </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                        	<div className="infra_cont_inner">
                            	<div className="row">
                                	<div className="col-lg-5 DOOSAN-V8300">
                                    	<img src={iweldingmachine} className="img-responsive" />
                                    </div>
                                    <div className="col-lg-7">
                                        <p>ESAB AB TIG & ARC Welding machine - TIG 400i<br/> 
                                          20A/20.8V - 400A/36V
                                          </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="clearfix"></div>
                        
                    </div>
                </div>  
    
            </div>
        </div>
</div>

 



 </>


    )
}
export default Infrastructure;