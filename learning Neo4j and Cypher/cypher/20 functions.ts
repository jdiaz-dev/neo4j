/* 
  relationships() returns a list containing all the relationships in a path.
      MATCH paths = (a:Metro {name: 'Pigalle'})-[:HAS_ROUTE*1..3]-(b:Metro {name: 'Quebec'})
      WITH paths, relationships(paths) AS rels
      return rels

  nodes() returns a list containing all the nodes in a path.

  collect() all values will be collected in a list


*/
