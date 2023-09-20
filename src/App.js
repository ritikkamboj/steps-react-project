import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  // const step = 2; instead of this we can use useState

  const [step, setStep] = useState(1);
  const [cross, setCross] = useState(true);

  const date = new Date();
  console.log(date);
  function handlePrevious() {
    // alert('Baba tera upkar kadi ni bbhulan ka , jai ho baba ki ');
    // this below line also works , but only when we have to increase only once  ( so important !)

    // if (step > 1) setStep(step - 1);

    // we can write more correct for the same above code

    if (step > 1) {
      setStep((s) => s - 1);
      // setStep((s) => s - 1);
    }
  }

  function handleNext() {
    // alert('Baba una kadilkire ');
    if (step < 3) setStep(step + 1);
  }
  return (
    <>
      <button className="close" onClick={() => setCross((cross) => !cross)}>
        &times;
      </button>
      {cross && (
        <main className="steps">
          <main className="numbers">
            <div className={step >= 1 ? 'active' : ' '}>1</div>
            <div className={step >= 2 ? 'active' : ' '}>2</div>
            <div className={step >= 3 ? 'active' : ' '}>3</div>
            {/* wehave to add class name conditionally here  */}
          </main>

          <p className="message">
            step {step} : {messages[step - 1]}
          </p>

          <main className="buttons">
            {/* applying inline css in react */}
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handleNext}
            >
              Next
            </button>
          </main>
        </main>
      )}
    </>
  );
}
