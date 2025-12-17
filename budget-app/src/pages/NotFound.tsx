import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-muted-foreground">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/dashboard"
        className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
      >
        Go back to Dashboard
      </Link>
    </div>
  )
}