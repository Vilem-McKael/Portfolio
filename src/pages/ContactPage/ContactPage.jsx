import React, { useEffect } from 'react'

export default function ContactPage({updateSideBarLinks}) {

  useEffect(() => {
    updateSideBarLinks('contact')
  }, [])

  return (
    <div>ContactPage</div>
  )
}
