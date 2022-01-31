/* 
  --to create relationships that has special characters, it for instance in dynamic relationships
                                                                            //we use backticks
    CREATE (john:Person{name:"John"}), (alice:Person{name:"Alice"}), (john)-[:`FRIENDS WITH`]->(alice)
  
*/

/* 
  --multiple relationships
          **getting friends related to city
    MATCH (pol:Person{name:'Pol'})-[:LIVES]->(city:City)<-[WENT_TO]-(friend:Person) RETURN friend
    MATCH (kabel:Person{name:'Kabel'})-[:WENT_TO ]->(city:City)<-[LIVES]-(friend:Person) RETURN friend
*/

/* 
  --variable length path
          ♥ to find relationship hops
          ♥ we can find the relationship hops with this format
      -[:RELATIONSHIP_TYPE*MIN_HOP..MAX_HOP]->
                · MIN_HOP: min and default value 1 , setting 0 will include starting node
                · MAX_HOP: max and default value Infinity 

                ♥ FOR THE EXAMPLE:
                · check min Episode 7 - 1.52 to see data set 
                · getting friends of friends of John, excluding direct friends 
                    MATCH (:Person{name:"John"})-[:`FRIENDS WITH`*2..]->(`FRIENDS WITH`) RETURN `FRIENDS WITH`
      
                · Details: when we dont specify the maximun HOP, it means
                    -[:`FRIENDS WITH`*2]->   ===   -[:`FRIENDS WITH`*2..2]->

                · Details: when we dont specify the minimun HOP leaving the maximun hop, it means
                    -[:`FRIENDS WITH`*..2]->   ===   -[:`FRIENDS WITH`*1..2]->
                    
                · Details: when we ommit minimun HOP leaving the minimun hop, it means
                    -[:`FRIENDS WITH`*1..]->   ===   -[:`FRIENDS WITH`*1..Infinity]->
*/

/* 
  --properties on Variable length paths:it is the same on how you will match a node with properties
      (it is a demo using HOPS and property of relationship)

                                                //{since:2007}: it will omit values less 2007
      MATCH(:Person{name:"Alice"})-[:`FRIENDS WITH`*2..{ since:2007}]-(`FRIENDS WITH`:Person) RETURN `FRIENDS WITH`

*/

/* 

  --undirected relationships
      ·directional relationship on both node is not a good practice, it because it can be achieved by crying

        (notice thar aren't arrow head or direction, it happens for instace with friends in real life)
        MATCH(:Person{name:"Alice"})-[FRIENDS]-(`FRIENDS WITH`:Person) RETURN `FRIENDS WITH`
        MATCH(:Person{name:"Alice"})-[`FRIENDS WITH`]-(b:Person) RETURN b
*/
