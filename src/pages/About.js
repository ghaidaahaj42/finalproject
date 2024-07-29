

import React from "react";
import "../styles/about.css"; // Make sure to adjust the path to your CSS file

const About = () => {
  return (
      <div className="about">
        <h1>עלינו</h1>
        <p>אנחנו צוות של ארבעה סטודנטים לתואר ראשון במדעי המחשב באוניברסיטת תל אביב, שלומדים קורס בבניית אפליקציות. האתר שלנו נוצר מתוך הכרה בבעיה שרבים מאיתנו נתקלים בה בימי הולדת של ילדים – האורחים לא תמיד יודעים מה לקנות, ולעיתים המתנות אינן מתאימות או חסרות משמעות. המטרה שלנו היא להקל על האורחים ולוודא שכל ילד יקבל מתנה שהוא באמת יאהב וישמח בה.
            האתר שלנו נועד להציע פתרון פשוט ויעיל, בכך שהוא מסייע לאורחים להבין טוב יותר את תחומי העניין וההעדפות של ילד יום ההולדת. בעזרת טכנולוגיות מתקדמות ושילוב של בינה מלאכותית, אנחנו שואפים ליצור חוויה ייחודית ומותאמת אישית לכל משתמש, תוך מתן תשומת לב לנושא הרגיש של בחירת מתנות חשובות ומשמעותיות.
            כצוות, אנו מביאים איתנו ניסיון מתחומי הפיתוח, עיצוב, וניהול פרויקטים </p>
      <div className="about-cards">
        <div id="card">
          <img  src={"basel.jpg"} alt="Avatar Photo" />
          <h4>Basel Arw</h4>
          <p>Basel Arw</p>
          <p className="email">BaselArw@gmail.com</p>
        </div>
        <div id="card">
          <img src={'BayanHijazi.png'} alt="Avatar Photo" />
          <h4>Avatar Name</h4>
          <p>Bayan Hijazi </p>
          <p className="email">hello@gmail.com</p>
        </div>
        <div id="card">
          <img src={'Gaidaa.jpg'} alt="Avatar Photo" />
          <h4>Avatar Name</h4>
          <p>Ghidaa Haj</p>
          <p className="email">hello@gmail.com</p>
        </div>
        <div id="card">
          <img src={'OhadElkayam.png'} alt="Avatar Photo" />
          <h4>Avatar Name</h4>
          <p>Ohad Elkayam</p>
          <p className="email">hello@gmail.com</p>
        </div>
      </div>

      </div>
  );
};

export default About;