import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="footer-one">
                <img width="200px" src="./pngwing.com.png" alt="" />
                <p>সমস্যার ক্ষেত্রে: ০৯৬১-২০০-১০১০ (সকাল ১০টা - রাত ১০টা) অথবা মেসেজ করুন 10MSHelp to ২৬৯৬৯ (২৪x৭)</p>
            </div>
            <div className="app-link">
                <img src="./playstore.svg" alt="" />
                <img width="200px" src="./imgbin_iphone-app-store-png.png" alt="" />
            </div>
            <hr className="horizontal-line" />
            <span >স্বত্ব © ২০১৫ - ২০২১ শিল্পচর্চা
                একাডেমি কতৃক সর্বস্বত্ব সংরক্ষিত</span>
            
        </div>
    );
};

export default Footer;