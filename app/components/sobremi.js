"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaBriefcase,
  FaGoogle,
  FaUniversity,
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
  FaChevronDown,
  FaChevronUp,
  FaGraduationCap,
  FaTools,
} from "react-icons/fa";
import Image from "next/image";

const fotos = [
  "/media/foto1.jpg",
  "/media/foto2.jpg",
  "/media/foto3.jpg",
  "/media/foto4.jpg",
];

const formacion = [
  {
    añoInicio: 2008,
    añoFin: 2010,
    titulo: "FP Comercio y Marketing",
    lugar: "Oscus (Sevilla)",
    icono: <FaUniversity className="text-blue-500" />,
    detalle:
      "Estudios centrados en técnicas comerciales, comunicación y análisis de mercado. Durante este periodo realicé varios proyectos web como freelance, incluyendo pequeños e-commerce y páginas corporativas para comercios locales.",
  },
  {
    añoInicio: 2016,
    añoFin: 2018,
    titulo: "Máster en Programación Web Full Stack",
    lugar: "MasterD",
    icono: <FaCode className="text-green-500" />,
    detalle:
      "Formación intensiva en desarrollo web frontend y backend. Aprendí tecnologías como HTML5, CSS3, JavaScript, Node.js, React y bases de datos relacionales.",
  },
];

const experiencia = [
  {
    añoInicio: 2010,
    añoFin: 2016,
    titulo: "Proyectos Freelance Web",
    lugar: "Sevilla / Remoto",
    icono: <FaBriefcase className="text-purple-500" />,
    detalle:
      "Desde antes del máster, diseñé y desarrollé webs para pymes y emprendedores. Especializado en WordPress, diseño responsive y optimización SEO básica.",
  },
  {
    añoInicio: 2018,
    añoFin: 2024,
    titulo: "Desarrollador Web - Upfield",
    lugar: "Barcelona / Remoto",
    icono: <FaCode className="text-yellow-500" />,
    detalle:
      "Encargado de implementar soluciones digitales para campañas y productos de marcas como Flora o Tulipán. Participé en proyectos europeos como responsable técnico.",
  },
  {
    añoInicio: 2023,
    añoFin: 2025,
    titulo: "Especialista SEO y Desarrollador - Erescambio",
    lugar: "Remoto",
    icono: <FaGoogle className="text-red-500" />,
    detalle:
      "Desarrollo y mantenimiento de la plataforma, así como estrategias SEO/SEM. Foco en conversión, accesibilidad y velocidad de carga.",
  },
];

const SobreMi = () => {
  const [fotoActual, setFotoActual] = useState(0);
  const [activo, setActivo] = useState({});

  // Cambia la imagen cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setFotoActual((prev) => (prev + 1) % fotos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleDetalle = (tipo, index) => {
    setActivo((prev) => ({
      ...prev,
      [`${tipo}-${index}`]: !prev[`${tipo}-${index}`],
    }));
  };

  return (
    <section className="p-6 bg-white text-black max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="relative w-full md:w-1/2">
          <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg">
            <AnimatePresence mode="wait">
         <motion.div
  key={fotoActual}
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -50 }}
  transition={{ duration: 0.6 }}
  className="flex items-center justify-center w-full h-[300px] bg-white"
>
  <Image
    src={fotos[fotoActual]}
    alt={`Foto ${fotoActual + 1}`}
    width={400}           // o el ancho que desees
    height={300}          // altura fija para encajar en el cuadro
    className="object-contain rounded-2xl"
    priority
  />
</motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {fotos.map((_, i) => (
              <button
                key={i}
                onClick={() => setFotoActual(i)}
                className={`w-3 h-3 rounded-full ${
                  fotoActual === i ? "bg-blue-600" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Sobre mí</h2>
          <p className="text-lg mb-4">
            ¡Hola! Soy <strong>Alberto Ledesma</strong>, desarrollador full stack con más de 12 años en el entorno digital. Experto en creación de sitios web, SEO/SEM, optimización de conversiones y marketing digital. He trabajado tanto de forma independiente como dentro de grandes empresas, siempre con pasión por los detalles y las soluciones funcionales.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="https://www.linkedin.com/in/alberto-ledesma-ollega-6727a651/" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-blue-700 text-3xl hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.facebook.com/Alledesma1989/" target="_blank" rel="noreferrer">
              <FaFacebookSquare className="text-blue-600 text-3xl hover:scale-110 transition-transform" />
            </a>
            <a href="https://github.com/alledesma89/" target="_blank" rel="noreferrer">
  <FaGithub className="text-gray-800 text-3xl hover:scale-110 transition-transform" />
</a>

          </div>
        </div>
      </div>

      {/* Cronología */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Formación */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FaGraduationCap className="text-2xl text-blue-700" />
            <h3 className="text-xl font-bold text-blue-700">Formación</h3>
          </div>
          <div className="relative border-l-4 border-blue-300 pl-6">
            {formacion.map((item, i) => (
              <div key={i} className="mb-6">
                <h4 className="text-blue-900 font-bold text-md mb-1">
                  {item.añoInicio} - {item.añoFin}
                </h4>
                <div className="bg-gray-100 p-4 rounded-lg shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-xl">{item.icono}</div>
                      <div>
                        <h4 className="text-blue-800 font-semibold text-md">
                          {item.titulo}
                        </h4>
                        <p className="text-sm text-gray-600">{item.lugar}</p>
                      </div>
                    </div>
                    <button onClick={() => toggleDetalle("form", i)}>
                      {activo[`form-${i}`] ? (
                        <FaChevronUp className="text-blue-600" />
                      ) : (
                        <FaChevronDown className="text-blue-600" />
                      )}
                    </button>
                  </div>
                  {activo[`form-${i}`] && (
                    <p className="text-sm text-gray-700 mt-2">{item.detalle}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experiencia */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FaTools className="text-2xl text-green-700" />
            <h3 className="text-xl font-bold text-green-700">Experiencia Laboral</h3>
          </div>
          <div className="relative border-l-4 border-green-300 pl-6">
            {experiencia.map((item, i) => (
              <div key={i} className="mb-6">
                <h4 className="text-green-900 font-bold text-md mb-1">
                  {item.añoInicio} - {item.añoFin}
                </h4>
                <div className="bg-gray-100 p-4 rounded-lg shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-xl">{item.icono}</div>
                      <div>
                        <h4 className="text-green-800 font-semibold text-md">
                          {item.titulo}
                        </h4>
                        <p className="text-sm text-gray-600">{item.lugar}</p>
                      </div>
                    </div>
                    <button onClick={() => toggleDetalle("exp", i)}>
                      {activo[`exp-${i}`] ? (
                        <FaChevronUp className="text-green-600" />
                      ) : (
                        <FaChevronDown className="text-green-600" />
                      )}
                    </button>
                  </div>
                  {activo[`exp-${i}`] && (
                    <p className="text-sm text-gray-700 mt-2">{item.detalle}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Valoraciones */}
<div className="bg-gray-50 p-6 rounded-lg shadow max-w-7xl mx-auto">
  <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
    Valoraciones de colaboradores
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {[
      {
        nombre: "Alex Rosales",
        proyecto: "Proyectos Erescambio",
        texto:
          "Alberto ha sido un pilar fundamental en nuestros desarrollos digitales, aportando soluciones creativas y eficientes para mejorar la plataforma y optimizar resultados.",
      },
      {
        nombre: "Luis Soldevilla",
        proyecto: "Proyectos Upfield",
        texto:
          "Su profesionalidad y conocimiento en desarrollo web ha permitido que nuestras campañas tengan un soporte técnico robusto y flexible a nuestras necesidades.",
      },
      {
        nombre: "Andrea Fernández",
        proyecto: "Proyectos Marketing Tulipán",
        texto:
          "Un colaborador de confianza que siempre aporta ideas frescas y optimiza cada detalle para que las campañas tengan el máximo impacto.",
      },
      {
        nombre: "Jaume Sordé",
        proyecto: "Proyectos digitales CPM Expertus",
        texto:
          "Gracias a su experiencia y dedicación, hemos logrado implementar soluciones digitales que han mejorado significativamente nuestra productividad y presencia online.",
      },
    ].map(({ nombre, proyecto, texto }, i) => (
      <div
        key={i}
        className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
      >
        <h4 className="text-lg font-semibold text-blue-700 mb-1">{nombre}</h4>
        <p className="text-sm italic text-gray-600 mb-2">{proyecto}</p>
        <p className="text-gray-700">{texto}</p>
      </div>
    ))}
  </div>
</div>
    </section>
  );
};


export default SobreMi;



