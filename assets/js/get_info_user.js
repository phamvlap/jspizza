const getInfoUser = function(idForm, arraySelector) {
    const form = document.querySelector(idForm);
    var inputElements = arraySelector.reduce(function(selectors, selector) {
        return selectors.concat(form.querySelector(selector));
    }, []);
    var user = {};
    if(form) {
        inputElements.forEach(function(inputElement) {
            if(inputElement){
                if(inputElement.id == 'gender'){
                    const nodeListGender = inputElement.querySelectorAll('input');
                    Array.from(nodeListGender).forEach(function(input) {
                        if(input.matches(':checked')){
                            user[`${inputElement.id}`] = input.value;
                        }
                    })
                }
                else {
                    user[`${inputElement.id}`] = inputElement.value;
                }
            }
        })     
    }
    return user;
}

export {getInfoUser};