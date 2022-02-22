export interface Transaction {
    id: number,
    customer: string,
    source: number,
    channel: string,
    network: string,
    amount: number,
    dateCreated: string,
    netRef: string,
    narration: string,
    status: string
}