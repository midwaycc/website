import React from 'react'
import { Rule } from '@sanity/validation'
import { Poster } from '../../../src/components/Poster'
import { PreviewWithDocument } from '../helpers/PosterPreview'

declare global {
  interface Window {
    POSTER_PREVIEWS: Record<string, JSX.Element>
  }
}

export const poster = {
  name: 'poster',
  title: 'Poster',
  type: 'document',
  fields: [
    {
      name: 'previewDisplay',
      title: 'Preview',
      type: 'number',
      inputComponent: PreviewWithDocument
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description:
        "This is just for reference, it won't appear anywhere on the site."
    },
    {
      name: 'lines',
      title: 'Text Lines',
      type: 'array',
      of: [{ type: 'posterLine' }]
    },
    {
      name: 'background',
      title: 'Background Image',
      type: 'image'
    },
    {
      name: 'overlayColor',
      title: 'Overlay Color',
      type: 'string',
      description: 'Leave blank for no overlay.'
    },
    {
      name: 'overlayOpacity',
      title: 'Overlay Opacity',
      type: 'number',
      description: '0-100',
      validation: (Rule: Rule) => Rule.min(0).max(100)
    }
  ],
  preview: {
    select: {
      _id: '_id',
      name: 'name',
      lines: 'lines',
      overlayColor: 'overlayColor',
      overlayOpacity: 'overlayOpacity',
      background: 'background',
      // These just force Sanity to populate those fields in the `background`
      _url: 'background.asset.url',
      _width: 'background.asset.metadata.dimensions.width',
      _height: 'background.asset.metadata.dimensions.height'
    },
    prepare(poster: any) {
      // Since the form builder does not pass the full document with resolved
      // references into the custom input I'm using to render a preview inline,
      // save the rendered output to the window to reuse.
      window.POSTER_PREVIEWS = window.POSTER_PREVIEWS || {}
      window.POSTER_PREVIEWS[poster._id] = <Poster poster={poster} />

      return {
        title: poster.name,
        media: window.POSTER_PREVIEWS[poster._id]
      }
    }
  }
}
