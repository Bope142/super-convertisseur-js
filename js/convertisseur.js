export function AsciiToString(AsciiCode) {
    if (AsciiCode != undefined) {
        let ArrayCode = AsciiCode.split(',');
        let ArrayString = [];
        let StringValue = '';
        ArrayCode.forEach(code => {
            let conver = String.fromCharCode(code)
            ArrayString.push(conver)
        })
        ArrayString.forEach(str => StringValue += str);
        return StringValue
        //       return String.fromCharCode(parseFloat(AsciiCode));
    }
    return 'Aucune entrée !!'
}
export function StringToAscii(stringValue) {
    if (stringValue !== undefined) {
        let sentence = stringValue;
        let code = 0;
        let AsciiCode = [];
        let AsciiValue = '';
        for (let i = 0; i < sentence.length; i++) {
            code = sentence.charCodeAt(i);
            AsciiCode.push(code)

        }
        AsciiCode.forEach((str, index) => {
            if (index === 0) {
                AsciiValue += str
            } else {
                AsciiValue += ',' + str
            }

        });
        return AsciiValue;
    }
    return 'Aucune entrée !!'
}
export function DecimalToBinary(decimalNumber) {
    if (decimalNumber !== undefined) {
        return parseInt(decimalNumber).toString(2);
    }
    return 'Aucune entrée !!'
}
export function StringToBinary(stringValue) {
    if (stringValue !== undefined) {
        let ascii = StringToAscii(stringValue);
        let codeAscii = ascii.split(',');
        let binaryValue = [];
        let result = '';
        codeAscii.forEach((code, index) => {
            binaryValue.push(DecimalToBinary(code))
        })
        binaryValue.forEach((bin, index) => {
            if (index === 0) {
                result += bin
            } else {
                result += ";" + bin
            }
        })
        return result
    }
    return 'Aucune entrée !!'
}
export function BinaryToDecimal(BinaryNumber) {
    if (BinaryNumber !== undefined) {
        let Binary = BinaryNumber;
        return parseInt(Binary, 2).toString(10);
    }
    return 'Aucune entrée !!'
}
export function AsciiToBinary(AsciiNumber) {
    if (AsciiNumber !== undefined) {
        let Ascii = AsciiNumber.split(',');
        let BinaryArrays =[];
        let result='';
        Ascii.forEach(n =>{
            BinaryArrays.push(parseInt(n).toString(2))
        })
        BinaryArrays.forEach((n,index)=>{
            if(index ===0){
                result +=n
            }else{
                result +=";"+n;
            }
        })
        return result;
    }
    return 'Aucune entrée !!'
}
export function BinaryToAscii(BinaryNumber) {
    if (BinaryNumber !== undefined) {
        let Binary = BinaryNumber.split(',');
        let DecimalValue=[];
        let AsciiCode=[];
        let result ='';
        Binary.forEach(bin => {
            let decimal = BinaryToDecimal(bin);
            DecimalValue.push(decimal)
        })
        DecimalValue.forEach(dec => {
            let sentence =dec;
            let arrays=[];
            let s='';
            for (let i = 0; i < sentence.length; i++) {
                
                let code = sentence.charCodeAt(i);
                arrays.push(code)

            }
            for (let i=0;i <arrays.length;i++ ){
                s +=arrays[i]
              
            }
            AsciiCode.push(s)  
        })
        AsciiCode.forEach((val,index)=>{
            if(index === 0){
                result +=val
            }else{
                 result +=','+val
            }
        })
        return result
    }
    return 'Aucune entrée !!'
}
