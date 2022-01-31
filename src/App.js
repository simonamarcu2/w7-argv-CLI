
const{ Movie, movieArr} = require("./utils");

const app = (args) => {
    switch(args[2]) {
        case "add":
            const movie = new Movie(args[3], args[4]);
            movie.add();
            console.log(movieArr);
            break;
            case "add multi":
                const movie1 = new Movie(args[3], args[4]);
                const movie2 =  new Movie(args[5], args[6]);
                movie1.add();
                movie2.add();
                console.log(movieArr);
                break;
            default:
                console.log("Incorrect command");
    }
};

app(process.argv);

