ㅡ야무쌤강의 2일차ㅡ
			
js 함수
  함수는 절차(=procedure)
    절차란, 할수있는 일들에 대한 순차적 나열
  
  DOM/BOM들은 함수다
  css의 root element는 html
    보통 생략한다, 루트니까
    근데 루트 엘리먼트가 뭐임?
  
  객체가 소유한 함수는 method
  
  confirm 메서드로 로 사용자에게 boolean값을 받는 법
    let isYes = window.confirm('말해 yes or no');
      이러면 알람창이 뜨고, 사용자가 취소/확인을 선택할 수 있다
  
  console은 객체다
    console.log();는 객체console의 메서드log를 사용하는 것임
    생략 불가능
      전역객체가 아니기 때문
  
  사용자 정의 함수
    끝에 세미콜론이 안온다
    function fu1() {
      내용
    }
    
    작은 따옴표 안에 같은걸 쓰려면 백슬래쉬로 오류회피
      function callMe(){
        console.log('안녕하세요 저는 \'함수\'입니다');
      }
    
    실행하려면 함수를 호출해야 함
      callMe();
    
    
  무명함수 실행하기
      함수 표현식(=function expression)이라 부름
      끝에 세미콜론이 와야한다
      var name1 = function () {내용}; 
        변수가 함수를 참조하게 두고
      name1(); 
        이렇게 실행
    
  전달인자arguments / 매개변수parameters
    전달인자 = 처리할 데이터
    매개변수 = 함수에서 전달인자를 받는 곳
  
  함수의 결과반환
    return <값>
    
    함수가 값을 요구할때는 
      키워드로 get
    함수가 값을 요구하지 않을때는 
      키워드로 set
  
  매개변수 받기
  function list(selector) {
    return document.querySelectorAll(selector);
  }
    매개변수를 두개쓰면 한정해서 찾는다?
      list('figure', list('.container'))

조건문
  if, else, switch
  
  context 값이 거짓일때 조건문이 작동하게 하는 법
    if(!context) {X}
      부정연산자 쓴다
  문에 내용물을 한줄만쓴다해도 중괄호{}는 꼭 쓸것 
    추후 수정시, 불필요한 작업이 필요하게 됨
  
비교연산자
  절대 [==, !=]를 사용하지 않는다
  [===, !==]만 사용한다

공백제거 trim
  .trim();
  .trimLeft();
  .trimRight();
  
  DOM
    모두 node로 구성되어 있다
    거기에는 type으로, ELEMENT / ATTRIBUTE / TEXT / DOCUMENT가 있다
      판별법?
        document.body.nodeType === document.ELEMENT_NODE
          // true 반환

switch 조건문
  조건이 많아질때 쓴다
  default가 위로 올라가도 된다
    다만 그렇다면 break가 필요하다
  
  Date객체
    스위치를 배우기위한 도구로 쓰기위해 지금 배운다
    let date_obj = new Date();
    let currentYear = date_obj.getFullyYear();
      fullyYear은 2000년 이후년도인 4자리를 의미
    let currentMonth = date_obj.getMonth() + 1;
      0부터 시작해서 그렇다
    let currentDate = date_obj.getDate();
      +1 해줄필요 없음
    let currentDay = date_obj.getDay();
      0부터, 일요일부터 시작한다
    let currentHours = date_obj.getHours();
      0부터 23까지
    let currentMinutes = date_obj.getMinutes();
      0부터 59까지
    let currentSecond = date_obj.getSeconds();
      0부터 59까지
    let currentMilliseconds = date_obj.getMilliseconds();
      0부터 999까지
    1970년 01/01 00:00:00 이후
    경과된 시간을 밀리초로 구하기
      let currentTimeMilli = date_obj.getTime();
    
    let currentFull = date_obj.toLocalDateString();
      // '2023. 7. 6
    let currentFull = date_obj.toDateString();
      // 'Tue Mar 6 2023'
    let currentFull = date_obj.toISOString();
      // '2023-07-06T05:59:32.093Z
    let currentKor = date_obj.toLocaleString();
      // '오후 2:59:31'
        우리나라 시간 알기 = 로케일 시간
    let currentKor = date_obj.toString();
      // 'Tue Mar 20 2018 14:59:31 GMT+0900 (KST)'
    
    new Date();
      // 날짜정보를 반환
    let birthday = new Date('December 31, 1980 21:42:18');
      날짜값을 부여한다
      new Date()는 Date 객체의, 새 인스턴스를 만든다
        그러면 그 객체의 형식을 띈다
  
  반복실행 하는 법
    globalThis.setInterval( <함수>, <주기> );
  
  setAttribute 메소드
    time.setAttribute('datetime', getISOTime());
    time이라는 대생의 속성을 특정값으로 설정

야무쌤 강의 - 2일차 클리어

