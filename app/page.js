import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>CT Digital Solutions | Soluciones digitales para tu negocio</title>
        <meta name="description" content="CT Digital Solutions ofrece servicios profesionales de desarrollo web, marketing digital y más para ayudar a tu negocio a crecer." />
        <meta name="keywords" content="CT Digital Solutions, desarrollo web, marketing digital, soluciones digitales, diseño gráfico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Barrio&display=swap" rel="stylesheet" />
      </Head>
      <div className="relative min-h-screen flex items-center justify-center px-5 overflow-hidden">
        {/* Video de fondo */}
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src="/media/cubo.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>

        {/* Botones */}
        <div className="grid relative z-10 text-right"> {/* Centra los botones a la derecha */}
          <button className="rect-button">
            <img src="/media/desarrollo-web.png" alt="Desarrollo Web" className="service-image" />
            <span>Desarrollo Web</span>
          </button>

          <button className="rect-button">
            <img src="/media/seo.png" alt="Posicionamiento SEO" className="service-image" />
            <span>Posicionamiento SEO</span>
          </button>

          <button className="rect-button">
            <img src="/media/redes-sociales.png" alt="Gestión de Redes Sociales" className="service-image" />
            <span>Gestión de Redes Sociales</span>
          </button>

          <button className="rect-button">
            <img src="/media/soporte.png" alt="Soporte" className="service-image" />
            <span>Soporte Agentes Digitalizadores</span>
          </button>

          <button className="rect-button col-span-2">
            <img src="/media/landing-pages.png" alt="Landing Pages" className="service-image" />
            <span>Landing Pages para Bodas y Eventos</span>
          </button>
        </div>
      </div>
    </>
  );
}
