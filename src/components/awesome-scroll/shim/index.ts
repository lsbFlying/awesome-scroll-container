import { FrameRequestCallback } from "../interface";

const requestFrameShim = () => {
  let lastTime = 0;
  let browserVendors = ["webkit", "moz"];
  
  for (let i = 0, length = browserVendors.length; i < length && !window.requestAnimationFrame; i++) {
    window.requestAnimationFrame = (window as any)[`${browserVendors[i]}RequestAnimationFrame` as keyof typeof window];
    window.cancelAnimationFrame = (window as any)[`${browserVendors[i]}CancelAnimationFrame` as keyof typeof window] // in webkit
    || (window as any)[`${browserVendors[i]}CancelRequestAnimationFrame` as keyof typeof window];
  }
  
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback: FrameRequestCallback): number {
      let curTime = Date.now();
      let timeOutToCall = Math.max(0, 16.7 - (curTime - lastTime));
      
      let timeId = window.setTimeout(() => {
        callback(curTime + timeOutToCall);
      }, timeOutToCall);
      lastTime = curTime + timeOutToCall;
      
      return timeId;
    }
  }
  
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      window.clearTimeout(id);
    }
  }
}

requestFrameShim();
