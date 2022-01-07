import React from 'react';
import Titles from './Titles'
import Form from './Form';
import Statisctic from './Statistic';
import { PictureContainer, CloudContainer, Container } from './style';


export default function Introduction() {
    return (
        <PictureContainer>
            <CloudContainer>
                <Container>
                    <Titles />
                    <Form />
                    <Statisctic />
                </Container>
            </CloudContainer>
        </PictureContainer>
    )
}