import Type from "../types/notificationType";

export const notificationSetMessage = (message, type) => ({
  type: Type.NOTIFICATION_SET_MESSAGE,
  message,
  type,
});

export const notificationClearMessage = () => ({
  type: Type.NOTIFICATION_CLEAR_MESSAGE,
});
