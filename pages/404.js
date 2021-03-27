import Link from 'next/link'

function Error() {
  return (
    <div className="container">
      <h1>page not found</h1>
      <Link href="/">
        <a className="btn btn-dark">Go Home</a>
      </Link>
    </div>
  )
}

export default Error
