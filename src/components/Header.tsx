import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

export default function Header() {
  return (
    <header>
      <Logo/ >
      <nav>
        <ul>
          <li><Link href="/events/all">All</Link></li>
          <li><Link href="/events/seatle">Seattle</Link></li>
          <li><Link href="/events/texas">Texas</Link></li>
        </ul>
      </nav>
    </header>
  )
}
