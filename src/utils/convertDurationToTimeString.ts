export function convertDurationToTimeString(duration: number) {
  // - a duration se dá em segundos então eu coloco 60 60 para converter em horas
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  // * A função padStrat vai coocar '0' na frente se hours, minutes, ou seconds chegar com 1 dígito apenas
  // * join com dois pontos para unir ('hours:minutes:seconds')
  const timeString = [hours, minutes, seconds]
    .map(unit => String(unit).padStart(2, '0'))
    .join(':')

  return timeString;
} 