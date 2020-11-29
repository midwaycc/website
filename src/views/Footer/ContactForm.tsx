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
      >
        <TextInput title="Name" name="name" value={name} set={setName} />
        <TextInput title="Email" name="email" value={email} set={setEmail} />
        <input type="hidden" name="form-name" value="contact" />
        <input css="display:none" type="hidden" name="phone" value="" />
        <TextInput
          textarea
          title="Message"
          name="message"
          value={message}
          set={setMessage}
        />
        <SquareButton
          type="submit"
          css="margin-top: 1em"
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
