export class Menu {
    display: string;
    route: string;
    title: string;

    constructor(display: string, route: string, title: string) {
        this.display = display;
        this.route = route;
        this.title = title;
    }
}