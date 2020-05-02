import Type from "../types/notificationType";

const initialState = {
  snackBar: {
    type: undefined,
    active: false,
    message: undefined,
  },
};

const notification = (state = initialState, action) => {
  switch (action.type) {
    case Type.NOTIFICATION_SET_MESSAGE:
      return {
        ...state,
        snackBar: {
          type: action.type,
          active: true,
          message: action.message,
        },
      };

    case Type.NOTIFICATION_REQUEST_ERROR:
      return {
        ...state,
        snackBar: {
          type: "error",
          active: true,
          message: action.message,
        },
      };

    case Type.NOTIFICATION_REQUEST_SUCCESS:
      return {
        ...state,
        snackBar: {
          type: "success",
          active: true,
          message: action.message,
        },
      };

    case Type.NOTIFICATION_CLEAR_MESSAGE:
      return {
        ...state,
        snackBar: {
          type: state.snackBar.type,
          active: false,
          message: undefined,
        },
      };

    default: {
      return {
        ...state,
      };
    }
  }
};

export default notification;
