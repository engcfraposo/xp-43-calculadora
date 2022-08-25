import { useState } from 'react'
import './App.css'
import Screen from "./components/Screen"
import { Button } from "./components/Button"

/**
 * <Button onClick={cleanScreen} buttonDigit={"C"} />
  {Button({onClick:cleanScreen, buttonDigit:"C"})}
 */

function App() {
  const [screenValue, setScreenValue] = useState<string>("")
  const [screenResult, setScreenResult] = useState<number | string >(0)
  const [operation, setOperation] = useState<boolean>(false)
  
  const addDigitScreen = (digit: string) => {
    if(screenValue.length > 15){
      return
    }
    
    if ((digit === "+" || digit === "-" || digit === "*" || digit === "/") && operation){
      setOperation(false)
      setScreenValue(
        prevScreenValue => prevScreenValue + digit
      )
      setScreenResult(Number(digit))
      return
    }

    if(operation){
      setOperation(false)
      setScreenValue(digit)
      return
    }

    setScreenValue(
      prevScreenValue => prevScreenValue + digit.toString()
    )
    return
  }

  const doOperation = (newOperation: string) => {
    if(newOperation === 'M'){
      let substringScreenValue: string = screenValue;
      
      substringScreenValue = substringScreenValue.substring(0, substringScreenValue.length -1)

      setOperation(false)
      setScreenValue(substringScreenValue)
    }

    try {
      const res = eval(screenValue)
      setScreenResult(res)
      setOperation(true)
    } catch (error) {
      setScreenResult('ERROR')
    }
  }

  const cleanScreen = () => {
    setOperation(false);
    setScreenValue("")
    setScreenResult(0)
  }
  return (
    <div className="background-calc">
     <div className="calc">
      <Screen text={screenValue}/>
      <Screen text={screenResult.toString()}/>
      <table>
        <tr>
          <td>
            <Button onClick={cleanScreen} buttonDigit={"C"} />
          </td>
          <td>
            <Button onClick={doOperation} buttonDigit={"M"} />
          </td>
          <td>
            <Button onClick={addDigitScreen} buttonDigit={"/"} />
          </td>
          <td>
            <Button onClick={addDigitScreen} buttonDigit={"*"} />
          </td>
        </tr>
        <tr>
          <td>
            <Button onClick={addDigitScreen} buttonDigit={"7"} />
          </td>
          <td>
            <Button onClick={addDigitScreen} buttonDigit={"8"} />
          </td>
          <td>
            <Button onClick={addDigitScreen} buttonDigit={"9"} />
          </td>
          <td>
            <Button onClick={addDigitScreen} buttonDigit={"-"} />
          </td>
        </tr>
        <tr>
          <td>
            <Button onClick={addDigitScreen} buttonDigit={"4"} />
            </td>
          <td>
            <Button onClick={addDigitScreen} buttonDigit={"5"} />
            </td>
          <td>
            <Button onClick={addDigitScreen} buttonDigit={"6"} />
            </td>
          <td>
            <Button onClick={addDigitScreen} buttonDigit={"+"} />
            </td>
        </tr>
        <tr>
          <td><Button  onClick={addDigitScreen} buttonDigit={"1"} />
          </td>
          <td><Button onClick={addDigitScreen} buttonDigit={"2"} />
          </td>
          <td><Button onClick={addDigitScreen} buttonDigit={"3"} />
          </td>
          <td rowSpan={2}><Button onClick={doOperation} buttonDigit={"="} />
          </td>
        </tr>
        <tr>
          <td colSpan={2}><Button onClick={addDigitScreen} buttonDigit={"0"}/>
          </td>
          <td><button className="calc-button">.</button>
          </td>
        </tr>
      </table>
     </div>
    </div>
  )
}

export default App
