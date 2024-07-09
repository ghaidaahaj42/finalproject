import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Button, ProgressBar } from 'react-bootstrap';
import { FormControlLabel, RadioGroup, Radio, FormControl ,TextareaAutosize} from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import '../styles/Aiforom.css';
import { Grid, Snackbar, Alert } from '@mui/material';

import ProductCard from '../Product'
const questions = [
  {
    id: 0,
    title: "מה הגיל של הילד.ה ?",
    options: [
      { value: "3-6", label: "3-6" },
      { value: "6-10", label: "6-10" },
      { value: "10-12 ", label: "10-12 " },
      { value: "12-16", label: "12-16" }
    ]
  },
  {
    id: 1,
    title: "אילו סוגי משחקים הוא הכי אוהב לשחק? ",
    options: [
      { value: "משחקי קופסה", label: "משחקי קופסה" },
      { value: "משחקי חוץ", label: "משחקי חוץ" },
      { value: "משחקי טכנולוגיה (כמו קונסולות משחק או משחקי מחשב)", label: "משחקי טכנולוגיה (כמו קונסולות משחק או משחקי מחשב)" },
      { value: "בניית פאזלים ומבחני אתגר", label: "בניית פאזלים ומבחני אתגר" }
    ]
  },
  {
    id: 2,
    title: "מהם הסרטים או הסדרות האהובים על ילדך?",
    options: [
      { value: "סרטי אנימציה", label: "סרטי אנימציה" },
      { value: "סדרות פעולה", label: "סדרות פעולה" },
      { value: "דרמות", label: "דרמות" },
      { value: "קומדיות", label: "קומדיות" }
    ]
  },
  {
    id: 3,
    title: "איך הוא אוהב לבלות את הזמן בחופשות או בסופי השבוע? ",
    options: [
      { value: "בילוי בחוץ כמו טיולים או ספורט", label: "בילוי בחוץ כמו טיולים או ספורט" },
      { value: "יצירה ואומנות", label: "יצירה ואומנות" },
      { value: "משחקים ופעילויות ביתיות", label: "משחקים ופעילויות ביתיות" },
      { value: "צפייה בסרטים או סדרות ביתיות", label: "צפייה בסרטים או סדרות ביתיות" }
    ]
  },
  {
    id: 4,
    title: "מה הם סוגי הספרים שהוא אוהב לקרוא?",
    options: [
      { value: "פנטזיה", label: "פנטזיה" },
      { value: "מדע בדיוני", label: "מדע בדיוני" },
      { value: "ספרי מתח והרפתקאות", label: "ספרי מתח והרפתקאות" },
      { value: "ספרי למידה וחונך", label: "ספרי למידה וחונך" }
    ]
  },
  {
    id: 5,
    title: "משהו שחשוב לנו לדעת ?",
    options: []
  },
//   {
//     id: 5,
//     title: "מהם הדמויות או הגיבורים שהוא הכי אוהב? בחר את כל האפשרויות המתאימות:",
//     options: [
//       { value: "גיבורי על", label: "גיבורי על" },
//       { value: "דמויות אנימציה", label: "דמויות אנימציה" },
//       { value: "דמויות היסטוריות", label: "דמויות היסטוריות" },
//       { value: "דמויות קומיקס", label: "דמויות קומיקס" }
//     ]
//   },
//   {
//     id: 6,
//     title: "מהם המשחקים או הצעצועים שהוא הכי מחכה לקבל? בחר את כל האפשרויות המתאימות:",
//     options: [
//       { value: "צעצועי מותג מסוים (לדוגמה, LEGO או Barbie)", label: "צעצועי מותג מסוים (לדוגמה, LEGO או Barbie)" },
//       { value: "צעצועי בנייה ויצירה", label: "צעצועי בנייה ויצירה" },
//       { value: "צעצועים חדשניים טכנולוגיים", label: "צעצועים חדשניים טכנולוגיים" },
//       { value: "כלי נגינה או צעצועים מוזיקליים", label: "כלי נגינה או צעצועים מוזיקליים" }
//     ]
//   },
//   {
//     id: 7,
//     title: "איזו סוגת מוסיקה היא האהובה על ילדך? בחר את כל האפשרויות המתאימות:",
//     options: [
//       { value: "רוק או פופ", label: "רוק או פופ" },
//       { value: "קלאסי או ג'אז", label: "קלאסי או ג'אז" },
//       { value: "ראפ או R&B", label: "ראפ או R&B" },
//       { value: "מוסיקה ישראלית או עממית", label: "מוסיקה ישראלית או עממית" },
//       { value: "לא רלוונטי", label: "לא רלוונטי" }
//     ]
//   },
//   {
//     id: 8,
//     title: "מה הם הצבעים הכי אהובים עליו? בחר את כל האפשרויות המתאימות:",
//     options: [
//       { value: "אדום", label: "אדום" },
//       { value: "כחול", label: "כחול" },
//       { value: "ירוק", label: "ירוק" },
//       { value: "צהוב", label: "צהוב" }
//     ]
//   },
//   {
//     id: 9,
//     title: "אילו פעילויות הן הכי משמחות אותו לעשות? בחר את כל האפשרויות המתאימות:",
//     options: [
//       { value: "בישול ואפייה", label: "בישול ואפייה" },
//       { value: "ביצוע אומנותית", label: "ביצוע אומנותית" },
//       { value: "שחקנות והצגות", label: "שחקנות והצגות" },
//       { value: "ספורט ופעילויות חוץ", label: "ספורט ופעילויות חוץ" }
//     ]
//   },
//   {
//     id: 10,
//     title: "אילו חיות הן הכי אהובות על ילדך? בחר את כל האפשרויות המתאימות:",
//     options: [
//       { value: "כלבים", label: "כלבים" },
//       { value: "חתולים", label: "חתולים" },
//       { value: "דגים ומעיים", label: "דגים ומעיים" },
//       { value: "צפרדעים וברכישים", label: "צפרדעים וברכישים" }
//     ]
//   }
];





