let onLocal = false;

const API_PATH = (db) => {
  process.env.NODE_ENV !== "production" ? onLocal = true : onLocal = false;
    
  if (db === "start") {
    return onLocal ? `http://localhost:8080` : `../api/index_home.php`;
  }

  if (db === "artpieces") {
    return onLocal ? `http://localhost:80` : `../api/index_artpieces.php`;
  }

  if (db === "artists") {
    return onLocal ? `http://localhost:10` : `../api/index_artists.php`;
  }

  if (db === "institutions") {
    return onLocal ? `http://localhost:60` : `../api/index_institutions.php`;
  }

  if (db === "furtherInfo") {
    return onLocal ? `http://localhost:70` : `../api/index_furtherInfo.php`;
  }

  if (db === "literature") {
    return onLocal ? `http://localhost:90` : `../api/index_literature.php`;
  }

  if (db === "sources") {
    return onLocal ? `http://localhost:50` : `../api/index_sources.php`;
  }
};

export default API_PATH;
