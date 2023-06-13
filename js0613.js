//sprint for 20230613

https://school.programmers.co.kr/learn/courses/30/lessons/120851
Lv. 0	숨어있는 숫자의 덧셈 (1)		89%	-	FALSE	

function solution(str1) 
{
    let sumNum = 0;
    
    for(i=0; i < str1.length; i++)
    {
        if ( str1[i] == parseInt(str1[i]) )
            sumNum += parseInt(str1[i])
    }
    
    return sumNum;
}

https://school.programmers.co.kr/learn/courses/30/lessons/181920
Lv. 0	카운트 업 		89%	-	FALSE		
배운것
    for문에 인수 여러개 쓰기
        for(i = start, k = 0; i <= end; i++, k++)
            arrN[k] = i;
    
function solution(start, end) 
{
    let arrN = [];
    
    for(i = start, k = 0; i <= end; i++, k++)  
        arrN[k] = i;
    
    return arrN;
}

https://school.programmers.co.kr/learn/courses/30/lessons/181875
Lv. 0	배열에서 문자열 대소문자 변환하기 		89%	-	FALSE	
배운것
    문자열을 소문자로 바꾸기
        oneStr.toLowerCase()

function solution(strArr) 
{
    let odEvArr = [];
    let oneStr = "";
    
    for(i=0; i < strArr.length; i++)
    {
        oneStr = strArr[i];
        odEvArr[i] = (0 == i % 2) ? oneStr.toLowerCase() : strArr[i].toUpperCase();
    }

    return odEvArr;
}	

https://school.programmers.co.kr/learn/courses/30/lessons/181840
Lv. 0	정수 찾기 		89%	-	FALSE	
배운것
    포함하는지 찾는 includes 메소드의 양식
         <긴거>.includes(<요소>);  

function solution(nArr, n) 
{
  return Number( nArr.includes(n) );  
}

https://school.programmers.co.kr/learn/courses/30/lessons/120813
Lv. 0	짝수는 싫어요		89%	-	FALSE		

function solution(n) 
{
    let oddArr = [];
    
    for(i=0, p = 0; i < n / 2; i++, p += 2)
        oddArr[i] = 1 + p          
    
    return oddArr;
}

https://school.programmers.co.kr/learn/courses/30/lessons/181869
Lv. 0	공백으로 구분하기 1 		89%	-	FALSE																					

function solution(str1)
{
    let sepWord = [];
    let word = "";
    let i=0
    
    while (i < str1.length)
    {        
        while (str1[i] !== " " && i < str1.length)
        {
            word += str1[i];
            i++;
        }   
    
        sepWord.push(word); 
        word = "";
        i++;
     
        
        while (str1[i] === " " && i < str1.length)
        {
            i++;
        }      
    } 

    return sepWord;
}

https://school.programmers.co.kr/learn/courses/30/lessons/181884
Lv. 0	n보다 커질 때까지 더하기 		89%		

function solution(intArr, n) 
{
    let sum1 = 0;
    let i = 0;
    
    while(i < intArr.length && sum1 <= n)
    {
        sum1 += intArr[i];
        i++;        
    }
      
    return sum1;
}

https://school.programmers.co.kr/learn/courses/30/lessons/181835
Lv. 0	조건에 맞게 수열 변환하기 3 		89%		

function solution(intArr, n) 
{
    let i = 0;
    
    if (1 == n % 2)
    {
        while(i < intArr.length)
        {
            intArr[i] *= n;
            i++;
        }
    }
    
    if (1 != n % 2)
    {
        while(i < intArr.length)
        {
            intArr[i] += n;
            i++;
        } 
    }
    
    return intArr;
}

https://school.programmers.co.kr/learn/courses/30/lessons/181899
Lv. 0	카운트 다운 		89%											

function solution(start, end) 
{
    let decArr = [];
    
    while (start >= end)
    {
        decArr.push(start);
        start--;            
    }
    return decArr
}










//20230613
https://school.programmers.co.kr/learn/courses/30/lessons/120906
Lv. 0	자릿수 더하기		89%	-	FALSE	while, Math.floor		
배운것
    int로 캐스팅
        parseInt();

function solution(n) 
{
    let i = 0;
    let summ = 0;
    
    let arrN = [];
    arrN = n.toString().split("");
    
    for(i=0; i < arrN.length; i++)
    {
        summ += parseInt(arrN[i]);
    }
    
    return summ;
}

https://school.programmers.co.kr/learn/courses/30/lessons/181873
Lv. 0	특정한 문자를 대문자로 바꾸기 		89%	-	FALSE	includes, toUpperCase		
배운것 
    문자열은 인덱스를 지정해, 
    하나를 빼올수는 있지만, 
    개별 요소를 수정할 수는 없다.

    대분자로 바꾸기
        <char>.toUpperCase();
    
    빈 문자열 선언하는 방법
        let str1 = "";

    문자열의 길이
        str1.length;

    빈 문자열에 문자쌓기
        for(i=0; i < n; i++)
            str2 +=str1[i]; 
    
function solution(str1, char1) 
{ 
    let i = 0;
    let strUp = "";
    
    while(i < str1.length)
    {
        if (str1[i] == char1)
            strUp += char1.toUpperCase();
        else
            strUp += str1[i];
        i++;
    }
    
    return strUp;
}

https://school.programmers.co.kr/learn/courses/30/lessons/181907
Lv. 0	문자열의 앞의 n글자 		89%	-	FALSE	slice, length																				

function solution(str1, n) 
{
   let str2 = "";
    
    for(i=0; i < n; i++)
        str2 +=str1[i]; 
    return str2;
}