import { useState } from 'react';

import {
  animated,
  config,
  useChain,
  useSpring,
  useSpringRef,
} from 'react-spring';

import './Checkcustom.scss';

function Checkbox(props) {
  const [isChecked, setIsChecked] = useState(props.checked);
  const checkboxAnimationRef = useSpringRef();
  const checkboxAnimationStyle = useSpring({
    backgroundColor: isChecked ? '#3156A6' : '#fff',
    borderColor: isChecked ? '#3156A6' : '#ddd',
    config: config.gentle,
    ref: checkboxAnimationRef,
  });

  const [checkmarkLength, setCheckmarkLength] = useState(null);

  const checkmarkAnimationRef = useSpringRef();
  const checkmarkAnimationStyle = useSpring({
    config: config.gentle,
    ref: checkmarkAnimationRef,
    x: isChecked ? 0 : checkmarkLength,
  });

  useChain(
    isChecked
      ? [checkboxAnimationRef, checkmarkAnimationRef]
      : [checkmarkAnimationRef, checkboxAnimationRef],
    [0, 0.1]
  );

  const onInputChange = () => {
    setIsChecked(!isChecked);
    props.onChange();
  };

  return (
    <label className="customCheckbox">
      <input
        type="checkbox"
        onChange={onInputChange}
      />
      <animated.svg
        aria-hidden="true"
        className={`checkbox ${isChecked ? 'checkbox--active' : ''}`}
        fill="none"
        style={checkboxAnimationStyle}
        viewBox="0 0 15 11"
      >
        <animated.path
          ref={(ref) => {
            if (ref) {
              setCheckmarkLength(ref.getTotalLength());
            }
          }}
          d="M1 4.5L5 9L14 1"
          stroke="#fff"
          strokeDasharray={checkmarkLength}
          strokeDashoffset={checkmarkAnimationStyle.x}
          strokeWidth="2"
        />
      </animated.svg>
      {props.label}
    </label>
  );
}

export default Checkbox;
