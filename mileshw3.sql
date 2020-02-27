HW 3



------------------hw3


--2:
SELECT * From BasementRats
EXCEPT
SELECT * From BasementRats
WHERE ID <= 100;


--3:
SELECT * From BasementRats
EXCEPT
SELECT * From BasementRats
WHERE Name > '01/01/2000';



--4:
SELECT DISTINCT Name From Guests;


--5:
SELECT * FROM Guests order by Name asc;

--6:
SELECT TOP 10 * FROM Sales ORDER BY Age desc;

7-


SELECT id,Name FROM INFORMATION_SCHEMA.COLUMNS AS NamesAndids WHERE NAME="mattoverstrom"


8.

SELECT ClassID, GuestID, Level,
CASE WHEN Level BETWEEN 1 and 10 THEN 'Noob'
WHEN Level BETWEEN 11 and 20 THEN 'Intermediate'
WHEN Level BETWEEN 21 and 30 THEN 'Pro'
WHEN Level BETWEEN 31 and 40 THEN 'Expert'
WHEN Level BETWEEN 41 and 50 THEN 'Master'
END AS Brackets FROM GuestClass;

9-
SELECT CONCAT ('INSERT INTO ',TABLE_NAME,' (Name, Floors)') AS InsertCommands
FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Taverns'
