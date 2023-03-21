import React from 'react'
import { clients } from '../constants'

function Clients() {
  return (
    <section id="clients" className="sm:flex m-auto w-fit flex-wrap items-center gap-20 sm:justify-between mb-10 sm:mb-0">
      {
        clients.map((client) => (
          <div key={client.id} className="mb-8">
            <img src={client.logo} className="w-[192px] cursor-pointer"/>
          </div>
        ))
      }
    </section>
  )
}

export default Clients