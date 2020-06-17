
function animationform()
	{
		const arrows = document.querySelectorAll(".fa-arrow-alt-circle-down");
		
		arrows.forEach(arrow => 
		{
			arrow.addEventListener('click',() =>
			{
				const input=arrow.previousElementSibling;
				const parent=arrow.parentElement;
				const nextForm= parent.nextElementSibling;
				
				if(input.type ==="text" && validateuser(input))
				{
					nextSlide(parent , nextForm);
					
				}
				
				else if(input.type ==="email" && validateEmail(input))
				{
					nextSlide(parent, nextForm);
				}			
				
				else if (input.type === "password" && validateuser(input))
				{
					nextSlide(parent, nextForm);
					
				}
				else 
				{
					parent.style.animation ="shake 0.5s ease" ;
				}
				//get rid of animation 
				
					parent.addEventListener("animationend", () => {
						parent.style.animation= "";
					});
			})
			
		});
	}
	
function validateuser(user)
	{
		if (user.value.length < 6)
		{
			console.log("not enough charecter");
			
			error("rgb(189,87,87)");
			
		}
		else
		{
			error("rgb(172, 115, 57)");
			return true;
		}
		
	}
	
	
function validateEmail(email)

	{
		const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
		if(validation.test(email.value))
		{
			error("rgb(172, 115, 57)");
			return true;
		}
		else 
		{
			error("rgb(189,87,87)");
		}
	
	}

	
	
function nextSlide(parent, nextForm)	
	{
		parent.classList.add('inactive');
		parent.classList.remove('active');
		nextForm.classList.add('active'); 
	}
	
function error(color)
		{
		document.body.style.backgroundColor = color;
		
		}
		
			
		animationform();