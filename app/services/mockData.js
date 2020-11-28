const user = {
  name: "Climber",
  username: "climber@gmail.com",
  password: "111111",
  currentSteps: 14000,
  targetSteps: 50000
};

const doLogin = (username, password) => {
  if (user.username === username && user.password === password) {
    return user;
  }

  return null;
};

export { doLogin };