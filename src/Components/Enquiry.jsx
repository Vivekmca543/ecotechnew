import React from "react";
import innerbanner from '/src/assets/images/inner-banner-about.jpg';
const Enquiry = ()=>{
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
  
  <div className="inner-content-bg" >
        <div className="container">
        	<div className="col-lg-12">
        		<h1>Enquire Us</h1>
                <div className="uline"></div>
                
                <div className="row">
                
      <div className="col-lg-10 col-xs-12 text-left">
			      		<p>Please fill the mandatory fields.</p>
            
            <form className="pad" method="post" action="" id="contactForm" name="contactForm">
					<table className="enquiry_form">
						<tr>
							<td className="left_section">Name <span className="red">*</span></td>
							<td><input required="required" name="name" type="text" className="text_box" value="" /></td>
						</tr>
						<tr>
							<td className="left_section">Email <span className="red">*</span></td>
							<td><input required="required" name="email" type="text" className="text_box" value=""  /></td>
						</tr>
						<tr>
							<td className="left_section">Phone <span className="red">*</span></td>
							<td><input required="required" name="phone" type="text" className="text_box" value=""  /></td>
						</tr>
						<tr>
							<td className="left_section">Comments</td>
							<td><textarea required="required" name="comments" className="comments_box"></textarea></td>
						</tr>
						
						<tr>
							<td className="left_section"></td>
							<td><input type="submit" className="submit_enquiry" value="Submit" /></td>
						</tr>
					</table>
				</form>
								
      </div>
      <div className="clearfix"></div>
                </div>
               
             </div>  
        </div>
  </div>
        </>
    )
}
export default Enquiry;