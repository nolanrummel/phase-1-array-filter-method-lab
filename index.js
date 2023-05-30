function findMatching (drivers, driverName) {
    return drivers.filter(driver => driver.toLowerCase() === driverName.toLowerCase())
}

function fuzzyMatch (drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters))
}

function matchName (drivers, name) {
    return drivers.filter(driver => driver.name === name)
}