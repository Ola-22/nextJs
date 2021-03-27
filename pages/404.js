import Link from 'next/link';
import { useRouter } from "next/router";
import { useEffect } from 'react';

function Error() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 3000)
  }, [])

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
