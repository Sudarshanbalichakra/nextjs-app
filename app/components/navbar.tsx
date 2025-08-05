'use client'

import Link from 'next/link'

export default function NavBar() {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '10px' }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/career">Career</Link>
    </nav>
  );
}
