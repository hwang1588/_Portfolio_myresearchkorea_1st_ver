
///////////////////////////////////////////////////
//timeline.to 에서 to를 통해 해당 요소에 명령 입력
///////////////////////////////////////////////////
gsap.to("#pintest", {
  scrollTrigger: {
    trigger: "#pintest", //트리거용 요소
    pin: "#pintest", //true,false로 핀 유무 결정, 요소로 입력시 해당 요소가 고정됨
    start: "600 center", //요소 트리거위치, 뷰포트 트리거 위치
    end: "+=3000", //트리거가 끝날때까지의 길이(px)
    markers: true,
  },
});
///////////////////////////////////////////////////
gsap.to(".xmove", {
  x: 1500,
  duration: 4,
  scrollTrigger: {
    trigger: '.xmove',
    start: 'center bottom', //앞에 값은 요소 내부에 위치시킬 트리거 시작지점, 뒤에 값은 화면 자체의 트리거 시작지점
    end: 'top top', //앞에 값은 요소 내부에 위치시킬 트리거 종료지점, 뒤에 값은 화면 자체의 트리거 종료지점
    scrub: 1, //수치를 통해서 원복 방식의 부드러움을 가중시킬 수 있음(true 사용 가능)
    //        markers: true,
    onEnter: () => $('.xmove').addClass('bg-danger'),
    //뷰포트에 xmove가 나타날 경우 특정요소를 추가
    onLeave: () => $('.xmove').removeClass('bg-danger'),
    //뷰포트에 xmove가 사라질 경우 특정요소를 삭제
  },
});
/////////////////////////////////////////////////
gsap.to(".spin1", {
  scrollTrigger: ".spin1", // start the animation when ".box" enters the viewport (once)
  rotation: 5,
  delay: 1.5,
  duration: 1,
});
gsap.to(".spin2", {
  scrollTrigger: ".spin2", // start the animation when ".box" enters the viewport (once)
  rotation: 5,
  delay: 1.5,
  duration: 1,
});
gsap.to(".spin3", {
  scrollTrigger: ".spin3", // start the animation when ".box" enters the viewport (once)
  rotation: 5,
  delay: 1.5,
  duration: 1,
});
gsap.to(".spin4", {
  scrollTrigger: ".spin4", // start the animation when ".box" enters the viewport (once)
  rotation: 5,
  delay: 1.5,
  duration: 1,
});
/////////////////////////////////////////////////
var counting = {
  var: 0
};

gsap.to(counting, {
  var: 10000,
  duration: 3,
  ease: "none",
  onUpdate: changeNumber,
  scrollTrigger: {
    trigger: "#number",
  },
})

function changeNumber() {
  number.innerHTML = (counting.var).toFixed();
}
/////////////////////////////////////////////////
gsap.to("#id", {
  x: 100,
  duration: 1,
  scrollTrigger: {
    trigger: "#id",
  },
});
gsap.to("#id", {
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: "#id",
  },
});
/////////////////////////////////////////////////
var $sections = document.querySelectorAll(".horizon_box"); //horizon_box를 변수로 할당
var sec = gsap.timeline({
  scrollTrigger: {
    trigger: "#section2", //"#section2"요소가 뷰포트용 트리거에 닿으면 작동 시작
    pin: true, //핀을 통해서 뷰포트에 해당 요소 영역 고정시킴
    scrub: 0.3, //스크롤을 통해 애니메이션 제어 함 기본 true, 숫자로 부드럽기 변경 가능
    start: "top top", //요소의 트리거 위치와 뷰포트의 트리거 위치
    end: "+=4000", //"#section2"요소의 시작부터 끝나는 지점까지의 길이(px)
    //    markers: true,
  }
});
sec.to($sections, { //".horizon_box" 타겟
    xPercent: -100, // 해당 요소는 x축으로 -100프로 이동함
    duration: 2, //
    ease: "none",
    stagger: 3
  })
  .to({}, {
    duration: 1
  });
/////////////////////////////////////////////////
//$(window).on("scroll", function() {
//      if ($(window).scrollTop() > 100) {
//        gsap.to(".green", {
//          duration: 2,
//          rotation: 360,
//          scale: 0.5
//        });
//        gsap.to(".green", {
//          duration: 1,
//          text: "This is the new text",
//          ease: "none"
//        });
//
//      } else {
//        $(".switch").removeClass("dd");
//      }
//    });
//////////////////////////////////////////////////
//    gsap.to(".green", {
//      scrollTrigger: ".green", // start the animation when ".box" enters the viewport (once)
//      x: 500,
//      delay: 2,
//      scrub: true,
//    });
//    //"#someID"요소로 스크롤하려면(GSAP 1.19.0 기준): 
//    gsap.to(".class", {duration: 2, scrollTo: ".class"});
/////////////////////////////////////////////////
//    //"#someID"요소로 스크롤이 이동되게 하기
//    gsap.to(".class", {
//      duration: 2,
//      scrollTo: ".class"
//    });
/////////////////////////////////////////////////