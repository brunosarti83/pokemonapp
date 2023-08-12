

const validateName = (name) => {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (specialChars.test(name)) {
        return `Pokemon's name can't contain special characters`
    } else if (!name) {
        return 'You must enter a valid name'
    }
    return ''
}

const validateHealth = (hp) => {
    if (hp === 0) {
        return `Is your Pokemon dead?? Health must be > 0`
    }
    return ''
}

const validateAttack = (attack) => {
    if (attack === 0) {
        return `That's weak !! Attack must be > 0`
    }
    return ''
}

const validateDefense = (defense) => {
    if (defense === 0) {
        return `Ouch! Defense must be > 0`
    }
    return ''
}

const validateSpeed = (speed) => {
    if (speed === 0) {
        return `Too slow!! Speed must be > 0`
    }
    return ''
}

const validateStats = (hp, attack, defense, speed) => {
    const sum = hp + attack + defense + speed
    if (sum > 500) {
        return `The sum of your Stats must be <= 500. Yours are ${sum}`
    }
    return ''
}

const validateHeight = (height) => {
    if (!height) {
        return 'Your Pokemon must be at least 1 inch high'
    } else if (height > 1000000) {
        return `There seems to be a problem, that's too high`
    }
    return ''
}

const validateWeight = (weight) => {
    if (!weight) {
        return 'Your Pokemon must weight at least 1 pound'
    } else if (weight > 1000000) {
        return `There seems to be a problem, that's too heavy`
    }
    return ''
}

const validateTypes = (types) => {
    if (types.length < 2) {
        return 'You must select 2 types for your Pokemon'
    }
    if (types.length > 2) {
        return `Your Pokemon can't belong to more than 2 types`
    }
    return ''
}



const validate = (pokemon, prop, errors) => {
    const { name, hp, attack, defense, speed, height, weight, types } = pokemon
    switch (prop) {
        case 'name':
            errors.name = validateName(name)
            break
        case 'hp':
            errors.hp = validateHealth(Number(hp))
            errors.stats = validateStats(Number(hp), Number(attack), Number(defense), Number(speed))
            break
        case 'attack':
            errors.attack = validateAttack(Number(attack))
            errors.stats = validateStats(Number(hp), Number(attack), Number(defense), Number(speed))
            break
        case 'defense':
            errors.defense = validateDefense(Number(defense))
            errors.stats = validateStats(Number(hp), Number(attack), Number(defense), Number(speed))
            break
        case 'speed':
            errors.speed = validateSpeed(Number(speed))
            errors.stats = validateStats(Number(hp), Number(attack), Number(defense), Number(speed))
            break
        case 'height':
            errors.height = validateHeight(Number(height))
            break
        case 'weight':
            errors.weight = validateWeight(Number(weight))
            break
        case 'types':
            errors.types = validateTypes(types)
            break
        default:
            return errors
        }
    return errors
}

export default validate;

