const expensiveList = document.getElementById('expensive-list')
const addBtn = document.getElementById('addBtn')
const inputConta = document.getElementById('conta')
const inputCategoria = document.getElementById('categoria')
const inputValor = document.getElementById('valor')
const totalGastos = document.getElementById('totalGastos')

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
    let amountExpensive = 0
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
                <button onclick="removeExpensive(${item.id})" class="text-red-500 hover:text-red-400">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `
        amountExpensive += parseFloat(item.amount)
        expensiveList.insertAdjacentHTML('beforeend', expensiveItem)
    })
    totalGastos.textContent = `R$ ${amountExpensive.toFixed(2)}`
}

function addExpensive() {
    getInputValues()
    renderExpensiveList()
}

function removeExpensive(id) {
    data = data.filter((item) => item.id !== id)
    renderExpensiveList()
}

addBtn.addEventListener('click', (event) => {
    event.preventDefault()
    addExpensive()
})
