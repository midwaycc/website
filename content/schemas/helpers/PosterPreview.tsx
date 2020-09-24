import React from 'react'
import { withDocument } from 'part:@sanity/form-builder'
import './fonts.css'

type Props = {
  document: { _id: string } & { [k: string]: any }
  field?: string
}

class PosterPreview extends React.Component<Props> {
  focus() {
    // No need to focus this
  }

  render() {
    const posterId = this.props.field
      ? this.props.document[this.props.field]?._ref
      : this.props.document._id

    return (
      <div style={{ width: '100%' }}>
        <h2>Preview</h2>
        {window.POSTER_PREVIEWS && window.POSTER_PREVIEWS[posterId]}
      </div>
    )
  }
}

const PreviewWithDocument = withDocument(PosterPreview)

export default PreviewWithDocument
export const posterPreviewForField = (field: string) =>
  class PosterPreviewForField extends React.Component {
    render() {
      return <PreviewWithDocument field={field} {...this.props} />
    }
  }
