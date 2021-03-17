Truncate Table "Cigars" RESTART IDENTITY;
Truncate Table "Brand" RESTART IDENTITY;

INSERT INTO "Brands" ("BrandName", "Description" ) VALUES ('Montecristo', 'This is a description of the brand and it goes on and on.');
INSERT INTO "Brands" ("BrandName", "Description" ) VALUES ('Cohiba', 'This is another description of the brand and it goes on and on.');

INSERT INTO "Cigars" ("Name", "Length","Gauge","Wrapper","Filler","Binder", "Price", "InStock", "DateBought", "Strength", "Notes", "BrandId") VALUES (' House Blend', 6.5, 60,'Nicarauguan','Equadorian', 'Equadorian', 4, 22, '3/10/2021', 'Strong', 'The best for price',2);  
INSERT INTO "Cigars" ("Name", "Length","Gauge","Wrapper","Filler","Binder", "Price", "InStock", "DateBought", "Strength", "Notes", "BrandId") VALUES (' Short Story', 4, 50,'Camaroon ','Dominican','Dominican', 11, 4, '1/2/2021', 'Medium', 'Best quality and flavor',1); 
INSERT INTO "Cigars" ("Name", "Length","Gauge","Wrapper","Filler","Binder", "Price", "InStock", "DateBought", "Strength", "Notes", "BrandId") VALUES ('Brazillia', 5, 54,'Brazilian','Nicaragua','Nicaragua', 7, 7, '9/2/2020', 'Strong', 'Good smoke, very smooth, full body flavor',1);
INSERT INTO "Cigars" ("Name", "Length","Gauge","Wrapper","Filler","Binder", "Price", "InStock", "DateBought", "Strength", "Notes", "BrandId") VALUES ('Maduro', 4, 54,'Maduro','Dominican','Equadorian', 8, 2, '10/22/2020', 'Strong', 'Mellow but full bodied, a bit of',2);

