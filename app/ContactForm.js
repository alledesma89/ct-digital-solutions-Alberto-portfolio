"use client";

import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa"; // íconos

const opciones = [
  "Diseño Web",
  "Posicionamiento SEO",
  "Gestión Redes Sociales",
  "Tareas de Programación (Soporte Full Stack)",
  "Otros",
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: opciones[0],
    otroAsunto: "",
  });

  const [enviando, setEnviando] = useState(false);
  const [mensaje, setMensaje] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAsuntoClick = (opcion) => {
    setFormData((prev) => ({
      ...prev,
      asunto: opcion,
      otroAsunto: opcion === "Otros" ? prev.otroAsunto : "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nombre.trim()) {
      setMensaje({ type: "error", text: "Por favor, ingresa tu nombre." });
      return;
    }
    if (!formData.email.trim()) {
      setMensaje({ type: "error", text: "Por favor, ingresa tu email." });
      return;
    }
    if (!formData.telefono.trim()) {
      setMensaje({ type: "error", text: "Por favor, ingresa tu teléfono." });
      return;
    }

    setMensaje(null);
    setEnviando(true);

    try {
      const res = await fetch(`${window.location.origin}/api/send-contact-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Error enviando email");

      setMensaje({
        type: "success",
        text: "Gracias por tu mensaje. Te contactaré pronto.",
      });
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        asunto: opciones[0],
        otroAsunto: "",
      });
    } catch (error) {
      setMensaje({
        type: "error",
        text: "Hubo un problema al enviar tu mensaje. Intenta de nuevo más tarde.",
      });
    }
    setEnviando(false);
  };

  return (
    <section className="p-6 bg-white text-black max-w-4xl mx-auto rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-800">Contacto</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Contenedor de columnas */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Columna izquierda - inputs */}
          <div className="flex flex-col gap-5 flex-1">
            {/* Nombre */}
            <div className="flex items-center gap-4">
              <label
                htmlFor="nombre"
                className="w-28 text-sm font-semibold text-gray-700"
              >
                Nombre<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="flex-grow border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tu nombre completo"
                required
              />
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <label
                htmlFor="email"
                className="w-28 text-sm font-semibold text-gray-700"
              >
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="flex-grow border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="tu@email.com"
                required
              />
            </div>

            {/* Teléfono */}
            <div className="flex items-center gap-4">
              <label
                htmlFor="telefono"
                className="w-28 text-sm font-semibold text-gray-700"
              >
                Teléfono<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="flex-grow border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+34 600 123 456"
                required
              />
            </div>
          </div>

          {/* Columna derecha - opciones */}
          <div className="flex flex-col flex-1">
            <label className="text-sm font-semibold text-gray-700 mb-2">
              Consulta sobre
            </label>
            <div className="flex flex-wrap gap-3">
              {opciones.map((opcion) => (
                <button
                  key={opcion}
                  type="button"
                  onClick={() => handleAsuntoClick(opcion)}
                  className={`px-4 py-2 rounded-md border transition whitespace-nowrap
                    ${
                      formData.asunto === opcion
                        ? "bg-blue-700 text-white border-blue-700"
                        : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                    }
                  `}
                >
                  {opcion}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Campo Describir asunto si es "Otros" */}
        {formData.asunto === "Otros" && (
          <div className="flex items-center gap-4">
            <label
              htmlFor="otroAsunto"
              className="w-28 text-sm font-semibold text-gray-700"
            >
              Describir asunto (opcional)
            </label>
            <input
              type="text"
              id="otroAsunto"
              name="otroAsunto"
              value={formData.otroAsunto}
              onChange={handleChange}
              className="flex-grow border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe brevemente tu consulta"
            />
          </div>
        )}

        {/* Botón enviar */}
        <div>
          <button
            type="submit"
            disabled={enviando}
            className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-800 transition disabled:opacity-60"
          >
            {enviando ? "Enviando..." : "Enviar Consulta"}
          </button>
        </div>

        {/* Mensaje de estado */}
        {mensaje && (
          <p
            className={`mt-4 font-semibold ${
              mensaje.type === "error" ? "text-red-600" : "text-green-600"
            }`}
          >
            {mensaje.text}
          </p>
        )}
      </form>

      {/* Nueva sección abajo */}
      <section className="mt-10 border-t pt-6 text-gray-800 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 text-lg font-semibold">
        <div className="flex items-center gap-2">
          <span>Contáctame también en WhatsApp</span>
          <FaWhatsapp className="text-green-500" />
          <a
            href="https://wa.me/34622281415"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            622 281 415
          </a>
        </div>

        <div className="flex items-center gap-2">
          <FaEnvelope className="text-red-600" />
          <a
            href="mailto:ctdigitalsolutions20@gmail.com"
            className="text-blue-600 underline"
          >
            ctdigitalsolutions20@gmail.com
          </a>
        </div>
      </section>
    </section>
  );
};

export default ContactForm;
