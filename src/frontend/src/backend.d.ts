import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Pricing {
    teamSize: bigint;
    cost: bigint;
    time: bigint;
}
export interface Truck {
    status: TruckStatus;
    number: bigint;
    location: string;
}
export enum TruckStatus {
    active = "active",
    completed = "completed",
    inTransit = "inTransit"
}
export interface backendInterface {
    getAllTruckStatuses(): Promise<Array<Truck>>;
    getEstimate(homeSize: string): Promise<Pricing>;
    setupDefaultConfig(): Promise<void>;
    updatePricingConfig(homeSize: string, cost: bigint, time: bigint, teamSize: bigint): Promise<void>;
}
