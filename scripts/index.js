const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
const profileEditButton = document.querySelector('.profile__edit-button');
const elementAddButtom = document.querySelector('.profile__add-button');
const popupForm = document.querySelector('.popup__form');
//const popupElementAdd = document.querySelector('.popup__element-add');
const popupFormProfileEdit = document.querySelector('.popup__form_type_profile-edit');
const popupFormElementAdd = document.querySelector('.popup__form_type_element-add');
const profileNameInput = document.querySelector('.popup__input_type_name');
const profileName = document.querySelector('.profile__name');
const profileDescriptionInput = document.querySelector('.popup__input_type_description');
const profileDescription = document.querySelector('.profile__description');
//const elementTitleInput = document.querySelector('.popup__input_type_title');
const elementTitle = document.querySelector('.element__title');
//const elementImageInput = document.querySelector('.popup__input_type_image-src');
const elementImage = document.querySelector('.element__image');
const elementsList = document.querySelector('.elements__list');


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach(function (element) {
  const card = createCardElement(element.name, element.link);
  elementsList.append(card);
});

function createCardElement(name, link) {
  const cardTemplate = document.querySelector('.card-template').cloneNode(true);
  const elementImage = cardTemplate.querySelector('.element__image');
  const deleteButton = cardTemplate.querySelector('.element__button-delete');
  const likeButton = cardTemplate.querySelector('.element__like-button');
  const popupImage = document.querySelector('.popup__image-view');
  const elementTitle = cardTemplate.querySelector('.element__title');
    likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('.element__like-button_active');
  });
  elementImage.addEventListener('click', function () {
    popupImage.classList.add('popup_opened');
    document.querySelector('.popup__image-view').src = link;
    document.querySelector('.popup__image-view').alt = name;
    document.querySelector('.popup__image-title').textContent = name;
  });
  deleteButton.addEventListener('click', function (evt) {
    cardTemplate.remove();
  });
  elementImage.src = link;
  elementImage.alt = name;
  elementTitle.textContent = name;
  return cardTemplate;
}

function addPlace(evt) {
  const popupImage = document.querySelector('.popup__image-view');
  evt.preventDefault();
  const name = placeInput.value;
  const link = srcInput.value;
  const card = createCardElement(name, link);
  createCardElement(name, link);
  closePopup(popupNewPlace);
  formElementNewPlace.reset();
  section.prepend(card);
}

function openPopup(popupElement) {
  popupElement.classList.add('popup_open');
}



function profileEdit() {
  popup.classList.add('popup_opened');
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
}

function elementAdd(elementTitleValue, elementImageValue) {

  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.element__title').textContent = elementTitleValue;
  cardElement.querySelector('.element__image').textContent = elementImageValue;
  elementsList.append(cardElement);
//  elementTitleInput.value = elementTitle.textContent;
//  elementImageInput.value = elementImage.textContent;
}

elementAddButtom.addEventListener('click', function () {
  const elementTitleInput = document.querySelector('.popup__input_type_title');
  const elementImageInput = document.querySelector('.popup__input_type_image-src');

  elementAdd(elementTitleInput.value, elementImageInput.value);

  elementTitleInput.value = '';
  elementImageInput.value = '';
});

function closePopup() {
    popup.classList.remove('popup_opened')
}

function submitProfileEditForm(event) {
  event.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(popup);
}

function submitElementAddForm(event) {
  event.preventDefault();
  elementTitle.textContent = elementTitle.value;
  elementImage.textContent = elementImage.value;

  elementAdd(elementTitle, elementImage);

  closePopup(popup);
}

profileEditButton.addEventListener('click', profileEdit);

popupCloseButton.addEventListener('click', closePopup);

popupFormProfileEdit.addEventListener('submit', submitProfileEditForm);

popupFormElementAdd.addEventListener('submit', submitElementAddForm);