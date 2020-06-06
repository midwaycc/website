import React, { useState } from 'react'
import Section from '~/layout/Section'
import { Greeting, TextInput } from '~/views/ContactForm'
import { SquareButton } from '~/components/SquareButton'

export default () => {
  const [names, setNames] = useState('')
  const [children, setChildren] = useState('')
  const [preferredContact, setPreferredContact] = useState('')
  const [message, setMessage] = useState('')

  return (
    <Section css="padding: 2em">
      <Greeting>Help us get to know you!</Greeting>
      <form
        name="visitor-info"
        method="POST"
        action="/contact/success"
        data-netlify="true"
        data-netlify-honeypot="phone"
        css="width: 100%; max-width: 40em"
      >
        <TextInput title="Name(s)" name="names" value={names} set={setNames} />
        <TextInput
          title="Children (names and ages)"
          name="children"
          value={children}
          set={setChildren}
        />
        <input type="hidden" name="form-name" value="visitor-info" />
        <input css="display:none" type="hidden" name="phone" value="" />
        <TextInput
          textarea
          title="Preferred method of contact"
          name="preferredContact"
          value={preferredContact}
          set={setPreferredContact}
        />
        <TextInput
          textarea
          title="Additional message/info"
          name="message"
          value={message}
          set={setMessage}
        />
        <SquareButton type="submit" css="margin-top: 1em">
          Submit
        </SquareButton>
      </form>
    </Section>
  )
}
