function Header() {
  return (
    <div className="p-6 px-12 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img className="w-[3vw] rounded-full object-cover" src="saffron_spice.png" alt="" />
        <h1 className="text-[#5c3b23] text-3xl font-bold">Saffron Spice</h1>
      </div>
      <div>
        <nav className="flex items-center gap-12">
          <a className="text-[#30211d] text-2xl" href="#starters">Starters</a>
          <a className="text-[#30211d] text-2xl" href="#main_course">Main Course</a>
          <a className="text-[#30211d] text-2xl" href="#Snacks">Snacks</a>
          <a className="text-[#30211d] text-2xl" href="#continental">Continental</a>
          <a className="text-[#30211d] text-2xl" href="#asian">Asian</a>
          <button className="p-3 bg-amber-300 text-[#30211d] text-2xl rounded-lg hover:bg-amber-400" >Contact</button>
        </nav>
      </div>
    </div>
  )
}

export default Header
