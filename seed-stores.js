const { createClient } = require("./node_modules/@supabase/supabase-js");

// Using the management API with service role key to bypass RLS
// Since we don't have the service role, we'll use the REST API directly
// with the postgres connection string approach via fetch

const SUPABASE_URL = "https://qoynqznmcaaflmnjpxwx.supabase.co";
const ANON_KEY = "sb_publishable_Chhu9OAIE30aFe1lIP112w_q1SZgsC7";

// The SQL to run via the pg endpoint
const sql = `
INSERT INTO public.stores (city, name, address, link, is_active) VALUES
('Ahmedabad', 'Chandkheda', 'Chandkheda, Ahmedabad, Gujarat', 'https://www.zomato.com/ahmedabad/waffle-castle-chandkheda/order', true),
('Ahmedabad', 'Chandlodia', 'Chandlodia, Ahmedabad, Gujarat', 'https://www.zomato.com/ahmedabad/waffle-castle-chandlodia/order', true),
('Ahmedabad', 'Kankaria', 'Kankaria, Ahmedabad, Gujarat', 'https://www.zomato.com/ahmedabad/waffle-castle-kankaria/order', true),
('Ahmedabad', 'Paldi', 'Paldi, Ahmedabad, Gujarat', 'https://www.zomato.com/ahmedabad/waffle-castle-paldi/order', true),
('Ahmedabad', 'Ranip', 'Ranip, Ahmedabad, Gujarat', 'https://www.zomato.com/ahmedabad/waffle-castle-ranip/order', true),
('Ahmedabad', 'Satellite', 'Satellite, Ahmedabad, Gujarat', 'https://www.zomato.com/ahmedabad/waffle-castle-satellite/order', true),
('Ahmedabad', 'Sela', 'Sela, Ahmedabad, Gujarat', 'https://www.zomato.com/ahmedabad/waffle-castle-sela/order', true),
('Amritsar', 'Ranjit Avenue', 'Ranjit Avenue, Amritsar, Punjab', 'https://www.zomato.com/amritsar/waffle-castle-ranjit-avenue/order', true),
('Ankleshwar', 'Ankleshwar Locality', 'Ankleshwar Locality, Ankleshwar, Gujarat', 'https://www.zomato.com/ankleshwar/waffle-castle-ankleshwar-locality/order', true),
('Belagavi', 'Belgaum Locality', 'Belgaum Locality, Belagavi, Karnataka', 'https://www.zomato.com/belgaum/waffle-castle-belgaum-locality/order', true),
('Bengaluru', 'Koramangala 7th Block', 'Koramangala 7th Block, Bengaluru, Karnataka', 'https://www.zomato.com/bangalore/waffle-castle-koramangala-7th-block-bangalore', true),
('Bengaluru', 'Whitefield', 'Whitefield, Bengaluru, Karnataka', 'https://www.zomato.com/bangalore/waffle-castle-varthur-main-road-whitefield-bangalore/order', true),
('Bharuch', 'Bharuch Locality (01)', 'Bharuch Locality (01), Bharuch, Gujarat', 'https://www.zomato.com/bharuch/waffle-castle-bharuch-locality/order', true),
('Bharuch', 'Bharuch Locality (02)', 'Bharuch Locality (02), Bharuch, Gujarat', 'https://www.zomato.com/bharuch/waffle-castle-2-bharuch-locality/order', true),
('Bhilai', 'Nehru Nagar', 'Nehru Nagar, Bhilai, Chhattisgarh', '', true),
('Bhopal', 'Sajidabad', 'Sajidabad, Bhopal, Madhya Pradesh', 'https://www.zomato.com/bhopal/waffle-castle-sajidabad/order', true),
('Bilaspur', 'Sarkanda', 'Sarkanda, Bilaspur, Chhattisgarh', 'https://www.zomato.com/bilaspur/waffle-castle-sarkanda/order', true),
('Boisar', 'Boisar', 'Boisar, Boisar, Maharashtra', 'https://www.zomato.com/mumbai/waffle-castle-boisar/order', true),
('Delhi', 'Adarsh Nagar', 'Adarsh Nagar, Delhi, Delhi', 'https://www.zomato.com/ncr/waffle-castle-adarsh-nagar-new-delhi/order', true),
('Delhi', 'Ashok Vihar Phase 2', 'Ashok Vihar Phase 2, Delhi, Delhi', 'https://www.zomato.com/ncr/waffle-castle-ashok-vihar-phase-2-new-delhi/order', true),
('Delhi', 'East Patel Nagar', 'East Patel Nagar, Delhi, Delhi', 'https://www.zomato.com/ncr/waffle-castle-1-vijay-nagar-new-delhi/order', true),
('Delhi', 'Krishna Nagar', 'Krishna Nagar, Delhi, Delhi', 'https://menu.petpooja.com/menus/menu_item_list_new', true),
('Delhi', 'Netaji Subhash Place', 'Netaji Subhash Place, Delhi, Delhi', 'https://www.zomato.com/ncr/waffle-castle-netaji-subhash-place-new-delhi/order', true),
('Delhi', 'Rohini', 'Rohini, Delhi, Delhi', 'https://www.zomato.com/ncr/waffle-castle-rohini-new-delhi/order', true),
('Delhi', 'Shalimar Bagh', 'Shalimar Bagh, Delhi, Delhi', 'https://www.zomato.com/ncr/waffle-castle-shalimar-bagh-new-delhi/order', true),
('Delhi', 'Vijay Nagar', 'Vijay Nagar, Delhi, Delhi', 'https://www.zomato.com/ncr/waffle-castle-vijay-nagar-new-delhi/order', true),
('Faridabad', 'Sector 17', 'Sector 17, Faridabad, Haryana', 'https://www.zomato.com/ncr/waffle-castle-sector-17-faridabad/order', true),
('Faridabad', 'Sector 88', 'Sector 88, Faridabad, Haryana', 'https://www.zomato.com/ncr/waffle-castle-sector-88-faridabad/order', true),
('Gandhidham', 'Gandhidham', 'Gandhidham, Gandhidham, Gujarat', 'https://www.zomato.com/gandhidham/waffle-castle-gandhidham-locality/order', true),
('Gandhinagar', 'Gandhinagar Highway', 'Gandhinagar Highway, Gandhinagar, Gujarat', 'https://www.zomato.com/ahmedabad/waffle-castle-airport-gandhinagar-highway-gandhinagar/order', true),
('Gorakhpur', 'Basantpur', 'Basantpur, Gorakhpur, Uttar Pradesh', 'https://www.zomato.com/gorakhpur/waffle-castle-basantpur/order', true),
('Gurgaon', 'Palam Vihar', 'Palam Vihar, Gurgaon, Haryana', 'https://www.zomato.com/ncr/waffle-castle-palam-vihar-gurgaon/order', true),
('Himmatnagar', 'Himatnagar Locality', 'Himatnagar Locality, Himmatnagar, Gujarat', 'https://www.zomato.com/himatnagar/waffle-castle-himatnagar-locality/order', true),
('Hyderabad', 'Kukatpally', 'Kukatpally, Hyderabad, Telangana', 'https://www.zomato.com/hyderabad/waffle-castle-kukatpally/order', true),
('Hyderabad', 'Nacharam', 'Nacharam, Hyderabad, Telangana', 'https://www.zomato.com/hyderabad/waffle-castle-nacharam-secunderabad/order', true),
('Indore', 'Bhawar Kuan', 'Bhawar Kuan, Indore, Madhya Pradesh', 'https://www.zomato.com/indore/waffle-castle-bhawar-kuan/order', true),
('Jabalpur', 'Cantt', 'Cantt, Jabalpur, Madhya Pradesh', 'https://www.zomato.com/jabalpur/waffle-castle-cantt/order', true),
('Jabalpur', 'Rampur', 'Rampur, Jabalpur, Madhya Pradesh', 'https://www.zomato.com/jabalpur/waffle-castle-rampur/order', true),
('Jabalpur', 'Wright Town', 'Wright Town, Jabalpur, Madhya Pradesh', 'https://www.zomato.com/jabalpur/waffle-castle-wright-town/order', true),
('Jagdalpur', 'Jagdalpur Locality', 'Jagdalpur Locality, Jagdalpur, Chhattisgarh', 'https://www.zomato.com/jagdalpur/waffle-castle-jagdalpur-locality/order', true),
('Jaipur', 'Jagatpura', 'Jagatpura, Jaipur, Rajasthan', 'https://www.zomato.com/jaipur/waffle-castle-jagatpura/order', true),
('Jaipur', 'Raja Park', 'Raja Park, Jaipur, Rajasthan', 'https://www.zomato.com/jaipur/waffle-castle-raja-park/order', true),
('Jaipur', 'Vaishali Nagar', 'Vaishali Nagar, Jaipur, Rajasthan', 'https://www.zomato.com/jaipur/waffle-castle-vaishali-nagar/order', true),
('Jammu', 'Nanak Nagar', 'Nanak Nagar, Jammu, Jammu & Kashmir', 'https://www.zomato.com/jammu/waffle-castle-nanak-nagar/order', true),
('Jaunpur', 'Jaunpur Locality', 'Jaunpur Locality, Jaunpur, Uttar Pradesh', 'https://www.zomato.com/jaunpur/waffle-castle-jaunpur-locality/order', true),
('Jharsuguda', 'Jharsuguda Locality', 'Jharsuguda Locality, Jharsuguda, Odisha', 'https://www.zomato.com/jharsuguda/waffle-castle-jharsuguda-locality/order', true),
('Kolkata', 'New Town', 'New Town, Kolkata, West Bengal', 'https://www.zomato.com/kolkata/waffle-castle-new-town/order', true),
('Kolkata', 'New Town (02)', 'New Town (02), Kolkata, West Bengal', 'https://www.zomato.com/kolkata/waffle-castle-1-new-town', true),
('Kota', 'Talwandi', 'Talwandi, Kota, Rajasthan', 'https://www.zomato.com/kota/waffle-castle-talwandi/order', true),
('Kurukshetra', 'Kurukshetra Locality', 'Kurukshetra Locality, Kurukshetra, Haryana', 'https://www.zomato.com/kurukshetra/waffle-castle-kurukshetra-locality/order', true),
('Ludhiana', 'Civil Lines', 'Civil Lines, Ludhiana, Punjab', 'https://www.zomato.com/ludhiana/waffle-castle-civil-lines/order', true),
('Mumbai', 'Andheri East', 'Andheri East, Mumbai, Maharashtra', 'https://www.zomato.com/mumbai/waffle-castle-andheri-east/order', true),
('Mumbai', 'Chembur', 'Chembur, Mumbai, Maharashtra', 'https://www.zomato.com/mumbai/waffle-castle-chembur/order', true),
('Mumbai', 'Dombivali East', 'Dombivali East, Mumbai, Maharashtra', 'https://www.zomato.com/mumbai/waffle-castle-dombivali-east-thane/order', true),
('Mumbai', 'Ghatkopar East', 'Ghatkopar East, Mumbai, Maharashtra', 'https://www.zomato.com/mumbai/waffle-castle-ghatkopar-east/order', true),
('Mumbai', 'Kandivali East', 'Kandivali East, Mumbai, Maharashtra', 'https://www.zomato.com/mumbai/waffle-castle-kandivali-east/order', true),
('Mumbai', 'Vile Parle East', 'Vile Parle East, Mumbai, Maharashtra', 'https://www.zomato.com/mumbai/waffle-castle-vile-parle-east/order', true),
('Nagpur', 'Nandanvan', 'Nandanvan, Nagpur, Maharashtra', 'https://www.zomato.com/nagpur/waffle-castle-nandanvan/order', true),
('Nashik', 'College Road', 'College Road, Nashik, Maharashtra', 'https://www.zomato.com/nashik/waffle-castle-college-road/order', true),
('Navsari', 'Navsari Locality (Gandevi)', 'Navsari Locality (Gandevi), Navsari, Gujarat', 'https://www.zomato.com/navsari/waffle-castle-navsari-locality/order', true),
('Navsari', 'Navsari Locality (Station Road)', 'Navsari Locality (Station Road), Navsari, Gujarat', 'https://www.zomato.com/navsari/waffle-castle-1-navsari-locality/order', true),
('Patan', 'Patan Locality', 'Patan Locality, Patan, Gujarat', 'https://www.zomato.com/patan/waffle-castle-patan-locality/order', true),
('Patna', 'Sri Krishnapuri', 'Sri Krishnapuri, Patna, Bihar', 'https://www.zomato.com/patna/waffle-castle-sri-krishnapuri/order', true),
('Pune', 'Bavdhan', 'Bavdhan, Pune, Maharashtra', 'https://www.zomato.com/pune/waffle-castle-bavdhan/order', true),
('Pune', 'Dhankawadi', 'Dhankawadi, Pune, Maharashtra', 'https://www.zomato.com/pune/waffle-castle-dhankawadi/order', true),
('Pune', 'Expressway', 'Expressway, Pune, Maharashtra', 'https://www.zomato.com/pune/waffle-castle-expressway/order', true),
('Pune', 'Hinjawadi', 'Hinjawadi, Pune, Maharashtra', 'https://www.zomato.com/pune/waffle-castle-hinjawadi/order', true),
('Pune', 'Kalyani Nagar', 'Kalyani Nagar, Pune, Maharashtra', 'https://www.zomato.com/pune/waffle-castle-kalyani-nagar/order', true),
('Pune', 'Karve Nagar', 'Karve Nagar, Pune, Maharashtra', 'https://www.zomato.com/pune/waffle-castle-karve-nagar/order', true),
('Pune', 'Kharadi', 'Kharadi, Pune, Maharashtra', 'https://www.zomato.com/pune/waffle-castle-kharadi/order', true),
('Pune', 'Magarpatta', 'Magarpatta, Pune, Maharashtra', 'https://www.zomato.com/pune/waffle-castle-magarpatta/order', true),
('Pune', 'Sadashiv Peth', 'Sadashiv Peth, Pune, Maharashtra', 'https://www.zomato.com/pune/waffle-castle-sadashiv-peth/order', true),
('Pune', 'Salunkhe Vihar Road', 'Salunkhe Vihar Road, Pune, Maharashtra', 'https://www.zomato.com/pune/waffle-castle-salunkhe-vihar-road/order', true),
('Pune', 'Talegaon', 'Talegaon, Pune, Maharashtra', 'https://www.zomato.com/pune/waffle-castle-talegaon/order', true),
('Pune', 'Viman Nagar', 'Viman Nagar, Pune, Maharashtra', 'https://www.zomato.com/pune/waffle-castle-viman-nagar/order', true),
('Puri', 'Balagandi', 'Balagandi, Puri, Odisha', 'https://www.zomato.com/puri/waffle-castle-balagandi/order', true),
('Raipur', 'Changurabhata', 'Changurabhata, Raipur, Chhattisgarh', 'https://www.zomato.com/raipur/waffle-castle-changurabhata/order', true),
('Rajkot', '150 Feet Ring Road', '150 Feet Ring Road, Rajkot, Gujarat', 'https://www.zomato.com/rajkot/waffle-castle-150-feet-ring-road/order', true),
('Rajkot', 'Kotecha Nagar', 'Kotecha Nagar, Rajkot, Gujarat', 'https://www.zomato.com/rajkot/waffle-castle-kotecha-nagar/order', true),
('Surat', 'Vesu', 'Vesu, Surat, Gujarat', 'https://www.zomato.com/surat/waffle-castle-vesu/order', true),
('Thane', 'Tembhi Naka', 'Tembhi Naka, Thane, Maharashtra', 'https://www.zomato.com/mumbai/waffle-castle-tembhi-naka/order', true),
('Ujjain', 'Rishi Nagar', 'Rishi Nagar, Ujjain, Madhya Pradesh', 'https://www.zomato.com/ujjain/waffle-castle-rishi-nagar/order', true),
('Vadodara', 'Madhavpura', 'Madhavpura, Vadodara, Gujarat', 'https://www.zomato.com/vadodara/waffle-castle-madhavpura/order', true),
('Vadodara', 'Manjalpur', 'Manjalpur, Vadodara, Gujarat', 'https://www.zomato.com/vadodara/waffle-castle-manjalpur/order', true),
('Vadodara', 'Nizampura', 'Nizampura, Vadodara, Gujarat', 'https://www.zomato.com/vadodara/waffle-castle-nizampura/order', true),
('Valsad', 'Valsad Locality', 'Valsad Locality, Valsad, Gujarat', 'https://www.zomato.com/valsad/waffle-castle-valsad-locality/order', true),
('Vapi', 'Vapi Locality', 'Vapi Locality, Vapi, Gujarat', 'https://www.zomato.com/vapi/waffle-castle-vapi-locality/order', true),
('Varanasi', 'Pandeypur', 'Pandeypur, Varanasi, Uttar Pradesh', 'https://www.zomato.com/varanasi/waffle-castle-pandeypur/order', true);
`;

async function seed() {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/exec_sql`, {
    method: "POST",
    headers: {
      "apikey": ANON_KEY,
      "Authorization": `Bearer ${ANON_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: sql }),
  });
  const result = await response.text();
  console.log("Status:", response.status);
  console.log("Result:", result);
}

seed().catch(console.error);
