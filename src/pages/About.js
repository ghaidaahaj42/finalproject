import React from "react";
import '../styles/about.css';

const About = () => {
  return (
    
    <div style={{ backgroundColor: "white" }} > 
      <div className="about-section">
      <h1>עלינו</h1>
      <p>אנחנו צוות של ארבעה סטודנטים לתואר ראשון במדעי המחשב באוניברסיטת תל אביב, שלומדים קורס בבניית אפליקציות. האתר שלנו נוצר מתוך הכרה בבעיה שרבים מאיתנו נתקלים בה בימי הולדת של ילדים – האורחים לא תמיד יודעים מה לקנות, ולעיתים המתנות אינן מתאימות או חסרות משמעות. המטרה שלנו היא להקל על האורחים ולוודא שכל ילד יקבל מתנה שהוא באמת יאהב וישמח בה.
האתר שלנו נועד להציע פתרון פשוט ויעיל, בכך שהוא מסייע לאורחים להבין טוב יותר את תחומי העניין וההעדפות של ילד יום ההולדת. בעזרת טכנולוגיות מתקדמות ושילוב של בינה מלאכותית, אנחנו שואפים ליצור חוויה ייחודית ומותאמת אישית לכל משתמש, תוך מתן תשומת לב לנושא הרגיש של בחירת מתנות חשובות ומשמעותיות.
כצוות, אנו מביאים איתנו ניסיון מתחומי הפיתוח, עיצוב, וניהול פרויקטים </p>
    
      </div>

     
      <div style={{ backgroundColor: "white" }}>
        <div className="column">
          <div className="card">
            <img src={"b17fe582-970a-4881-9556-d0dfa01ca40c.jpg"} alt="Jane" style={{ width: "95%" }} />
            <div className="container">
              <h2>Basel Arw</h2>
              <p className="title">CS and Business Administration Student at Tel Aviv University</p>
              <p>baselarw@mail.tau.ac.il</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
          
        </div>
      </div>
      <div style={{ backgroundColor: "white" }}>
        <div className="column">
          <div className="card">
            <img src={"OhadElkayam.png"} alt="Jane" style={{ width: "100%" }} />
            <div className="container">
              <h2>Ohad elkayam</h2>
              <p className="title">CS Student at Tel Aviv University</p>
              <p>ohadelkayam@mail.tau.ac.il</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
          
        </div>
      </div>
      <div style={{ backgroundColor: "white" }}>
        <div className="column">
          <div className="card">
            <img src={"f17ab492-a739-4974-8169-fa94685a4381.jpg"} alt="Jane" style={{ width: "100%" }} />
            <div className="container">
              <h2>Ghidaa Haj </h2>
              <p className="title">Website manager</p>
              <p>gaidaahaj@mail.tau.ac.il</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
          
        </div>
      </div>
      <div style={{ backgroundColor: "white" }}>
        <div className="column">
          <div className="card">
            <img src={"BayanHijazi.png"} alt="Jane" style={{ width: "100%" }} />
            <div className="container">
              <h2>Bayan hijazi</h2>
              <p className="title">CS and Mathematics Student at Tel Aviv University</p>
              <p>bayanhijazi@mail.tau.ac.il</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default About;
