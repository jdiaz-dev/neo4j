/* 
  to bucle a node list
    CREATE (a:Application{}) set a += $moduleProps WITH a MATCH (m:Module) 
    unwind a as loop
    CREATE (a)-[:WORKS]->(m)
    return a 
*/
