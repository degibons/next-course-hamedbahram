const page = async () => {
  await new Promise(r => setTimeout(r, 3000))
  return (
    <div className="h-32 flex-1 rounded-xl bg-pink-800 p-10 text-white">
      <h1 className="text-3xl font-bold">Team</h1>
    </div>
  )
}
export default page
