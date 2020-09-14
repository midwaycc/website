import React from 'react'
import { withDocument } from 'part:@sanity/form-builder'
import './fonts.css'

type Props = {
  document: { _id: string }
}

class PosterPreview extends React.Component<Props> {
  focus() {
    // No need to focus this
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <h2>Preview</h2>
        {window.POSTER_PREVIEWS &&
          window.POSTER_PREVIEWS[this.props.document._id]}
      </div>
    )
  }
}

export default withDocument(PosterPreview)
