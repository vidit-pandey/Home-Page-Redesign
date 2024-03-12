import "./contactinfo.css";
import React from 'react';

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <h1 className="contact-info-heading">Pihu Technologies (P) Limited</h1>
      <div className="contact-details">
        <div className="contact-card">
          <h2 className="contact-title">Office Address:</h2>
          <p>Address# Buddhanagar-10, Kathmandu</p>
          <h2 className="contact-title">Phone</h2>
          <p>Support No : 016227744/4783365</p>
            <p>Sales & Marketing No : 016227744/4783365</p>
            <p>Accounts & Billing No : 016227744/4783365</p>   
            <p>Phone No : 4784145/016227744/4783365</p>   
            <p>E-mail : info@pihutechologies.com</p>   
            <p>Website : www.pihutechnologies.com</p>    
        </div>
        <div className="contact-card">
          <h2 className="contact-title">Registered Address:</h2>
          <p>B-4, Fourth Floor, A- Block</p>
            <p>Stupa Apartments,</p>
            <p>Rudramati Marg, Buddhanagar-10,</p>
            <p>Kathmandu, Nepal</p>
            <p>E-mail: info@pihutechologies.com</p>
        </div>
        <div className="contact-card">
          <h2 className="contact-title">Branch Address:</h2>
          <p>1st Floor,Laxmi Narayan (LN) Chock</p>
          <p>Dhangadhi-1, kailali</p>
          <p>Phone: 091-526418</p>
          <p>Email: dhangadhi@pihutechnologies.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
