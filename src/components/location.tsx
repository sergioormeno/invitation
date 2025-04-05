"use client";

export default function Location() {
  return (
    <section className="w-full bg-[var(--color-bg)] py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-[var(--color-text)]">
          ¿Dónde se celebrará?
        </h2>
        <p className="text-base md:text-lg text-[var(--color-text)]">
          La ceremonia y celebración se llevará a cabo en Hotel Viña La Playa.
        </p>

        <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.075851774501!2d-71.38557512254602!3d-34.450222373009815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96638a06c3c451bb%3A0x27b4abb8e5edd0a2!2sHotel%20Vi%C3%B1a%20La%20Playa!5e0!3m2!1ses-419!2scl!4v1743819932190!5m2!1ses-419!2scl"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}