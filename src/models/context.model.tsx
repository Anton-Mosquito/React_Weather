import IData  from "./dataPosition.model";

export default interface ChangeContext {
    dataCity? : any;
    dataPosition? : IData;
    updateData: (value: string) => void;
    loading: boolean;
};