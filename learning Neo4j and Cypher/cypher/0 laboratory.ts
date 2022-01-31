/* 

  others:
    CREATE (sandra:Person{name:"Sandra"}), (alvaro:Person{name:"Alvaro"}), (yuri:Person{name:"Yuri"}), (sandra)-[:FRIENDS]->(alvaro), (sandra)-[:FRIENDS]->(yuri)
*/

/* 
  **practicing relations

  CREATE (kabel:Person{name:"Kabel"}), (pol:Person{name:"Pol"})
  CREATE (lorencia:City{name:"Lorencia"}), (juliaca:City{name:"Juliaca"})


      MATCH (a:Person), (b:Person)
      WHERE a.name = "Kabel" AND b.name = "Pol"
      CREATE (a)-[:FRIENDS]->(b)

      MATCH (a:Person), (b:City)
      WHERE a.name = "Kabel" AND b.name = "Juliaca"
      CREATE (a)-[:WENT_TO]->(b)

  
  CREATE (meduza:Beach{name:"Meduza"}), (capachica:Beach{name:"Capachica"})

      MATCH (a:City), (b:Beach)
      WHERE a.name = "Lorencia" AND b.name = "Meduza"
      CREATE (a)-[:TOURIST_SPOT]->(b)
*/

//Smartpyme - Mikuy
/* 
  CREATE (a:Account{id:'ca39b062-31e5-4367-b71a-152a61045cd3', email:"danny@gmail.com", names:"Danny", surnames:"Arica", password:"123456", countryCode:"+51", cellphone:963852741, photo:"photo.png"}),   (b:Bussines{id:"938d359e-f55d-4a70-bb75-a92ca60d732c" name:"La Picantería", description:"En la picantería se cocina con el compromiso de preservar nuestra cocina, por eso respetamos todas las vedas establecidas", phone:963852147, address:"Jr Ibañez #4546", district:"Surquillo"}), (a)-[:CREATED]->(b)
*/

//creating MENU
/*
MATCH (b:Bussines) CREATE (m:Menu{id:"9392ae2f-09e2-4e12-b9c5-26e05a104734", name:"Menpu de la Picantería", description:"Descripción para la carta de la picantería" }),  (b)-[:CONTAINS]->(m)

*/

//creating Category
/*
MATCH (b:Menu) CREATE (m:Category{id:"a4143597-2393-4bc5-a1ca-b4dcc5364ac8", name:"Comidas", description:"Estos son los platos de comida de la Picantería" }),  (b)-[:HAS]->(m)

MATCH (b:Menu) CREATE (m:Category{id:"0862874b-81b8-49fa-93ad-65bd2920d016", name:"Sanguches", description:"Los sanguches de la picanteria" }),  (b)-[:HAS]->(m)

MATCH (b:Menu) CREATE (m:Category{id:"286a73a5-c9e3-4e60-897b-79072023dfd5", name:"Pesca del dia", description:"Nuestra gran escencia de la pesca del dia por peso ahora en casa" }),  (b)-[:HAS]->(m)

MATCH (b:Menu) CREATE (m:Category{id:"f5148296-e7c8-4879-9c22-e1c90a191cb2", name:"Dulces de la casa", description:"Estos son los dulces de la casa de la Picantería" }),  (b)-[:HAS]->(m)

MATCH (b:Menu) CREATE (m:Category{id:"06e46676-299e-44b0-861b-945ea48e9b8d", name:"Bar", description:"Bebe, la vida es breve" }),  (b)-[:HAS]->(m)

MATCH (b:Menu) CREATE (m:Category{id:"90efa91c-baa5-4b87-9911-aa7035b83b6c", name:"Bebidas sin alchohol", description:"Estas son las bebidas sin alcohol de la Picantería" }),  (b)-[:HAS]->(m)
*/

