/*
    - The Query Log Analyzer App helps you to find quickly the slow queries on the Neo4j server.

    Cypther execution
        - information: disk -> "page cache"
            - ensure that the page cache can contain the database

        - query - execution plan: query string -> execution plan -> stored in query cache
            - we can use parametrized values intead literal values will allow the use of cache (page cache)
            - use EXPLAIN or PROFILE to check execution plan

        - first execution is slow

        - we can check query plan executor to analize how the query will be executed

    Query check
        good queries can slow down because bad queries can take all resources of the computer

    Query Parameters
        every time a value changes (in the query) the database will make a new plan for the query.

    Index Usage
        Use "explain" in the Neo4j browser to see if all the correct indexes are used in the query

    Big Result Sets (and slow networks)
        - big amount of data take long time to execute
        - with big amount of data you need to think why is required a big amount of data, maybe a function redesing is required

    Locking
        - when it is update the same node-relationship strucuture, it exists a block in every update,
        - we can merge all that update in once (in a list) to void many blocks


    Query Load
        - queries may also be slow because the query has to wait for cpu-resources
            - With the Query Log Analyzer you can use the "Highlight" function
            - Another option can be the Timeline which shows all the queries in the log file over time
            - verify if the server has the capacity to manage the queries

    Tuning Queries
        Errors in variable names
            - If there is in the query a reference to a variable which is not initialised like ‘…MATCH (a)-[:’ or ‘…MERGE (a)-[:’ than this may result in a full node scan, which can slow down your query a lot.

        Missing colon ‘:’ for a Label or Relationship Type
            - If you miss the colon then the label or relationship type will be seen as a variable name, which results in full node scans etc.

        Try to reduce the query working set as soon as possible
            Can I move a distinct, limit, collect


*/


/*
                use query log analizer
                use execution plan
*/