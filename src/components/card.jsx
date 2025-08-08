function Card({ image, name, desc, price, tags }) {
  return (
    <div className="max-w-[28vw] p-2 py-4 rounded-2xl duration-200 ease-in-out flex flex-col gap-3 hover:scale-104">
      <img className="h-[25vh] w-[40vw] object-cover rounded-2xl" src={image} alt="image" />

      <div className="px-2 flex justify-between">
        <h1 className="text-xl font-bold text-[#5c3b23]">{name}</h1>
        <h1 className="text-xl font-bold text-[#ff9933]">{price}</h1>
      </div>
      <p className="px-2 min-h-12 text-sm text-[#846a62]">{desc}</p>

      <h1 className="max-w-fit p-1 px-2 bg-amber-200 text-[#5c3b23] rounded-full">{tags}</h1>
    </div>
  )
}

export default Card
