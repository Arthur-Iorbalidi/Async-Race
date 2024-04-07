export type ParamEvent = {
    type: string;
    callback: (event: Event) => void;
};

interface Parameters {
    tag: string;
    cssClasses?: string[];
    attributes?: { [key: string]: string };
    content?: string;
    innerHTML?: string;
    event?: ParamEvent;
}

export default Parameters;
