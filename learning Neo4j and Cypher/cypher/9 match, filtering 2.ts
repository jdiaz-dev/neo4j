/* 
  --we will see outgoing relationship:this is used is of interest
    MATCH (:City{ name:"Juliaca"})
    --> (n) RETURN n

  --we will see "directed relationship" and variable: we will see the relationship associated to a node, the relationship is stored in a variable
    MATCH (:Person)-[r]-() RETURN type(r)

  --we will see "Match-relationship Type": it is more like directed, only that there is a type in the middle to determine what type only to be retrieved
    MATCH (:Person{name:"Kabel"})-[:LIVES]->(city:City) RETURN city

  --we can add multiple relationship
    MATCH (:Person{name:"Kabel"})-[:LIVES|:WENT_TO]->(city:City) RETURN city
*/
