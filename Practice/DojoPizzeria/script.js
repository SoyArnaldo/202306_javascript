function pizzaOven(tipoCorteza,tipoSalsa, quesos, salsas) {
	let pizza = {}
	pizza.tipoCorteza = tipoCorteza
	pizza.tipoSalsa = tipoSalsa
	pizza.quesos = quesos
	pizza.salsas = salsas
	return pizza
}

console.log(pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni","salchicha"]))
console.log(pizzaOven("lanzada a mano" , "marinara" , ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]))