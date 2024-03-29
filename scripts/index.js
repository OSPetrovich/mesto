const profileEditButton = document.querySelector('.profile__edit');
const popupProfile = document.querySelector('.popup_edit');
const popupCloseButtonProfile = document.querySelector('.popup__close_profile');
const popupCloseButtonElement = document.querySelector('.popup__close_element');
const popupCloseButtonImage = document.querySelector('.popup__close_view');
const popupImage = document.querySelector('.popup_view');
const formProfile = document.querySelector('.form_profile');
const formElement = document.querySelector('.form_element');
const inputProfileName = document.querySelector('.form__input_name');
const inputProfileDescription = document.querySelector('.form__input_description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const elementTitle = document.querySelector('.element__title');
const elementAdd = document.querySelector('.profile__add-card');
const popupElementAdd = document.querySelector('.popup_element-add');
const inputElementTitle = document.querySelector('.form__input_title');
const inputElementImageSrc = document.querySelector('.form__input_image-src');
const section = document.querySelector('.elements__list'); 
const itemTemplate = document.querySelector('#template').content; 
const itemTemplateCard = itemTemplate.querySelector('.card').cloneNode(true);

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
  section.append(card);
});

function formSubmitHandlerProfile(evt) {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileDescription.textContent = inputProfileDescription.value;
  closePopup(popupProfile);
}

function createCardElement(name, link) {
  const itemTemplateCards = itemTemplate.querySelector('.card').cloneNode(true);
  const elementImage = itemTemplateCards.querySelector('.element__image');
  const deleteButton = itemTemplateCards.querySelector('.button__delete');
  const likeButton = itemTemplateCards.querySelector('.button__like');
  const elementTitle = itemTemplateCards.querySelector('.element__title');
  likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('button__like_active');
  });
  elementImage.addEventListener('click', function () {
    popupImage.classList.add('popup_opened');
    document.querySelector('.popup__view-image').src = link;
    document.querySelector('.popup__view-image').alt = name;
    document.querySelector('.popup__view-title').textContent = name;
  });
  deleteButton.addEventListener('click', function (evt) {
    itemTemplateCards.remove();
  });
  elementImage.src = link;
  elementImage.alt = name;
  elementTitle.textContent = name;
  return itemTemplateCards;
}

function addElement(evt) {
  evt.preventDefault();
  const name = inputElementTitle.value;
  const link = inputElementImageSrc.value;
  const card = createCardElement(name, link);
  createCardElement(name, link);
  closePopup(popupElementAdd);
  formElement.reset();
  section.prepend(card);
}

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

popupCloseButtonImage.addEventListener('click', function () {
  closePopup(popupImage);
});

elementAdd.addEventListener('click', function () {
  openPopup(popupElementAdd);
});

profileEditButton.addEventListener('click', function () {
  openPopup(popupProfile);
  inputProfileName.value = profileName.textContent;
  inputProfileDescription.value = profileDescription.textContent;
});

popupCloseButtonProfile.addEventListener('click', function () {
  closePopup(popupProfile);
});

popupCloseButtonElement.addEventListener('click', function () {
  closePopup(popupElementAdd);
});

formProfile.addEventListener('submit', formSubmitHandlerProfile);

formElement.addEventListener('submit', addElement);