import { redirect } from 'react-router'
export async function requiresAuth({ request }: { request: Request }) {
  const token = localStorage.getItem('token')
  if (token) {
    return true
  }

  const url = new URL(request.url)
  const redirectTo = url.pathname + url.search
  return redirect(`/signin?redirectTo=${encodeURIComponent(redirectTo)}`)
}
