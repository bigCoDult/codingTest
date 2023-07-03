야무 js강의
				
single var 패턴
  잘 안쓴다
  보통 변수 하나당 var 하나 씀
  근데 var도 안쓰고 let도 안쓰고 const면 됨

네이밍 컨벤션
  변수명은 숫자로 시작할 수 없다
  변수명에 공백문자는 들어갈 수 없다
  변수명에 [$, _]를 제외한 특수문자를 쓸 수 없다

데이터 타입
  동적 형지정 언어
    js, python
    때문에 암시적 형변환이 발생
  
  정적 형지정 언어
    C, JAVA
    디버깅 쉽다
    typescript
      js를 정적 형지정 언어처럼 쓸 수 있게 한다

암시적 형변환 테크닉
  9 + "string"
    = "9string"
  
  Number(k);
    이게 정석임
  
  편법 var k = "325235";
    +k;
      k가 숫자가 되어 console에서 출력된다
      편접이지만 사용자 많음

window.parseInt(str1, 10);
  스트링의 정수만 10진수로 뽑아내기
    2 ~ 36의 값이 진수로 사용가능

window.parseFloat(str1, 10);
  스트링의 실수만 10진수로 뽑아내기

Boolean(n1);
  정석적인 불리언 변환
  편법
    !!n1
      하지만 매우매우 많이 사용됨

Boolean()에
  0, null, undefined, ''(=빈 문자열, 공백아님)
  를 넣으면 false가 나온다
  아니면 전부 true

10 + null
  10이 반환됨

10 + undefined
  NaN이 반환됨

정확한 지정없이 요소를 변경하면 안됨
  웹에서 id, 변수명이 겹치면 코드가 정상작동하지 않기 때문
    
    콘솔에서 
    boy.style.transform = 'scale(0.5)';
      해당 페이지 html에서 boy라는 id를 태그를 인식해서 조작한다
        이때 var boy = "string";
        하면 boy라는 id를 가진 태그를 추적하기가 불가능해짐
          위의 조작은 실패하고 undefined 오류가 반환됨
        var 변수; 하면 대입값 없이 호이스팅이 먼저 되는데,
        그때 boy.style.transform이 입력되면 undefined라고 인식함
          js에서 변수는 초기화 없이는 undefined로 선언되기 때문?

문서의 객체에 접근하는 올바른 방법
  tag name으로 찾는건 많이 쓰는 방법이 아님
    var figures = document.getElementsByTagName('figure');
    console.log(figures);
      tag의 이름이 figure인 요소를 가져와서 변수에 저장
        이때 가져오는 것은 htmlCellection 
    figures.item(3);
      figures라는 변수에 저장된 요소의 index 3번을 보여줌
  
  id로 찾는 법
    var boy = document.getElementById('boy');
    console.log(boy);
    boy.style.transform = 'scale(0.5)';
    ;
    var boy = 'string1';
    console.log(boy);
      문제
        명확한 지정이 없으면 코드가 터지는건 알겠다
        이 상황은 뭐지?
        boy라는 변수를 재선언한거 아닌가? 애초에 재선언이 왜 되는거지?
        
      해결 
        두 덩어리는 관계없다. 
        위의 부정확한 지정이 문제가 있고, 
        오류가 생긴다는걸 설명했을 뿐
        오버라이딩 되었지만 오류는 아님, 
          var이라서 재선언, overwritten 되는거고 let에서는 오류생김
