import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a href="https://tendotech.co.uk" target="_blank" rel="noopener noreferrer">
          TendoAdmin
        </a>
        <span className="ms-1">&copy; 2024 TendoTechLTD.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://tendotech.co.uk" target="_blank" rel="noopener noreferrer">
          TendoTech React Admin &amp; Dashboard 
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
