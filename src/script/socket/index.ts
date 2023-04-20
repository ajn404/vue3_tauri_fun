import { reactive } from 'vue';
import { io } from 'socket.io-client';

interface state {
  connected: boolean;
  fooEvents: any[];
  barEvents: any[];
}
export const state: state = reactive({
  connected: false,
  fooEvents: [],
  barEvents: [],
});

const URL: string =
  import.meta.env.NODE_ENV === 'production'
    ? import.meta.env.BASE_URL
    : 'http://localhost:5173';

export const socket = io(URL);

socket.on('connect', () => {
  state.connected = true;
});

socket.on('disconnect', () => {
  state.connected = false;
});

socket.on('foo', (...args) => {
  state.fooEvents.push(args);
});

socket.on('bar', (...args) => {
  state.barEvents.push(args);
});
