-- create 'owners' table
CREATE TABLE owners (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50)
);

-- create 'pets' table
CREATE TABLE pets (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  breed VARCHAR(50),
  color VARCHAR(50),
  checked_in BOOLEAN DEFAULT true,
  owner_id integer REFERENCES owners
);

-- create 'visits' table
CREATE TABLE visits (
  id SERIAL PRIMARY KEY,
  checkin_date DATE,
  checkout_date DATE,
  pet_id integer REFERENCES pets
);
