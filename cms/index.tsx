import React from 'react'
import CMS from 'netlify-cms-app'
import { injectStyles, register } from './helpers'
import './preview-pane.css'

import NavigationPreview from './preview-components/NavigationPreview'

////////////////////////////////////////////////////////////////////////////////
// Register all preview components here

register('nav-items', NavigationPreview)

CMS.init()
