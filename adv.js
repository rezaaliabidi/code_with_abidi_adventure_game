#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.rgb(204, 204, 204)(`\n \t\t <<< =======================================================>>>\n`));
console.log(chalk.bold.rgb(204, 204, 204)(chalk.magenta.bold.italic(`\t\t\tWelcome To \` code With Yusra \` Adventure_Game\n`)));
console.log(chalk.bold.rgb(204, 204, 204)(`\t\t<<< ====================================================== >>> `));
// Classes Player and opponent
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDcrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDcrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
// Player name and opponent select
let player = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: chalk.bold.blue("Please Enter Your Name")
    }
]);
let opponent = await inquirer.prompt([
    {
        type: "list",
        name: "select",
        message: chalk.bold.blue("Select Your Opponent"),
        choices: ["Skeleton", "Assassin", "zombie"]
    }
]);
// Gather Data
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
if (opponent.select == "Skeleton") {
    console.log(`\n\t${chalk.bold.green(p1.name)} Vs ${chalk.bold.red(o1.name)}\n`);
}
if (opponent.select == "Assassin") {
    console.log(`\n\t${chalk.bold.green(p1.name)} Vs ${chalk.bold.red(o1.name)}\n`);
}
if (opponent.select == "zombie") {
    console.log(`\n\t${chalk.bold.green(p1.name)} Vs ${chalk.bold.red(o1.name)}\n`);
}
do {
    let ask = await inquirer.prompt([
        {
            type: "list",
            name: "opt",
            message: chalk.bold.blue("Select Your Opponent"),
            choices: ["Attack", "Drink Portion", "Run For Your Life..."]
        }
    ]);
    if (ask.opt == "Attack") {
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
            p1.fuelDcrease();
            console.log(chalk.bold.red(`${p1.name} Fuel is ${p1.fuel}`));
            console.log(chalk.bold.green(`${o1.name} Fuel is ${o1.fuel}`));
            if (p1.fuel <= 0) {
                console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                process.exit();
            }
        }
        if (num <= 0) {
            o1.fuelDcrease();
            console.log(chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}`));
            console.log(chalk.bold.red(`${o1.name} Fuel is ${o1.fuel}`));
            if (o1.fuel <= 0) {
                console.log(chalk.green.bold.italic("You Win"));
                process.exit();
            }
        }
    }
    if (ask.opt == "Drink Portion") {
        p1.fuelIncrease();
        console.log(chalk.bold.italic.green(`\n\tYou Drink Health Portion Your Fuel is ${p1.fuel}\n`));
    }
    if (ask.opt == "Run For Your Life...") {
        console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
        process.exit();
    }
} while (true);
