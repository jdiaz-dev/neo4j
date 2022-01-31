/* 
  --the relationship : it is the link between nodes
  --the relationship must be in one direction
*/

/* 
  --obviously first we need a node
  --there are 2 ways to get a reference to node
    1. creating
    2. with query

    1. creating

          //alice, bob: are labels
      CREATE (alice:Person{name:"Alice"}), (bob:Person{name:"Bob"}) //alice and bob are only a reference not a label propery

      adding relationship
      CREATE (korah:Person{name:"Korah"}), (pol:Person{name:"Pol"}), (korah)-[:FRIENDS]->(pol) 

    2. with query: matching the nodes and add relationship
      MATCH (a:Person), (b:Person)
      WHERE a.name = "Alice" AND b.name = "John"
      CREATE (a)-[:FRIENDS]->(b)


  
*/