//creating Item (Comidas)
/*
MATCH (c:Category{name:"Comidas"}) CREATE (i:Item{id:"e14d5d66-70fc-4659-b8ac-986d5cf20ad3", name:"Los Ceviches", description:"De la Playa de hoy en PicanteRía", price:59, photo:"Los Ceviches.png" }),  (c)-[:HAS_AVAILABLE]->(i)

MATCH (c:Category{name:"Comidas"}) CREATE (i:Item{id:"e14d5d66-70fc-4659-b8ac-986d5cf20ad3", name:"Jaladito", description:"Técnica Moche Especial, Pescado curado en Sal
", price:59, photo:"Jaladito.png" }),  (c)-[:HAS_AVAILABLE]->(i)

MATCH (c:Category{name:"Comidas"}) CREATE (i:Item{id:"e14d5d66-70fc-4659-b8ac-986d5cf20ad3", name:"la leche de tigre LA CURATIVA", description:"Tiempos difíciles, la propuesta de la PicanteRía para levantar los ánimos", price:29, photo:"la leche de tigre LA CURATIVA.png" }),  (c)-[:HAS_AVAILABLE]->(i)

MATCH (c:Category{name:"Comidas"}) CREATE (i:Item{id:"e14d5d66-70fc-4659-b8ac-986d5cf20ad3", name:"Las causas de la PicanteRía", description:"De pescado, De calamares, De conchas de avanico", price:29, photo:"Las causas de la PicanteRía.png" }),  (c)-[:HAS_AVAILABLE]->(i)

MATCH (c:Category{name:"Comidas"}) CREATE (i:Item{id:"e14d5d66-70fc-4659-b8ac-986d5cf20ad3", name:"Cangrejo popeye", description:"en Ceviche chancadito, sudado o en chilcano", price:29, photo:"Cangrejo popeye.png" }),  (c)-[:HAS_AVAILABLE]->(i)

MATCH (c:Category{name:"Comidas"}) CREATE (i:Item{id:"e14d5d66-70fc-4659-b8ac-986d5cf20ad3", name:"Pulpo a la parrilla", description:"200 gr de pulpo en textura punto crema, llevado a la parrila y acompañado de papas amarillas chalaquita de cebolla y vinagre el Dandy", price:59, photo:"Pulpo a la parrilla.png" }),  (c)-[:HAS_AVAILABLE]->(i)

MATCH (c:Category{name:"Comidas"}) CREATE (i:Item{id:"e14d5d66-70fc-4659-b8ac-986d5cf20ad3", name:"Las tortillas picanteras", description:"tamaño super Extras ideales para compartir", price:55, photo:"Pulpo a la parrilla.png" }),  (c)-[:HAS_AVAILABLE]->(i)

MATCH (c:Category{name:"Comidas"}) CREATE (i:Item{id:"e14d5d66-70fc-4659-b8ac-986d5cf20ad3", name:"Langostino JUMBO", description:"En preparación que usted desee; Acevichado, Ajo, Parrila, Causa (usamos especie salvaje)", price:69, photo:"Langostino JUMBO.png" }),  (c)-[:HAS_AVAILABLE]->(i)

MATCH (c:Category{name:"Comidas"}) CREATE (i:Item{id:"e14d5d66-70fc-4659-b8ac-986d5cf20ad3", name:"Cau cau picantero 4H", description:"Mondongo de res en cocción lenta con papa blanca, zanahoria, arberjita, ají amarillo y hierba buena", price:45, photo:"Cau cau picantero 4H.png" }),  (c)-[:HAS_AVAILABLE]->(i)

MATCH (c:Category{name:"Comidas"}) CREATE (i:Item{id:"e14d5d66-70fc-4659-b8ac-986d5cf20ad3", name:"Langosta de Puerto Eten", description:"Preparacion Estelar Causa Escabechada caliente al estilo Ferreñafe. *Consultar Disponibilidad y precio", price:null, photo:"Langosta de Puerto Eten.png" }),  (c)-[:HAS_AVAILABLE]->(i)

MATCH (c:Category{name:"Comidas"}) CREATE (i:Item{id:"e14d5d66-70fc-4659-b8ac-986d5cf20ad3", name:"Rocoto Relleno Hecho Chupe", description:"Plato para compartir; Un super rocoto relleno sumergido en un mar humeante de chupe. De carne de pescado", price:59, photo:"Rocoto Relleno Hecho Chupe.png" }),  (c)-[:HAS_AVAILABLE]->(i)

MATCH (c:Category{name:"Comidas"}) CREATE (i:Item{id:"e14d5d66-70fc-4659-b8ac-986d5cf20ad3", name:"Parihuela", description:"Concentrado de cangrejos moros popeye, marisco vongole humeante, nuestra preparación", price:59, photo:"Parihuela.png" }),  (c)-[:HAS_AVAILABLE]->(i)

MATCH (c:Category{name:"Comidas"}) CREATE (i:Item{id:"e14d5d66-70fc-4659-b8ac-986d5cf20ad3", name:"Los chaufas", description:"wok en alto volumen", price:55, photo:"Los chaufas.png" }),  (c)-[:HAS_AVAILABLE]->(i)

MATCH (c:Category{name:"Comidas"}) CREATE (i:Item{id:"e14d5d66-70fc-4659-b8ac-986d5cf20ad3", name:"El chaufa veggie", description:"arroz chaufa frito al wok con verduras", price:30, photo:"El chaufa veggie.png" }),  (c)-[:HAS_AVAILABLE]->(i)

MATCH (c:Category{name:"Comidas"}) CREATE (i:Item{id:"e14d5d66-70fc-4659-b8ac-986d5cf20ad3", name:"El chaufa veggie", description:"arroz chaufa frito al wok con verduras", price:30, photo:"El chaufa veggie.png" }),  (c)-[:HAS_AVAILABLE]->(i)
*/

/* 
CREATE (s:Person{}) set s += {name:"sandra", surname:"algo mas"}
*/
