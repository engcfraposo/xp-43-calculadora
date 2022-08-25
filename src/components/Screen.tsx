interface IScreen {
    text:string
}
  
export default function Screen({text}:IScreen){
    return(<h1>{text}</h1>)
}