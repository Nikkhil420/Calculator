import { useState } from "react";
import CalWrapper from "../CalWrapper/CalWrapper";

const Cal = () => {

  const [inputValue, setInputValue] = useState(0);
  const [oprationValue , setOprationValue] = useState(0);
  const [currentOperator, setCurrentOperator] = useState('');

  const allButtonArr = [

    {value: 0,btFun: () => {setInputValue((preValue) => parseInt(preValue.toString()+0))}},
    {value: 1,btFun: () => {setInputValue((preValue) => parseInt(preValue.toString()+1))}},
    {value: 2,btFun: () => {setInputValue((preValue) => parseInt(preValue.toString()+2))}},
    {value: 3,btFun: () => {setInputValue((preValue) => parseInt(preValue.toString()+3))}},
    {value: 4,btFun: () => {setInputValue((preValue) => parseInt(preValue.toString()+4))}},
    {value: 5,btFun: () => {setInputValue((preValue) => parseInt(preValue.toString()+5))}},
    {value: 6,btFun: () => {setInputValue((preValue) => parseInt(preValue.toString()+6))}},
    {value: 7,btFun: () => {setInputValue((preValue) => parseInt(preValue.toString()+7))}},
    {value: 8,btFun: () => {setInputValue((preValue) => parseInt(preValue.toString()+8))}},
    {value: 9,btFun: () => {setInputValue((preValue) => parseInt(preValue.toString()+9))}},
     ];
     const allOprationArr = [ 
      {value: '+',
      btFun: () => {
        setCurrentOperator('+')
        setOprationValue(inputValue);
        setInputValue(0);
      }},
      {value: '-',
      btFun: () => {
        setCurrentOperator('-')
        setOprationValue(inputValue);
        setInputValue(0);
      }},
      {value: '*',
      btFun: () => {
        setCurrentOperator('*')
        setOprationValue(inputValue);
        setInputValue(0);
      }},
      {value: '/',
      btFun: () => {
        setCurrentOperator('/')
        setOprationValue(inputValue);
        setInputValue(0);
      }},
      {value: '=',
      btFun: () => {
       if(currentOperator === '+'){

        setInputValue((preValue) => { 
        
          return preValue + oprationValue;
         })
         
        }else if(currentOperator === '-'){
          setInputValue((preValue) => { 
            return  oprationValue - preValue ;
           })
       }
      }}
    ];
  return (
    <div>

<p>This is demo {inputValue}</p>

<p>   {oprationValue} {currentOperator}</p>

      <CalWrapper allButtonArr={allButtonArr} allOprationArr={allOprationArr} />
    </div>
  );
};

export default Cal;
