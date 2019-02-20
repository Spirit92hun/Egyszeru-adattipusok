import * as http from "http";

export default class Content {

    public content(req: http.IncomingMessage, res: http.ServerResponse): void {

        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

        res.write("<h1 style='color: red;'>Boolean adattípus csak true vagy false-szal tér vissza</h1>");
        let isDone: boolean = false;
        res.write("<p>Logikai érték: "+ isDone+"</p>");

        res.write("<h1 style='color: red;'>number adattípus amivel különböző számrendszer számait is el tudjuk tárolni példa: </h1>");
        let decimal: number = 6;
        let hex: number = 0xf00d;
        let binary: number = 0b1010;
        let octal: number = 0o744;
        
        res.write("<p>decimal érték: "+ decimal+"</p>");
        res.write("<p>hex érték: "+ hex+"</p>");
        res.write("<p>binary érték: "+ binary+"</p>");
        res.write("<p>octal érték: "+ octal+"</p>");

        res.write("<h1 style='color: red;'>string adattípus amivel képes az ember szöveget eltárolni így:</h1>");
        let color: string = "blue";
        res.write("<p>String érték: "+ color+"</p>");


        
        res.write("<a href='https://github.com/Spirit92hun/Egyszeru-adattipusok/' target='_blank'>" +
            "https://github.com/Spirit92hun/Egyszeru-adattipusok/</a><br>");
        res.end();
    }
}
