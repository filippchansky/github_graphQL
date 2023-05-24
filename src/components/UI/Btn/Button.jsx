import "./button.css"


const Button = ({children, ...props}) => {
    return ( 
        <>
        <button {...props} className="button-default">
            {children}
        </button>
        </>
     );
}
 
export default Button;