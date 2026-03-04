import { useState, useEffect } from 'react';

/**
 * useAge — returns a live-updating age string (7 decimal places).
 * Birth date: April 27, 2003
 */
export default function useAge() {
  const BIRTH = new Date(Date.UTC(2003, 3, 27)); // month is 0-indexed

  const calc = () => {
    const ms = Date.now() - BIRTH.getTime();
    return (ms / (1000 * 60 * 60 * 24 * 365.25)).toFixed(7);
  };

  const [age, setAge] = useState(calc);

  useEffect(() => {
    const id = setInterval(() => setAge(calc()), 50);
    return () => clearInterval(id);
  }, []);

  return age;
}
