/* 
  a node is a document
*/

/* 
  to create a node
    create (n)

  to create multiple nodes
    create (n),(m)

  creating node with information of account
    create (:Account{ firstName:"John", LastName: "Doe"})

  to list nodes
    MATCH (n:Account) RETURN n

 */

/* 
  to run 
    MATCH (n)-[r:FRIENDS]-(m) RETURN type(r);

*/
