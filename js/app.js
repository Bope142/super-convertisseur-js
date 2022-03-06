import {
    AsciiToString,
    StringToAscii,
    StringToBinary,
    BinaryToAscii,
    AsciiToBinary

} from './convertisseur.js';
import {
    GetNewMessageGray
} from './Gray.js';
let ancienMessage, NouveauMessage;
const eventComboBox = () => {
    document.querySelector('#conversion-type').addEventListener('change', (e) => {
        clearMemo(document.querySelector('#value-conversion'))
        switch (document.querySelector('#conversion-type').selectedIndex) {
            case 0: {

                document.querySelector('#value-conversion').setAttribute('placeholder', "Merci de sélectionner le type de conversion avant de remplir ce champ.")
                document.querySelector('#value-conversion').setAttribute('readonly', 'true')
                clearMemo(document.querySelector('#result-conversion'))
                clearMemo(document.querySelector('.view-tab textarea'))
            }
            break;
        case 1: {
            document.querySelector('#value-conversion').setAttribute('placeholder', "Entrez votre code ASCII en le séparant par une virgule dépourvue d'espace. Ex:(72, 69, 76, 76, 79)")
            document.querySelector('#value-conversion').removeAttribute('readonly')
            clearMemo(document.querySelector('#result-conversion'))
            clearMemo(document.querySelector('.view-tab textarea'))
        }

        break;
        case 2: {
            document.querySelector('#value-conversion').setAttribute('placeholder', "Saisissez le texte que vous voulez convertir en ASCII.")
            document.querySelector('#value-conversion').removeAttribute('readonly')
            clearMemo(document.querySelector('#result-conversion'))
            clearMemo(document.querySelector('.view-tab textarea'))
        }
        break;
        case 3: {
            document.querySelector('#value-conversion').setAttribute('placeholder', "Saisissez le texte que vous voulez convertir en BINAIRE.")
            document.querySelector('#value-conversion').removeAttribute('readonly')
            clearMemo(document.querySelector('#result-conversion'))
            clearMemo(document.querySelector('.view-tab textarea'))
        }
        break;
        case 4: {
            document.querySelector('#value-conversion').setAttribute('placeholder', "Saisissez votre code en binaire (par exemple: 00011) en le séparant par une virgule (par exemple: 10000,010101, 10000) pour le convertir en ASCI.")
            document.querySelector('#value-conversion').removeAttribute('readonly')
            clearMemo(document.querySelector('#result-conversion'))
            clearMemo(document.querySelector('.view-tab textarea'))
        }
        break;
        case 5: {
            document.querySelector('#value-conversion').setAttribute('placeholder', "Entrez votre code en ASCII en le séparant avec une virgule (Ex: 78,10, 15) pour le convertir en BINAIRE.")
            document.querySelector('#value-conversion').removeAttribute('readonly')
            clearMemo(document.querySelector('#result-conversion'))
            clearMemo(document.querySelector('.view-tab textarea'))
        }
        break;

        }
    })
}
const renderResult = (result) => {
    document.querySelector('#result-conversion').value = result;
}
const clearMemo = (Memo) => {
    Memo.value = ''
}
const ConvertResult = () => {
    document.querySelector('.btn-convert').addEventListener('click', () => {
        if (!document.querySelector('.btn-convert').classList.contains('btn-disabled')) {
            switch (document.querySelector('#conversion-type').selectedIndex) {
                case 0: {
                    document.querySelector('#conversion-type').focus()
                }
                break;
            case 1: {
                if (document.querySelector('#value-conversion').value !== '') {
                    renderResult(AsciiToString(document.querySelector('#value-conversion').value.trim()))
                }
               
            }
            break;
            case 2: {
                if (document.querySelector('#value-conversion').value !== '') {

                    renderResult(StringToAscii(document.querySelector('#value-conversion').value.trim()))
                }
               
            }
            break;
            case 3: {
                if (document.querySelector('#value-conversion').value !== '') {

                    renderResult(StringToBinary(document.querySelector('#value-conversion').value.trim()))
                }
               
            }
            break;
            case 4: {
                if (document.querySelector('#value-conversion').value !== '') {

                    renderResult(BinaryToAscii(document.querySelector('#value-conversion').value.trim()))
                }
                
            }
            break;
            case 5: {
                if (document.querySelector('#value-conversion').value !== '') {

                    renderResult(AsciiToBinary(document.querySelector('#value-conversion').value.trim()))
                }
               
            }
            break;
            }
            ResultOutputVerification(document.querySelector('#conversion-type').selectedIndex)
        }

    })
}
const valueConversionEvent = () => {
    document.querySelector('#value-conversion').addEventListener('input', (e) => {
        if (document.querySelector('#value-conversion').value !== '') {
            document.querySelector('.btn-convert').classList.remove('btn-disabled')
        } else {
            document.querySelector('.btn-convert').classList.add('btn-disabled')
        }

    })
}
const ResultOutputVerification = (indexItem) => {
    let valueResult = '';
    switch (indexItem) {
        case 1: {
            valueResult = StringToBinary(document.querySelector('#result-conversion').value.trim())
        }
        break;
    case 2: {
        valueResult = AsciiToBinary(document.querySelector('#result-conversion').value.trim())
    }
    break;
    case 3: {
        valueResult = document.querySelector('#result-conversion').value.trim()
    }
    break;
    case 4: {
        valueResult = AsciiToBinary(document.querySelector('#result-conversion').value.trim())

    }
    break;
    case 5: {
        valueResult = document.querySelector('#result-conversion').value.trim()
    }
    break;


    }
    let result =GetNewMessageGray(valueResult)
    ancienMessage = result[1];
    document.querySelector('.view-tab textarea').value = ancienMessage;
    NouveauMessage =result[0] 
    //    document.querySelector('#result-gray').value =GetNewMessageGray(valueResult)

}

const tabControl = () => {
    document.querySelectorAll('.tab').forEach((tab, index) => {
        tab.addEventListener('click', (e) => {

            if (index === 0) {
                document.querySelectorAll('.tab')[1].classList.remove('tab-active')
                e.target.classList.toggle('tab-active')
                if (ancienMessage !== undefined) {
                    document.querySelector('.view-tab textarea').value = ancienMessage;
                } else {
                    document.querySelector('.view-tab textarea').value = '';
                }

            } else {
                document.querySelectorAll('.tab')[0].classList.remove('tab-active')
                e.target.classList.toggle('tab-active')
                if (NouveauMessage !== undefined) {
                    document.querySelector('.view-tab textarea').value = NouveauMessage;
                } else {
                    document.querySelector('.view-tab textarea').value = '';
                }

            }

        })
    })
}
window.addEventListener('load', () => {
    eventComboBox()
    ConvertResult()
    valueConversionEvent()
    tabControl()

})
