/* 
  --where: 
    ♥ it is not a clause in its own, rather it is a part of optional match, it filter the result
    ♥ it should not seen as a filter after matching, it is used to add constraint and filtering
    ♥ it will be used to query the starting node of the graph  and traverse it and filter when necessary

*/

/* 
  .--we can use boolean operators with where constraint
    MATCH (n:Privilege) where n.name = "delete" OR n.name = "update" return n

*/

/* 
  --filter on Node label
    MATCH (n)
    WHERE n:Application
    RETURN n
*/

/* 
  --filtering on Node label or relationship
    MATCH (n:Privilege) WHERE n.name = "update" RETURN n
    MATCH (m:Module)-[pro:PROVIDED]->(pri:Privilege) WHERE pro.nameRole = "Administrador" RETURN pri
    
*/

/* 
  --Filter on Dynamic Computed Node property

                                                      //we are using WHERE constraint to store a value on a variable
    WITH "NAME" as propertyName MATCH (n:Application) WHERE n[toLower(propertyName)] = "ventas" RETURN n
*/

/* 
  --Filter on Property existing: this will match only nodes a relationship with a defined property
    MATCH (n:Privilege) 
    WHERE EXISTS (n.name)
    RETURN n.name

*/

/* 
  --STRING MATCHING
    ■ the string matching is case sensitive
    ■ if we use it in values that are not string, it will return null

      1: starts     MATCH (n:Privilege)
                    WHERE n.name STARTS WITH "up"
                    RETURN n.name

      2. ends       MATCH (n:Privilege)
                    WHERE n.name ENDS WITH "ete"
                    RETURN n.name

      3. contains   MATCH (n:Privilege)
                    WHERE n.name CONTAINS "ea"
                    RETURN n.name

      4. using negation   MATCH (n:Privilege)
                          WHERE NOT n.name CONTAINS "ea"
                          RETURN n.name
*/
