// ОБРАБОТКА ОШИБОК

const fnWithError = () => {
    throw new Error('Some error')  // выбрасывание ошибки
}


// TRY/CATCH

try {
    // Выполнение блока кода
} catch (error) {
    //  Этот  блок выполняется в случае возниконовения ошибок в блоке try
}


try {
    fnWithError()
} catch (e) {
    console.error(e)
    console.log(e.message)
}

console.log('Continue')