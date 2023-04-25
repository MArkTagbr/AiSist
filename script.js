// Definir evento de clique para o botão de adicionar tarefa
document.getElementById('adicionar-tarefa').addEventListener('click', function() {
  const tarefaInput = document.getElementById('tarefa-input');
  const tarefa = tarefaInput.value.trim();
  if (tarefa !== '') {
    adicionarTarefa(tarefa);
    tarefaInput.value = '';
  }
});

// Adicionar tarefa na lista
function adicionarTarefa(tarefa) {
  const listaTarefas = document.getElementById('lista-tarefas');
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = tarefa;
  listaTarefas.appendChild(novaTarefa);
  salvarTarefa(tarefa);
}

// Salvar tarefa no armazenamento local
function salvarTarefa(tarefa) {
  let tarefas = obterTarefas();
  tarefas.push({
    descricao: tarefa,
    data: moment().format('DD/MM/YYYY'),
    concluida: false
  });
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// Obter tarefas do armazenamento local
function obterTarefas() {
  let tarefas = JSON.parse(localStorage.getItem('tarefas'));
  if (!tarefas) {
    tarefas = [];
  }
  return tarefas;
}

// Exibir lista de tarefas
function exibirTarefas() {
  const listaTarefas = document.getElementById('lista-tarefas');
  const tarefas = obterTarefas();
  listaTarefas.innerHTML = '';
  tarefas.forEach(function(tarefa) {
    const novaTarefa = document.createElement('li');
    novaTarefa.innerText = tarefa.descricao + ' (' + tarefa.data + ')';
    if (tarefa.concluida) {
      novaTarefa.classList.add('concluida');
    }
    listaTarefas.appendChild(novaTarefa);
  });
}

// Definir evento de clique para a lista de tarefas
document.getElementById('lista-tarefas').addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('concluida');
    atualizarTarefa(event.target.innerText, event.target.classList.contains('concluida'));
  }
});

// Atualizar tarefa no armazenamento local
function atualizarTarefa(descricao, concluida) {
  let tarefas = obterTarefas();
  for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].descricao + ' (' + tarefas[i].data + ')' === descricao) {
      tarefas[i].concluida = concluida;
      localStorage.setItem('tarefas', JSON.stringify(tarefas));
      break;
    }
  }
}

// Inicializar extensão
function inicializar() {
  exibirTarefas();
}

inicializar();
