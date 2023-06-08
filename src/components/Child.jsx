import { Transition } from "react-transition-group";
import { useRef } from "react";

const duration = 2000;

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exit: { opacity: 0 },
};

const defaultStyles = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const Child = ({ in: inProp }) => {
  const nodeRef = useRef(null);

  return (
    <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
      {(state) => {
        console.log(state);
        return (
          <div
            ref={nodeRef}
            style={{ ...defaultStyles, ...transitionStyles[state] }}
          >
            I am a transition
          </div>
        );
      }}
    </Transition>
  );
};

export default Child;
