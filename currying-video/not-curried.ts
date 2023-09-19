function createUser(database, logger, user) {
  database.insert(user);
  logger.log(`User with ID: ${user.id} created.`);
}

const db = getDatabase();
const logger = getLogger();

createUser(db, logger, { id: 1, name: "Satoshi" });
createUser(db, logger, { id: 2, name: "Mom" });

// Inject dependencies
const db = getDatabase();
const logger = getLogger();
const createUserWithDeps = createUser(db, logger);

createUserWithDeps({ id: 1, name: "Satoshi" });
createUserWithDeps({ id: 2, name: "Mom" });

// mock database
const database = {
  insert: (obj) => {
    return obj;
  }
};
