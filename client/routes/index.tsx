import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { useUsers } from '@/hooks/use-users'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const { data, isLoading, isError, refetch } = useUsers();
  return (
    <div className="flex min-h-svh flex-col items-center justify-center" >
      <h1>App </h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      <Button onClick={() => {
        console.log("refetching")
        refetch()
      }}>Refetch</Button>
    </div>
  )
}