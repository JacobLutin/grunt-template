coffee = (message = "Ready for some coffee?") ->
	answer = confirm(message)
	"Your answer is " + answer

# alert coffee("Want some Decaf?")

$ -> 
	changeTab = (e) ->
		e.preventDefault()
		$('.tabs li').removeClass 'active'
		$(@).toggleClass 'active'
		num = $(@).html()
		$('.box').html num

	$('.tabs li').click changeTab