exports.onInitialClientRender = () => {
  const theme = typeof window !== 'undefined' && localStorage.getItem('theme');

  if (typeof window !== 'undefined' && theme === 'dark') {
    localStorage.setItem('theme', 'dark');
    document.getElementById('dark-mode-button').textContent = '☀️';
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.id = 'reset';
    link.href = './reset.css';
    head.appendChild(link);
  }

  if (typeof window !== 'undefined') {
    const headtwo = document.getElementsByTagName('head')[0];
    const linktwo = document.createElement('link');
    linktwo.rel = 'stylesheet';
    linktwo.id = 'reset';
    linktwo.href = './reset.css';
    headtwo.appendChild(linktwo);
  }
};
