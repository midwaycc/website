import React from 'react'
import CMS from 'netlify-cms-app'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import theme from '~/theme'

export const injectStyles = (Wrapped: any) =>
  class extends React.Component {
    render() {
      const previewFrame: HTMLIFrameElement | null = document.querySelector(
        '#nc-root iframe'
      )
      const previewFrameHead =
        previewFrame &&
        previewFrame.contentDocument &&
        previewFrame.contentDocument.head

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

export const register = (
  collection: string,
  Component: React.ComponentType<{ entry: any }>
) => CMS.registerPreviewTemplate(collection, injectStyles(Component))
