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

INSERT INTO owners
VALUES (1, 'Lisa', 'Bonet'),
(2, 'Charles', 'Darwin'),
(3, 'George', 'Foreman'),
(4, 'Lucy', 'Liu');

INSERT INTO pets
VALUES (1, 'charlie', 'spaniel', 'yellow', 'no', 1),
(2, 'chappy', 'lab', 'blue', 'no', 2),
(3, 'whiskey', 'mut', 'brown', 'no', 3),
(4, 'saber', 'beagle', 'greeen', 'no', 2),
(5, 'avery', 'lab', 'black', 'no', 2);

INSERT INTO visits
VALUES (1,'2010-03-05', '2010-03-05', 1),
(2,'2012-02-08', '2012-02-12', 4),
(3,'2012-02-08', '2012-02-09', 3),
(4,'2012-03-09', '2012-03-10', 2),
(5,'2012-02-08', '2012-02-08', 2);
