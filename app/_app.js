// pages/_app.js
import '../styles/globals.css'; // Mantén tus estilos globales
// En layout.js o en tu app/_app.js
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} /> {/* Solo carga el contenido específico de la página */}
    </>
  );
}

export default MyApp;
