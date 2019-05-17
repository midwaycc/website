import React from 'react'
import CMS from 'netlify-cms-app'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import theme from '~/theme'

export const injectStyles = Wrapped =>
  class extends React.Component {
    render() {
      const previewFrame = document.querySelector('#nc-root iframe')
      const previewFrameHead = previewFrame && previewFrame.contentDocument.head

      if (!previewFrameHead) {
        return null
      }

      return (
        <StyleSheetManager target={previewFrameHead}>
          <ThemeProvider theme={theme}>
            <Wrapped {...this.props} />
          </ThemeProvider>
        </StyleSheetManager>
      )
    }
  }

export const register = (collection, Component) =>
  CMS.registerPreviewTemplate(collection, injectStyles(Component))
