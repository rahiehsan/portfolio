import React from 'react'
import './index.scss'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/index'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />

        <span className="tags bottom-tags">
          &lt;body&gt;
          {/**it's often used to display the literal text, where you want to display HTML code as plain text */}
          <br />
          <span className="bottom-tag-html">
          &lt;/html&gt;
          {/**it's often used to display the literal text, where you want to display HTML code as plain text */}
          </span>
        </span>
      </div>
    </div>
  )
}

export default Layout
