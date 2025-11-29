let filtrosAtuais = {};

export function saveFilters(filtros) {
  filtrosAtuais = filtros;
}

export function getFilters() {
  return filtrosAtuais;
}
