$(document).ready(function() {
    if ($("#dateInput").length) {
        $("#dateInput").datepicker({
            dateFormat: "dd MM yy",
            onSelect: function(dateText) {
                $(this).val(dateText);
            }
        });
    }
});


function openDatePicker() {
    $("#dateInput").datepicker("show"); // открываем календарь при клике
}

const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
    navbar.style.display = navbar.style.display === 'block' ? 'none' : 'block';
});
