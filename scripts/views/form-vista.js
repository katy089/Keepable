const formView = (function () {
  const template = `
    <form action="" class="white-bg" id="form">
      <div class="input__container padding">
        <div class="full-width">
          <input
            id="title"
            type="text"
            placeholder="Title"
            class="input__content heading inherit-bc"
          />
          <input
            id="description"
            type="text"
            placeholder="Take a note..."
            class="input__content inherit-bc"
          />
        </div>
        <div class="card__footer full-width">
          <div class="card__icon--custom">
            <section class="palette__container ds-none">
              ${renderColorPalettes()}
            </section>
            <a href="#" class="form-to-white" id="formPalette">
              <img src="assets/icons/palette.svg" alt="icon-color" class="center" />
            </a>
          </div>
          <button type="submit" class="button__custom inherit-bc">Keep it!</button>
        </div>
      </div>
    </form>
  `;

  function renderColorPalettes() {
    const colors = [
      "white-bg gray-border",
      "red-100-bg",
      "yellow-200-bg",
      "yellow-100-bg",
      "green-100-bg",
      "cyan-100-bg",
      "blue-100-bg",
      "blue-200-bg",
      "purple-200-bg",
      "pink-100-bg",
    ];

    return colors.map((color) => `<div class="palette__color ${color}"></div>`).join("");
  }

  return {
    toString() {
      return template;
    },
    addListeners() {
      // Add event listeners here if needed
    },
  };
})();
