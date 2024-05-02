async function getTodos() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')

    if (!res.ok) {
      throw new Error()
    }

    return res.json()
  } catch (error) {
    throw new Error('Failed to fetch todos')
  }
}

const Page = async () => {
  const todos = await getTodos()

  return (
    <section>
      <h1 className="text-3xl font-bold">Todos</h1>
      <ul className="mt-6 flex flex-col gap-3">
        {todos.slice(0, 10).map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </section>
  )
}
export default Page
