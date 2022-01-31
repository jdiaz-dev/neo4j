MERGE (u:Urbanite { id : $urbaniteProp.id } ) set u += $urbaniteProp
WITH u UNWIND $metros AS metro MERGE (m:Metro {name: metro})
WITH u, m, metro MERGE (u)-[:FREQUENTLY_HAUNTS]->(m)
