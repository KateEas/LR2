function Z() {
    let number_1 = Number(prompt('Введите первое число: '));
    if (number_1 % 2 === 1 && number_1 / 100 >= 1) { alert(number_1 + ' нечетное трехзначное'); }
    else { alert(number_1 + ' не подходит условиям') }
}
function numbers_3() {
    let x = Number(prompt('Введите первое число: '));
    let y = Number(prompt('Введите второе число: '));
    let z = Number(prompt('Введите третье число: '));
    if ((x > y && y > z)
        || (z > y && y > x)) { alert('Все верно! ' + x * 2 + '; ' + y * 2 + '; ' + z * 2) }
    else {
        alert('Увы ' + (1 / x).toFixed(2) + '; ' + (1 / y).toFixed(2) +
            '; ' + (1 / z).toFixed(2))
    }
}
function fun_resalt() {
    let x = Number(prompt('Введите x (если дробное, то ч/з .): '));
    if (x <= -1)
        alert('при x= '+ x +': '+(1 / ((1 + x) ** 2)).toFixed(2));
    else 
        {if (x > 1)
            alert('при x= '+ x +': '+(x ** 2 + Math.cos(2.7)).toFixed(2));
        else 
            alert('при x= '+ x +': '+(Math.sin(2.7 * x + 1.5)).toFixed(2));}

}
function fun_resalt_with_switch() {
    let x = Number(prompt('Выберете число из набора: -2, 1, 2, 3 '));
    switch (x) {
        case -2:
            alert((1 / (1 + x) ** 2).toFixed(2))
            break //без него продолжит делать дальше
        case 1:
            alert((Math.sin(2.7 * x + 1.5)).toFixed(2))
            break
        case 2:
        case 3:
            alert((x ** 2 + Math.cos(2.7)).toFixed(2))
        default:
            fun_resalt()
    }

}

