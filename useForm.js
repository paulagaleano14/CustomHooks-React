import { useState } from "react"

//Objeto para forms que se manipule y que no se repita
export const useForm = (initialState = {}) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = ({target}) =>{
        setValues({
            ...values,
            [target.name] : target.value
        });
    }


return [ values , handleInputChange, reset];
}
