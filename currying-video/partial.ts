function partialApplyCreateUser(database, logger) {
  return function (user) {
    database.insert(user);
    logger.log(`User with ID: ${user.id} created.`);
  };
}
