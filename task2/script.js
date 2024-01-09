

var dayDropdown = document.getElementById('day');
for (var i = 1; i <= 31; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.text = i;
    dayDropdown.add(option);
}


var monthDropdown = document.getElementById('month')
for (var i = 1; i <=12; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.text = i;
    monthDropdown.add(option); 
}

var yearDropdown = document.getElementById('year');
for (var i = 1990; i <= 2023; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.text = i;
    yearDropdown.add(option);
}
