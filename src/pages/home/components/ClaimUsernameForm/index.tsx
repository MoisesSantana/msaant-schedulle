import { Button, TextInput } from '@moiseizin/react';
import * as Styles from './style';
import { ArrowRight } from 'phosphor-react';

export function ClaimUsernameForm() {
  return (
    <Styles.Form as="form">
      <TextInput
        size="sm"
        prefix="msaantsched.com/"
        placeholder="seu-usuario"
      />
      <Button size="sm" type="submit">
        Reservar usuário
        <ArrowRight />
      </Button>
    </Styles.Form>
  )
}
