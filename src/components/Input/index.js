import React from 'react';
import { InputContainer } from './styles';

function Input({value, onChange}) {
  return (
    <InputContainer>
        <input placeholder='username/project (ex: HenrikeSantana/gitfind)' value={value} onChange={onChange} />
    </InputContainer>
  )
}

export default Input;