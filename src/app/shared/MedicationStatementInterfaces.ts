export interface ms {
    id?: string,
    basedOn?: string[], // Mire épül a gyógyszerkezellés?
    partOf?: string[], // Milyen kezellés része a gyógyszerkezellés
    status: string, // Státuszkód: aktív , befejezett, hibába futott, szüneteltetett , várakozik , nemismert , nem használt
    statusReason?: string[], // Státusz oka
    category?: string, // Gyógyszerhasználat módja
    medication: string, // Gyógyszer
    subject: string, // Alany
    effective?: Period,
    reasonCode?: string[], // Gyógyszerhasználat oka
    reasonReferenc?: string[], // gyógyszerhasználatát alátámasztó diagnózis 
    informationSource?: string,
    note?: string[],
}

interface Period{
    beginTime: Date;
    endTime: Date;
}
