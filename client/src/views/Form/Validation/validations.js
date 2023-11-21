

export const validateForm = ({name, difficulty, season, Countries, duration}) => {

    let errors = {}
    let nameRegex = /^[a-zA-Z\s]+$/;

    let durationRegex = /^[0-9]+$/
    
    if(name && !nameRegex.test(name)){
        errors.name = 'This field accepts only letters'
    }
    if(duration && !name){
        errors.name = 'This field is required'
    }
    if(duration && !durationRegex.test(duration)){
        errors.duration = 'This field accepts only numbers'
    }
    if(duration && !difficulty){
        errors.difficulty = 'This field is required'
    }
    if(duration && !season){
        errors.season = 'This field is required'
    }
    if(duration && Countries.length === 0){
        errors.Countries = 'This field is required'
    }

    return errors
}

export const validateSubmit = ({name, difficulty, season, Countries, duration}) => {
    let errors = false

    let nameRegex = /^[a-zA-Z\s]+$/

    if(!name || !nameRegex.test(name) || !difficulty || !season || Countries.length === 0 || !duration || Number(duration) != duration){
        errors = true
    }

    return errors
}