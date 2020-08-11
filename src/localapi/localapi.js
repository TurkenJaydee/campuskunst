let onLocal = false;

const API_PATH = (db) => {
  process.env.NODE_ENV !== "production" ? onLocal = true : onLocal = false;
    
  if (db === "home") {
    return onLocal ? `http://localhost:8080` : `../api/index_home.php`;
  }

  if (db === "artpieces") {
    return onLocal ? `http://localhost:80` : `../api/index_artpieces.php`;
  }
};

export default API_PATH;
