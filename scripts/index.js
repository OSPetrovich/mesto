const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
const editButton = document.querySelector('.profile__edit-button');
const popupForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const profileName = document.querySelector('.profile__name');
const descriptionInput = document.querySelector('.popup__input_type_description');
const profileDescription = document.querySelector('.profile__description');

function openPopup() {
    popup.classList.add('popup_opened')
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened')
}

editButton.addEventListener('click', openPopup);

popupCloseButton.addEventListener('click', closePopup);

function submitForm(event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
    closePopup();
}

popupForm.addEventListener('submit', submitForm);