import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Button, ProgressBar } from 'react-bootstrap';
import { FormControlLabel, RadioGroup, Radio, FormControl } from '@mui/material';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import '../styles/Aiforom.css';
const questions = [
  {
    id: 0,
    title: "מהם תחומי התחביבים האהובים על ילדך? (בחר אחד או יותר)",
    options: [
      { value: "ספורט", label: "ספורט" },
      { value: "רישומים ואמנות", label: "רישומים ואמנות" },
      { value: "מדע וטכנולוגיה", label: "מדע וטכנולוגיה" },
      { value: "מוזיקה", label: "מוזיקה" },
      { value: "קריאה וספרים", label: "קריאה וספרים" }
    ]
  },
  {
    id: 1,
    title: "אילו סוגי משחקים הוא הכי אוהב לשחק? (בחר אחד או יותר)",
    options: [
      { value: "משחקי קופסה", label: "משחקי קופסה" },
      { value: "משחקי חוץ", label: "משחקי חוץ" },
      { value: "משחקי טכנולוגיה (כמו קונסולות משחק או משחקי מחשב)", label: "משחקי טכנולוגיה (כמו קונסולות משחק או משחקי מחשב)" },
      { value: "בניית פאזלים ומבחני אתגר", label: "בניית פאזלים ומבחני אתגר" }
    ]
  },
  {
    id: 2,
    title: "מהם הסרטים או הסדרות האהובים על ילדך? (בחר אחד או יותר)",
    options: [
      { value: "סרטי אנימציה", label: "סרטי אנימציה" },
      { value: "סדרות פעולה", label: "סדרות פעולה" },
      { value: "דרמות", label: "דרמות" },
      { value: "קומדיות", label: "קומדיות" }
    ]
  },
  {
    id: 3,
    title: "איך הוא אוהב לבלות את הזמן בחופשות או בסופי השבוע? (בחר אחד או יותר)",
    options: [
      { value: "בילוי בחוץ כמו טיולים או ספורט", label: "בילוי בחוץ כמו טיולים או ספורט" },
      { value: "יצירה ואומנות", label: "יצירה ואומנות" },
      { value: "משחקים ופעילויות ביתיות", label: "משחקים ופעילויות ביתיות" },
      { value: "צפייה בסרטים או סדרות ביתיות", label: "צפייה בסרטים או סדרות ביתיות" }
    ]
  },
  {
    id: 4,
    title: "מה הם סוגי הספרים שהוא אוהב לקרוא? (בחר אחד או יותר)",
    options: [
      { value: "פנטזיה", label: "פנטזיה" },
      { value: "מדע בדיוני", label: "מדע בדיוני" },
      { value: "ספרי מתח והרפתקאות", label: "ספרי מתח והרפתקאות" },
      { value: "ספרי למידה וחונך", label: "ספרי למידה וחונך" }
    ]
  },
  {
    id: 5,
    title: "מהם הדמויות או הגיבורים שהוא הכי אוהב? בחר את כל האפשרויות המתאימות:",
    options: [
      { value: "גיבורי על", label: "גיבורי על" },
      { value: "דמויות אנימציה", label: "דמויות אנימציה" },
      { value: "דמויות היסטוריות", label: "דמויות היסטוריות" },
      { value: "דמויות קומיקס", label: "דמויות קומיקס" }
    ]
  },
  {
    id: 6,
    title: "מהם המשחקים או הצעצועים שהוא הכי מחכה לקבל? בחר את כל האפשרויות המתאימות:",
    options: [
      { value: "צעצועי מותג מסוים (לדוגמה, LEGO או Barbie)", label: "צעצועי מותג מסוים (לדוגמה, LEGO או Barbie)" },
      { value: "צעצועי בנייה ויצירה", label: "צעצועי בנייה ויצירה" },
      { value: "צעצועים חדשניים טכנולוגיים", label: "צעצועים חדשניים טכנולוגיים" },
      { value: "כלי נגינה או צעצועים מוזיקליים", label: "כלי נגינה או צעצועים מוזיקליים" }
    ]
  },
  {
    id: 7,
    title: "איזו סוגת מוסיקה היא האהובה על ילדך? בחר את כל האפשרויות המתאימות:",
    options: [
      { value: "רוק או פופ", label: "רוק או פופ" },
      { value: "קלאסי או ג'אז", label: "קלאסי או ג'אז" },
      { value: "ראפ או R&B", label: "ראפ או R&B" },
      { value: "מוסיקה ישראלית או עממית", label: "מוסיקה ישראלית או עממית" },
      { value: "לא רלוונטי", label: "לא רלוונטי" }
    ]
  },
  {
    id: 8,
    title: "מה הם הצבעים הכי אהובים עליו? בחר את כל האפשרויות המתאימות:",
    options: [
      { value: "אדום", label: "אדום" },
      { value: "כחול", label: "כחול" },
      { value: "ירוק", label: "ירוק" },
      { value: "צהוב", label: "צהוב" }
    ]
  },
  {
    id: 9,
    title: "אילו פעילויות הן הכי משמחות אותו לעשות? בחר את כל האפשרויות המתאימות:",
    options: [
      { value: "בישול ואפייה", label: "בישול ואפייה" },
      { value: "ביצוע אומנותית", label: "ביצוע אומנותית" },
      { value: "שחקנות והצגות", label: "שחקנות והצגות" },
      { value: "ספורט ופעילויות חוץ", label: "ספורט ופעילויות חוץ" }
    ]
  },
  {
    id: 10,
    title: "אילו חיות הן הכי אהובות על ילדך? בחר את כל האפשרויות המתאימות:",
    options: [
      { value: "כלבים", label: "כלבים" },
      { value: "חתולים", label: "חתולים" },
      { value: "דגים ומעיים", label: "דגים ומעיים" },
      { value: "צפרדעים וברכישים", label: "צפרדעים וברכישים" }
    ]
  }
];




