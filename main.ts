input.onButtonPressed(Button.A, function () {
    if (gameover == false) {
        if (CanAttack == true) {
            CanAttack = false
            radio.sendString("ATK")
            basic.showIcon(IconNames.Sword)
            basic.pause(1000)
            CanAttack = true
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (gameover == false) {
        basic.showNumber(hp)
    }
    if (gameover == true) {
        hp = 10
        enemyHP = 10
        blocking = false
        gameover = false
        CanAttack = true
        CanHeal = true
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "ATK") {
        if (blocking == false) {
            hp += -1
        }
    }
    if (receivedString == "HEAL") {
        hp += 1
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.B, function () {
    if (gameover == false) {
        if (CanHeal == true) {
            CanHeal = false
            hp += 1
            basic.showIcon(IconNames.Heart)
            radio.sendString("HEAL")
            basic.pause(1000)
            CanHeal = true
        }
    }
})
let CanHeal = false
let CanAttack = false
let gameover = false
let blocking = false
let enemyHP = 0
let hp = 0
music.setVolume(60)
radio.setGroup(1)
hp = 10
enemyHP = 10
blocking = false
gameover = false
CanAttack = true
CanHeal = true
basic.forever(function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    if (hp == 0) {
        basic.showString("YOU LOSE")
        gameover = true
    }
    if (enemyHP == 0) {
        basic.showString("YOU WIN")
        gameover = true
    }
})
basic.forever(function () {
    if (hp > 10) {
        hp = 10
    }
    if (enemyHP > 10) {
        enemyHP = 10
    }
    if (hp < 0) {
        hp = 0
    }
    if (enemyHP < 0) {
        enemyHP = 0
    }
})
basic.forever(function () {
    if (gameover == true) {
    	
    }
})
