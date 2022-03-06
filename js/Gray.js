const SumBinary = (number1, number2) => {
    if ((number1 === 0) && (number2 === 0)) {
        return 0
    } else if (((number1 === 1) && (number2 === 0)) || ((number1 === 0) && (number2 === 1))) {
        return 1
    } else {
        return 0
    }
}

export function GetNewMessageGray(BinaryValue) {
    let binary = BinaryValue.split(';');
    let str = "";
    let bits = 0;
    let newMessageCode = [];
    let k = 0;
    let result = "";
    binary.forEach(n => str += n)
    k = str.length;
    for (let i = 0; i <= k; i++) {
        if (i < k) {
            bits = SumBinary((parseInt(str.charAt(k - i - 1))), (parseInt(str.charAt(k - i))))
            newMessageCode.unshift(bits)
        } else {
            bits = parseInt(str.charAt(0))
            newMessageCode.unshift(bits)
        }

    }
    console.log(str)
    newMessageCode.pop()
    newMessageCode.forEach(code => result += code)
    let msg =[];
    msg.push(result)
    msg.push(str)
   
    return msg;
}
