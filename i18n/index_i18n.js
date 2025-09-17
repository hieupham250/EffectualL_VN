async function loadLocales() {
  const [en, vi] = await Promise.all([
    fetch("/i18n/en.json").then((res) => res.json()),
    fetch("/i18n/vi.json").then((res) => res.json()),
  ]);

  console.log(en);

  i18next.init(
    {
      lng: "vi", // mặc định
      debug: true,
      resources: {
        en: { translation: en },
        vi: { translation: vi },
      },
      interpolation: { escapeValue: false },
    },
    () => {
      updateContent();
      if (window.MathJax) {
        MathJax.typesetPromise();
      }
      if (typeof populateSimulationList === "function") {
        populateSimulationList(simulationData[grade]);
      }
    }
  );
}

export function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = i18next.t(el.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = i18next.t(el.dataset.i18nPlaceholder);
  });
}

// document.getElementById("languageSwitcher").addEventListener("change", (e) => {
//   const selectedLang = e.target.value;
//   i18next.changeLanguage(selectedLang, updateContent);
// });

loadLocales();
