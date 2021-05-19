
const testimonialsContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')
const testimonials = [
	{
		name : "Choeng Veyseng",
		position : 'Techie',
		photo : "https://source.unsplash.com/100x100/?user",
		text: "code is amazing"
	},
	{
		name : "Lisa",
		position : 'Techie',
		photo : "https://source.unsplash.com/100x100/?user",
		text: "code is amazing"
	},
	{
		name : "Waee",
		position : 'Techie',
		photo : "https://source.unsplash.com/100x100/?user",
		text: "code is amazing"
	}
]

let idx = 1

function updateTestimonial(){
	const {name, position, photo, text} = testimonials[idx]
	testimonial.innerHTML = text;
	userImage.src =photo
	username.innerHTML = name
	role.innerHTML = position
	idx ++;
	if(idx > testimonials.length - 1){
		idx = 0
	}
}
setInterval(updateTestimonial,10000)

