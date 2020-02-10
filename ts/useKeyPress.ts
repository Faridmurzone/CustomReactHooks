import { useState } from 'react';
import useKey, { KeyFilter } from './useKey';
// USAGE:
/* 
const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const Demo = () => {
  const states = [];
  for (const key of keys) states.push(useKeyPress(key)[0]);

  return (
    <div style={{textAlign: 'center'}}>
      Try pressing numbers
      <br />
      {states.reduce((s, pressed, index) => s + (pressed ? (s ? ' + ' : '') + keys[index] : ''), '')}
    </div>
  );
};
*/
const useKeyPress = (keyFilter: KeyFilter) => {
  const [state, set] = useState<[boolean, null | KeyboardEvent]>([false, null]);
  useKey(keyFilter, event => set([true, event]), { event: 'keydown' }, [state]);
  useKey(keyFilter, event => set([false, event]), { event: 'keyup' }, [state]);
  return state;
};

export default useKeyPress;
