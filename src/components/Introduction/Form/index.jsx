import React from "react";
import {FormContainer, Input, Button} from './style'

export default function Form() {
    return (
        <FormContainer>
            <Input placeholder={'Enter yout email'}/>
            <Button>
                Get started
            </Button>
        </FormContainer>
    )

}
