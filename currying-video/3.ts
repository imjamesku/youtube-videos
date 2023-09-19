// Inject dependencies
const db = getDatabase();
const logger = getLogger();
const createUserWithDeps = createUser(db, logger);

createUserWithDeps({ id: 1, name: "Satoshi" });
createUserWithDeps({ id: 2, name: "Mom" });
