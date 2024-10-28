import { Heading, Text } from '@moiseizin/react'
import Image from 'next/image'
import * as Styles from './style'

import previewImage from '../../assets/app-preview.png'

export default function Home() {
  return (
    <Styles.Container>
      <Styles.Hero>
        <Heading as="h1" size="4xl">Agendamento descomplicado</Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.
        </Text>
      </Styles.Hero>
      <Styles.Preview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt="Calendario simbolizando aplicação em funcionamento"
        />
      </Styles.Preview>
    </Styles.Container>
  )
}
