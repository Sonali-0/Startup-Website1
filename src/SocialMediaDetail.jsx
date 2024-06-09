import React from 'react';
import './SocialMediaDetail.css';

const SocialMediaDetail = () => {
    return (
        <div className="social-media-detail">
            <p><i className="fa fa-envelope"></i> email@example.com</p>
            <p><i className="fa fa-phone"></i> +1 234 567 890</p>
            <p><i className="fa fa-linkedin"></i> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            <p><i className="fa fa-twitter"></i> <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a></p>
            <p><i className="fa fa-instagram"></i> <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">Instagram</a></p>
            <p><i className="fa fa-map-marker"></i> 1234 Street Name, City, Country</p>
        </div>
    );
};

export default SocialMediaDetail;
