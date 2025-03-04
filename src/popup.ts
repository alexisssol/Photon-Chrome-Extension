// popup.ts
document.getElementById('showCreator')?.addEventListener('click', async () => {
    const result = await chrome.runtime.sendMessage({ action: 'connectSolana' });
});
