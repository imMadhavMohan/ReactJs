import React from 'react'
import ReactDOM  from 'react-dom'

function PortalDemo() {
  let eid = document.getElementById('portal-root');
  return ReactDOM.createPortal(
    <h1>
        Portal Demo
    </h1>
  , eid)
}

export default PortalDemo