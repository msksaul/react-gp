import { useEffect, useState } from "react"

export const PromiseError = () => {
  const [data] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        throw new Error("The promise broke")
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        }
      }
    }

    fetchData()
  }, [])

  if (error) {
    return <div>Something went wrong f: {error}</div>
  }

  return <div>{data}</div>
}