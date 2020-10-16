import Description from './Description';

export default interface ExperinenceItem {
    title: string;
    company: string;
    location: string;
    date: string,
    descriptions: Description[]
}