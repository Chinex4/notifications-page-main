const markUnread = document.getElementById('mark');
const unreadMsg = document.querySelectorAll('.unread');
const numberOfUnread = document.getElementById('number');

markUnread.addEventListener('click',() => {
    numberOfUnread.classList.remove('grid');
    numberOfUnread.classList.add('hidden');
    unreadMsg.forEach(unread => {
        unread.classList.remove('bg-veryLightGrayishBlue');
    });
});