import "./activities.css";
import React from 'react';

const Activities = () => {
  return (
    <div className="activities-container"> {}
        <h1 className="activities-heading">About Us</h1>
        <div className="work-container">
            <div className="work-card">
                <h2 className="work-title">WebSite Design</h2>
                <div className="work-details">
                    <p>Pihu Technologies (P) Ltd. is an emerging and Creative Web Design, 
                    Development & Web Hosting Company here in Nepal In Nepal, we offer comprehensive web hosting services, including domain registration, shared hosting, reseller hosting, VPS hosting, dedicated servers, and Windows hosting. 
                    Additionally, we provide domain registration services to cater to all your online needs.</p>
                </div>
            </div>
            <div className="work-card">
                <h2 className="work-title">Bulk SMS</h2>
                <div className="work-details">
                    <p>PihuSMS, from Pihu Technologies, offers push and pull SMS services in Nepal. Its user-friendly web interface requires no software installation, making it cost-effective for users. Push SMS sends messages directly to mobile phones, while pull SMS enables users to request services via preset codes. This versatile platform caters to both individuals and businesses, facilitating effective communication. With PihuSMS, users can reach a large audience simultaneously through bulk messaging. 
                        Its pull SMS functionality supports various services like information-on-demand, subscriptions, and interactive contests.</p>
                </div>
            </div>
            <div className="work-card">
                <h2 className="work-title">WebSite ReDesign</h2>
                <div className="work-details">
                    <p>Website redesign is essential for staying current in the evolving digital landscape, offering a chance to refresh and optimize your online presence. It involves revamping your site to meet changing audience needs, ensuring both technical excellence and user-friendly design. 
                        Effective redesign boosts visibility and engagement, aligning your website with modern standards for success.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Activities;
