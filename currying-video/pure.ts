function createUser(database, user) {
  database.insert(user);
}

const db = getDatabase();

const user = {
  id: 1,
  name: "Mom"
};
createUser(db, logger, user);
