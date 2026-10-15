export interface Hero {
    id: number;
    name: string;
    image: string;
    powerstats: Powerstats;
}

export interface Powerstats {
    carisma: number;
    fuerza: number;
    inteligencia: number;
    velocidad: number;
    destreza: number;
    sabiduria: number;
}

export type Powerstat = keyof Powerstats;