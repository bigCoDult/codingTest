ㅡ야무쌤 강의 7일차, 필기정리ㅡ
			
ㅡ배열 객체ㅡ
  실무에서 안쓸수가 없다
  배열은 객체다
  배열은 모든것을 수집할 수 있다
    정보를 수집하고 정리할때 사용함
  배열은 값의 집합이다
    객체는 속성&값 쌍의 집합
  
  배열의 메소드
    new Arrya() 생성자 쓰지말고 []리터럴로 만들것
    
    index
      배열 아이템에 접근
      var item1 = arr1[n];
    
    forEach
      arr1.forEach(function(<item1>,<인덱스>){함수내용})
      배열 전용, 콜백함수를 넣는다
    
    push()
      아이템 추가
      ,콤마를 써서 여러개 한번에 넣을수도 있다
    
    pop()
      마지막 아이템 제거&반환
    
    unshift()
      인덱스 0에 아이템 추가
    
    shift()
      인덱스0의 제거&반환
    
    indexOf(<알규먼트>)
      배열에 해당 알규먼트가 있는지 확인
      없으면 -1 반환
      있으면 인덱스를 반환
    
    splice(<index>, <갯수>)
      특정 인덱스에서 n개 제거
      splice(<index>,0, <넣을것>)
        splice로 배열아이템 추가하기
    
    arr1.length = 0;
      배열의 아이템 모두제거
    
    let arr2 = arr1.slice();
      배열 복사
      레거시임
      ...스프레드 신텍스 쓸것
    
    Array.isArray(arr1)
      어레이인지 검사
      불린값 반환
    
    arr1.sort();
      배열 순서 정렬
      유니코드 순으로 정렬됨
      원본을 변경함
        막으려면
          arr1.sort(funciton(a,b){return a-b;});
            여기서 function은 컴패어, 비교함수
              복잡한 배열에서는 컴패어에 키를 지정하는 식으로 더 디테일하게 짜야함
    
    reverse()
      배열순서 뒤집기
    
    arr1.map(function(item1){
      item1.company = 'hahaCOM"
      return item1;
      })
      순회하고, 함수 적용하고, 반환함
    
    배열의 메서드 종류
      변경 메서드
        원본 데이터를 훼손함
      접근 메서드
        원본 데이터를 보존함
      반복 메서드
        원본 데이터를 보존함
      
      필요할때마다 검색해서 쓰면 됨
  ㅡ객체/상속 - 1ㅡ
    원시데이터를 뺀, 나머지는 전부 js의 객체이다
    객체들의 조상은, 찐객체=프로토타입_객체
    
    객체생성 방법
      {}  / new Object()
        일반적으로 리터럴을 사용함
    
    속성추가 방법
      obj1.name = '김땡땡';
    속성삭제 방법
      delete obj1.name;
    
    in문
      'nickname' in hm_son7;
      nickname이라는 속성이 hm_son7이라는 객체에 포함되어 있는지 불린값을 반환
    
    객체순환에는 forIn 사용
      for(let prop in hm_son7){함수};
    
    객체를 순환한다 = 열거한다
    
    열거가능 enumerable, 셀수 있다는 뜻
    
    객체병합
      Mixins 패턴이라 부른다
      여러개의 객체를 합칠때를 의미
  
  ㅡ객체/상속 - 2ㅡ
    객체의, 정적 메소드static method
      생성자 함수
        let arr1 = Object.create();
          arr1 객체에 객체의 능력을 상속한다
      
      Object.defineProperty(<수정/생성할 객체이름>,<객체의 속성이름>,<속성의 값>);
        복수의 속성을 정의할때 사용함
        객체의 속성을 함부러 다루지 못하게 함
      
      descripter기술자
        데이터 기술
          writable = 수정가능 여부, 기본 false
            예시
              Object.defineProperty(arr1, prop1, {value: 'value1', writable: true,});
          enumerable = 열거가능 여부, 기본 false
          configurable = 제거가능 여부, 기본 false
          value
        
        데이터 접근기술accessor descriptor
          get/set, 둘은 함수가 아니다
          
          get
            value랑 동시에 사용하면 오류남
          set
  
  ㅡ객체/상속 - 3ㅡ
    OBject.preventExtensions()
      객체의 확장 차단
    Object.isExtensible()
      속성추가 차단
      삭제는 못막음
    
    밀봉sealing
      속성추가 및 설정이 불가능하게 만든다는 뜻
      쓰기가능한 속성은 밀봉 후에도 변경 가능
      Object.Seal()
      Object.isSealed()
    
    동결freezing
      속성을 지우거나 바꿀수 없다
      밀봉에다 속성값 변경 차단까지 추가한 것
      Object.freeze()
      Object.isFrozen()
    
    hasOwnProperty메서드
      arr1.hasOwnProperty('prop1')
        객체의 자기것인지 상속받은 것인지 불린값을 반환
        객체가 부모를 상속받지 않도록 만들때 섞어서 사용함
    
    <개선된 hepler.js에 대한 설명들>
  
  ㅡ생성자/프로토타입, 1교시ㅡ
    생성자 함수와 프로토타입 
      
      사용자 정의 객체를 만드는 방법
        
        new연산자로 객체의 인스턴스를 생성한다
        
        생성자함수를 작성하여 객체타입을 정의
          생성자 함수
            생성자 함수는 관례적으로 첫글자를 대문자로 함 
              new 연산자와 함께 사용
                let instance = new <Constructor1>();
          이 경우, 정의와 동시에 자동으로, 프로토타입 객체를 참조하는 속성을 가지게 됨
            obj1.prototype
            이 프로토타입 객체는 constructor속성을 가지며,
              Array.prototype.constructor === Array
              이 속성을 통해 생성자함수 Tab을 참조함
          
          ㅡ생성자/프로토타입, 2교시ㅡ 
            객체가 생성자함수로 만들어졌는지 확인하는법
            obj1 instanceof Obj0;
              생성자 함수인 Obj0로 obj1이 만들어 졌는지 불린값을 반환
              이때 Obj0은 class클래스다
              obj1.constructor === Obj0, 이렇게 한것과 똑같다
            
            생성자함수의 프로토타입은 새로운 객체에 상속을 준다
            
            생성자 함수에서 언급된 this는 새로운객체 그자신이다
              일반함수의 this와 다르다
            let obj11 = new Obj00();
              알규먼트가 없으면 소괄호()는 생략가능
            
            생성자함수의 실행 반환값은 새로운객체다
              명시적으로 다른 객체를 반환하는 경우, 반환 결과물을 덮어쓸 수 있다
                상속받는 새로운객체 말고, 새로운객체 안에 반환값만 참조됨?
            
            프로토타입 가져오기
              Obj0.prototype
                레거시임
              Object.getPrototypeOf(obj11)
                권장되는 방법
            
            ㅡ생성자/프로토타입, 3교시ㅡ 
            프로토타입의 능력은 암시적으로 사용 가능하다
            
            생성자함수는 알규먼트를 통해 고유한 속성을 가진 상태로 새로운객체에 상속될 수 있다?
              그대마다 성능부담 발생
            
            Pagenation 생성자 함수
              let obj11 = new Pagenation(<알규먼트>);
            
            일반함수 vs 생성자함수
              new라는 연산자가 있어야 생성자함수로 쓰이는 것이다
              
              이런 상황에서 가능한 문제를 회피하기 위해 strict mod를 사용한다
                에러메세지를 반환해서 좋은코드를 짜게 해준다
ㅡ야무쌤 강의 7일차, 필기끝ㅡ
