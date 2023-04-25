// Salvar tarefa na lista
function salvarTarefa(tarefa, prioridade) {
  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  const novaTarefa = { tarefa: tarefa, prioridade: prioridade };
  tarefas.push(novaTarefa);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

// Obter lista de tarefas
function obterTarefas() {
  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  return tarefas;
}

// Salvar compromisso na lista
function salvarCompromisso(descricao, dataHora) {
  const compromissos = JSON.parse(localStorage.getItem("compromissos")) || [];
  const novoCompromisso = { descricao: descricao, dataHora: dataHora };
  compromissos.push(novoCompromisso);
  localStorage.setItem("compromissos", JSON.stringify(compromissos));
}

// Obter lista de compromissos
function obterCompromissos() {
  const compromissos = JSON.parse(localStorage.getItem("compromissos")) || [];
  return compromissos;
}

// Salvar lembrete na lista
function salvarLembrete(mensagem, dataHora) {
  const lembretes = JSON.parse(localStorage.getItem("lembretes")) || [];
  const novoLembrete = { mensagem: mensagem, dataHora: dataHora };
  lembretes.push(novoLembrete);
  localStorage.setItem("lembretes", JSON.stringify(lembretes));
}

// Obter lista de lembretes
function obterLembretes() {
  const lembretes = JSON.parse(localStorage.getItem("lembretes")) || [];
  return lembretes;
}
