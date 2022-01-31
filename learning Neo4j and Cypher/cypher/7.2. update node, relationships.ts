/* 
  --to set properties in a relationship 
    MATCH (A:Person {name: "John"})-[r]-(B:Person {name: "Bar"}) SET r.since = 2010 RETURN distinct type(r)

*/

/* 
  --rename label of relationship 
    match (b:Bussines{id: "a11dae60-c403-46b0-a721-c626b96bb9f8"})-[old:`CONTAINS`]->(m:Menu)
    create (b)-[new:HAS]->(m)
    delete old


*/
