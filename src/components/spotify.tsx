"use client";

export default function SongRequestForm() {
  return (
    <section className="w-full bg-[var(--color-bg)] text-[var(--color-text)] py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">🎶 Canciones que nos inspiran</h2>
      <p className="subtitle mb-8">
        Hemos creado una playlist colaborativa con temas que nos acompañan en este viaje. ¡Escúchala y agrega los tuyos más abajo!
      </p>

      <div className="flex justify-center mb-12">
        <iframe
          src="https://open.spotify.com/embed/playlist/2xqElTGIH4wfTPQS6yp0tE?utm_source=generator"
          width="100%"
          height="380"
          className="rounded-xl max-w-xl w-full"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      <h3 className="text-2xl font-semibold mb-4">🎤 Recomiéndanos una canción</h3>
      <p className="subtitle mb-8">
        Queremos sumar canciones que representen el amor de quienes nos acompañan. Déjanos tu recomendación 💌
      </p>

      <div className="flex justify-center">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfEjemploDeFormulario/viewform?embedded=true"
          width="100%"
          height="600"
          className="max-w-2xl w-full border-none rounded-lg shadow-md"
          loading="lazy"
        >
          Cargando…
        </iframe>
      </div>
    </section>
  );
}