import React from 'react'
import Navbar from '../components/Navbar'

function MyLibrary() {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      <Navbar />
      MyLibrary
    </motion.div>
  )
}

export default MyLibrary