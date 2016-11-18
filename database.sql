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
  owner_id integer REFERENCES owners(id)
);

-- create 'visits' table
CREATE TABLE visits (
  id SERIAL PRIMARY KEY,
  checkin_date DATE,
  checkout_date DATE,
  pet_id integer REFERENCES pets(id)
);

-- populate 'owners' table
INSERT INTO owners (first_name, last_name)
VALUES ('Lisa', 'Bonet'),
('Charles', 'Darwin'),
('George', 'Foreman'),
('Lucy', 'Liu');

-- populate 'pets' table
INSERT INTO pets (name, breed, color, checked_in, owner_id)
VALUES ('charlie', 'spaniel', 'yellow', true, 1),
('chappy', 'lab', 'blue', true, 4),
('whiskey', 'mut', 'brown', false, 3),
('saber', 'beagle', 'greeen', true, 2),
('avery', 'lab', 'black', false, 2);

-- populate 'visits' table
INSERT INTO visits (checkin_date, checkout_date, pet_id)
VALUES ('2010-03-05', '2010-03-05', 1),
('2012-02-08', '2012-02-12', 4),
('2012-02-08', '2012-02-09', 3),
('2012-03-09', '2012-03-10', 2),
('2012-02-08', '2012-02-08', 2);
