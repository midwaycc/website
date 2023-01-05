import React, { useState } from 'react'
import styled from 'styled-components'
import { SquareButton } from '~/components/SquareButton'
import { Greeting } from '~/components/form/Greeting'
import { TextInput } from '~/components/form/TextInput'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <>
      <Greeting>We'd love to hear from you!</Greeting>
      <Form
        name="contact"
        method="POST"
        action="/contact/success"
        data-netlify="true"
        data-netlify-honeypot="phone"
        data-netlify-recaptcha="true"
      >
        <TextInput title="Name" name="name" value={name} set={setName} />
        <TextInput title="Email" name="email" value={email} set={setEmail} />
        <input type="hidden" name="form-name" value="contact" />
        <input
          style={{ display: 'none' }}
          type="hidden"
          name="phone"
          value=""
        />
        <TextInput
          textarea
          title="Message"
          name="message"
          value={message}
          set={setMessage}
        />
        <div data-netlify-recaptcha="true" />
        <SquareButton
          type="submit"
          style={{ marginTop: '1em' }}
          disabled={message.split(' ').length < 3}
        >
          Submit
        </SquareButton>
      </Form>
    </>
  )
}

const Form = styled.form`
  width: 100%;
  text-align: center;
`
