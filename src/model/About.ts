export default interface About {
    fullName: string;
    phoneNumber: string;
    email: string;
    address: {
        lineOne: string,
        lineTwo: string,
    };
    tagLine: string;
}