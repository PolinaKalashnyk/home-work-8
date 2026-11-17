
function mul() {
    let result = 1;
    let hasNumber = false;

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === "number") {
            result *= arguments[i];
            hasNumber = true;
        }
    }

    return hasNumber ? result : 0;
}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0
