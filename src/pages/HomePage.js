
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/FirstScreen.css'
import { Collapse } from 'react-bootstrap';

const HomePage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{backgroundColor:'transparent'}}>
    <div className="container">
    <div className="home-content text-center mb-5">
          <h1 className="mb-4">Welcome to</h1>
          <div className="logo-container mb-4 text-center">
          <img 
            src="giftflowlogoclr.png" 
            alt="Birthday Gifts Logo" 
            className="logo-image"
            style={{height: '40vh', width:'40vh'}}
          />
        </div>
          <p >Discover the Perfect Gifts for Your Child with Ease</p>
          <h5>
            At GiftFlow, we know that nothing is more important than your child’s smile. We understand the challenge of finding the perfect gifts for your child. Our innovative gift-sharing platform uses advanced A.I. to help you create personalized gift lists that make every event more memorable and filled with joy.
          </h5>
        </div>
        
        <div className="text-center mt-5">
          <h3 className="mb-4">Companies with Us</h3>
          <div className="moving-bar">
            <div className="moving-bar-inner">
              <img src="ToysRus.png" alt="Company Logo 1" />
              <img src="companyLogo2.png" alt="Company Logo 2" className="transparent" />
              <img src="Marmelada.png" alt="Company Logo 3" />
              <img src="companyLogo4.png" alt="Company Logo 4" className="transparent" />
              <img src="Mamme.png" alt="Company Logo 5" />
              <img src="companyLogo1.png" alt="Company Logo 6" className="transparent"/>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <h3 className="text-center mb-4">How It Works:</h3>
        <div className="text-center mb-4">
          <button 
            className="btn btn-primary"
            onClick={() => setOpen(!open)}
            aria-controls="how-it-works-collapse"
            aria-expanded={open}
          >
            {open ? 'Hide Details' : 'Show Details'}
          </button>
        </div>


        <Collapse in={open}>
          <div id="how-it-works-collapse">
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card home-content">
                  <div className="card-body">
                    <h5 className="card-title">Personalized Gift Suggestions</h5>
                    <p className="card-text">When you sign up, we’ll ask a few questions about your child’s interests and personality. Our advanced A.I. analyzes this information to recommend gifts that your child will love, ensuring every present is a perfect match.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card home-content">
                  <div className="card-body">
                    <h5 className="card-title">Easy Gift List Management</h5>
                    <p className="card-text">Create and manage gift lists for each of your children. Edit, add, or remove items as you see fit, keeping the list updated and relevant to your child’s evolving interests.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card home-content">
                  <div className="card-body">
                    <h5 className="card-title">Share with Friends and Family</h5>
                    <p className="card-text">Once your list is complete, share it effortlessly with friends, family, and even your child’s classmates through a unique link. This makes it easy for others to see what gifts your child would love.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card home-content">
                  <div className="card-body">
                    <h5 className="card-title">Event Details at a Glance</h5>
                    <p className="card-text">When someone opens your shared link, they’ll see all the important event details like the date, time, and any special notes you’ve included. This helps everyone stay informed and makes gift-giving a breeze. They can also add the event to their calendar and receive reminders to prepare in advance.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card home-content">
                  <div className="card-body">
                    <h5 className="card-title">Enhanced Gift Matching</h5>
                    <p className="card-text">If someone knows more details about your child, they can provide this information through the shared link. Our A.I. will use these additional insights to refine its gift recommendations, ensuring an even better match for your child’s preferences.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Collapse>

        <h3 className="text-center mb-4">Why Choose GiftFlow?</h3>
        <ul className="list-unstyled text-center mx-auto" style={{ maxWidth: "600px" }}>
          <li className="mb-3"><strong>Tailored for Children:</strong> Our platform is designed specifically for children, ensuring that every gift suggestion is age-appropriate and aligned with their interests.</li>
          <li className="mb-3"><strong>Multiple Children, One Account:</strong> Manage gift lists for all your children from a single parent account. Easily switch between profiles and keep each list organized and up-to-date.</li>
          <li className="mb-3"><strong>Convenient and Fun:</strong> Make gift-giving enjoyable and stress-free. With GiftFlow, you can be confident that every gift is something your child will cherish.</li>
        </ul>

        <div className="text-center mt-4">
        <Link to="/ai-help"><button className="btn btn-primary">Join GiftFlow Today!</button></Link> 
        </div>
      </div>







  <footer className="text-lg-start mt-5" style={{ backgroundColor: 'transparent' , border: 'none',boxShadow:'none'}}>
    <div className="text-center p-3 " style={{color:' rgb(144, 51, 51) '}}>
         &copy; 2024 GiftFlow. All rights reserved.
    </div>
</footer>
    </div>
  );
};

export default HomePage;








// inside the footer, felt no need
  {/* <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">Contact Us</h5>
              <p>
                Email: info@giftflow.com<br />
                Phone: +1 (800) 123-4567<br />
                Address: 123 GiftFlow Street, Celebration City, Joyland
              </p>
            </div>
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">Follow Us</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark">Facebook</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Twitter</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Instagram</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}