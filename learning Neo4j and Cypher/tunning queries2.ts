/*
    - reuse identifiers
    - check you excema of indexes
    - use constraints, in the cypher query, it crate an index automaticallty will create index in the database
    - batch the queries using useing unwind
    - beware query replaning



*/


/*
    object mappers
*/



//some ways to enhance the performace in Neo4j
/*

    - use query parameters
        MERGE (p:Person {name:{name} }) RETURN p //right
        MERGE (p:Person {name:"Robert"}) RETURN P  //bad


    - void cartesian product queries
        //bad
        MATCH (p:Person), (c:Company) return p, c

        //right
        MATCH (p:Person), (c:Company)
        WHERE p.id = c.personId
        RETURN p, c


    - reuse identifiers
        //bad
        MATCH (p1:Person {name:"Robert"})
        MATCH (p2:Person {name:"Chris"})

        //right
        MATCH (p:Person {name:"Robert"})
        MATCH (p:Person {name:"Chris"})

    - creating an index
        CREATE CONSTRAINT ON (p:Person)  //constraint add an index by default
        ASSERT p.id IS UNIQUE

    - Split long queries
        - small optimized queries always run faster than one long, un-optimized query.
        - we can write our custom funcions in Java and deploy it in the database

    - void Object-Graph Mapper OGM, it adds a lot of overhead
*/