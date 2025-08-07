function Card(props) {
  return (
    <div className="w-sm p-2 rounded-2xl flex flex-col gap-1">
      <img className="w-sm rounded-2xl" src="biryani.jpg" alt="image" />

      <div className="flex justify-between">
        <h1>{props.name}</h1>
        <h1 className="text-orange-300">{props.price}</h1>
      </div>

      <h1 className="max-w-fit p-1 px-2 bg-amber-200 rounded-full">{props.tags}</h1>
    </div>
  )
}

export default Card
