// npm install --save neo4j-driver
// node example.js
const neo4j = require('neo4j-driver');
const driver = neo4j.driver('neo4j://44.208.21.138:7687',
                  neo4j.auth.basic('neo4j', 'chiefs-peaks-fall'), 
                  {/* encrypted: 'ENCRYPTION_OFF' */});

const query =
  `
  MATCH (m:Movie {title:$movie})<-[:RATED]-(u:User)-[:RATED]->(rec:Movie)
  RETURN distinct rec.title AS recommendation LIMIT 20
  `;

const params = {"movie": "Crimson Tide"};

const session = driver.session({database:"neo4j"});

session.run(query, params)
  .then((result) => {
    result.records.forEach((record) => {
        console.log(record.get('recommendation'));
    });
    session.close();
    driver.close();
  })
  .catch((error) => {
    console.error(error);
  });
