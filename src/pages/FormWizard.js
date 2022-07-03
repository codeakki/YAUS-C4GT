import { Button, message, Steps, Card } from 'antd';
import { useState } from 'react';
import First from "./First";
import Second from "./Second";
const { Step } = Steps;
const steps = [
  {
    title: 'First',
    content: <First/>,
  },
  {
    title: 'Second',
    content: <Second/>,
  },
  {
    title: 'Third',
    content: 'Third-content',
  },
  {
    title: 'Fourth',
    content: 'Fourth-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];

function  FormWizard (){
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
    <div className="layout-content"   style={{
                margin: '35px',
              }}>
        <Steps current={current} >
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>

        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button
              style={{
                margin: '0 8px',
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )}
        </div>
    </div>
    </>
  );
};

export default FormWizard;