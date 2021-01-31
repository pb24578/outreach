import React from 'react';
import { Contact } from '../contact';
import { Container } from './styles';

export const ContactList = () => (
  <Container>
    <Contact location="Hello World" name="Pravat" selected />
    <Contact location="Hello World" name="Andy" selected={false} />
    <Contact location="Hello World" name="Fronrich" selected={false} />
    <Contact location="Hello World" name="Fronrich" selected={false} />
    <Contact location="Hello World" name="Fronrich" selected={false} />
    <Contact location="Hello World" name="Fronrich" selected={false} />
    <Contact location="Hello World" name="Fronrich" selected={false} />
    <Contact location="Hello World" name="Fronrich" selected={false} />
    <Contact location="Hello World" name="Fronrich" selected={false} />
  </Container>
);
