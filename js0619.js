//0619

https://school.programmers.co.kr/learn/courses/30/lessons/181878
Lv. 0	원하는 문자열 찾기 		89%
배운것 
    문자열에서 정규식으로 패턴을 찾는 방법
        const reg1 = new RegExp('패턴', '옵션');
            
            new RegExp(pat, 'i'); 
                부분에서는 생성자 표기법을 사용하여 정규식 객체를 생성하고, 
                    new = 객체 생성
                        함수, 생성자, 클래스 등을 
                        new 연산자와 함께 호출하면 
                            그 결과로 객체가 반환
                문자열 pat를 RegExp 객체의 첫 번째 인수로 전달합니다. 
                두 번째 인수로 전달된 'i'는 정규식 플래그(옵션)입니다. 

            정규식 플래그(옵션)에 대해 설명드리겠습니다.
                i (ignore case): 대소문자를 구분하지 않습니다.
                g (global search): 문자열 내의 모든 패턴을 찾습니다.
                m (multiline): 문자열이 여러 줄인 경우 (\n 등의 문자가 포함된 경우)에도 패턴 검색을 수행합니다.

            위 코드에서 i 옵션을 사용했으므로 문자열 내에서 대소문자를 구분하지 않습니다. 
                따라서 위 코드에서 new RegExp(pat, 'i')는 
                    문자열 pat를 대소문자 구분 없이 검색하기 위한 정규식 객체를 생성합니다.

        reg1.test(str1) ? 1 : 0;
            test() 메서드는 
                (정규식 객체)와 
                (문자열)을 
                    문자열 대신 변수를 받을수도 있음
                (인수)로 받아, 
                
                해당 문자열에 정규식 패턴과 일치하는 부분이 있으면 
                true를, 그렇지 않으면 false를 반환합니다. 

 function solution(str1, pat) 
{
    let reg1 = new RegExp(pat, 'i');
    
    return reg1.test(str1) ? 1 : 0;
}       

https://school.programmers.co.kr/learn/courses/30/lessons/181901
Lv. 0	배열 만들기 1 		89%
function solution(int1, mult1) 
{
    let multArr = [];
    
    for(let i = 1; i <= int1; i++)
    {
        if (i % mult1 == 0)
            multArr.push(i);
    }
    
    return multArr;
}

https://school.programmers.co.kr/learn/courses/30/lessons/181927
Lv. 0	마지막 두 원소 		89%
배운것  
    arr1.push(e); 작동방식
        return arr1.push(e); 하면 배열길이를 반환한다

    [...arr1]는 곧 배열 전체이므로
        return [...arr1, end1];
        하면 바로 push처럼 작동하고 return한다

function solution(nList) 
{
    let last1 = nList[nList.length - 1];
    let last2 = nList[nList.length - 2];
    let last0;
    
    last0 = (last1 > last2) ? last1 - last2 : last1 * 2;
    
    return [...nList, last0];
}