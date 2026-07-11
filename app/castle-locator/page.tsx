"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { MapPin, Navigation, ShoppingBag } from "lucide-react";
import Footer from "../components/Footer";
import "./locator.css";

const storeData = [
  {
    city: "Ahmedabad",
    stores: [
      {
        name: "Chandkheda",
        address: "Chandkheda, Ahmedabad, Gujarat",
        link: "https://www.zomato.com/ahmedabad/waffle-castle-chandkheda/order"
      },
      {
        name: "Chandlodia",
        address: "Chandlodia, Ahmedabad, Gujarat",
        link: "https://www.zomato.com/ahmedabad/waffle-castle-chandlodia/order"
      },
      {
        name: "Kankaria",
        address: "Kankaria, Ahmedabad, Gujarat",
        link: "https://www.zomato.com/ahmedabad/waffle-castle-kankaria/order"
      },
      {
        name: "Paldi",
        address: "Paldi, Ahmedabad, Gujarat",
        link: "https://www.zomato.com/ahmedabad/waffle-castle-paldi/order"
      },
      {
        name: "Ranip",
        address: "Ranip, Ahmedabad, Gujarat",
        link: "https://www.zomato.com/ahmedabad/waffle-castle-ranip/order"
      },
      {
        name: "Satellite",
        address: "Satellite, Ahmedabad, Gujarat",
        link: "https://www.zomato.com/ahmedabad/waffle-castle-satellite/order"
      },
      {
        name: "Sela",
        address: "Sela, Ahmedabad, Gujarat",
        link: "https://www.zomato.com/ahmedabad/waffle-castle-sela/order"
      },
    ]
  },
  {
    city: "Amritsar",
    stores: [
      {
        name: "Ranjit Avenue",
        address: "Ranjit Avenue, Amritsar, Punjab",
        link: "https://www.zomato.com/amritsar/waffle-castle-ranjit-avenue/order"
      },
    ]
  },
  {
    city: "Ankleshwar",
    stores: [
      {
        name: "Ankleshwar Locality",
        address: "Ankleshwar Locality, Ankleshwar, Gujarat",
        link: "https://www.zomato.com/ankleshwar/waffle-castle-ankleshwar-locality/order"
      },
    ]
  },
  {
    city: "Belagavi",
    stores: [
      {
        name: "Belgaum Locality",
        address: "Belgaum Locality, Belagavi, Karnataka",
        link: "https://www.zomato.com/belgaum/waffle-castle-belgaum-locality/order"
      },
    ]
  },
  {
    city: "Bengaluru",
    stores: [
      {
        name: "Koramangala 7th Block",
        address: "Koramangala 7th Block, Bengaluru, Karnataka",
        link: "https://www.zomato.com/bangalore/waffle-castle-koramangala-7th-block-bangalore"
      },
      {
        name: "Whitefield",
        address: "Whitefield, Bengaluru, Karnataka",
        link: "https://www.zomato.com/bangalore/waffle-castle-varthur-main-road-whitefield-bangalore/order"
      },
    ]
  },
  {
    city: "Bharuch",
    stores: [
      {
        name: "Bharuch Locality (01)",
        address: "Bharuch Locality (01), Bharuch, Gujarat",
        link: "https://www.zomato.com/bharuch/waffle-castle-bharuch-locality/order"
      },
      {
        name: "Bharuch Locality (02)",
        address: "Bharuch Locality (02), Bharuch, Gujarat",
        link: "https://www.zomato.com/bharuch/waffle-castle-2-bharuch-locality/order"
      },
    ]
  },
  {
    city: "Bhilai",
    stores: [
      {
        name: "Nehru Nagar",
        address: "Nehru Nagar, Bhilai, Chhattisgarh",
        link: ""
      },
    ]
  },
  {
    city: "Bhopal",
    stores: [
      {
        name: "Sajidabad",
        address: "Sajidabad, Bhopal, Madhya Pradesh",
        link: "https://www.zomato.com/bhopal/waffle-castle-sajidabad/order"
      },
    ]
  },
  {
    city: "Bilaspur",
    stores: [
      {
        name: "Sarkanda",
        address: "Sarkanda, Bilaspur, Chhattisgarh",
        link: "https://www.zomato.com/bilaspur/waffle-castle-sarkanda/order"
      },
    ]
  },
  {
    city: "Boisar",
    stores: [
      {
        name: "Boisar",
        address: "Boisar, Boisar, Maharashtra",
        link: "https://www.zomato.com/mumbai/waffle-castle-boisar/order"
      },
    ]
  },
  {
    city: "Delhi",
    stores: [
      {
        name: "Adarsh Nagar",
        address: "Adarsh Nagar, Delhi, Delhi",
        link: "https://www.zomato.com/ncr/waffle-castle-adarsh-nagar-new-delhi/order"
      },
      {
        name: "Ashok Vihar Phase 2",
        address: "Ashok Vihar Phase 2, Delhi, Delhi",
        link: "https://www.zomato.com/ncr/waffle-castle-ashok-vihar-phase-2-new-delhi/order"
      },
      {
        name: "East Patel Nagar",
        address: "East Patel Nagar, Delhi, Delhi",
        link: "https://www.zomato.com/ncr/waffle-castle-1-vijay-nagar-new-delhi/order"
      },
      {
        name: "Krishna Nagar",
        address: "Krishna Nagar, Delhi, Delhi",
        link: "https://menu.petpooja.com/menus/menu_item_list_new"
      },
      {
        name: "Netaji Subhash Place",
        address: "Netaji Subhash Place, Delhi, Delhi",
        link: "https://www.zomato.com/ncr/waffle-castle-netaji-subhash-place-new-delhi/order"
      },
      {
        name: "Rohini",
        address: "Rohini, Delhi, Delhi",
        link: "https://www.zomato.com/ncr/waffle-castle-rohini-new-delhi/order"
      },
      {
        name: "Shalimar Bagh",
        address: "Shalimar Bagh, Delhi, Delhi",
        link: "https://www.zomato.com/ncr/waffle-castle-shalimar-bagh-new-delhi/order"
      },
      {
        name: "Vijay Nagar",
        address: "Vijay Nagar, Delhi, Delhi",
        link: "https://www.zomato.com/ncr/waffle-castle-vijay-nagar-new-delhi/order"
      },
    ]
  },
  {
    city: "Faridabad",
    stores: [
      {
        name: "Sector 17",
        address: "Sector 17, Faridabad, Haryana",
        link: "https://www.zomato.com/ncr/waffle-castle-sector-17-faridabad/order"
      },
      {
        name: "Sector 88",
        address: "Sector 88, Faridabad, Haryana",
        link: "https://www.zomato.com/ncr/waffle-castle-sector-88-faridabad/order"
      },
    ]
  },
  {
    city: "Gandhidham",
    stores: [
      {
        name: "Gandhidham",
        address: "Gandhidham, Gandhidham, Gujarat",
        link: "https://www.zomato.com/gandhidham/waffle-castle-gandhidham-locality/order"
      },
    ]
  },
  {
    city: "Gandhinagar",
    stores: [
      {
        name: "Gandhinagar Highway",
        address: "Gandhinagar Highway, Gandhinagar, Gujarat",
        link: "https://www.zomato.com/ahmedabad/waffle-castle-airport-gandhinagar-highway-gandhinagar/order"
      },
    ]
  },
  {
    city: "Gorakhpur",
    stores: [
      {
        name: "Basantpur",
        address: "Basantpur, Gorakhpur, Uttar Pradesh",
        link: "https://www.zomato.com/gorakhpur/waffle-castle-basantpur/order"
      },
    ]
  },
  {
    city: "Gurgaon",
    stores: [
      {
        name: "Palam Vihar",
        address: "Palam Vihar, Gurgaon, Haryana",
        link: "https://www.zomato.com/ncr/waffle-castle-palam-vihar-gurgaon/order"
      },
    ]
  },
  {
    city: "Himmatnagar",
    stores: [
      {
        name: "Himatnagar Locality",
        address: "Himatnagar Locality, Himmatnagar, Gujarat",
        link: "https://www.zomato.com/himatnagar/waffle-castle-himatnagar-locality/order"
      },
    ]
  },
  {
    city: "Hyderabad",
    stores: [
      {
        name: "Kukatpally",
        address: "Kukatpally, Hyderabad, Telangana",
        link: "https://www.zomato.com/hyderabad/waffle-castle-kukatpally/order"
      },
      {
        name: "Nacharam",
        address: "Nacharam, Hyderabad, Telangana",
        link: "https://www.zomato.com/hyderabad/waffle-castle-nacharam-secunderabad/order"
      },
    ]
  },
  {
    city: "Indore",
    stores: [
      {
        name: "Bhawar Kuan",
        address: "Bhawar Kuan, Indore, Madhya Pradesh",
        link: "https://www.zomato.com/indore/waffle-castle-bhawar-kuan/order"
      },
    ]
  },
  {
    city: "Jabalpur",
    stores: [
      {
        name: "Cantt",
        address: "Cantt, Jabalpur, Madhya Pradesh",
        link: "https://www.zomato.com/jabalpur/waffle-castle-cantt/order"
      },
      {
        name: "Rampur",
        address: "Rampur, Jabalpur, Madhya Pradesh",
        link: "https://www.zomato.com/jabalpur/waffle-castle-rampur/order"
      },
      {
        name: "Wright Town",
        address: "Wright Town, Jabalpur, Madhya Pradesh",
        link: "https://www.zomato.com/jabalpur/waffle-castle-wright-town/order"
      },
    ]
  },
  {
    city: "Jagdalpur",
    stores: [
      {
        name: "Jagdalpur Locality",
        address: "Jagdalpur Locality, Jagdalpur, Chhattisgarh",
        link: "https://www.zomato.com/jagdalpur/waffle-castle-jagdalpur-locality/order"
      },
    ]
  },
  {
    city: "Jaipur",
    stores: [
      {
        name: "Jagatpura",
        address: "Jagatpura, Jaipur, Rajasthan",
        link: "https://www.zomato.com/jaipur/waffle-castle-jagatpura/order"
      },
      {
        name: "Raja Park",
        address: "Raja Park, Jaipur, Rajasthan",
        link: "https://www.zomato.com/jaipur/waffle-castle-raja-park/order"
      },
      {
        name: "Vaishali Nagar",
        address: "Vaishali Nagar, Jaipur, Rajasthan",
        link: "https://www.zomato.com/jaipur/waffle-castle-vaishali-nagar/order"
      },
    ]
  },
  {
    city: "Jammu",
    stores: [
      {
        name: "Nanak Nagar",
        address: "Nanak Nagar, Jammu, Jammu & Kashmir",
        link: "https://www.zomato.com/jammu/waffle-castle-nanak-nagar/order"
      },
    ]
  },
  {
    city: "Jaunpur",
    stores: [
      {
        name: "Jaunpur Locality",
        address: "Jaunpur Locality, Jaunpur, Uttar Pradesh",
        link: "https://www.zomato.com/jaunpur/waffle-castle-jaunpur-locality/order"
      },
    ]
  },
  {
    city: "Jharsuguda",
    stores: [
      {
        name: "Jharsuguda Locality",
        address: "Jharsuguda Locality, Jharsuguda, Odisha",
        link: "https://www.zomato.com/jharsuguda/waffle-castle-jharsuguda-locality/order"
      },
    ]
  },
  {
    city: "Kolkata",
    stores: [
      {
        name: "New Town",
        address: "New Town, Kolkata, West Bengal",
        link: "https://www.zomato.com/kolkata/waffle-castle-new-town/order"
      },
      {
        name: "New Town (02)",
        address: "New Town (02), Kolkata, West Bengal",
        link: "https://www.zomato.com/kolkata/waffle-castle-1-new-town"
      },
    ]
  },
  {
    city: "Kota",
    stores: [
      {
        name: "Talwandi",
        address: "Talwandi, Kota, Rajasthan",
        link: "https://www.zomato.com/kota/waffle-castle-talwandi/order"
      },
    ]
  },
  {
    city: "Kurukshetra",
    stores: [
      {
        name: "Kurukshetra Locality",
        address: "Kurukshetra Locality, Kurukshetra, Haryana",
        link: "https://www.zomato.com/kurukshetra/waffle-castle-kurukshetra-locality/order"
      },
    ]
  },
  {
    city: "Ludhiana",
    stores: [
      {
        name: "Civil Lines",
        address: "Civil Lines, Ludhiana, Punjab",
        link: "https://www.zomato.com/ludhiana/waffle-castle-civil-lines/order"
      },
    ]
  },
  {
    city: "Mumbai",
    stores: [
      {
        name: "Andheri East",
        address: "Andheri East, Mumbai, Maharashtra",
        link: "https://www.zomato.com/mumbai/waffle-castle-andheri-east/order"
      },
      {
        name: "Chembur",
        address: "Chembur, Mumbai, Maharashtra",
        link: "https://www.zomato.com/mumbai/waffle-castle-chembur/order"
      },
      {
        name: "Dombivali East",
        address: "Dombivali East, Mumbai, Maharashtra",
        link: "https://www.zomato.com/mumbai/waffle-castle-dombivali-east-thane/order"
      },
      {
        name: "Ghatkopar East",
        address: "Ghatkopar East, Mumbai, Maharashtra",
        link: "https://www.zomato.com/mumbai/waffle-castle-ghatkopar-east/order"
      },
      {
        name: "Kandivali East",
        address: "Kandivali East, Mumbai, Maharashtra",
        link: "https://www.zomato.com/mumbai/waffle-castle-kandivali-east/order"
      },
      {
        name: "Vile Parle East",
        address: "Vile Parle East, Mumbai, Maharashtra",
        link: "https://www.zomato.com/mumbai/waffle-castle-vile-parle-east/order"
      },
    ]
  },
  {
    city: "Nagpur",
    stores: [
      {
        name: "Nandanvan",
        address: "Nandanvan, Nagpur, Maharashtra",
        link: "https://www.zomato.com/ahmedabad/waffle-castle-kankaria/order"
      },
    ]
  },
  {
    city: "Nashik",
    stores: [
      {
        name: "College Road",
        address: "College Road, Nashik, Maharashtra",
        link: "https://www.zomato.com/nashik/waffle-castle-college-road/order"
      },
    ]
  },
  {
    city: "Navsari",
    stores: [
      {
        name: "Navsari Locality (Gandevi)",
        address: "Navsari Locality (Gandevi), Navsari, Gujarat",
        link: "https://www.zomato.com/navsari/waffle-castle-navsari-locality/order"
      },
      {
        name: "Navsari Locality (Station Road)",
        address: "Navsari Locality (Station Road), Navsari, Gujarat",
        link: "https://www.zomato.com/navsari/waffle-castle-1-navsari-locality/order"
      },
    ]
  },
  {
    city: "Patan",
    stores: [
      {
        name: "Patan Locality",
        address: "Patan Locality, Patan, Gujarat",
        link: "https://www.zomato.com/patan/waffle-castle-patan-locality/order"
      },
    ]
  },
  {
    city: "Patna",
    stores: [
      {
        name: "Sri Krishnapuri",
        address: "Sri Krishnapuri, Patna, Bihar",
        link: "https://www.zomato.com/patna/waffle-castle-sri-krishnapuri/order"
      },
    ]
  },
  {
    city: "Pune",
    stores: [
      {
        name: "Bavdhan",
        address: "Bavdhan, Pune, Maharashtra",
        link: "https://www.zomato.com/pune/waffle-castle-bavdhan/order"
      },
      {
        name: "Dhankawadi",
        address: "Dhankawadi, Pune, Maharashtra",
        link: "https://www.zomato.com/pune/waffle-castle-dhankawadi/order"
      },
      {
        name: "Expressway",
        address: "Expressway, Pune, Maharashtra",
        link: "https://www.zomato.com/pune/waffle-castle-expressway/order"
      },
      {
        name: "Hinjawadi",
        address: "Hinjawadi, Pune, Maharashtra",
        link: "https://www.zomato.com/pune/waffle-castle-hinjawadi/order"
      },
      {
        name: "Kalyani Nagar",
        address: "Kalyani Nagar, Pune, Maharashtra",
        link: "https://www.zomato.com/pune/waffle-castle-kalyani-nagar/order"
      },
      {
        name: "Karve Nagar",
        address: "Karve Nagar, Pune, Maharashtra",
        link: "https://www.zomato.com/pune/waffle-castle-karve-nagar/order"
      },
      {
        name: "Kharadi",
        address: "Kharadi, Pune, Maharashtra",
        link: "https://www.zomato.com/pune/waffle-castle-kharadi/order"
      },
      {
        name: "Magarpatta",
        address: "Magarpatta, Pune, Maharashtra",
        link: "https://www.zomato.com/pune/waffle-castle-magarpatta/order"
      },
      {
        name: "Sadashiv Peth",
        address: "Sadashiv Peth, Pune, Maharashtra",
        link: "https://www.zomato.com/pune/waffle-castle-sadashiv-peth/order"
      },
      {
        name: "Salunkhe Vihar Road",
        address: "Salunkhe Vihar Road, Pune, Maharashtra",
        link: "https://www.zomato.com/pune/waffle-castle-salunkhe-vihar-road/order"
      },
      {
        name: "Talegaon",
        address: "Talegaon, Pune, Maharashtra",
        link: "https://www.zomato.com/pune/waffle-castle-talegaon/order"
      },
      {
        name: "Viman Nagar",
        address: "Viman Nagar, Pune, Maharashtra",
        link: "https://www.zomato.com/pune/waffle-castle-viman-nagar/order"
      },
    ]
  },
  {
    city: "Puri",
    stores: [
      {
        name: "Balagandi",
        address: "Balagandi, Puri, Odisha",
        link: "https://www.zomato.com/puri/waffle-castle-balagandi/order"
      },
    ]
  },
  {
    city: "Raipur",
    stores: [
      {
        name: "Changurabhata",
        address: "Changurabhata, Raipur, Chhattisgarh",
        link: "https://www.zomato.com/raipur/waffle-castle-changurabhata/order"
      },
    ]
  },
  {
    city: "Rajkot",
    stores: [
      {
        name: "150 Feet Ring Road",
        address: "150 Feet Ring Road, Rajkot, Gujarat",
        link: "https://www.zomato.com/rajkot/waffle-castle-150-feet-ring-road/order"
      },
      {
        name: "Kotecha Nagar",
        address: "Kotecha Nagar, Rajkot, Gujarat",
        link: "https://www.zomato.com/rajkot/waffle-castle-kotecha-nagar/order"
      },
    ]
  },
  {
    city: "Surat",
    stores: [
      {
        name: "Vesu",
        address: "Vesu, Surat, Gujarat",
        link: "https://www.zomato.com/surat/waffle-castle-vesu/order"
      },
    ]
  },
  {
    city: "Thane",
    stores: [
      {
        name: "Tembhi Naka",
        address: "Tembhi Naka, Thane, Maharashtra",
        link: "https://www.zomato.com/mumbai/waffle-castle-tembhi-naka/order"
      },
    ]
  },
  {
    city: "Ujjain",
    stores: [
      {
        name: "Rishi Nagar",
        address: "Rishi Nagar, Ujjain, Madhya Pradesh",
        link: "https://www.zomato.com/ujjain/waffle-castle-rishi-nagar/order"
      },
    ]
  },
  {
    city: "Vadodara",
    stores: [
      {
        name: "Madhavpura",
        address: "Madhavpura, Vadodara, Gujarat",
        link: "https://www.zomato.com/vadodara/waffle-castle-madhavpura/order"
      },
      {
        name: "Manjalpur",
        address: "Manjalpur, Vadodara, Gujarat",
        link: "https://www.zomato.com/vadodara/waffle-castle-manjalpur/order"
      },
      {
        name: "Nizampura",
        address: "Nizampura, Vadodara, Gujarat",
        link: "https://www.zomato.com/vadodara/waffle-castle-nizampura/order"
      },
    ]
  },
  {
    city: "Valsad",
    stores: [
      {
        name: "Valsad Locality",
        address: "Valsad Locality, Valsad, Gujarat",
        link: "https://www.zomato.com/valsad/waffle-castle-valsad-locality/order"
      },
    ]
  },
  {
    city: "Vapi",
    stores: [
      {
        name: "Vapi Locality",
        address: "Vapi Locality, Vapi, Gujarat",
        link: "https://www.zomato.com/vapi/waffle-castle-vapi-locality/order"
      },
    ]
  },
  {
    city: "Varanasi",
    stores: [
      {
        name: "Pandeypur",
        address: "Pandeypur, Varanasi, Uttar Pradesh",
        link: "https://www.zomato.com/varanasi/waffle-castle-pandeypur/order"
      },
    ]
  },
];

