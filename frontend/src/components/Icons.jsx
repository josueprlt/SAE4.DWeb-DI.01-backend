function Logo(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123 68" {...props}>
      <path
        fill="#FFF"
        fillRule="evenodd"
        d="M100.6 41.7V20.6l-21.2 7.6v5.3l7-2.6v15.9l14.2-5.1z"
      ></path>
      <path
        fill="#FFF"
        fillRule="evenodd"
        d="M92.5 8.3a26.1 26.1 0 00-21.2 11l3.8 2.6a21.2 21.2 0 0117.3-9.1A20.9 20.9 0 01113.2 34a20.9 20.9 0 01-20.8 21.2 21.2 21.2 0 01-17.3-9.1l-3.8 2.6a25.2 25.2 0 0020.9 11 25.7 25.7 0 00.3-51.4"
      ></path>
      <path
        fill="#FFF"
        d="M59.9 22.1h-7.7v23.6h7c8.1 0 12.3-4.1 12.3-12S67.5 22 59.9 22m-.3 19.7l-2.7-.2V26.2h2.7c4.7 0 7 2.6 7 7.9s-2.2 7.8-7 7.8M20 22.3h-6L6 45.7h4.8l1.5-4.8h8.9l1.5 4.8h5.2zm-6.4 14.6l2.3-7.2a26.3 26.3 0 00.8-3c.2.8.5 1.8.9 3.1l2.3 7.1zm30.4.7l-1.1-1.7a6.7 6.7 0 004.8-6.6c0-4.7-3-7.2-8.5-7.2h-8.4v23.6h4.7v-8.9h2.6l5.3 8.9H49zm-8.5-11.5h3.3c2.6 0 3.9 1.1 3.9 3.4s-1.4 3.3-4 3.3h-3.2z"
      ></path>
    </svg>
  );
}

function Hamburger(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <path d="M32.9 30.9h-18a1 1 0 01-1-1 1.1 1.1 0 011-1h18a1 1 0 011 1 .9.9 0 01-1 1zm1-7a1 1 0 00-1-1h-18a1.1 1.1 0 00-1 1 1 1 0 001 1h18a.9.9 0 001-1zm0-6a1 1 0 00-1-1h-18a1.1 1.1 0 00-1 1 1 1 0 001 1h18a.9.9 0 001-1z"></path>
    </svg>
  );
}

function Research(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <path d="M34.2 32.1l-5.6-5.6a8 8 0 00-12.3-10.2 8.1 8.1 0 000 11.4A8.5 8.5 0 0022 30a8.2 8.2 0 004.5-1.4l5.6 5.6a1.4 1.4 0 002.1 0 1.5 1.5 0 000-2.1zm-16.4-5.9a5.8 5.8 0 010-8.4 5.8 5.8 0 018.4 0 5.9 5.9 0 01-8.4 8.4z"></path>
    </svg>
  );
}

function Profil(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <path
        fillRule="evenodd"
        d="M24 14a10 10 0 1010 10 10 10 0 00-10-10zm0 19a9 9 0 01-7.8-4.5c1-1.5 5.8-1.7 5.8-3.6a1.9 1.9 0 00-.3-1A7.5 7.5 0 0121 20a2.8 2.8 0 013-3 2.8 2.8 0 013 3 7.5 7.5 0 01-.7 3.9 1.9 1.9 0 00-.3 1c0 1.9 4.8 2.1 5.8 3.6A9 9 0 0124 33z"
      ></path>
    </svg>
  );
}

function Play(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <path d="M18.6 17h.5l11.3 7-11.3 6.9a1.7 1.7 0 01-1 0 1.2 1.2 0 01-.5-.9V18a1.2 1.2 0 01.5-.9z"></path>
    </svg>
  );
}

export { Logo, Hamburger, Research, Profil, Play };
