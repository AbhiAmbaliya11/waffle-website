-- ============================================================
-- Waffle Castle — Add directions_link column + set all store links
-- Run this ONE TIME in Supabase Dashboard → SQL Editor
-- ============================================================

-- Step 1: Add the column (safe to run even if already added)
ALTER TABLE public.stores
  ADD COLUMN IF NOT EXISTS directions_link text NOT NULL DEFAULT '';

-- Step 2: Update every store with its Google Maps directions link

-- Ahmedabad
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Chandkheda+Ahmedabad' WHERE city = 'Ahmedabad' AND name = 'Chandkheda';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Chandlodia+Ahmedabad' WHERE city = 'Ahmedabad' AND name = 'Chandlodia';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Kankaria+Ahmedabad' WHERE city = 'Ahmedabad' AND name = 'Kankaria';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Paldi+Ahmedabad' WHERE city = 'Ahmedabad' AND name = 'Paldi';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Ranip+Ahmedabad' WHERE city = 'Ahmedabad' AND name = 'Ranip';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Satellite+Ahmedabad' WHERE city = 'Ahmedabad' AND name = 'Satellite';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Sela+Ahmedabad' WHERE city = 'Ahmedabad' AND name = 'Sela';

-- Amritsar
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Ranjit+Avenue+Amritsar' WHERE city = 'Amritsar' AND name = 'Ranjit Avenue';

-- Ankleshwar
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Ankleshwar' WHERE city = 'Ankleshwar' AND name = 'Ankleshwar Locality';

-- Belagavi
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Belgaum+Belagavi' WHERE city = 'Belagavi' AND name = 'Belgaum Locality';

-- Bengaluru
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Koramangala+7th+Block+Bengaluru' WHERE city = 'Bengaluru' AND name = 'Koramangala 7th Block';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Whitefield+Bengaluru' WHERE city = 'Bengaluru' AND name = 'Whitefield';

-- Bharuch
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Bharuch+01' WHERE city = 'Bharuch' AND name = 'Bharuch Locality (01)';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Bharuch+02' WHERE city = 'Bharuch' AND name = 'Bharuch Locality (02)';

-- Bhilai
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Nehru+Nagar+Bhilai' WHERE city = 'Bhilai' AND name = 'Nehru Nagar';

-- Bhopal
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Sajidabad+Bhopal' WHERE city = 'Bhopal' AND name = 'Sajidabad';

-- Bilaspur
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Sarkanda+Bilaspur' WHERE city = 'Bilaspur' AND name = 'Sarkanda';

-- Boisar
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Boisar+Maharashtra' WHERE city = 'Boisar' AND name = 'Boisar';

-- Delhi
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Adarsh+Nagar+Delhi' WHERE city = 'Delhi' AND name = 'Adarsh Nagar';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Ashok+Vihar+Phase+2+Delhi' WHERE city = 'Delhi' AND name = 'Ashok Vihar Phase 2';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+East+Patel+Nagar+Delhi' WHERE city = 'Delhi' AND name = 'East Patel Nagar';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Krishna+Nagar+Delhi' WHERE city = 'Delhi' AND name = 'Krishna Nagar';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Netaji+Subhash+Place+Delhi' WHERE city = 'Delhi' AND name = 'Netaji Subhash Place';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Rohini+Delhi' WHERE city = 'Delhi' AND name = 'Rohini';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Shalimar+Bagh+Delhi' WHERE city = 'Delhi' AND name = 'Shalimar Bagh';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Vijay+Nagar+Delhi' WHERE city = 'Delhi' AND name = 'Vijay Nagar';

-- Faridabad
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Sector+17+Faridabad' WHERE city = 'Faridabad' AND name = 'Sector 17';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Sector+88+Faridabad' WHERE city = 'Faridabad' AND name = 'Sector 88';

-- Gandhidham
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Gandhidham+Gujarat' WHERE city = 'Gandhidham' AND name = 'Gandhidham';

-- Gandhinagar
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Gandhinagar+Highway+Gujarat' WHERE city = 'Gandhinagar' AND name = 'Gandhinagar Highway';

-- Gorakhpur
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Basantpur+Gorakhpur' WHERE city = 'Gorakhpur' AND name = 'Basantpur';

-- Gurgaon
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Palam+Vihar+Gurgaon' WHERE city = 'Gurgaon' AND name = 'Palam Vihar';

-- Himmatnagar
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Himatnagar+Gujarat' WHERE city = 'Himmatnagar' AND name = 'Himatnagar Locality';

-- Hyderabad
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Kukatpally+Hyderabad' WHERE city = 'Hyderabad' AND name = 'Kukatpally';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Nacharam+Hyderabad' WHERE city = 'Hyderabad' AND name = 'Nacharam';

-- Indore
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Bhawar+Kuan+Indore' WHERE city = 'Indore' AND name = 'Bhawar Kuan';

-- Jabalpur
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Cantt+Jabalpur' WHERE city = 'Jabalpur' AND name = 'Cantt';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Rampur+Jabalpur' WHERE city = 'Jabalpur' AND name = 'Rampur';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Wright+Town+Jabalpur' WHERE city = 'Jabalpur' AND name = 'Wright Town';

-- Jagdalpur
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Jagdalpur+Chhattisgarh' WHERE city = 'Jagdalpur' AND name = 'Jagdalpur Locality';

