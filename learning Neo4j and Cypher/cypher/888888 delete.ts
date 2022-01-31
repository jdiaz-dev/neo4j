/* 
  --delete node
   MATCH (a:Person { name : "Korah"}) DELETE a

  --delete all nodes
    MATCH (n) DELETE n

  --delete all nodes and relationships
    MATCH (n) DETACH DELETE n

  --delete a node using its ID
    MATCH (n)
    WHERE ID(n)=5
    DETACH DELETE n
  
*/

/* 
  --delete all relationship 
    MATCH (Korah)-[r:FRIENDS]->(It) DELETE r 

    --delete a specific relationship
    MATCH (alice)-[r:`FRIENDS WITH`]->(It) DELETE r 
*/

/* --to remove by native id
    MATCH (a:Account)-[r:CREATED]->(It) WHERE id(r) = 68 DELETE r; 
*/

/* 
  to run
  MATCH (Bussines)-[r:CONTAINS]->(It) WHERE id(r) = 60 DELETE r; 
  MATCH (a:Menu{id: "70df9882-3d78-4f75-b8ab-6b2e3a06321f"})  delete a 

    MATCH (a:Account) WHERE id(a) = 70 DELETE a; 

*/
