import PubNub from 'pubnub';
import pubnubConfig from './pubnub.config.json';

export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL';

export default function PubSub() {
  const pubnub = new PubNub(pubnubConfig);
  pubnub.subscribe({ channels: [MESSAGE_CHANNEL] });
  this.addListener = (listenerConfig) => {
    pubnub.addListener(listenerConfig);
  };

  this.publish = (message) => {
    console.log('pub message', message);
    pubnub.publish({
      message,
      channel: MESSAGE_CHANNEL,
    });
  };
}

// pubnub.addListener({
//   message: (msgObj) => {
//     console.log('msgObj', msgObj);
//   },
// });

// setTimeout(() => {
//   pubnub.publish({
//     message: 'aa',
//     channel: MESSAGE_CHANNEL,
//   });
// }, 1000);
