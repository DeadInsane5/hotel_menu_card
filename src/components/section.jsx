import Card from "./card"

function Section({ title, food_items }) {
  return (
    <div className="min-h-[100vh] bg-amber-50 flex flex-col">
      <h1 className="p-4 text-[#5c3b23] text-5xl font-extrabold text-center">{title}</h1>
      <div className='p-4 grid grid-cols-3 justify-items-center'>
        {food_items.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Section
