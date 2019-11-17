import React, { useState } from 'react'
import Section from '~/layout/Section'
import styled, { css } from 'styled-components'
import media from '~/utils/media'
import { ActionButton } from '~/components/Pills'

export default () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <Section color="white" css="padding: 2em 1em">
      <h1 css="text-align: center">Contact Us</h1>
      {/* <p>We'd love to hear from you!</p> */}
      <form
        name="contact"
        method="POST"
        action="/contact/success"
        data-netlify="true"
        netlify-honeypot="phone"
      >
        <Column>
          <TextInput title="Name" name="name" value={name} set={setName} />
          <TextInput title="Email" name="email" value={email} set={setEmail} />
          <TextInput
            css="display: none"
            title="Phone"
            name="phone"
            value=""
            set={() => {}}
          />
        </Column>
        <Column>
          <TextInput
            textarea
            title="Message"
            name="message"
            value={message}
            set={setMessage}
          />
        </Column>
        <div css="clear: both; width: 100%; padding-top: 2em;">
          <ActionButton
            type="submit"
            css={css`
              background-color: #5aa7a9;
              color: white;
              margin: 0 auto;
              display: block;
            `}
          >
            Submit
          </ActionButton>
        </div>
      </form>
    </Section>
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
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      set(e.target.value)
  }

  const styles = css`
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.2em;
    padding: 0.5em;
    font-family: 'Proxima Nova', sans-serif;
    resize: vertical;
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
      <label
        htmlFor={id}
        css={css`
          font-family: 'Brandon Grotesque';
          display: block;
          margin-bottom: 0.25em;
          font-weight: bold;
          font-size: 1.2em;
          color: #2b6667;
        `}
      >
        {title}
      </label>
      {textarea ? (
        <textarea css={styles} {...inputProps} rows={10} />
      ) : (
        <input css={styles} {...inputProps} />
      )}
    </div>
  )
}

const Column = styled.div`
  width: 100%;
  float: left;
  margin-top: 1em;

  ${media.md} {
    width: calc(50% - 1em);
    margin-right: 1em;
    margin-top: 0;

    & + & {
      margin-right: 0;
      margin-left: 1em;
    }
  }
`
