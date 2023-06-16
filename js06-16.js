
https://school.programmers.co.kr/learn/courses/30/lessons/181849
Lv. 0	문자열 정수의 합 		89%
배운것  
    문자열에도 인덱스를 적용 가능
    정수형 캐스팅 
        parseInt();

function solution(numStr) 
{
    let sum1 = 0
    for(let i = 0; i < numStr.length; i++)
        sum1 += parseInt(numStr[i]); 
    return sum1;
}

https://school.programmers.co.kr/learn/courses/30/lessons/181879
Lv. 0	길이에 따른 연산 		89%
배운것
    reduce 메소드 사용법
        arr1.reduce( (x1,x2) => x1 + x2)
        x1은 연산이 축적되는 대상
            기본적으로는 인덱스 0번이 대상
        x2는 연산이 계속되는 대상
            기본적으로 인덱스 1번이 되고
            연산이 끝나면 인덱스가 넘어감
        =>는 왼쪽을 오른쪽 연산에 넣어줌 
        x3, x4는 생략 가능
            x3은 현재인덱스currentIndex
            x4는 원본배열=sourceArray

    어레이의 중간을 잘라내고 붙이는 법, 걍 검색해봄
    arr1.splice(삭제할 요소의 인덱스, 자를 갯수)
        const numbers = [1, 2, 3, 4, 5];
        const indexToRemove = 2; // Remove the element at index 2
    
        numbers.splice(indexToRemove, 1); // Remove 1 element starting at index 2
        console.log(numbers); // Output: [1, 2, 4, 5]

function solution(numList) 
{
    return numList.length >= 11 
    ? numList.reduce( (st,nd) => st + nd)
    : numList.reduce( (st,nd) => st * nd)      
}

https://school.programmers.co.kr/learn/courses/30/lessons/181882
Lv. 0	조건에 맞게 수열 변환하기 1 		89%
배운것
    배열요소에 함수를 적용한 새 배열을 만드는 법 : 맵 함수
        arrNew = arr1.map( (arr1) => <함수>);
            배열의 각 요소에 대해 주어진 함수를 호출하여 
            그 결과로 이루어진 새로운 배열을 생성 
            원본 배열은 변경되지 않음 
            
            const newArray = array.map(callback(currentValue[, index[, array]])[, thisArg]);

            callback: 배열의 각 요소에서 호출하는 함수로, 최대 세 개의 인수를 받습니다.
            currentValue (필수): 배열의 현재 처리 중인 요소.
            index (선택): 배열의 현재 처리 중인 요소의 인덱스.
            array (선택): map()을 호출한 배열.
            thisArg (선택): callback을 실행할 때 this로 사용되는 값.

        arr1.map( (arr1) => <함수> ); 쓸때,
            함수에 
                if else if 하고 
                return arr1 하면
                   if문들과 관련없는 요소도 가져올 수 있다

function solution(arrInt) 
{   
    return arrInt.map
    ( 
        (arrInt) => 
        {
            if (arrInt >= 50 && arrInt % 2 === 0)
                return arrInt = arrInt / 2;
           
            else if (arrInt < 50 && arrInt % 2 === 1)
                return arrInt = arrInt * 2;
        
            return arrInt;
        }                      
    )   
}
