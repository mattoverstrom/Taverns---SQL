CREATE TABLE locationAddress (
    id int IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(100),
City VARCHAR(100),
Country VARCHAR(100)
);

CREATE TABLE OwnerUserName (
    id int IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(100),
idRole int
);

CREATE TABLE RoleOwners (
    id int IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(100),
    RoleDescription VARCHAR(Max)
);

--CREATE TABLE Supplies (
--    id int IDENTITY(1,1) PRIMARY KEY,
--    SupplyDate DATETIME,
--    Name VARCHAR(100),
--    SupplyCount int,
-- Units VARCHAR(50),
-- idTavern int
--);

CREATE TABLE SuppliesReceived (
    id int IDENTITY(1,1) PRIMARY KEY,
    Cost DECIMAL(38,2),
    AmountReceived int,
    RecievedDate DATETIME,
idTavern int,
idSupplies int
);

--CREATE TABLE Services (
--    id int IDENTITY(1,1) PRIMARY KEY,
--    Name VARCHAR(100),
-- idServicesStatus int,
-- idTavern int
--);


--CREATE TABLE ServiceStatus (
--    id int IDENTITY(1,1) PRIMARY KEY,
--    StatusofService BIT
--);

--CREATE TABLE Sales (
--    id int IDENTITY(1,1) PRIMARY KEY,
--    idServices int FOREIGN KEY REFERENCES Services(id),
--    Name VARCHAR(100),
--    Price DECIMAL(5,2),
--    DatePurchased DATETIME,
--    AmountPurchased int,
--    idTavern int FOREIGN KEY REFERENCES taverns(id)
--);

--CREATE TABLE Guests (
--    id int IDENTITY(1,1) PRIMARY KEY,
--    Name VARCHAR(250),
--    Notes VARCHAR(Max),
--    Birthday DATE,
--    CakeDay DATE,
-- idGuestStatuses tinyint
--);

--CREATE TABLE GuestStatuses (
--    id tinyint IDENTITY(1,1) PRIMARY KEY,
--    Name VARCHAR(50)
--);

CREATE TABLE Levels1 (
    id tinyint IDENTITY(1,1) PRIMARY KEY,
idGuest int,
idClass tinyint,
Level int,
    DateLevel DATE
);
