import { useState, useEffect } from 'react';
import { TYPED_WORDS } from '../data/content';

/**
 * useTyped — cycles through TYPED_WORDS with a typewriter effect.
 * Returns the current display string.
 */
export default function useTyped() {
  const [display, setDisplay]   = useState('');
  const [wordIdx, setWordIdx]   = useState(0);
  const [charIdx, setCharIdx]   = useState(0);
  const [phase,   setPhase]     = useState('typing'); // 'typing' | 'pausing' | 'deleting'

  useEffect(() => {
    const word = TYPED_WORDS[wordIdx];
    let timeout;

    if (phase === 'typing') {
      if (charIdx < word.length) {
        timeout = setTimeout(() => {
          setDisplay(word.slice(0, charIdx + 1));
          setCharIdx(i => i + 1);
        }, 90);
      } else {
        timeout = setTimeout(() => setPhase('pausing'), 2200);
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), 400);
    } else if (phase === 'deleting') {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setDisplay(word.slice(0, charIdx - 1));
          setCharIdx(i => i - 1);
        }, 55);
      } else {
        setWordIdx(i => (i + 1) % TYPED_WORDS.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, charIdx, wordIdx]);

  return display;
}
