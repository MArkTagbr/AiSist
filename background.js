// Função para criar notificação
function criarNotificacao(mensagem) {
  chrome.notifications.create({
    type: "basic",
    iconUrl: "icone.png",
    title: "Lembrete",
    message: mensagem,
  });
}

// Verificar se é hora de enviar notificação de lembrete
function verificarLembretes() {
  const agora = new Date().getTime();

  // Verificar todos os lembretes salvos
  const lembretes = JSON.parse(localStorage.getItem("lembretes")) || [];
  lembretes.forEach((lembrete) => {
    const dataLembrete = new Date(lembrete.dataHora).getTime();
    if (dataLembrete <= agora) {
      criarNotificacao(`Lembrete: ${lembrete.mensagem}`);
      // Remover lembrete da lista
      const index = lembretes.indexOf(lembrete);
      lembretes.splice(index, 1);
      localStorage.setItem("lembretes", JSON.stringify(lembretes));
    }
  });
}

// Verificar se é hora de enviar notificação de compromisso
function verificarCompromissos() {
  const agora = new Date().getTime();

  // Verificar todos os compromissos salvos
  const compromissos = JSON.parse(localStorage.getItem("compromissos")) || [];
  compromissos.forEach((compromisso) => {
    const dataCompromisso = new Date(compromisso.dataHora).getTime();
    if (dataCompromisso <= agora) {
      criarNotificacao(`Compromisso: ${compromisso.descricao}`);
      // Remover compromisso da lista
      const index = compromissos.indexOf(compromisso);
      compromissos.splice(index, 1);
      localStorage.setItem("compromissos", JSON.stringify(compromissos));
    }
  });
}

// Verificar lembretes e compromissos a cada minuto
setInterval(verificarLembretes, 60000);
setInterval(verificarCompromissos, 60000);
