// Thiet lap moi truong test dung chung.
// Bo sung cac API trinh duyet ma jsdom chua co (neu can).

// Gia lap matchMedia (mot so component dung den)
if (typeof window !== "undefined" && !window.matchMedia) {
  window.matchMedia = (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}