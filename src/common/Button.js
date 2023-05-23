import './Button.css'

const Button = (props) => {

    const {btName , btFun} = props;
    
    return (
    
        <div className="button-container">

        <button className="cal-btn" onClick = {btFun} > {btName} </button>
    
    </div>
        )

} 

export default Button;