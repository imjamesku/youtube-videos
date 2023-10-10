function fetchUser() {
  return Promise.resolve({
    id: 1,
    name: "John"
  });
}

async function someFunction(): Promise<number> {
  const user = await fetchUser();
  ...
  return 1;
}

function someFunction(): Promise<number> {
    return fetchUser().then(user => {
        ...
        return 1;
    });
}