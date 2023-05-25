chrome.runtime.onMessage.addListener(handleMessages);

async function handleMessages(message) {
  if (message.target !== 'offscreen-doc') {
    return;
  }
  switch (message.type) {
    case 'copy-data-to-clipboard':
      handleClipboardWrite(message.data);
      break;
    default:
      console.warn(`Unexpected message type received: '${message.type}'.`);
  }
}

const textEl = document.querySelector('#text');

function handleClipboardWrite(data) {
  textEl.value = data;
  textEl.select();
  document.execCommand('copy');
}
