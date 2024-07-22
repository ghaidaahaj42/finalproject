import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/FirstScreen.css'
import { Collapse } from 'react-bootstrap';

const HomePage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ backgroundColor: 'transparent' }}>
      <div className="container">
        <div className="home-content text-center mb-5">
          <h1 className="mb-4">ברוכים הבאים ל</h1>
          <h1 className="mb-4">Welcome to</h1>
          <div className="logo-container mb-4 text-center">
            <img 
              src="giftflowlogoclr.png" 
              alt="Birthday Gifts Logo" 
              className="logo-image"
              style={{ height: '40vh', width: '40vh' }}
            />
          </div>
          <p >גלו את המתנות המושלמות עבור ילדכם בקלות</p>
          <h5>
            ב-GiftFlow, אנחנו יודעים שאין דבר יותר חשוב מחיוך הילד שלכם. אנו מבינים את האתגר למצוא את המתנה המושלמת עבור ילדכם. פלטפורמת המתנות המתקדמת שלנו משתמשת בבינה מלאכותית מתקדמת כדי לעזור לכם ליצור רשימות מתנות אישיות שיהפכו כל אירוע ליותר זכור ומלא שמחה.
          </h5>
        </div>
        
        <div className="text-center mt-5">
          <h3 className="mb-4">חברות עובדים איתנו</h3>
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
        <h1 className="text-center mb-4">איך האתר שלנו עובד ?</h1>
        <div className="text-center mb-4">
          <button 
            className="btn btn-primary"
            onClick={() => setOpen(!open)}
            aria-controls="how-it-works-collapse"
            aria-expanded={open}
          >
            {open ? 'הסתר פרטים' : 'הצג פרטים'}
          </button>
        </div>


        <Collapse in={open}>
          <div id="how-it-works-collapse">
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card home-content">
                  <div className="card-body">
                    <h5 className="card-title">הצעות מתנה אישיות</h5>
                    <p className="card-text">כאשר אתם נרשמים, נשאל אתכם כמה שאלות על ענייני העניינים והאישיות של הילד שלכם. הבינה המלאכותית המתקדמת שלנו נותנת המלצות לפי נתונים אלו, ומבטיחה שכל מתנה היא התאמה מושלמת.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card home-content">
                  <div className="card-body">
                    <h5 className="card-title">ניהול רשימת מתנות פשוט</h5>
                    <p className="card-text">יצירה וניהול של רשימות מתנות לכל אחד מהילדים שלכם. עריכה, הוספה או הסרת פריטים כפי שתרצו, תוך שמירה על עדכון ורלוונטיות הרשימה לפי העניינים המשתנים של הילד שלכם.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card home-content">
                  <div className="card-body">
                    <h5 className="card-title">שיתוף עם חברים ומשפחה</h5>
                    <p className="card-text">לאחר שהרשימה שלכם מוכנה, שתפו אותה בקלות עם חברים, משפחה וגם עם חברי הכיתה של הילד שלכם דרך קישור ייחודי. זה יקל על האחרים לראות אילו מתנות הילד שלכם יאהב.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card home-content">
                  <div className="card-body">
                    <h5 className="card-title">פרטי האירוע במבט על פניו</h5>
                    <p className="card-text">כאשר מישהו פותח את הקישור המשותף שלכם, הם רואים את כל פרטי האירוע החשובים כמו תאריך, שעה וכל ההערות המיוחדות שכללתם. זה עוזר לכולם להישאר מעודכנים ומקל על המתנה.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card home-content">
                  <div className="card-body">
                    <h5 className="card-title">התאמת מתנות משופרת</h5>
                    <p className="card-text">אם מישהו יודע פרטים נוספים על הילד שלכם, הם יכולים לספק את המידע הזה דרך הקישור המשותף. הבינה המלאכותית שלנו תשתמש בתובנות נוספות אלו כדי לשפר את ההמלצות על מתנות, ולוודא התאמה טובה יותר להעדפות הילד שלכם.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Collapse>

        <h3 className="text-center mb-4">למה לבחור ב-GiftFlow?</h3>
        <ul className="list-unstyled text-center mx-auto" style={{ maxWidth: "600px" }}>
          <li className="mb-3"><strong>מותאם לילדים:</strong> הפלטפורמה שלנו מיועדת במיוחד לילדים, ומבטיחה שכל ההמלצות למתנות יהיו מתאימות לגיל ולענייניו של הילד.</li>
          <li className="mb-3"><strong>ילדים מרובים, חשבון אחד:</strong> ניהול של רשימות מתנות עבור כל הילדים שלך מתוך חשבון ההורה היחידי. ניהול קל בין הפרופילים ושמירה על עדכון רשימות המתנות עבור ענייניהם המשתנים של הילדים שלך.</li>
          <li className="mb-3"><strong>נוח וכיף:</strong> גרום להעברת מתנות להיות כיפית וללא סטרס. עם GiftFlow, אתם יכולים להיות בטוחים שכל מתנה היא משהו שהילד שלכם יעריך.</li>
        </ul>

        <div className="text-center mt-4">
          <Link to="/ai-help"><button className="btn btn-primary"> בואו לנשות !</button></Link> 
        </div>
      </div>

      <footer className="text-lg-start mt-5" style={{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
        <div className="text-center p-3 " style={{ color: 'rgb(144, 51, 51)' }}>
          &copy; 2024 GiftFlow. כל הזכויות שמורות.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
