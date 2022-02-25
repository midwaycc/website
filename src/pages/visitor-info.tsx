import React, { useState } from 'react'
import styled from 'styled-components'
import { Section } from '~/layout/Section'
import { Content } from '~/layout/Content'
import { Greeting } from '~/components/form/Greeting'
import { TextInput } from '~/components/form/TextInput'
import { SquareButton } from '~/components/SquareButton'

export default function VisitorInfoPage() {
  const [names, setNames] = useState('')
  const [children, setChildren] = useState('')
  const [preferredContact, setPreferredContact] = useState('')
  const [message, setMessage] = useState('')

  return (
    <Section>
      <Content>
        <Greeting>Help us get to know you!</Greeting>
        <Form
          name="visitor-info"
          method="POST"
          action="/contact/success"
          data-netlify="true"
          data-netlify-honeypot="phone"
        >
          <TextInput
            title="Name(s)"
            name="names"
            value={names}
            set={setNames}
          />
          <TextInput
            title="Children (names and ages)"
            name="children"
            value={children}
            set={setChildren}
          />
          <input type="hidden" name="form-name" value="visitor-info" />
          <input
            style={{ display: 'none' }}
            type="hidden"
            name="phone"
            value=""
          />
          <TextInput
            textarea
            title="Preferred method of contact"
            name="preferred-contact"
            value={preferredContact}
            set={setPreferredContact}
          />
          <TextInput
            textarea
            title="Additional info (optional): Tell us about yourself! How did you find us? What ministry areas are you interested in learning more about?"
            name="message"
            value={message}
            set={setMessage}
          />
          <SquareButton type="submit" style={{ marginTop: '1em' }}>
            Submit
          </SquareButton>
        </Form>
      </Content>
    </Section>
  )
}

const Form = styled.form`
  width: 100%;
  max-width: 40em;
`
