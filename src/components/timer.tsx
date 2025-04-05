"use client";

import { useEffect, useState } from "react";

// Cambia o quita estos colores y tamaños según tus preferencias
const CountdownTimer = () => {
  const targetDate = new Date("2026-01-01T17:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const updateTime = () => {
    const now = new Date();
    const diff = +targetDate - +now;

    if (diff <= 0) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    setTimeLeft({ days, hours, minutes, seconds });
  };

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Función para formatear con 2 dígitos (ej: 07)
  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* Encabezado o bienvenida */}
      <h2 className="text-lg font-medium">Estamos contando los días</h2>

      {/* Contenedor horizontal con los números y separadores */}
      <div className="flex items-center space-x-3 md:space-x-6">
        {/* DÍAS */}
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-6xl font-bold">
            {formatNumber(timeLeft.days)}
          </span>
          <span className="text-sm md:text-base font-normal mt-1">días</span>
        </div>

        {/* Separador : */}
        <span className="text-2xl md:text-4xl font-bold">:</span>

        {/* HORAS */}
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-6xl font-bold">
            {formatNumber(timeLeft.hours)}
          </span>
          <span className="text-sm md:text-base font-normal mt-1">hs</span>
        </div>

        {/* Separador : */}
        <span className="text-2xl md:text-4xl font-bold">:</span>

        {/* MINUTOS */}
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-6xl font-bold">
            {formatNumber(timeLeft.minutes)}
          </span>
          <span className="text-sm md:text-base font-normal mt-1">min</span>
        </div>

        {/* Separador : */}
        <span className="text-2xl md:text-4xl font-bold">:</span>

        {/* SEGUNDOS */}
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-6xl font-bold">
            {formatNumber(timeLeft.seconds)}
          </span>
          <span className="text-sm md:text-base font-normal mt-1">seg</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;