function SurveyForm() {
  const myProducts = [
    { id: 1, name: 'Lego Package', description: 'This is product 1', image: 'https://www.lego.com/cdn/cs/set/assets/blt61f68cd89d49cc06/11029_alt1.png'},
    { id: 2, name: 'Chess', description: 'This is product 2', image: 'https://5.imimg.com/data5/PG/LD/CL/SELLER-14274915/magnetic-chess-game.jpg' },
    { id: 3, name: 'Product 3', description: 'This is product 3', image: 'https://m.media-amazon.com/images/I/71x1TrqgSmL._AC_UF894,1000_QL80_.jpg'},
  ];
  const [step, setStep] = useState(-1); // State to track current step/question
  const [answeredCount, setAnsweredCount] = useState(0); // State to track answered questions count
  const [isFinished, setIsFinished] = useState(false); // State to track if the survey is finished

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

  const handleFinish = () => {
    setIsFinished(true); // Mark the survey as finished
  };

  return (
    <div className="container">
      <div className="home-content text-center mb-5">
        <div className="card-body">
          <div className="survey-content">
            {isFinished ? (
               <div className="container">
        
      <h1> לפי התשובות שלך אנחנו מציעים לך לקנות :</h1>
      <div className="card-body">
      <Grid style={{backgroundColor:'transparent'}} container spacing={3}>
            {myProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                description={product.description}
         
              />
            ))}
          </Grid>
       
        </div>
              </div>
            ) : (
              step === -1 ? (
                <div className="container text-center">
                  <h1>בואו קצת נקיר את הילד שמחפשים בשבילו מתנה </h1>
                  <p>.אנחנו נציג לפניכם 6 שאלות שאתם חייבים לענות עליהם, כדי שהבינה מלאכותית תעזור לכם היטב </p>
                  <p> נשמע לכם סבבה ? </p>
                  <Button variant="primary" onClick={handleNext}>בואו נתחיל</Button>
                </div>
              ) : (
                <div className="container text-center" id="questions">
                  <ProgressBar striped variant="info" now={answeredCount} max={questions.length} label={`${answeredCount} מתוך ${questions.length} שאלות`} className="mb-3" />
                  <div className="container text-center" id="questions">
                    <h3>{questions[step].title}</h3>
                    <FormControl component="fieldset" className="question-container">
                      {questions[step].options.length > 0 ? (
                        <RadioGroup name={`question-${questions[step].id}`} className="options-group">
                          {questions[step].options.map(option => (
                            <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
                          ))}
                        </RadioGroup>
                      ) : (
                        <Textarea
                          color="primary"
                          disabled={false}
                          minRows={7}
                          size="lg"
                          variant="outlined"
                        />
                      )}
                    </FormControl>
                    <div className="mt-4 d-flex justify-content-between">
                      {step >= 0 && (
                        <Button variant="secondary" id="btn" onClick={handlePrev}>
                          <BsArrowRight />
                        </Button>
                      )}
                      {step < questions.length - 1 ? (
                        <Button variant="primary" id="btn" onClick={handleNext}>
                          <BsArrowLeft />
                        </Button>
                      ) : (
                        <Button variant="success" id="btn" onClick={handleFinish}>Finish</Button>
                      )}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurveyForm;
