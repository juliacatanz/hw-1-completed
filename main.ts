input.onButtonPressed(Button.A, function () {
    _of_people += 1
    basic.showNumber(_of_people)
})
input.onButtonPressed(Button.AB, function () {
    _of_people = _of_people
})
input.onButtonPressed(Button.B, function () {
    _of_people += -1
    basic.showNumber(_of_people)
})
input.onGesture(Gesture.Shake, function () {
    _of_people = 0
})
let _of_people = 0
_of_people = 0
basic.showNumber(_of_people)
basic.forever(function () {
	
})
