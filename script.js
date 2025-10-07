document.getElementById('generateBtn').addEventListener('click', gerarCalendario);

function gerarCalendario() {
  const lastPeriodInput = document.getElementById('lastPeriod').value;
  const cycleLength = parseInt(document.getElementById('cycleLength').value);

  if (!lastPeriodInput) {
    alert("Por favor, informe a data da última menstruação.");
    return;
  }

  const lastPeriod = new Date(lastPeriodInput);
  const calendarDiv = document.getElementById('calendar');
  calendarDiv.innerHTML = ''; // limpar antes de gerar

  const diasNoMes = 30; // mostrar 30 dias a partir da última menstruação

  for (let i = 0; i < diasNoMes; i++) {
    const diaAtual = new Date(lastPeriod);
    diaAtual.setDate(lastPeriod.getDate() + i);

    const dayDiv = document.createElement('div');
    dayDiv.classList.add('day');

    const dia = diaAtual.getDate();
    const mes = diaAtual.getMonth() + 1;

    dayDiv.innerHTML = `<strong>${dia}/${mes}</strong>`;

    // Dias de menstruação (5 dias a partir da data inicial)
    if (i < 5) {
      dayDiv.classList.add('period');
      dayDiv.innerHTML += "<br>🩸 Menstruação";
    }

    // Janela fértil (do 10º ao 16º dia)
    if (i >= 10 && i <= 16) {
      dayDiv.classList.add('fertile');
      dayDiv.innerHTML += "<br>🌱 Fértil";
    }

    calendarDiv.appendChild(dayDiv);
  }
}
