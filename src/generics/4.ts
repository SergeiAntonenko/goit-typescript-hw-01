type User2 = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User2>): User2 {
  const defaultUser: User2 = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };
  return { ...defaultUser, ...initialValues };
}

const newUser = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
