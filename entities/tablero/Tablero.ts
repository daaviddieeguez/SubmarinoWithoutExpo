
import { Config } from "../config/Config";
import { Submarino } from "../submarino/Submarino";
import { Casilla, Vecino } from "./Casilla";

class Tablero {
    public mapa : Casilla[];
    private submarino: Submarino;
    private trace: number;

    constructor() {
        this.mapa = [];
        this.submarino = new Submarino();
        this.trace = 0;
    }

    init(config : Config) {
        let malla : Casilla[][]  = Array.from({ length: config.size }, (_,i) => {
            return Array.from({ length: config.size }, (_,j) => new Casilla(i,j));
        });

        malla.forEach( (elemento,i) => elemento.forEach( (casilla,j) => {
            if (i < config.size-1) casilla.nuevoVecino( Vecino.ABAJO, malla[i+1]![j]!);
            if (i > 0) casilla.nuevoVecino( Vecino.ARRIBA, malla[i-1]![j]!);
            if (j < config.size-1) casilla.nuevoVecino( Vecino.DERECHA, malla[i]![j+1]!);
            if (j > 0) casilla.nuevoVecino( Vecino.IZQUIERDA, malla[i]![j-1]!);
        }));

        this.mapa = malla.flat();
        this.submarino.init(config.size);
        this.trace = config.trace;
    }

    dispara(x: number, y: number): boolean {
        const posicionSubmarino = this.submarino.getPosition();
        if (posicionSubmarino.x === x && posicionSubmarino.y === y) {
            return true;
        }

        this.mapa.filter( (item) => item.valor > 0).forEach((item) => item.valor -=1);
        let casilla : Casilla | undefined  = this.mapa.find( (item) => item.x === posicionSubmarino.x && item.y === posicionSubmarino.y);
        if (casilla !== undefined) {
            this.submarino.mover(casilla.vecinos.filter( (item) => item !== null ));
            casilla.valor = this.trace;
        }

        return false;
    }
}

export { Tablero };