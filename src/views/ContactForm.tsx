import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { SquareButton } from '~/components/SquareButton'

export default () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <>
      <Greeting>We'd love to hear from you!</Greeting>
      <form
        name="contact"
        method="POST"
        action="/contact/success"
        data-netlify="true"
        data-netlify-honeypot="phone"
        css="width: 100%; text-align: center"
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
        <SquareButton type="submit" css="margin-top: 1em">
          Submit
        </SquareButton>
      </form>
    </>
  )
}

type InputProps = {
  title: string
  name: string
  value: string
  textarea?: boolean
  set: (s: string) => void
  className?: string
}

const TextInput = ({
  title,
  name,
  value,
  set,
  className,
  textarea = false
}: InputProps) => {
  const id = `input-${name}`
  const inputProps = {
    type: 'text',
    id,
    name,
    placeholder: title,
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      set(e.target.value)
  }

  const styles = css`
    width: 100%;
    border: none;
    font-size: 1em;
    padding: 0.5em;
    font-family: 'Proxima Nova', sans-serif;
    resize: vertical;
    color: white;
    background-color: ${props => props.theme.footer.contactFields};

    &::placeholder {
      color: white;
      opacity: 0.8;
      font-style: italic;
    }
  `

  return (
    <div
      className={className}
      css={css`
        :not(:first-of-type) {
          margin-top: 1em;
        }
      `}
    >
      {textarea ? (
        <textarea css={styles} {...inputProps} rows={10} />
      ) : (
        <input css={styles} {...inputProps} />
      )}
    </div>
  )
}

const Greeting = styled.h4`
  text-transform: uppercase;
  color: #9fb94b;
  margin: 0.5em 0;
`
