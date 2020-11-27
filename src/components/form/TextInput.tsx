import React from 'react'
import styled from 'styled-components'

type Props = {
  title: string
  name: string
  value: string
  textarea?: boolean
  set: (s: string) => void
  className?: string
}

export function TextInput({
  title,
  name,
  value,
  set,
  className,
  textarea = false
}: Props) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    set(e.target.value)
  }

  const inputProps = {
    type: 'text',
    id: `input-${name}`,
    name,
    placeholder: title,
    value,
    onChange: handleChange
  }

  return (
    <Container className={className}>
      {textarea ? (
        <Input {...inputProps} as="textarea" rows={8} />
      ) : (
        <Input {...inputProps} />
      )}
    </Container>
  )
}

const Container = styled.div`
  :not(:first-of-type) {
    margin-top: 1em;
  }
`

const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 1em;
  line-height: 1.25em;
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
