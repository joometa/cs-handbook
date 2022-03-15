import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'

const IndexPage: FunctionComponent = function () {
  return (
    <main>
      <Link to="/infos/">To Infos</Link>
    </main>
  )
}

export default IndexPage
