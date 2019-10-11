import React from 'react'

const imagePreview = style => ({
  select: {
    filename: 'asset.originalFilename',
    imageUrl: 'asset.url'
  },
  prepare({ imageUrl, filename }) {
    return {
      title: filename,
      extendedPreview: <img src={imageUrl} style={style} />
    }
  }
})

export const centerImage = {
  type: 'image',
  title: 'Center Image',
  name: 'centerImage',
  preview: imagePreview({ width: '50%', margin: '0 25%' })
}

export const leftImage = {
  type: 'image',
  title: 'Left Image',
  name: 'leftImage',
  preview: imagePreview({ width: '50%' })
}

export const rightImage = {
  type: 'image',
  title: 'Right Image',
  name: 'rightImage',
  preview: imagePreview({ width: '50%', marginLeft: '49%' })
}

export default {
  name: 'richContent',
  title: 'Content',
  type: 'array',
  of: [{ type: 'block' }, centerImage, leftImage, rightImage]
}
