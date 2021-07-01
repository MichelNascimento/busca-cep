import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home/Home'
import Result from './pages/Result/Result'
import NotFound from './pages/NotFound/NotFound'

export const routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Switch>
        <Route path="/" exact component={Result} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}