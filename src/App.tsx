import { BrowserRouter, Route, Routes } from "react-router-dom"

import GlobalStyles from "styles/GlobalStyles"
import Layout from "components/Layout/Layout"
import { routesData } from "routes/routes"
import type { RoutePage } from "routes/types"

function App() {
  const routes = routesData.map(({ path, element }: RoutePage) => {
    return <Route path={path} element={element} />
  })

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>{routes}</Routes>
      </Layout>
    </BrowserRouter>
  )
}
export default App
