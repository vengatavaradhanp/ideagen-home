const StorageConfiguration = {
  session() {
    sessionStorage.getItem("");
  },
  storage() {
    localStorage.getItem("");
  },
};

export default StorageConfiguration;
