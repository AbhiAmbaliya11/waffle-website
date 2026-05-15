"use client";

import { useState, useMemo } from "react";
import { MapPin, Navigation } from "lucide-react";
import Footer from "../components/Footer";
import "./locator.css";

const storeData = [
  {
    city: "Surat",
    stores: [
      { name: "Vesu", address: "Vesu, Surat, Gujarat" }
    ]
  },
  {
    city: "Ahmedabad",
    stores: [
      { name: "Paldi", address: "Paldi, Ahmedabad, Gujarat" },
      { name: "Satellite", address: "Satellite, Ahmedabad, Gujarat" }
    ]
  },
  {
    city: "Gandhinagar",
    stores: [
      { name: "Gandhinagar", address: "Gandhinagar, Gujarat" }
    ]
  },
  {
    city: "Navsari",
    stores: [
      { name: "Lunsikui", address: "Lunsikui, Navsari, Gujarat" },
      { name: "Railway Station Road", address: "Railway Station Road, Navsari, Gujarat" }
    ]
  },
  {
    city: "Bharuch",
    stores: [
      { name: "Tavara", address: "Tavara, Bharuch, Gujarat" }
    ]
  },
  {
    city: "Patan",
    stores: [
      { name: "Patan", address: "Patan, Gujarat" }
    ]
  },
  {
    city: "Mumbai",
    stores: [
      { name: "Vile Parle East", address: "Vile Parle East, Mumbai, Maharashtra" },
      { name: "Chembur", address: "Chembur, Mumbai, Maharashtra" }
    ]
  },
  {
    city: "Thane",
    stores: [
      { name: "Thane", address: "Thane, Maharashtra" }
    ]
  },
  {
    city: "Boisar",
    stores: [
      { name: "Boisar", address: "Boisar, Maharashtra" }
    ]
  },
  {
    city: "Yavatmal",
    stores: [
      { name: "Yavatmal", address: "Yavatmal, Maharashtra" }
    ]
  },
  {
    city: "Nashik",
    stores: [
      { name: "Nashik", address: "Nashik, Maharashtra" }
    ]
  },
  {
    city: "Hyderabad",
    stores: [
      { name: "Nacharam", address: "Nacharam, Hyderabad, Telangana" }
    ]
  },
  {
    city: "Delhi",
    stores: [
      { name: "Rohini", address: "Rohini, Delhi" }
    ]
  }
];

export default function CastleLocator() {
  const [activeCity, setActiveCity] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const cities = ["All", ...storeData.map(d => d.city)];

  // Flatten the array to easily map through it and filter
  const allStores = useMemo(() => {
    const flatStores: { city: string, name: string, address: string }[] = [];
    storeData.forEach(cityGroup => {
      cityGroup.stores.forEach(store => {
        flatStores.push({
          city: cityGroup.city,
          name: store.name,
          address: store.address
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

          <div className="city-filters">
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
                  <div className="store-card-image">
                    <img src="/images/store-pin.png" alt={store.name} />
                    <div className="store-city-badge">{store.city}</div>
                  </div>

                  <div className="store-content">
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
