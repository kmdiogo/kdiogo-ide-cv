import mitt from "mitt";

type Events = {
  MOUSE_UP?: MouseEvent
  MOUSE_MOVE?: MouseEvent
  CONTAINER_RESIZE_START: undefined
  CONTAINER_RESIZE_STOP: undefined
}

const emitter = mitt<Events>();

export default emitter;