-- Jaipur
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Jagatpura+Jaipur' WHERE city = 'Jaipur' AND name = 'Jagatpura';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Raja+Park+Jaipur' WHERE city = 'Jaipur' AND name = 'Raja Park';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Vaishali+Nagar+Jaipur' WHERE city = 'Jaipur' AND name = 'Vaishali Nagar';

-- Jammu
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Nanak+Nagar+Jammu' WHERE city = 'Jammu' AND name = 'Nanak Nagar';

-- Jaunpur
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Jaunpur+UP' WHERE city = 'Jaunpur' AND name = 'Jaunpur Locality';

-- Jharsuguda
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Jharsuguda+Odisha' WHERE city = 'Jharsuguda' AND name = 'Jharsuguda Locality';

-- Kolkata
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+New+Town+Kolkata' WHERE city = 'Kolkata' AND name = 'New Town';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+New+Town+Kolkata+2' WHERE city = 'Kolkata' AND name = 'New Town (02)';

-- Kota
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Talwandi+Kota' WHERE city = 'Kota' AND name = 'Talwandi';

-- Kurukshetra
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Kurukshetra+Haryana' WHERE city = 'Kurukshetra' AND name = 'Kurukshetra Locality';

-- Ludhiana
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Civil+Lines+Ludhiana' WHERE city = 'Ludhiana' AND name = 'Civil Lines';

-- Mumbai
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Andheri+East+Mumbai' WHERE city = 'Mumbai' AND name = 'Andheri East';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Chembur+Mumbai' WHERE city = 'Mumbai' AND name = 'Chembur';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Dombivali+East+Mumbai' WHERE city = 'Mumbai' AND name = 'Dombivali East';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Ghatkopar+East+Mumbai' WHERE city = 'Mumbai' AND name = 'Ghatkopar East';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Kandivali+East+Mumbai' WHERE city = 'Mumbai' AND name = 'Kandivali East';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Vile+Parle+East+Mumbai' WHERE city = 'Mumbai' AND name = 'Vile Parle East';

-- Nagpur
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Nandanvan+Nagpur' WHERE city = 'Nagpur' AND name = 'Nandanvan';

-- Nashik
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+College+Road+Nashik' WHERE city = 'Nashik' AND name = 'College Road';

-- Navsari
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Gandevi+Navsari' WHERE city = 'Navsari' AND name = 'Navsari Locality (Gandevi)';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Station+Road+Navsari' WHERE city = 'Navsari' AND name = 'Navsari Locality (Station Road)';

-- Patan
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Patan+Gujarat' WHERE city = 'Patan' AND name = 'Patan Locality';

-- Patna
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Sri+Krishnapuri+Patna' WHERE city = 'Patna' AND name = 'Sri Krishnapuri';

-- Pune
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Bavdhan+Pune' WHERE city = 'Pune' AND name = 'Bavdhan';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Dhankawadi+Pune' WHERE city = 'Pune' AND name = 'Dhankawadi';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Expressway+Pune' WHERE city = 'Pune' AND name = 'Expressway';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Hinjawadi+Pune' WHERE city = 'Pune' AND name = 'Hinjawadi';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Kalyani+Nagar+Pune' WHERE city = 'Pune' AND name = 'Kalyani Nagar';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Karve+Nagar+Pune' WHERE city = 'Pune' AND name = 'Karve Nagar';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Kharadi+Pune' WHERE city = 'Pune' AND name = 'Kharadi';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Magarpatta+Pune' WHERE city = 'Pune' AND name = 'Magarpatta';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Sadashiv+Peth+Pune' WHERE city = 'Pune' AND name = 'Sadashiv Peth';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Salunkhe+Vihar+Road+Pune' WHERE city = 'Pune' AND name = 'Salunkhe Vihar Road';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Talegaon+Pune' WHERE city = 'Pune' AND name = 'Talegaon';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Viman+Nagar+Pune' WHERE city = 'Pune' AND name = 'Viman Nagar';

-- Puri
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Balagandi+Puri' WHERE city = 'Puri' AND name = 'Balagandi';

-- Raipur
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Changurabhata+Raipur' WHERE city = 'Raipur' AND name = 'Changurabhata';

-- Rajkot
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+150+Feet+Ring+Road+Rajkot' WHERE city = 'Rajkot' AND name = '150 Feet Ring Road';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Kotecha+Nagar+Rajkot' WHERE city = 'Rajkot' AND name = 'Kotecha Nagar';

-- Surat
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Vesu+Surat' WHERE city = 'Surat' AND name = 'Vesu';

-- Thane
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Tembhi+Naka+Thane' WHERE city = 'Thane' AND name = 'Tembhi Naka';

-- Ujjain
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Rishi+Nagar+Ujjain' WHERE city = 'Ujjain' AND name = 'Rishi Nagar';

-- Vadodara
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Madhavpura+Vadodara' WHERE city = 'Vadodara' AND name = 'Madhavpura';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Manjalpur+Vadodara' WHERE city = 'Vadodara' AND name = 'Manjalpur';
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Nizampura+Vadodara' WHERE city = 'Vadodara' AND name = 'Nizampura';

-- Valsad
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Valsad+Gujarat' WHERE city = 'Valsad' AND name = 'Valsad Locality';

-- Vapi
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Vapi+Gujarat' WHERE city = 'Vapi' AND name = 'Vapi Locality';

-- Varanasi
UPDATE public.stores SET directions_link = 'https://www.google.com/maps/search/Waffle+Castle+Pandeypur+Varanasi' WHERE city = 'Varanasi' AND name = 'Pandeypur';
