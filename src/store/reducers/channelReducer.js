import {
  OPEN_CHANNEL,
  NEW_DEPOSIT,
  SET_CHANNEL_CLOSED,
  CHANGE_CHANNEL_BALANCE,
} from "../actions/types";
import { ethers } from "ethers";

const initialState = {};

const channel = (state = initialState, action) => {
  const { bigNumberify } = ethers.utils;
  switch (action.type) {
    case OPEN_CHANNEL:
      const newChannelId = action.channel.channel_identifier;
      const newChannels = {
        ...state,
        [newChannelId]: {
          ...action.channel,
          offChainBalance: "0",
        },
      };
      return newChannels;
    case SET_CHANNEL_CLOSED:
      const closedChannelId = action.channel.channel_identifier;
      const channelsModified = {
        ...state,
        [closedChannelId]: { ...state[closedChannelId], ...action.channel },
      };
      return channelsModified;
    case NEW_DEPOSIT:
      const depositedChannelId = action.channel.channel_identifier;
      const channelsDeposited = {
        ...state,
        [depositedChannelId]: {
          ...state[depositedChannelId],
          ...action.channel,
        },
      };
      return channelsDeposited;
    case CHANGE_CHANNEL_BALANCE:
      const { payment } = action;
      const { channelId, isReceived } = payment;
      // We get the BP
      const BP = payment.messages[11].message;
      // We parse the amounts as BN
      const bigAmount = bigNumberify(BP.transferred_amount);
      const channelBalance = bigNumberify(state[channelId].balance);
      // We calculate the accumulated, + for reception, - for sending
      let accumulated = channelBalance.add(bigAmount);
      if (!isReceived) accumulated = channelBalance.sub(bigAmount);
      // Return the state with the balances
      return {
        ...state,
        [channelId]: {
          ...state[channelId],
          offChainBalance: accumulated.toString(),
        },
      };
    default:
      return state;
  }
};

export default channel;
