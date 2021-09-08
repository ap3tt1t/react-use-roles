const isAllowed = (role:String, allowed:Array<String>, mode:String="includes") => {
    let isAllowed = false;
    switch (mode) {
        case "includes": 
            (role !== null && allowed.includes(role)) ? isAllowed = true : isAllowed = false;
            break;
        case "none": 
        (role !== null && allowed.every(test => test !== role)) ? isAllowed = true : isAllowed = false;
            break;
        default: 
            return false;
            break;
    }
    return isAllowed;
}

export default isAllowed