import Links from './Links/Links';
import References from './References/References';
import Start from './Start/Start';
import Artpieces from './Artpieces/Artpieces';
import ArtpieceDetail from './ArtpieceDetail/ArtpieceDetail';



export default [
  { path: "/", name: "Start", Component: Start },
  { path: "/kunstwerke", name: "Kunstwerke", Component: Artpieces },
  { path: "/kunstwerke/:name", name: "Kunstwerk: ", Component: ArtpieceDetail },
  { path: "/links", name: "links", Component: Links },
  { path: "/referenzen", name: "Referenzen", Component: References }
];
