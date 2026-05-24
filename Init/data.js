const sampleListings = [

{
  title: "Serenity Treehouse 1",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 7029,
  location: "Bali",
  country: "Indonesia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Mountain Haven 2",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  price: 12574,
  location: "Munnar",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Heritage Retreat 3",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 5141,
  location: "Manali",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Skyline Stay 4",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
  },
  price: 12687,
  location: "Sydney",
  country: "Australia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Crystal Lodge 5",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
  },
  price: 6959,
  location: "Cape Town",
  country: "South Africa",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Urban Palace 6",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 14677,
  location: "Kyoto",
  country: "Japan",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Vintage Haven 7",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 13740,
  location: "Reykjavik",
  country: "Iceland",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Royal Cabin 8",
  description: "A peaceful stay designed for relaxing vacations and memorable evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 12750,
  location: "Dubai",
  country: "UAE",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Hidden Cottage 9",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 14281,
  location: "Kyoto",
  country: "Japan",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Forest Homestay 10",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 8150,
  location: "Cape Town",
  country: "South Africa",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Paradise Penthouse 11",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 7202,
  location: "Zurich",
  country: "Switzerland",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Heritage Farmhouse 12",
  description: "Experience a blend of modern living and traditional charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 4349,
  location: "Goa",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Golden Cottage 13",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 11372,
  location: "Zurich",
  country: "Switzerland",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Luxury Treehouse 14",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 8571,
  location: "Sydney",
  country: "Australia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Ocean Haven 15",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 5603,
  location: "Santorini",
  country: "Greece",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Paradise Homestay 16",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 4334,
  location: "Istanbul",
  country: "Turkey",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Skyline Farmhouse 17",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 5361,
  location: "Barcelona",
  country: "Spain",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Crystal Lodge 18",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
  },
  price: 3341,
  location: "Ubud",
  country: "Indonesia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Urban Apartment 19",
  description: "A peaceful stay designed for relaxing vacations and memorable evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 10913,
  location: "Ubud",
  country: "Indonesia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Paradise Resort 20",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
  },
  price: 13506,
  location: "Toronto",
  country: "Canada",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Heritage Cottage 21",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 12844,
  location: "Dubai",
  country: "UAE",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Mountain Farmhouse 22",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
  },
  price: 10031,
  location: "Manali",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Paradise Apartment 23",
  description: "A peaceful stay designed for relaxing vacations and memorable evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 10916,
  location: "Dubai",
  country: "UAE",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Sunset Homestay 24",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 8734,
  location: "Paris",
  country: "France",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Golden Penthouse 25",
  description: "An ideal getaway with spacious rooms and stunning outdoor experiences.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 6861,
  location: "Paris",
  country: "France",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Serenity Lodge 26",
  description: "Experience a blend of modern living and traditional charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 7268,
  location: "Barcelona",
  country: "Spain",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Emerald Penthouse 27",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 8450,
  location: "Santorini",
  country: "Greece",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Urban Treehouse 28",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 13656,
  location: "Dubai",
  country: "UAE",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Urban Treehouse 29",
  description: "Perfect destination for travelers seeking comfort, elegance, and adventure.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 8435,
  location: "Venice",
  country: "Italy",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Hidden Lodge 30",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 6735,
  location: "Istanbul",
  country: "Turkey",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Urban Cabin 31",
  description: "A peaceful stay designed for relaxing vacations and memorable evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 8039,
  location: "Toronto",
  country: "Canada",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Heritage Treehouse 32",
  description: "Beautiful property with breathtaking surroundings and luxurious interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  price: 2994,
  location: "Sydney",
  country: "Australia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Palm Resort 33",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 5071,
  location: "Sydney",
  country: "Australia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Sunset Penthouse 34",
  description: "Beautiful property with breathtaking surroundings and luxurious interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 3686,
  location: "Paris",
  country: "France",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Mountain Cabin 35",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 5951,
  location: "Goa",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Urban Cottage 36",
  description: "A peaceful stay designed for relaxing vacations and memorable evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 8410,
  location: "Istanbul",
  country: "Turkey",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Palm Haven 37",
  description: "Perfect destination for travelers seeking comfort, elegance, and adventure.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
  },
  price: 6241,
  location: "Manali",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Skyline Villa 38",
  description: "A peaceful stay designed for relaxing vacations and memorable evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
  },
  price: 9941,
  location: "Paris",
  country: "France",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Skyline Homestay 39",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 7043,
  location: "Sydney",
  country: "Australia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Serenity Cabin 40",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  price: 2865,
  location: "Dubai",
  country: "UAE",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Paradise Retreat 41",
  description: "A peaceful stay designed for relaxing vacations and memorable evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
  },
  price: 7059,
  location: "Bali",
  country: "Indonesia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Serenity Haven 42",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 10703,
  location: "Barcelona",
  country: "Spain",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Golden Escape 43",
  description: "A peaceful stay designed for relaxing vacations and memorable evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 11189,
  location: "Kyoto",
  country: "Japan",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Moonlight Cabin 44",
  description: "Beautiful property with breathtaking surroundings and luxurious interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 14406,
  location: "Dubai",
  country: "UAE",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Bluewater Farmhouse 45",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 5325,
  location: "Goa",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Bluewater Retreat 46",
  description: "Perfect destination for travelers seeking comfort, elegance, and adventure.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
  },
  price: 4290,
  location: "Munnar",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Emerald Cottage 47",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  price: 7982,
  location: "Istanbul",
  country: "Turkey",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Snowfall Retreat 48",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 11391,
  location: "Kyoto",
  country: "Japan",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Royal Villa 49",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 13785,
  location: "Manali",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Moonlight Farmhouse 50",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 10140,
  location: "Istanbul",
  country: "Turkey",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Paradise Treehouse 51",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
  },
  price: 10825,
  location: "Bangkok",
  country: "Thailand",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Vintage Cottage 52",
  description: "A peaceful stay designed for relaxing vacations and memorable evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 9362,
  location: "Jaipur",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Forest Apartment 53",
  description: "Beautiful property with breathtaking surroundings and luxurious interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
  },
  price: 4359,
  location: "Goa",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Golden Apartment 54",
  description: "Perfect destination for travelers seeking comfort, elegance, and adventure.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 6694,
  location: "Bali",
  country: "Indonesia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Bluewater Palace 55",
  description: "Beautiful property with breathtaking surroundings and luxurious interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 11530,
  location: "Istanbul",
  country: "Turkey",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Forest Penthouse 56",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
  },
  price: 3696,
  location: "Toronto",
  country: "Canada",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Heritage Villa 57",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
  },
  price: 4521,
  location: "Manali",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Crystal Stay 58",
  description: "A peaceful stay designed for relaxing vacations and memorable evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  price: 5600,
  location: "Paris",
  country: "France",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Serenity Penthouse 59",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  price: 14265,
  location: "Dubai",
  country: "UAE",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Moonlight Stay 60",
  description: "Perfect destination for travelers seeking comfort, elegance, and adventure.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 13462,
  location: "Istanbul",
  country: "Turkey",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Sunset Homestay 61",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 7238,
  location: "New York",
  country: "USA",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Skyline Homestay 62",
  description: "Perfect destination for travelers seeking comfort, elegance, and adventure.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
  },
  price: 7918,
  location: "Sydney",
  country: "Australia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Sunset Escape 63",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 14208,
  location: "Reykjavik",
  country: "Iceland",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Forest Homestay 64",
  description: "Luxury stay surrounded by nature, culture, and beautiful architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 2903,
  location: "Goa",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Skyline Haven 65",
  description: "Perfect destination for travelers seeking comfort, elegance, and adventure.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 5479,
  location: "Goa",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Serenity Resort 66",
  description: "Perfect destination for travelers seeking comfort, elegance, and adventure.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 11749,
  location: "New York",
  country: "USA",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Mountain Villa 67",
  description: "Beautiful property with breathtaking surroundings and luxurious interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
  },
  price: 12716,
  location: "Cape Town",
  country: "South Africa",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Palm Apartment 68",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 7430,
  location: "Manali",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Snowfall Resort 69",
  description: "A peaceful stay designed for relaxing vacations and memorable evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 9027,
  location: "Ubud",
  country: "Indonesia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Bluewater Resort 70",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 9412,
  location: "New York",
  country: "USA",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Ocean Cottage 71",
  description: "A peaceful stay designed for relaxing vacations and memorable evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 8130,
  location: "Zurich",
  country: "Switzerland",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Urban Treehouse 72",
  description: "Perfect destination for travelers seeking comfort, elegance, and adventure.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 5640,
  location: "Istanbul",
  country: "Turkey",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Snowfall Haven 73",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 10458,
  location: "Sydney",
  country: "Australia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Sunset Penthouse 74",
  description: "A peaceful stay designed for relaxing vacations and memorable evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  price: 7552,
  location: "Bali",
  country: "Indonesia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Moonlight Lodge 75",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 3482,
  location: "Cape Town",
  country: "South Africa",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Serenity Villa 76",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 9337,
  location: "Sydney",
  country: "Australia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Heritage Treehouse 77",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 7757,
  location: "Bangkok",
  country: "Thailand",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Luxury Palace 78",
  description: "Perfect destination for travelers seeking comfort, elegance, and adventure.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 3595,
  location: "Bangkok",
  country: "Thailand",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Snowfall Cabin 79",
  description: "An ideal getaway with spacious rooms and stunning outdoor experiences.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  price: 14704,
  location: "Toronto",
  country: "Canada",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Mountain Apartment 80",
  description: "Experience a blend of modern living and traditional charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 14796,
  location: "Jaipur",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Palm Escape 81",
  description: "Experience a blend of modern living and traditional charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  price: 8336,
  location: "Bangkok",
  country: "Thailand",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Heritage Lodge 82",
  description: "Luxury stay surrounded by nature, culture, and beautiful architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 8817,
  location: "Dubai",
  country: "UAE",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Sunset Villa 83",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  price: 6404,
  location: "Toronto",
  country: "Canada",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Royal Cabin 84",
  description: "Perfect destination for travelers seeking comfort, elegance, and adventure.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 7226,
  location: "Bali",
  country: "Indonesia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Skyline Stay 85",
  description: "Beautiful property with breathtaking surroundings and luxurious interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 3962,
  location: "Barcelona",
  country: "Spain",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Moonlight Villa 86",
  description: "Experience a blend of modern living and traditional charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 11701,
  location: "Cape Town",
  country: "South Africa",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Forest Haven 87",
  description: "Experience a blend of modern living and traditional charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  price: 3441,
  location: "Sydney",
  country: "Australia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Moonlight Farmhouse 88",
  description: "Luxury stay surrounded by nature, culture, and beautiful architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 7927,
  location: "Zurich",
  country: "Switzerland",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Golden Cottage 89",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 8496,
  location: "Sydney",
  country: "Australia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Skyline Resort 90",
  description: "Perfect destination for travelers seeking comfort, elegance, and adventure.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
  },
  price: 8143,
  location: "Cape Town",
  country: "South Africa",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Serenity Retreat 91",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 13686,
  location: "Zurich",
  country: "Switzerland",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Vintage Escape 92",
  description: "Beautiful property with breathtaking surroundings and luxurious interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 7000,
  location: "New York",
  country: "USA",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Crystal Homestay 93",
  description: "A peaceful stay designed for relaxing vacations and memorable evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 14078,
  location: "Toronto",
  country: "Canada",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Crystal Haven 94",
  description: "Perfect destination for travelers seeking comfort, elegance, and adventure.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 9856,
  location: "Venice",
  country: "Italy",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Mountain Cottage 95",
  description: "Luxury stay surrounded by nature, culture, and beautiful architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 2774,
  location: "Paris",
  country: "France",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Hidden Lodge 96",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 8615,
  location: "Bangkok",
  country: "Thailand",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Bluewater Villa 97",
  description: "Beautiful property with breathtaking surroundings and luxurious interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 11704,
  location: "Toronto",
  country: "Canada",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Palm Cottage 98",
  description: "Perfect destination for travelers seeking comfort, elegance, and adventure.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  price: 12333,
  location: "Barcelona",
  country: "Spain",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Golden Retreat 99",
  description: "An ideal getaway with spacious rooms and stunning outdoor experiences.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 10030,
  location: "Cape Town",
  country: "South Africa",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Ocean Resort 100",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 3881,
  location: "Santorini",
  country: "Greece",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Royal Escape 101",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  price: 6514,
  location: "Manali",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Snowfall Retreat 102",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 5917,
  location: "Goa",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Moonlight Penthouse 103",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 12756,
  location: "Cape Town",
  country: "South Africa",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Golden Lodge 104",
  description: "A peaceful stay designed for relaxing vacations and memorable evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 10148,
  location: "Dubai",
  country: "UAE",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Crystal Treehouse 105",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  price: 14755,
  location: "Manali",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Mountain Farmhouse 106",
  description: "Luxury stay surrounded by nature, culture, and beautiful architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 5058,
  location: "Paris",
  country: "France",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Hidden Cabin 107",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  price: 13221,
  location: "Goa",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Moonlight Haven 108",
  description: "Beautiful property with breathtaking surroundings and luxurious interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 4358,
  location: "Santorini",
  country: "Greece",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Palm Homestay 109",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  price: 5199,
  location: "Dubai",
  country: "UAE",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Forest Farmhouse 110",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 11548,
  location: "Reykjavik",
  country: "Iceland",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Mountain Apartment 111",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 4920,
  location: "Cape Town",
  country: "South Africa",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Crystal Escape 112",
  description: "An ideal getaway with spacious rooms and stunning outdoor experiences.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 12066,
  location: "Ubud",
  country: "Indonesia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Paradise Cabin 113",
  description: "A peaceful stay designed for relaxing vacations and memorable evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 5137,
  location: "Paris",
  country: "France",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Palm Escape 114",
  description: "An ideal getaway with spacious rooms and stunning outdoor experiences.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 5166,
  location: "Dubai",
  country: "UAE",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Royal Resort 115",
  description: "Perfect destination for travelers seeking comfort, elegance, and adventure.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 11911,
  location: "Sydney",
  country: "Australia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Golden Penthouse 116",
  description: "Experience a blend of modern living and traditional charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 11201,
  location: "Munnar",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Crystal Escape 117",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 5360,
  location: "Ubud",
  country: "Indonesia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Heritage Penthouse 118",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 3773,
  location: "Zurich",
  country: "Switzerland",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Forest Resort 119",
  description: "Beautiful property with breathtaking surroundings and luxurious interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  price: 14426,
  location: "Cape Town",
  country: "South Africa",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Mountain Palace 120",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 10848,
  location: "Santorini",
  country: "Greece",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Urban Cabin 121",
  description: "Beautiful property with breathtaking surroundings and luxurious interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  price: 3108,
  location: "Goa",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Mountain Treehouse 122",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 13664,
  location: "Sydney",
  country: "Australia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Snowfall Treehouse 123",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 6062,
  location: "Sydney",
  country: "Australia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Bluewater Palace 124",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 14545,
  location: "Venice",
  country: "Italy",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Serenity Apartment 125",
  description: "Experience a blend of modern living and traditional charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 7122,
  location: "Manali",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Palm Villa 126",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 9019,
  location: "Sydney",
  country: "Australia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Snowfall Lodge 127",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 2545,
  location: "Ubud",
  country: "Indonesia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Urban Haven 128",
  description: "Perfect destination for travelers seeking comfort, elegance, and adventure.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  price: 9332,
  location: "Kyoto",
  country: "Japan",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Royal Haven 129",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 7236,
  location: "Reykjavik",
  country: "Iceland",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Serenity Apartment 130",
  description: "An ideal getaway with spacious rooms and stunning outdoor experiences.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 13868,
  location: "Jaipur",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Moonlight Resort 131",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 11714,
  location: "Toronto",
  country: "Canada",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Heritage Villa 132",
  description: "Experience a blend of modern living and traditional charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 11947,
  location: "Barcelona",
  country: "Spain",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Serenity Palace 133",
  description: "A peaceful stay designed for relaxing vacations and memorable evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  price: 9765,
  location: "Bali",
  country: "Indonesia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Emerald Villa 134",
  description: "Beautiful property with breathtaking surroundings and luxurious interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
  },
  price: 4392,
  location: "Bali",
  country: "Indonesia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Vintage Cabin 135",
  description: "Experience a blend of modern living and traditional charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 5630,
  location: "Santorini",
  country: "Greece",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Bluewater Treehouse 136",
  description: "An ideal getaway with spacious rooms and stunning outdoor experiences.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 9621,
  location: "Dubai",
  country: "UAE",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Emerald Cottage 137",
  description: "Beautiful property with breathtaking surroundings and luxurious interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  price: 3153,
  location: "Munnar",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Serenity Treehouse 138",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  price: 6866,
  location: "Reykjavik",
  country: "Iceland",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Palm Stay 139",
  description: "Beautiful property with breathtaking surroundings and luxurious interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 12009,
  location: "Munnar",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Hidden Palace 140",
  description: "Luxury stay surrounded by nature, culture, and beautiful architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 7388,
  location: "Reykjavik",
  country: "Iceland",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Serenity Homestay 141",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 3288,
  location: "New York",
  country: "USA",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Forest Escape 142",
  description: "An ideal getaway with spacious rooms and stunning outdoor experiences.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  price: 14553,
  location: "Dubai",
  country: "UAE",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Sunset Cottage 143",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  price: 5691,
  location: "Barcelona",
  country: "Spain",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Royal Apartment 144",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 7142,
  location: "Bali",
  country: "Indonesia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Bluewater Palace 145",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  price: 7117,
  location: "Munnar",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Sunset Homestay 146",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 14093,
  location: "Venice",
  country: "Italy",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Sunset Cabin 147",
  description: "Experience a blend of modern living and traditional charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  price: 3306,
  location: "Santorini",
  country: "Greece",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Mountain Resort 148",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
  },
  price: 4563,
  location: "Sydney",
  country: "Australia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Urban Retreat 149",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 14115,
  location: "Zurich",
  country: "Switzerland",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Sunset Villa 150",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  price: 9813,
  location: "New York",
  country: "USA",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Snowfall Farmhouse 151",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  price: 9358,
  location: "Zurich",
  country: "Switzerland",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Hidden Retreat 152",
  description: "An ideal getaway with spacious rooms and stunning outdoor experiences.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 4836,
  location: "Goa",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Urban Escape 153",
  description: "A peaceful stay designed for relaxing vacations and memorable evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
  },
  price: 6454,
  location: "Istanbul",
  country: "Turkey",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Heritage Penthouse 154",
  description: "A peaceful stay designed for relaxing vacations and memorable evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 5862,
  location: "Venice",
  country: "Italy",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Sunset Palace 155",
  description: "Luxury stay surrounded by nature, culture, and beautiful architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 10460,
  location: "Sydney",
  country: "Australia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Palm Treehouse 156",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
  },
  price: 12419,
  location: "Cape Town",
  country: "South Africa",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Moonlight Palace 157",
  description: "Perfect destination for travelers seeking comfort, elegance, and adventure.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 10311,
  location: "New York",
  country: "USA",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Heritage Escape 158",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 4280,
  location: "Manali",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Serenity Cottage 159",
  description: "Luxury stay surrounded by nature, culture, and beautiful architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 5343,
  location: "Goa",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Skyline Treehouse 160",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
  },
  price: 10035,
  location: "Cape Town",
  country: "South Africa",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Emerald Homestay 161",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 11393,
  location: "Bangkok",
  country: "Thailand",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Urban Cabin 162",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  price: 8193,
  location: "Paris",
  country: "France",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Snowfall Resort 163",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 11939,
  location: "Venice",
  country: "Italy",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Serenity Penthouse 164",
  description: "Luxury stay surrounded by nature, culture, and beautiful architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  price: 12929,
  location: "Istanbul",
  country: "Turkey",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Moonlight Treehouse 165",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
  },
  price: 13791,
  location: "Ubud",
  country: "Indonesia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Paradise Palace 166",
  description: "A peaceful stay designed for relaxing vacations and memorable evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 9285,
  location: "Barcelona",
  country: "Spain",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Emerald Retreat 167",
  description: "Luxury stay surrounded by nature, culture, and beautiful architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 5157,
  location: "Dubai",
  country: "UAE",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Paradise Stay 168",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 8502,
  location: "Cape Town",
  country: "South Africa",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Palm Escape 169",
  description: "A peaceful stay designed for relaxing vacations and memorable evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
  },
  price: 5471,
  location: "Santorini",
  country: "Greece",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Royal Retreat 170",
  description: "A peaceful stay designed for relaxing vacations and memorable evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 8469,
  location: "Bali",
  country: "Indonesia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Luxury Treehouse 171",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  price: 11482,
  location: "Santorini",
  country: "Greece",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Emerald Escape 172",
  description: "Perfect destination for travelers seeking comfort, elegance, and adventure.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
  },
  price: 10307,
  location: "Sydney",
  country: "Australia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Urban Stay 173",
  description: "An ideal getaway with spacious rooms and stunning outdoor experiences.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 12957,
  location: "Cape Town",
  country: "South Africa",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Golden Apartment 174",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 8647,
  location: "Jaipur",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Hidden Apartment 175",
  description: "Experience a blend of modern living and traditional charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
  },
  price: 14149,
  location: "Jaipur",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Crystal Haven 176",
  description: "Perfect destination for travelers seeking comfort, elegance, and adventure.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 13428,
  location: "Paris",
  country: "France",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Heritage Cottage 177",
  description: "Experience a blend of modern living and traditional charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
  },
  price: 7379,
  location: "Bali",
  country: "Indonesia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Ocean Stay 178",
  description: "Beautiful property with breathtaking surroundings and luxurious interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 11116,
  location: "Bangkok",
  country: "Thailand",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Luxury Lodge 179",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 12764,
  location: "Venice",
  country: "Italy",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Palm Escape 180",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 7140,
  location: "Venice",
  country: "Italy",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Moonlight Homestay 181",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 7218,
  location: "Munnar",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Urban Retreat 182",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 5840,
  location: "Jaipur",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Sunset Escape 183",
  description: "A peaceful stay designed for relaxing vacations and memorable evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 5225,
  location: "Cape Town",
  country: "South Africa",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Hidden Retreat 184",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 5449,
  location: "Bangkok",
  country: "Thailand",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Ocean Apartment 185",
  description: "An ideal getaway with spacious rooms and stunning outdoor experiences.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  price: 6127,
  location: "Bangkok",
  country: "Thailand",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Forest Apartment 186",
  description: "Beautiful property with breathtaking surroundings and luxurious interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 13966,
  location: "Munnar",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Crystal Villa 187",
  description: "An ideal getaway with spacious rooms and stunning outdoor experiences.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
  },
  price: 10315,
  location: "Istanbul",
  country: "Turkey",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Crystal Resort 188",
  description: "Luxury stay surrounded by nature, culture, and beautiful architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 14087,
  location: "Istanbul",
  country: "Turkey",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Ocean Retreat 189",
  description: "A peaceful stay designed for relaxing vacations and memorable evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
  },
  price: 11625,
  location: "Manali",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Urban Retreat 190",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
  },
  price: 7587,
  location: "Jaipur",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Skyline Cottage 191",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  price: 6839,
  location: "New York",
  country: "USA",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Skyline Lodge 192",
  description: "Experience a blend of modern living and traditional charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 3142,
  location: "Santorini",
  country: "Greece",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Moonlight Palace 193",
  description: "Beautiful property with breathtaking surroundings and luxurious interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 4135,
  location: "Manali",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Hidden Retreat 194",
  description: "Beautiful property with breathtaking surroundings and luxurious interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 7426,
  location: "New York",
  country: "USA",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Royal Escape 195",
  description: "Perfect destination for travelers seeking comfort, elegance, and adventure.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 3711,
  location: "Barcelona",
  country: "Spain",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Mountain Homestay 196",
  description: "An ideal getaway with spacious rooms and stunning outdoor experiences.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 9775,
  location: "Paris",
  country: "France",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Ocean Lodge 197",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 9543,
  location: "Sydney",
  country: "Australia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Forest Villa 198",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 7076,
  location: "Cape Town",
  country: "South Africa",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Golden Lodge 199",
  description: "Experience a blend of modern living and traditional charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 12369,
  location: "Goa",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Skyline Apartment 200",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
  },
  price: 4089,
  location: "Santorini",
  country: "Greece",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Mountain Stay 201",
  description: "Perfect destination for travelers seeking comfort, elegance, and adventure.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  price: 2575,
  location: "Santorini",
  country: "Greece",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Ocean Apartment 202",
  description: "Perfect destination for travelers seeking comfort, elegance, and adventure.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  price: 13797,
  location: "Paris",
  country: "France",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Palm Haven 203",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
  },
  price: 14047,
  location: "Goa",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Luxury Villa 204",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 6353,
  location: "Reykjavik",
  country: "Iceland",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Palm Palace 205",
  description: "Experience a blend of modern living and traditional charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
  },
  price: 3128,
  location: "Dubai",
  country: "UAE",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Crystal Farmhouse 206",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 9614,
  location: "Toronto",
  country: "Canada",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Mountain Stay 207",
  description: "Luxury stay surrounded by nature, culture, and beautiful architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 3336,
  location: "Paris",
  country: "France",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Crystal Farmhouse 208",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
  },
  price: 7324,
  location: "Manali",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Palm Stay 209",
  description: "A peaceful stay designed for relaxing vacations and memorable evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 12250,
  location: "Ubud",
  country: "Indonesia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Palm Resort 210",
  description: "An ideal getaway with spacious rooms and stunning outdoor experiences.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 6652,
  location: "Kyoto",
  country: "Japan",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Ocean Homestay 211",
  description: "Experience a blend of modern living and traditional charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 8728,
  location: "Kyoto",
  country: "Japan",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Vintage Treehouse 212",
  description: "Perfect destination for travelers seeking comfort, elegance, and adventure.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
  },
  price: 11461,
  location: "Paris",
  country: "France",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Vintage Escape 213",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 10375,
  location: "Goa",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Crystal Cabin 214",
  description: "Luxury stay surrounded by nature, culture, and beautiful architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  price: 4580,
  location: "Venice",
  country: "Italy",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Emerald Lodge 215",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  price: 3690,
  location: "Ubud",
  country: "Indonesia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Paradise Farmhouse 216",
  description: "Luxury stay surrounded by nature, culture, and beautiful architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 5130,
  location: "Goa",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Snowfall Farmhouse 217",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 13573,
  location: "Bangkok",
  country: "Thailand",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Palm Stay 218",
  description: "Perfect destination for travelers seeking comfort, elegance, and adventure.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  price: 4910,
  location: "New York",
  country: "USA",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Luxury Cottage 219",
  description: "Luxury stay surrounded by nature, culture, and beautiful architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 12177,
  location: "Manali",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Hidden Villa 220",
  description: "Experience a blend of modern living and traditional charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 6528,
  location: "Bali",
  country: "Indonesia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Emerald Stay 221",
  description: "Perfect destination for travelers seeking comfort, elegance, and adventure.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 3396,
  location: "Zurich",
  country: "Switzerland",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Heritage Haven 222",
  description: "Luxury stay surrounded by nature, culture, and beautiful architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 3354,
  location: "Munnar",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Moonlight Lodge 223",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  price: 14749,
  location: "New York",
  country: "USA",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Sunset Apartment 224",
  description: "Experience a blend of modern living and traditional charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 11984,
  location: "Zurich",
  country: "Switzerland",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Emerald Farmhouse 225",
  description: "Luxury stay surrounded by nature, culture, and beautiful architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 3371,
  location: "Toronto",
  country: "Canada",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Ocean Resort 226",
  description: "A peaceful stay designed for relaxing vacations and memorable evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 7429,
  location: "Sydney",
  country: "Australia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Ocean Haven 227",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
  },
  price: 4282,
  location: "Reykjavik",
  country: "Iceland",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Palm Cottage 228",
  description: "Luxury stay surrounded by nature, culture, and beautiful architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 5623,
  location: "Bali",
  country: "Indonesia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Palm Treehouse 229",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 5883,
  location: "Sydney",
  country: "Australia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Bluewater Haven 230",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 7557,
  location: "Kyoto",
  country: "Japan",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Moonlight Cottage 231",
  description: "A peaceful stay designed for relaxing vacations and memorable evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 2704,
  location: "Istanbul",
  country: "Turkey",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Hidden Treehouse 232",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 4319,
  location: "Goa",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Skyline Homestay 233",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 7273,
  location: "Bali",
  country: "Indonesia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Golden Lodge 234",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 4210,
  location: "Munnar",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Heritage Escape 235",
  description: "An ideal getaway with spacious rooms and stunning outdoor experiences.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 7815,
  location: "Manali",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Emerald Lodge 236",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
  },
  price: 14146,
  location: "New York",
  country: "USA",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Emerald Treehouse 237",
  description: "Experience a blend of modern living and traditional charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 3185,
  location: "Zurich",
  country: "Switzerland",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Skyline Farmhouse 238",
  description: "An ideal getaway with spacious rooms and stunning outdoor experiences.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 7442,
  location: "Zurich",
  country: "Switzerland",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Paradise Haven 239",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 4111,
  location: "Reykjavik",
  country: "Iceland",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Heritage Apartment 240",
  description: "An ideal getaway with spacious rooms and stunning outdoor experiences.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 9614,
  location: "Manali",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Ocean Homestay 241",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
  },
  price: 4050,
  location: "Jaipur",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Bluewater Haven 242",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 13234,
  location: "Venice",
  country: "Italy",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Urban Palace 243",
  description: "A peaceful stay designed for relaxing vacations and memorable evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 10959,
  location: "Jaipur",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Mountain Treehouse 244",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 12784,
  location: "Reykjavik",
  country: "Iceland",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Royal Penthouse 245",
  description: "Perfect destination for travelers seeking comfort, elegance, and adventure.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  price: 14454,
  location: "New York",
  country: "USA",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Emerald Stay 246",
  description: "Experience a blend of modern living and traditional charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  price: 6013,
  location: "Kyoto",
  country: "Japan",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Bluewater Resort 247",
  description: "Beautiful property with breathtaking surroundings and luxurious interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 3682,
  location: "Toronto",
  country: "Canada",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Golden Treehouse 248",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 3604,
  location: "Paris",
  country: "France",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Urban Stay 249",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  price: 6288,
  location: "Toronto",
  country: "Canada",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Luxury Cottage 250",
  description: "Experience a blend of modern living and traditional charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
  },
  price: 14069,
  location: "New York",
  country: "USA",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Hidden Lodge 251",
  description: "Perfect destination for travelers seeking comfort, elegance, and adventure.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 13442,
  location: "Jaipur",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Palm Penthouse 252",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  price: 11064,
  location: "Bali",
  country: "Indonesia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Emerald Penthouse 253",
  description: "A peaceful stay designed for relaxing vacations and memorable evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 5997,
  location: "Bangkok",
  country: "Thailand",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Palm Palace 254",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 14879,
  location: "Dubai",
  country: "UAE",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Ocean Penthouse 255",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 4741,
  location: "Reykjavik",
  country: "Iceland",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Palm Homestay 256",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 12586,
  location: "Kyoto",
  country: "Japan",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Golden Haven 257",
  description: "Perfect destination for travelers seeking comfort, elegance, and adventure.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  price: 3647,
  location: "Venice",
  country: "Italy",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Urban Cabin 258",
  description: "Perfect destination for travelers seeking comfort, elegance, and adventure.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 13477,
  location: "Cape Town",
  country: "South Africa",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Heritage Palace 259",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 12209,
  location: "Barcelona",
  country: "Spain",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Snowfall Palace 260",
  description: "Experience a blend of modern living and traditional charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 6566,
  location: "Jaipur",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Emerald Lodge 261",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 5208,
  location: "Manali",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Hidden Homestay 262",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 6176,
  location: "Ubud",
  country: "Indonesia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Paradise Stay 263",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 8870,
  location: "Reykjavik",
  country: "Iceland",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Crystal Apartment 264",
  description: "Luxury stay surrounded by nature, culture, and beautiful architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 4336,
  location: "Toronto",
  country: "Canada",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Paradise Homestay 265",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 7324,
  location: "New York",
  country: "USA",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Snowfall Stay 266",
  description: "Experience a blend of modern living and traditional charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
  },
  price: 8985,
  location: "Manali",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Skyline Palace 267",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
  },
  price: 3689,
  location: "Ubud",
  country: "Indonesia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Vintage Apartment 268",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
  },
  price: 6576,
  location: "New York",
  country: "USA",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Sunset Resort 269",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  price: 9507,
  location: "Barcelona",
  country: "Spain",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Palm Haven 270",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 12974,
  location: "Jaipur",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Luxury Cottage 271",
  description: "Beautiful property with breathtaking surroundings and luxurious interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 12497,
  location: "Sydney",
  country: "Australia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Golden Cottage 272",
  description: "Luxury stay surrounded by nature, culture, and beautiful architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  price: 12296,
  location: "Istanbul",
  country: "Turkey",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Royal Stay 273",
  description: "Beautiful property with breathtaking surroundings and luxurious interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
  },
  price: 6245,
  location: "Dubai",
  country: "UAE",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Palm Cabin 274",
  description: "An ideal getaway with spacious rooms and stunning outdoor experiences.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 11355,
  location: "Barcelona",
  country: "Spain",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Serenity Haven 275",
  description: "An ideal getaway with spacious rooms and stunning outdoor experiences.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 7397,
  location: "Barcelona",
  country: "Spain",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Serenity Lodge 276",
  description: "Experience a blend of modern living and traditional charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  price: 5519,
  location: "Jaipur",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Bluewater Palace 277",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
  },
  price: 14810,
  location: "Santorini",
  country: "Greece",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Moonlight Homestay 278",
  description: "Luxury stay surrounded by nature, culture, and beautiful architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 7259,
  location: "Venice",
  country: "Italy",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Palm Haven 279",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 7769,
  location: "Santorini",
  country: "Greece",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Golden Cabin 280",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
  },
  price: 13145,
  location: "Zurich",
  country: "Switzerland",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Serenity Palace 281",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 14782,
  location: "Jaipur",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Paradise Retreat 282",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 12257,
  location: "Bali",
  country: "Indonesia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Bluewater Palace 283",
  description: "Luxury stay surrounded by nature, culture, and beautiful architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 12971,
  location: "Jaipur",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Royal Homestay 284",
  description: "Beautiful property with breathtaking surroundings and luxurious interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 10416,
  location: "Dubai",
  country: "UAE",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Emerald Haven 285",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 4370,
  location: "Dubai",
  country: "UAE",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Sunset Farmhouse 286",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 3984,
  location: "Ubud",
  country: "Indonesia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Palm Farmhouse 287",
  description: "Luxury stay surrounded by nature, culture, and beautiful architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 3913,
  location: "Istanbul",
  country: "Turkey",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Forest Apartment 288",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 3972,
  location: "Jaipur",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Skyline Apartment 289",
  description: "Experience a blend of modern living and traditional charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  price: 3251,
  location: "Ubud",
  country: "Indonesia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Bluewater Retreat 290",
  description: "Modern accommodation featuring premium amenities and scenic views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  price: 12979,
  location: "Istanbul",
  country: "Turkey",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Palm Treehouse 291",
  description: "Experience a blend of modern living and traditional charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  price: 9076,
  location: "Paris",
  country: "France",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Sunset Lodge 292",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  price: 3138,
  location: "Zurich",
  country: "Switzerland",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Paradise Treehouse 293",
  description: "Luxury stay surrounded by nature, culture, and beautiful architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  price: 7435,
  location: "Manali",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Urban Retreat 294",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 10926,
  location: "Istanbul",
  country: "Turkey",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Heritage Penthouse 295",
  description: "Elegant property offering privacy, comfort, and exceptional service.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 11349,
  location: "Zurich",
  country: "Switzerland",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Hidden Cabin 296",
  description: "Beautiful property with breathtaking surroundings and luxurious interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
  },
  price: 12341,
  location: "Ubud",
  country: "Indonesia",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Sunset Apartment 297",
  description: "An ideal getaway with spacious rooms and stunning outdoor experiences.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
  },
  price: 4245,
  location: "Goa",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Emerald Homestay 298",
  description: "Enjoy cozy interiors, stylish rooms, and unforgettable hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  price: 8462,
  location: "Jaipur",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Golden Escape 299",
  description: "A dream vacation home perfect for families, couples, and solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 9300,
  location: "Jaipur",
  country: "India",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},

{
  title: "Royal Apartment 300",
  description: "Beautiful property with breathtaking surroundings and luxurious interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  price: 3189,
  location: "Zurich",
  country: "Switzerland",
  reviews: [],
  owner: "69f5b6d50afe4e6100dc63bb"
},
];

module.exports = { data: sampleListings };
