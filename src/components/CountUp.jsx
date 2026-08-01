import React, { useEffect, useState, useRef } from 'react';

export default function CountUp({ value, duration = 1500 }) {
  const [count, setCount] = useState('0');
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  // Analisa o valor para extrair números e preservar prefixos/sufixos (ex: "+R$1M", "7 anos", "+70")
  const parseValue = (val) => {
    const cleaned = val.toString();
    const numbers = cleaned.replace(/[^\d]/g, '');
    const num = numbers ? parseInt(numbers, 10) : 0;
    
    // Encontrar prefixo (ex: "+R$", "+")
    const numIndex = cleaned.search(/\d/);
    const prefix = numIndex > 0 ? cleaned.slice(0, numIndex) : (cleaned.startsWith('+') ? '+' : '');
    
    // Encontrar sufixo (ex: "M", " anos", "k")
    const lastNumIndex = cleaned.split('').reverse().join('').search(/\d/);
    const suffix = lastNumIndex > 0 ? cleaned.slice(cleaned.length - lastNumIndex) : '';

    return { num, prefix, suffix };
  };

  useEffect(() => {
    const { num, prefix, suffix } = parseValue(value);
    
    if (num === 0) {
      setCount(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Easing de out-quad para suavizar no final
            const easeProgress = progress * (2 - progress);
            const currentCount = Math.floor(easeProgress * num);
            
            setCount(`${prefix}${currentCount}${suffix}`);
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(value);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={elementRef}>{count}</span>;
}
