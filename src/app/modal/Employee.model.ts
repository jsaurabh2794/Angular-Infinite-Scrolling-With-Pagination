export class Employee {
    public Id: number;
    public Name: string;
    public Email: string;
    public Mobile: string;
    public Address: string;

    constructor(Id: number, Name: string, Email: string, Mobile: string, Address: string) {
        this.Id = Id;
        this.Name = Name;
        this.Email = Email;
        this.Mobile = Mobile;
        this.Address = Address;
    }
}
