import React from 'react'

import GraphicEditor from '../components/graphic-editor'

export default function Home() {
  return (
    <main>
      <h1>header from mold</h1>
      <GraphicEditor requiredScreenWidth={595} />
    </main>
  )
}
