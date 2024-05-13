const page = async () => {
  await new Promise(r => setTimeout(r, 3000))
  return (
    <div className="h-32 flex-1 rounded-xl bg-sky-800 p-10 text-white">
      <h1 className="text-3xl font-bold">Default Main</h1>
    </div>
  )
}
export default page
