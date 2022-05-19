
export interface IEventsStruct
{
    name: string;
    year: string;
    date: string;
    tag: string;
}

export interface IActivitiesStruct
{
    version: string;
    projects: IEventsStruct[]; 
}