interface IButton {
    onClick: (buttonDigit: any) => void  
    buttonDigit: string;
}
  

export const Button = ({onClick, buttonDigit}:IButton) => {
    let doubleSpace = "";
    if(buttonDigit === "="){
      doubleSpace = "equals"
    }
    if(buttonDigit === "0"){
      doubleSpace = "zero"
    }
  
    if(buttonDigit === "C"){
      return(
        <button onClick={() => onClick("")}className="calc-button">
        { buttonDigit}
        </button>
      )
    }
    return (
    <button onClick={() => onClick(buttonDigit)}className={`calc-button ${doubleSpace}`}>
      {buttonDigit}
    </button>
    )
  }
  