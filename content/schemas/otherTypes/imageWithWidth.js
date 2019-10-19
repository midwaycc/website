import React from 'react'

const imageWithWidthPreview = style => ({
  select: {
    filename: 'image.asset.originalFilename',
    imageUrl: 'image.asset.url',
    width: 'width'
  },
  prepare({ filename, imageUrl, width }) {
    console.log({ filename, imageUrl, width })
    return {
      title: filename,
      extendedPreview: (
        <>
          <img src={imageUrl} style={style} />
          <div style={{ textAlign: 'center' }}>{width}px wide</div>
        </>
      )
    }
  }
})

const imageWithWidth = {
  type: 'object',
  fields: [
    { type: 'image', name: 'image', title: 'Image' },
    {
      type: 'number',
      name: 'width',
      title: 'Width',
      description: 'Width in pixels'
    }
  ]
}

export const centerImageWithWidth = {
  ...imageWithWidth,
  name: 'centerImageWithWidth',
  title: 'Center Image (with width)',
  preview: imageWithWidthPreview({ width: '50%', margin: '0 25%' })
}

export const rightImageWithWidth = {
  ...imageWithWidth,
  name: 'rightImageWithWidth',
  title: 'Right Image (with width)',
  preview: imageWithWidthPreview({ width: '50%', marginLeft: '49%' })
}

export const leftImageWithWidth = {
  ...imageWithWidth,
  name: 'leftImageWithWidth',
  title: 'Left Image (with width)',
  preview: imageWithWidthPreview({ width: '50%' })
}