export default function CastleLocator() {
  const [activeCity, setActiveCity] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const cities = ["All", ...storeData.map(d => d.city)];

  // Flatten the array to easily map through it and filter
  const allStores = useMemo(() => {
    const flatStores: { city: string, name: string, address: string, link: string }[] = [];
    storeData.forEach(cityGroup => {
      cityGroup.stores.forEach(store => {
        flatStores.push({
          city: cityGroup.city,
          name: store.name,
          address: store.address,
          link: store.link
        });
      });
    });
    return flatStores;
  }, []);

  const filteredStores = useMemo(() => {
    return allStores.filter(store => {
      const matchesCity = activeCity === "All" || store.city === activeCity;
      const matchesSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.city.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCity && matchesSearch;
    });
  }, [activeCity, searchQuery, allStores]);

  return (
    <>
      <main className="locator-page">
        <div className="locator-container">

          <div className="locator-hero-split">
            <div className="locator-header">
              <span className="section-pill">Our Locations</span>
              <h1>Find Your <span>Nearest Castle</span></h1>
              <p>Visit your nearest Waffle Castle and indulge in a world of irresistible flavors, handcrafted premium waffles, rich signature desserts, creamy shakes, and delightful sweet treats made to satisfy every craving. From perfectly crisp golden waffles loaded with toppings to decadent chocolate creations and refreshing beverages, every bite is crafted for a memorable dessert experience. Whether you're planning a casual hangout, a family outing, or a late-night sweet escape, Waffle Castle offers the perfect blend of taste, comfort, and indulgence in every visit.</p>
            </div>

            <div className="locator-hero-image">
              <img src="/images/waffle-location.jpg" alt="Waffle Castle Locations" />
            </div>
          </div>

          <div className="locator-search">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              placeholder="Search by city or area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="city-filters" ref={scrollRef}>
            {cities.map((city) => (
              <button
                key={city}
                className={`city-filter-btn ${activeCity === city ? 'active' : ''}`}
                onClick={() => setActiveCity(city)}
              >
                {city}
              </button>
            ))}
          </div>

          <div className="stores-grid">
            {filteredStores.length > 0 ? (
              filteredStores.map((store, index) => (
                <div className="store-card" key={index}>
                  <div className="store-content">
                    <div className="store-city-badge">{store.city}</div>
                    <div className="store-info">
                      <h3 className="store-name">Waffle Castle - {store.name}</h3>
                      <div className="store-address">
                        <MapPin size={18} />
                        <span>{store.address}</span>
                      </div>
                    </div>

                    <div className="store-actions">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Waffle Castle ${store.name} ${store.city}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn btn-directions"
                      >
                        <Navigation size={18} />
                        Directions
                      </a>
                      {store.link && (
                        <a
                          href={store.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-btn btn-order"
                        >
                          <ShoppingBag size={18} />
                          Order Now
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <p>No castles found matching your search.</p>
              </div>
            )}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
