/* 
  basic node filetering
    MATCH (n) RETURN n  //getting nodes no labels

  getting all nodes by the label
    MATCH (account:Account) RETURN account

  to get related nodes  
                              --: nodes related without regard to the relationship
    MATCH (:Person{name:"Kabel"})--(matched)   
    RETURN matched

  now lets to match nodes with label
    MATCH (:Person{name:"Kabel"})--(city:City)   
    RETURN city







    */
