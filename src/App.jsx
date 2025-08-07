import './App.css'
import Card from './components/card'
import Section from './components/section';

const food_items_starters = [
  {
    image: "spring_rolls.jpg",
    name: "Spring Rolls",
    desc: "Crispy rolls filled with veggies and served with spicy dip.",
    price: "$120",
    tags: "Serves 2"
  },
  {
    image: "chilli_paneer.jpg",
    name: "Chilli Paneer",
    desc: "Spicy paneer cubes tossed with bell peppers and sauces.",
    price: "$180",
    tags: "Serves 2"
  },
  {
    image: "chicken_tikka.jpg",
    name: "Chicken Tikka",
    desc: "Tender chicken pieces marinated in spices and grilled to perfection.",
    price: "$220",
    tags: "Serves 2"
  },
  {
    image: "nachos.jpg",
    name: "Nachos",
    desc: "Crunchy nachos topped with melted cheese and tangy salsa.",
    price: "$150",
    tags: "Serves 2"
  },
  {
    image: "soup.jpg",
    name: "Manchow Soup",
    desc: "Hot and spicy vegetable soup with crispy noodles.",
    price: "$100",
    tags: "Serves 1"
  }
];

const food_items_main_course = [
  {
    image: "biryani.jpg",
    name: "Biryani",
    desc: "A fragrant, spiced rice dish layered with tender meat or vegetables, cooked to perfection.",
    price: "$250",
    tags: "Serves 2"
  },
  {
    image: "butter_chicken.jpg",
    name: "Butter Chicken",
    desc: "Rich and creamy tomato-based chicken curry.",
    price: "$270",
    tags: "Serves 2"
  },
  {
    image: "paneer_butter_masala.jpg",
    name: "Paneer Butter Masala",
    desc: "Cottage cheese cubes in a creamy tomato gravy.",
    price: "$230",
    tags: "Serves 2"
  },
  {
    image: "naan.jpg",
    name: "Butter Naan",
    desc: "Soft and fluffy Indian flatbread with butter.",
    price: "$40",
    tags: "Per Piece"
  },
  {
    image: "dal_makhani.jpg",
    name: "Dal Makhani",
    desc: "Slow-cooked black lentils in a buttery gravy.",
    price: "$190",
    tags: "Serves 2"
  }
];

const food_items_snacks = [
  {
    image: "samosa.jpg",
    name: "Samosa",
    desc: "Deep-fried pastry filled with spiced potatoes and peas.",
    price: "$30",
    tags: "Per Piece"
  },
  {
    image: "vada_pav.jpg",
    name: "Vada Pav",
    desc: "Spicy potato fritter served in a bun with chutneys.",
    price: "$40",
    tags: "Serves 1"
  },
  {
    image: "pakora.jpg",
    name: "Paneer Pakora",
    desc: "Paneer pieces coated in gram flour batter and deep-fried.",
    price: "$90",
    tags: "Serves 1"
  },
  {
    image: "bhel_puri.jpg",
    name: "Bhel Puri",
    desc: "Puffed rice snack with vegetables and tangy tamarind sauce.",
    price: "$60",
    tags: "Serves 1"
  }
];

const food_items_continental = [
  {
    image: "pizza.jpg",
    name: "Pizza",
    desc: "Cheesy delight topped with fresh vegetables and meat.",
    price: "$200",
    tags: "Serves 1-2"
  },
  {
    image: "pasta.jpg",
    name: "Pasta",
    desc: "Creamy white sauce pasta with herbs and spices.",
    price: "$180",
    tags: "Serves 1"
  },
  {
    image: "burger.jpg",
    name: "Burger",
    desc: "Juicy grilled patty sandwiched in a toasted bun with fresh veggies and sauces.",
    price: "$150",
    tags: "Serves 1"
  },
  {
    image: "fries.jpg",
    name: "French Fries",
    desc: "Golden fried potato sticks served with ketchup.",
    price: "$100",
    tags: "Serves 1"
  }
];

const food_items_asian = [
  {
    image: "noodles.jpg",
    name: "Noodles",
    desc: "Stir-fried noodles with colorful veggies and Asian sauces.",
    price: "$170",
    tags: "Serves 1"
  },
  {
    image: "fried_rice.jpg",
    name: "Fried Rice",
    desc: "Wok-tossed rice with vegetables and soy sauce.",
    price: "$160",
    tags: "Serves 1"
  },
  {
    image: "schezwan_rice.jpg",
    name: "Schezwan Rice",
    desc: "Spicy Chinese rice tossed with veggies and schezwan sauce.",
    price: "$180",
    tags: "Serves 1"
  },
  {
    image: "chinese_bhel.jpg",
    name: "Chinese Bhel",
    desc: "Crispy noodles mixed with veggies and tangy sauces.",
    price: "$110",
    tags: "Serves 1"
  },
  {
    image: "dimsum.jpg",
    name: "Dimsum",
    desc: "Steamed dumplings filled with vegetables or meat.",
    price: "$140",
    tags: "4 Pieces"
  }
];

function App() {
  return (
    <>
      <Section title="Starters" food_items={food_items_starters} />
      <Section title="Main Course" food_items={food_items_main_course} />
      <Section title="Snacks" food_items={food_items_snacks} />
      <Section title="Continental" food_items={food_items_continental} />
      <Section title="Asian" food_items={food_items_asian} />

    </>
  )
}

export default App
