import mitt from "mitt";

const emitter = mitt();

export const enum PubsubEvent {
  MOUSE_UP = "mouseup",
  MOUSE_MOVE = "mousemove",
}
export default emitter;
