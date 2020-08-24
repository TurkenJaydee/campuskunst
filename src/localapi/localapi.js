let onLocal = false;

const API_PATH = (db) => {
  process.env.NODE_ENV !== "production" ? onLocal = true : onLocal = false;
    
  if (db === "start") {
    return onLocal ? `http://localhost:8080` : `../api/index_home.php`;
  }

  if (db === "artpieces") {
    return onLocal ? `http://localhost:80` : `../api/index_artpieces.php`;
  }

  if (db === "references") {
    return onLocal ? `http://localhost:8060` : `../api/index_references.php`;
  }

  if (db === "links") {
    return onLocal ? `http://localhost:60` : `../api/index_links.php`;
  }
};

export default API_PATH;
