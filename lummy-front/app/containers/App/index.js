/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { HomePage } from '../HomePage/index'
import NotFoundPage from '../NotFoundPage/loadable'

import GlobalStyle from '../../global-styles'
import { Work } from '../Work/workMain'
import { SiteUrls } from '../../common/siteUrls'

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path={SiteUrls.Homepage.Main} component={HomePage} />
        <Route exact path={SiteUrls.Work.Main} component={Work} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  )
}
