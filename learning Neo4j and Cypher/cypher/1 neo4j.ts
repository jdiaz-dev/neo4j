/* 
  --the relations says more that data itself
  --nasa has used graph database to process historic data and enhance its aerosptatial travel

  --the queries are done with cypher
  --the graphs are very usefull because it  explain the reality

  --due that a node has an efficient relation a node can have many relations without lose performance
*/

/* 
  Part of graph model

    **NODE
      --Node are our domain
      --it can represents component of other domain
      --nodes can be assigned roles or types using one or more labels
      --node can be identified as nouns

    **LABEL
      --a label is used to group nodes into sets
      --all nodes labeled with the same label belongs to the same set
      --a node may be labeled with any number of labels, including none, making labels optional in the graph
      --the general nouns (vehicle, person, customer, company)can be used as labels


    **RELATIONSHIPS
      --a relation ship has a node source and a target node
      --we must store the relationship in a particular direction
      --The one core, consistent rule in a graph database is "No broken links"
      --it cannot exist a node without an endpoint
      --you cannot remove a node without a relationship
      --as with nodes and labels, we can find relations throught verbs

    **PROPERTIES
      --we can store values in nodes or relationship
      --we can find properties knowing the kind of question that my use case needs to ask of the data
      --the properties are very flexible and simply what we can review and update the data structure according to the changing needs of the bussines

*/
