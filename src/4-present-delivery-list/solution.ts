export type Address = { address: string; city: string };
export type PresentDeliveryList<T> = Record<keyof T, Address>;
