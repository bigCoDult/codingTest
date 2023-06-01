https://school.programmers.co.kr/learn/courses/30/lessons/120889
삼각형의 완성조건 (1)
배운것 = eval() / ... / join('+') / Math.sign

function solution(sides) 
{
    if (1 == Math.sign(eval(sides.join('+')) - 2 * Math.max(...sides)))
        return 1; 
    else
        return 2;   
}


https://school.programmers.co.kr/learn/courses/30/lessons/120854
배열 원소의 길이

function solution(strlist) {
    var lengArr = [];
    var i = 0;
    while (i < strlist.length)
    {
        lengArr[i] = strlist[i].length
        i++;
    }
    return lengArr;
}


https://school.programmers.co.kr/learn/courses/30/lessons/120849
모음 제거

function solution(stringg) {
    let vowLess = [];
    let i = 0;
    let k = 0;
    while (i < stringg.length)
    {
        if (stringg[i] != 'a')
              if (stringg[i] != 'e')
                    if (stringg[i] != 'i')
                          if (stringg[i] != 'o')
                                if (stringg[i] != 'u')
                                {
                                    vowLess[k] = stringg[i];
                                    k++;
                                }
        i++;
    }
    return vowLess.join('');
}