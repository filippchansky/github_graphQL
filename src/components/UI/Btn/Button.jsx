import "./button.css"


const Button = ({children, ...props}) => {
    console.log('props btn', props)
    return ( 
        <>
        <button {...props} className="button-default">
            {children}
        </button>
        </>
     );
}
 
export default Button;