import { useReducer } from "react";

type State = {
  name: string;
  email: string;
  needNDA: boolean;
  privacyConsent: boolean;
  message: string;
};

type ActionType =
  | { type: "update-name"; payload: string }
  | { type: "update-email"; payload: string }
  | { type: "set-nda"; payload: boolean }
  | { type: "update-message"; payload: string }
  | { type: "set-privacy-consent"; payload: boolean }
  | { type: "clear-form" };

const reducer = (state: State, action: ActionType) => {
  switch (action.type) {
    case "update-name": {
      return {
        ...state,
        name: action.payload,
      };
    }
    case "update-email": {
      return {
        ...state,
        email: action.payload,
      };
    }
    case "set-nda": {
      return {
        ...state,
        needNDA: action.payload,
      };
    }
    case "update-message": {
      return {
        ...state,
        message: action.payload,
      };
    }
    case "set-privacy-consent": {
      return {
        ...state,
        privacyConsent: action.payload,
      };
    }
    case "clear-form": {
      return {
        name: "",
        email: "",
        message: "",
        privacyConsent: false,
        needNDA: false,
      };
    }
  }
};

const initialValues = {
  name: "",
  email: "",
  needNDA: false,
  message: "",
  privacyConsent: false,
};

export const useContactForm = () => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const resetForm = () => {
    dispatch({ type: "clear-form" });
  };

  return { values: state, dispatch, resetForm };
};
