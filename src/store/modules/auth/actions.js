export const fetchUser = ({ commit }, user) => {
  if (user) {
    commit("setLoggedIn", true);
    commit("setData", {
      displayName: user.displayName,
      email: user.email,
    });
  } else {
    commit("setLoggedIn", false);
    commit("setData", null);
  }
};
