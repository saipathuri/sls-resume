export default interface About {
    name: string;
    phoneNumber: string;
    email: string;
    address: {
        lineOne: string,
        lineTwo: string,
        city: string,
        state: string
    }
}