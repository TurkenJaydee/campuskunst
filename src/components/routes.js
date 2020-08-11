import Sources from './Sources/Sources';
import References from './References/References';
import Home from './Home/Home';
import Artpieces from './Artpieces/Artpieces';
import ArtpieceDetail from './ArtpieceDetail/ArtpieceDetail';



export default [
  { path: "/", name: "Start", Component: Home },
  { path: "/kunstwerke", name: "Kunstwerke", Component: Artpieces },
  { path: "/kunstwerke/:name", name: "Kunstwerk: ", Component: ArtpieceDetail },
  { path: "/quellen", name: "Quellen", Component: Sources },
  { path: "/referenzen", name: "Referenzen", Component: References }
];
