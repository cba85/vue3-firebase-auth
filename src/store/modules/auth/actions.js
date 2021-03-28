export const fetchUser = ({ commit }, user) => {
  commit("setLoggedIn", user != null);

  if (user) {
    commit("setData", {
      displayName: user.displayName,
      email: user.email,
    });
  } else {
    commit("setData", null);
  }
};
