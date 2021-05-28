
export  const operations = (numbers, setnumbers) => {

    const { number1, number2 } = numbers


    const handleChange = (e) => {
        setnumbers({
            ...numbers,
            [e.target.name]: parseFloat(e.target.value)
        })
    };
    
    
    
    const suma = () => number1 + number2;
    
    const resta = () => number1 - number2;
    
    const multiplicacion = () => number1 * number2;
    
    const division = () => number1 / number2;

    return {handleChange, suma, resta, multiplicacion, division, number1 , number2}
    
}