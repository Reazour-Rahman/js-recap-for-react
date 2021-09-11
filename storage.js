const store = () => {
    const name = document.getElementById('name')
    const nameValue = name.value;
    const value = document.getElementById('value')
    const valueValue = value.value;

    //
    if (nameValue && valueValue) {
        localStorage.setItem(nameValue, valueValue);
    }
    name.value = ''
    value.value = ''
};