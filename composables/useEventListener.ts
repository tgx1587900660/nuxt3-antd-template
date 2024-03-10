// 事件监听器
export const useEventListener = (target: EventTarget, event: string, callback: EventListener) => {
  onMounted(() => target.addEventListener(event, callback));
  onUnmounted(() => target.removeEventListener(event, callback));
};
