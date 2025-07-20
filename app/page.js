import ImageBanner from '@/components/ImageBanner'
import Products from '@/components/Products'
import React from 'react'

const page = () => {
  return (
    <>
      <ImageBanner />
      <section>
        <Products />
      </section>
    </ >
  )
}

export default page