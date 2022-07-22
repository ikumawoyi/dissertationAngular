export interface EventResponse {
    id: number;
    eventName: string;
    eventAnchorsId: string;
    eventAttendeesId: string;
    //message?: string;
    ts: Date;
    eventTime: Date;
}