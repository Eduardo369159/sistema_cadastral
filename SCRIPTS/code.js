const maxPeople = 15;
let agenda = [];

function adicionar_pessoa() {
    const name = document.getElementById('name').value;
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;

    if (agenda.length >= maxPeople) {
        alert('Agenda está cheia!');
        return;
    }

    agenda.push({ name, day, month });
    mostrar_agenda(agenda);
    limpar_inputs();
}

function deletar_pessoa() {
    const name = document.getElementById('name').value;
    agenda = agenda.filter(person => person.name !== name);
    mostrar_agenda(agenda);
    limpar_inputs();
}

function atualizar_pessoa() {
    const name = document.getElementById('name').value;
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;

    const person = agenda.find(person => person.name === name);
    if (person) {
        person.day = day;
        person.month = month;
        mostrar_agenda(agenda);
    } else {
        alert('Pessoa não encontrada!');
    }
    limpar_inputs();
}

function procurar_por_data() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;

    const result = agenda.filter(person => person.day == day && person.month == month);
    mostrar_agenda(result);
    limpar_inputs();
}

function procurar_por_mes() {
    const month = document.getElementById('month').value;
    const result = agenda.filter(person => person.month == month);
    mostrar_agenda(result);
    limpar_inputs();
}

function procurar_por_letra() {
    const name = document.getElementById('name').value.toLowerCase();
    const result = agenda.filter(person => person.name.toLowerCase().startsWith(name));
    mostrar_agenda(result);
    limpar_inputs();
}

function mostrar_por_nome() {
    const sortedAgenda = [...agenda].sort((a, b) => a.name.localeCompare(b.name));
    mostrar_agenda(sortedAgenda);
}

function mostrar_todos_meses() {
    const sortedAgenda = [...agenda].sort((a, b) => a.month - b.month || a.day - b.day);
    mostrar_agenda(sortedAgenda);
}

function mostrar_agenda(list) {
    const output = document.getElementById('output');
    output.innerHTML = list.map(person => `${person.name} - ${person.day}/${person.month}`).join('<br>');
}

function limpar_inputs() {
    document.getElementById('name').value = '';
    document.getElementById('day').value = '';
    document.getElementById('month').value = '';
}