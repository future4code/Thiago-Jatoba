import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { InputsContainer } from './styled'
import useForm from '../../hooks/useForm'

const LoginForm = () =>{
    const [form, onChange, clear] = useForm({email:'', password:''})
    const submitLogin = (event) =>{
        console.log(form)
        event.preventDefault()
    }
    return (
            <InputsContainer>
                <form onSubmit={submitLogin}>
                    <TextField
                        name={'email'}
                        type={'email'}
                        value={form.email}
                        onChange={onChange}
                        label={'e-mail'}
                        variant={'outlined'}
                        required
                        fullWidth
                        margin={'normal'}
                    />

                    <TextField
                        name={'password'}
                        type={'password'}
                        value={form.password}
                        onChange={onChange}
                        label={'senha'}
                        variant={'outlined'}
                        required
                        fullWidth
                        margin={'normal'}
                    />

                    <Button
                        type={'submit'}
                        variant={'contained'}
                        color={'primary'}
                        fullWidth
                    >Entrar</Button>
                </form>
            </InputsContainer>
    )
}

export default LoginForm