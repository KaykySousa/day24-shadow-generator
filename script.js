const box = document.querySelector(".box")
const colorPicker = document.querySelector(".color-picker")
const code = document.querySelector(".code")
const inputs = document.querySelectorAll("input")

const values = {
	horizontal: 0,
	vertical: 0,
	blur: 0,
	spread: 0,

	inset: false,

	shadowColor: "",
	boxColor: "",
	opacity: 1,
}

function updateShadow(input) {
	values[input.dataset.option] =
		input.type === "checkbox" ? input.checked : input.value

	const shadow = `${values.inset ? "inset" : ""} ${values.horizontal}px ${
		values.vertical
	}px ${values.blur}px ${values.spread}px ${values.shadowColor}${
		Number(values.opacity).toString(16).length < 2 ? "0" : ""
	}${Number(values.opacity).toString(16)}`

	code.value = `box-shadow: ${shadow};`

	box.style.boxShadow = shadow
	box.style.backgroundColor = values.boxColor
}

inputs.forEach((input, index) => {
	updateShadow(input)

	input.addEventListener("input", () => {
		updateShadow(input)
	})
})
