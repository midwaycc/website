import React from 'react'

const imagePreview = style => ({
  select: {
    filename: 'asset.originalFilename',
    imageUrl: 'asset.url'
  },
  prepare({ filename, imageUrl }) {
    return {
      title: filename,
      extendedPreview: <img src={imageUrl} style={style} />
    }
  }
})

const imageWithWidthPreview = style => ({
  select: {
    filename: 'image.asset.originalFilename',
    imageUrl: 'image.asset.url',
    width: 'width'
  },
  prepare({ filename, imageUrl, width }) {
    alert('prepare')
    console.log({ filename, imageUrl, width })
    return {
      title: filename,
      extendedPreview: <img src={imageUrl} style={style} />
    }
  }
})

function ImageWithWidth(props) {
  console.log('PROPS', props)
  return <span />
}

const icon = (text, align) => () => (
  <div
    style={{
      width: 24,
      height: 24,
      lineHeight: '24px',
      textAlign: align || 'center'
    }}
  >
    {text}
  </div>
)

export const centerImage = {
  type: 'image',
  title: 'Center Image',
  name: 'centerImage',
  icon: icon('\u2610'),
  preview: imagePreview({ width: '50%', margin: '0 25%' })
}

export const leftImage = {
  type: 'image',
  title: 'Left Image',
  name: 'leftImage',
  icon: icon('\u250f', 'left'),
  preview: imagePreview({ width: '50%' })
}

export const rightImage = {
  type: 'image',
  title: 'Right Image',
  name: 'rightImage',
  icon: icon('\u2513', 'right'),
  preview: imagePreview({ width: '50%', marginLeft: '49%' })
}

export default {
  name: 'richContent',
  title: 'Content',
  type: 'array',
  of: [
    { type: 'block' },
    { type: 'verticalSpace', icon: icon('\u2195') },
    centerImage,
    leftImage,
    rightImage,
    { type: 'centerImageWithWidth', icon: icon('\u2502\u2610\u2502') },
    { type: 'leftImageWithWidth', icon: icon('\u250f\u2502', 'left') },
    { type: 'rightImageWithWidth', icon: icon('\u2502\u2513', 'right') }
  ]
}
