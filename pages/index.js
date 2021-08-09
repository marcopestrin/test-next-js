import Link from 'next/link'

export default function Home() {

  return (
    <>
      <ul>
        <li>
          <Link href="/list">
            <p>lista</p>
          </Link>
        </li>
        <li>
          <Link href="/details">
            <p>dettagli</p>
          </Link>
        </li>
      </ul>
    </>
  )
}
