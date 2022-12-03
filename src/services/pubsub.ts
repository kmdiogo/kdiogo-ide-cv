import mitt from "mitt";

const emitter = mitt();

export const enum PubsubEvent {
  MOUSE_UP = "mouseup",
  MOUSE_MOVE = "mousemove",
  CONTAINER_RESIZE_START = "container_resize_start",
  CONTAINER_RESIZE_STOP = "container_resize_stop",
}
export default emitter;
