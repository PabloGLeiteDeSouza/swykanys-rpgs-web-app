export default function abreviarNome(nomeCompleto: string): string {
    if (nomeCompleto.length <= 25) return nomeCompleto;
    const partes = nomeCompleto.split(" ");
    if (partes.length <= 2) return nomeCompleto; // Se houver apenas primeiro e último nome, não abrevia
    const primeiroNome = partes[0];
    const ultimoNome = partes[partes.length - 1];
    const nomesDoMeio = partes.slice(1, -1).map(nome => nome !== "de" && nome !== "dos" && nome !== "da" ? nome[0] + "." : "");
    if(nomesDoMeio.length < 2 && nomesDoMeio[0] === "") return [primeiroNome, ultimoNome].join(" ");
    return [primeiroNome, ...nomesDoMeio, ultimoNome].join(" ");
}