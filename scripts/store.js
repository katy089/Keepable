const Store = (function () {
  // Función para generar IDs únicos
  const idGenerator = (() => {
    let id = 0;

    return {
      next: () => ++id,
    };
  })();

  // Datos iniciales
  const initialCards = [
    // ... Tu lista de tarjetas iniciales
  ];

  const trashCards = [
    // ... Tu lista de tarjetas en la papelera
  ];

  // Funciones para manipular las tarjetas
  const moveObj = (objID, fromArray, toArray) => {
    const obj = fromArray.find((obj) => obj.id == objID);

    fromArray.splice(fromArray.indexOf(obj), 1);
    toArray.push(obj);
  };

  return {
    cards: JSON.parse(localStorage.getItem("cards")) || initialCards,
    trashCards: JSON.parse(localStorage.getItem("trashCards")) || trashCards,
    createCard(card) {
      card.id = idGenerator.next();
      this.cards.push(card);

      this.saveCards();
    },
    editCard(id, editedCard, classFF) {
      const card = this.cards.find((card) => card.id == id);
      card.title = editedCard.title;
      card.description = editedCard.description;
      card.class = classFF;

      this.saveCards();
    },
    trashCard(id) {
      moveObj(id, this.cards, this.trashCards);
      this.saveCards();
    },
    restoreCard(id) {
      moveObj(id, this.trashCards, this.cards);
      this.saveCards();
    },
    deleteCard(id) {
      const index = this.trashCards.findIndex((trashCard) => trashCard.id == id);
      this.trashCards.splice(index, 1);
      this.saveTrashCards();
    },
    changeColor(id, newClass) {
      const card = this.cards.find((card) => card.id == id);
      card.class = newClass;
      this.saveCards();
    },
    togglePin(id) {
      const card = this.cards.find((card) => card.id == id);
      card.pin = !card.pin;
      this.saveCards();
    },
    saveCards() {
      localStorage.setItem("cards", JSON.stringify(this.cards));
    },
    saveTrashCards() {
      localStorage.setItem("trashCards", JSON.stringify(this.trashCards));
    },
  };
})();
