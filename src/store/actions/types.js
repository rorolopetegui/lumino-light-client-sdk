// Channel actions
export const OPEN_CHANNEL = "OPEN_CHANNEL";
export const REQUEST_CHANNEL_CLOSE = "REQUEST_CHANNEL_CLOSE";
export const SET_CHANNEL_CLOSED = "SET_CHANNEL_CLOSED";
export const SET_CHANNEL_SETTLED = "SET_CHANNEL_SETTLED";
export const CHANGE_CHANNEL_BALANCE = "CHANGE_CHANNEL_BALANCE";

// Deposit actions

export const NEW_DEPOSIT = "NEW_DEPOSIT";

// Payment actions

export const CREATE_PAYMENT = "CREATE_PAYMENT";
export const ADD_PENDING_PAYMENT_MESSAGE = "ADD_PENDING_PAYMENT_MESSAGE";
export const DELETE_ALL_PENDING_PAYMENTS = "DELETE_ALL_PENDING_PAYMENTS";
export const SET_PAYMENT_SECRET = "SET_PAYMENT_SECRET";
export const SET_PAYMENT_COMPLETE = "SET_PAYMENT_COMPLETE";
export const RECEIVED_PAYMENT = "RECEIVED_PAYMENT";
export const SET_SECRET_MESSAGE_ID = "SET_SECRET_MESSAGE_ID";
export const UPDATE_NON_CLOSING_BP = "UPDATE_NON_CLOSING_BP";

// Polling actions

export const MESSAGE_POLLING_START = "MESSAGE_POLLING_START";
export const MESSAGE_POLLING_STOP = "MESSAGE_POLLING_STOP";
export const MESSAGE_POLLING_ERROR = "MESSAGE_POLLING_ERROR";
export const MESSAGE_POLLING = "MESSAGE_POLLING";
export const MESSAGE_SENT = "MESSAGE_SENT";
export const CHANGE_PAYMENT_POLLING_TIME = "CHANGE_PAYMENT_POLLING_TIME";

// Onboarding Actions

export const STORE_API_KEY = "STORE_API_KEY";
export const SET_CLIENT_ADDRESS = "SET_CLIENT_ADDRESS";
