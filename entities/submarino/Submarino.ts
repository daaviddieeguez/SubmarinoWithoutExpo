import { Posicion } from "../config/Config";
import { Casilla } from "../tablero/Casilla";


class Submarino {

    private x: number;
    private y: number;

    constructor() {
        this.x = 0;
        this.y = 0;
    }

    public init(size: number): void {
        this.x = Math.floor(Math.random() * size);
        this.y = Math.floor(Math.random() * size);
    }

    public getPosition(): Posicion {
        return {x: this.x, y: this.y};
    }

    public mover(casillas: Casilla[] | null[]) : void {
        if (casillas !== null) {
            const direccion = Math.floor(Math.random() * casillas.length);
            this.x = casillas[direccion]!.x;
            this.y = casillas[direccion]!.y;
        }
    }
}

export { Submarino };