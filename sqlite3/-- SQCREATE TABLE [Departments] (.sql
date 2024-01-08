-- SQCREATE TABLE [Recipes] ( 
CREATE TABLE [Cusines] ( 
	[RecipeName] INTEGER  NOT NULL PRIMARY KEY, 
	[RecipeTime] NVARCHAR(50)  NOT NULL  
    [NumberOfComments] INTEGER NULL,
    [NumberOfLikes] INTEGER NULL,
    [Ratings] NVARCHAR(50) NOT NULL,
); 
CREATE TABLE [Diet] (  
    [RecipeName] INTEGER  NOT NULL PRIMARY KEY, 
	[RecipeTime] NVARCHAR(50)  NOT NULL  
    [NumberOfComments] INTEGER NULL,
    [NumberOfLikes] INTEGER NULL,
    [Ratings] NVARCHAR(50) NOT NULL,
);     
CREATE TABLE [Bakery] (  
	[RecipeName] INTEGER  NOT NULL PRIMARY KEY,  
	
); 
