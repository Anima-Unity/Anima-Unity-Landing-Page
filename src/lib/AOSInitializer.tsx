"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      easing: 'ease-in-out',
      once: true,
      startEvent: 'DOMContentLoaded',
      offset: 50,
      mirror: false,
      // Hapus opsi disable untuk tetap mengaktifkan animasi di mobile
    });
    
    // Refresh AOS setelah load dan saat resize
    window.addEventListener('load', () => {
      AOS.refresh();
    });
    
    window.addEventListener('resize', () => {
      AOS.refresh();
    });
  }, []);

  return null;
}