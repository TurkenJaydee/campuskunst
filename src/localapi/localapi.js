import {databases} from './databases.enum';

let onLocal = false;

const API_PATH = (db) => {
  process.env.NODE_ENV !== "production" ? onLocal = true : onLocal = false;
    
  if (db === databases.start) {
    return onLocal ? `http://localhost/campuskunst/api/index_home.php` : `../api/index_home.php`;
  }

  if (db === databases.artpieces) {
    return onLocal ? `http://localhost/campuskunst/api/index_artpieces.php` : `../api/index_artpieces.php`;
  }

  if (db === databases.artists) {
    return onLocal ? `http://localhost/campuskunst/api/index_artists.php` : `../api/index_artists.php`;
  }

  if (db === databases.institutions) {
    return onLocal ? `http://localhost/campuskunst/api/index_institutions.php` : `../api/index_institutions.php`;
  }

  if (db === databases.furtherInfo) {
    return onLocal ? `http://localhost/campuskunst/api/index_furtherInfo.php` : `../api/index_furtherInfo.php`;
  }

  if (db === databases.literature) {
    return onLocal ? `http://localhost/campuskunst/api/index_literature.php` : `../api/index_literature.php`;
  }

  if (db === databases.sources) {
    return onLocal ? `http://localhost/campuskunst/api/index_sources.php` : `../api/index_sources.php`;
  }
};

export default API_PATH;
