import React from 'react'
import { blockIcon } from '../helpers/blockIcon'

const imagePreview = (style: React.CSSProperties) => ({
  select: {
    filename: 'asset.originalFilename',
    imageUrl: 'asset.url'
  },
  prepare({ filename, imageUrl }: any) {
    return {
      title: filename,
      extendedPreview: <img src={imageUrl} style={style} />
    }
  }
})

const imageWithWidthPreview = (style: React.CSSProperties) => ({
  select: {
    filename: 'image.asset.originalFilename',
    imageUrl: 'image.asset.url',
    width: 'width'
  },
  prepare({ filename, imageUrl, width }: any) {
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
  icon: blockIcon('\u2502\u2610\u2502'),
  preview: imageWithWidthPreview({ width: '50%', margin: '0 25%' })
}

export const rightImageWithWidth = {
  ...imageWithWidth,
  name: 'rightImageWithWidth',
  title: 'Right Image (with width)',
  icon: blockIcon('\u2502\u2513', 'right'),
  preview: imageWithWidthPreview({ width: '50%', marginLeft: '49%' })
}

export const leftImageWithWidth = {
  ...imageWithWidth,
  name: 'leftImageWithWidth',
  title: 'Left Image (with width)',
  icon: blockIcon('\u250f\u2502', 'left'),
  preview: imageWithWidthPreview({ width: '50%' })
}

export const centerImage = {
  type: 'image',
  title: 'Center Image',
  name: 'centerImage',
  icon: blockIcon('\u2610'),
  preview: imagePreview({ width: '50%', margin: '0 25%' })
}

export const leftImage = {
  type: 'image',
  title: 'Left Image',
  name: 'leftImage',
  icon: blockIcon('\u250f', 'left'),
  preview: imagePreview({ width: '50%' })
}

export const rightImage = {
  type: 'image',
  title: 'Right Image',
  name: 'rightImage',
  icon: blockIcon('\u2513', 'right'),
  preview: imagePreview({ width: '50%', marginLeft: '49%' })
}
