import React, { useEffect } from 'react'

export default function ContactPage({updatePageName}) {

  useEffect(() => {
    updatePageName('contact')
  }, [])

  return (
    <div>ContactPage</div>
  )
}
