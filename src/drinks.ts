const drinks: string[] = [

"Coca Cola",
"Dr.Pepper",
"Sprite",
"Starry",
"Water",
];

export function printDrinks(): void {
console.log("Drink list:");
drinks.forEach((drink,index) => {
	console.log(`${index + 1}. ${drink}`);
	});
}

printDrinks();
