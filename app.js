const expensiveList = document.getElementById('expensive-list')
const addBtn = document.getElementById('addBtn')
const inputConta = document.getElementById('conta')
const inputCategoria = document.getElementById('categoria')
const inputValor = document.getElementById('valor')

let data = []

function getInputValues() {
    // Verifica se todos os campos estão preenchidos
    const contaValida = inputConta.value.trim() !== ""
    const categoriaValida = inputCategoria.value.trim() !== ""
    const valorValido = inputValor.value.trim() !== "" && !isNaN(inputValor.value)

    if (contaValida && categoriaValida && valorValido) {
        const newExpense = {
            id: Date.now(),
            title: inputConta.value.trim(),
            category: inputCategoria.value.trim(),
            amount: parseFloat(inputValor.value).toFixed(2)
        }

        data.push(newExpense)
        inputConta.value = ''
        inputCategoria.value = ''
        inputValor.value = ''
    } else {
        alert('Preencha todos os campos corretamente!')
    }
}

function renderExpensiveList() {
    expensiveList.innerHTML = ''

    data.forEach((item, index) => {
        const expensiveItem = `
            <div class="flex justify-between items-center bg-gray-700 p-4 rounded-lg">
                <div class="flex items-center gap-4">
                    <i class="text-yellow-400">${index + 1}</i>
                    <div>
                        <div class="font-bold">${item.title}</div>
                        <div class="text-sm">${item.category} - R$ ${item.amount}</div>
                    </div>
                </div>
                <button class="text-red-500 hover:text-red-400">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `
        expensiveList.insertAdjacentHTML('beforeend', expensiveItem)
    })
}

function addExpensive() {
    getInputValues()
    renderExpensiveList()
}

addBtn.addEventListener('click', (event) => {
    event.preventDefault()
    addExpensive()
})
