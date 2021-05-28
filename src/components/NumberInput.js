import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Results from './Results';
import { operations } from '../helpers/operations';

const NumberInput = () => {

    const [numbers, setnumbers] = useState({
        number1: 0,
        number2: 0
    });

    const {
        handleChange,
        suma,
        resta,
        multiplicacion,
        division,
        number1,
        number2
    } = operations(numbers, setnumbers)






    return (
        <>
            <label className = 'mx-2'>
                number 1  : {' '}
                <input
                    name='number1'
                    value={number1}
                    onChange={handleChange}
                    type="number"
                />
            </label>

            <label>
                number 2  : {' '}
                <input
                    name='number2'
                    value={number2}
                    onChange={handleChange}
                    type="number"
                />
            </label>

            <Results operacion='Suma' calculo={suma()} />
            <Results operacion='Resta' calculo={resta()} />
            <Results operacion='Multiplicacion' calculo={multiplicacion()} />
            <Results operacion='Division' calculo={division()} />


        </>
    )
}

NumberInput.propTypes = {
    name: PropTypes.string
}

export default NumberInput
