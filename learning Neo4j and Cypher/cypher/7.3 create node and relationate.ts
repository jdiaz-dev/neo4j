/* 
  --to create node and relationate     
      MATCH (a:Person) WHERE a.name = "Foo" CREATE (bob:Person{name:"Bob"}), (a)-[:`FRIENDS WITH`{since:2007}]->(bob) 
*/
