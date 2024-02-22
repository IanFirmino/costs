import React from "react";
import styles from './Select.module.css'

const Select = ({text, name, options, handleOnChange, value}) => {
    return (
        <div className={styles.form_control}>
            <labe htmlFor={name}>{text}:</labe>
            <select name={name} id={name}>
                <option>Selecione uma opção</option>
            </select>
        </div>
    )
}

export default Select