function SurveyForm() {
  const [step, setStep] = useState(-1); // State to track current step/question
  const [answeredCount, setAnsweredCount] = useState(0); // State to track answered questions count

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(prevStep => prevStep + 1);
      setAnsweredCount(prevCount => prevCount + 1); // Increment answered count
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(prevStep => prevStep - 1);
      setAnsweredCount(prevCount => prevCount - 1); // Decrement answered count
    }
  };

  return (
    <div className="container">
      <div className="home-content text-center mb-5">
        <div className="card-body">
          <div className="survey-content">
            {step === -1 ? (
              <div className="container text-center">
                <h1>בואו קצת נקיר את הילד שמחפשים בשבילו מתנה </h1>
                <p>.אנחנו נציג לפניכם 6 שאלות שאתם חייבים לענות עליהם, כדי שהבינה מלאכותית תעזור לכם היטב </p>
                <p> נשמע לכם סבבה ? </p>
                <Button variant="primary" onClick={handleNext}>בואו נתחיל</Button>
              </div>
            ) : (

              <div className="card-body">
                                <ProgressBar striped variant="info"  now={answeredCount} max={questions.length} label={`${answeredCount} מתוך ${questions.length} שאלות`} className="mb-3" />

              <div className="container survey-card">
                <h2>{questions[step].title}</h2>
                <FormControl component="fieldset">
                  <RadioGroup name={`question-${questions[step].id}`}>
                    {questions[step].options.map(option => (
                      <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
                    ))}
                  </RadioGroup>
                </FormControl>
                <div className="mt-4 d-flex justify-content-between">
                {step >=0 && (
                    <Button variant="secondary" onClick={handlePrev}>
                      <BsArrowRight />
                    </Button>
                  )}
                  {step < questions.length - 1 ? (
                    <Button variant="primary" onClick={handleNext}>
                      <BsArrowLeft />
                    </Button>
                  ) : (
                    <Button variant="success">Finish</Button>
                  )}

                </div>
              </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurveyForm;
