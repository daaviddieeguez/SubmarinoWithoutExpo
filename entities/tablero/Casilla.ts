export enum Vecino {
    ARRIBA, ABAJO, IZQUIERDA, DERECHA
};

export class Casilla {
    public id: string;
    public x: number;
    public y: number;
    public valor: number;
    public vecinos: Casilla[] | null[];

    constructor(x: number, y: number) {
        this.id = `${x.toString()}${y.toString()}`;
        this.x = x;
        this.y = y;
        this.valor = 0;
        this.vecinos = [ null, null, null, null ];
    }

    nuevoVecino(direccion: Vecino, casilla: Casilla) {
        this.vecinos[direccion] = casilla;
    }
    
}
