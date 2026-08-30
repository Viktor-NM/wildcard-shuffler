class Action {
  constructor(public readonly text: string, public readonly mercy: boolean) { }
}

const ACTIONS: Action[] = [
  new Action('Selecciona un jugador para que veas sus cartas e intercambies una carta.', true),
  new Action('Tira una carta por cada jugador.', true),
  new Action('+10', false),
  new Action('+8', false),
  new Action('+6', false),
  new Action('Todos los jugadores te dan una carta.', false),
  new Action('Dale a cada jugador una carta.', true),
  new Action('Manteniendo el mismo sentido del juego, escoge el turno del siguiente jugador.', false),
  new Action('Revela tus cartas.', false),
  new Action('Todos toman 5 cartas.', false),
  new Action('Dale al siguiente jugador hasta que complete 7, si tiene 7 o más, dale 3.', true),
  new Action('Ganas el juego.', true),
  new Action('Quedas fuera del juego.', false),
  new Action('Si tienes 10 o más, quedas fuera.', true),
  new Action('Toma cartas hasta que te salga un comodín.', false),
  new Action('Si el siguiente jugador no tiene una carta de acción come 6.', false),
  new Action('Todos los jugadores suman el número de sus cartas y el jugador con la cantidad menor come 6.', true),
  new Action('Todos los jugadores toman una carta, la carta con el valor más alto o si es comodín tira todas las cartas de un solo color.', true),
  new Action('Todos los jugadores intercambian una carta con el jugador de la derecha.', true),
  new Action('Elige a un jugador, dicho jugador debe escoger una carta, si adivinas el color, el jugador toma 4; si no, tú tomas 4.', false),
  new Action('Elige un jugador para que saque una carta, este perderá los turnos según el número de la carta, si es comodín/acción pierde 2.', false),
  new Action('Toma 10.', false),
  new Action('Toma 8.', false),
  new Action('Toma 6.', false),
  new Action('El jugador con 1 carta, todos los demás jugadores le dan 2 cartas.', false),
  new Action('Si un jugador tiene una carta, tiene que mostrarla, si es comodín/acción toma hasta tener 8 cartas.', false),
  new Action('Tira todas tus cartas hasta tener 1.', true),
  new Action('Todos los jugadores tiran sus cartas hasta tener 1.', true),
  new Action('Todos los jugadores dejan de tomar cartas y comienzan a pasar su turno.', true),
  new Action('Todos los jugadores toman cartas hasta igualar al jugador de mayor cantidad de cartas.', false),
  new Action('Todos los jugadores toman cartas hasta igualar al jugador de menor cantidad de cartas.', true),
  new Action('Muestra tu carta con el número más alto, ese será el número de turnos que perderás.', false),
  new Action('Elige a un jugador para que sea bloqueado durante 2 turnos.', false),
  new Action('Elige a un jugador, elige un color y el que tenga más cartas de ese color le da sus cartas al que tenga menos.', false),
  new Action('Toma una carta del mazo y todos tiran sus cartas con el color de la carta.', true),
]

export function pickRandomAction(): Action {
  const index = Math.floor(Math.random() * ACTIONS.length)
  return ACTIONS[index]
}