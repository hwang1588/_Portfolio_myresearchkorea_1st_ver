
///////////////////////////////////////////////////
//로딩화면용
///////////////////////////////////////////////////
 window.setTimeout(function() {
  $("#loading-wrapper2").fadeOut(1000); //요소를 2000ms동안 fadeout으로 안보이게함
  $(".ready").addClass("aaa bbb"); //지정요소에 요소들을 추가함
}, 3600); //작동하기전 4000ms의 딜레이를 추가한다

window.setTimeout(function() {
  $("body").removeClass("position-fixed");
}, 4000); //6초 지연을 통해 body에 fixed상태를 해제한다(화면 로딩중 스크롤방지)

window.setTimeout(function() {
  $(".drama").addClass("est"); //요소에 요소를 추가함
}, 1000); //동하기전 1000ms의 딜레이를 추가한다

///////////////////////////////////////////////////
//마우스 이동에 따른 원형 및 호버 액션
///////////////////////////////////////////////////
const circletwo = document.querySelectorAll(".circle2");
document.addEventListener("mousemove", (e) => {
  const mouseXtwo = e.clientX;
  const mouseYtwo = e.clientY;
  circletwo.style.left = mouseXtwo + 'px';
  circletwo.style.top = mouseYtwo + 'px';
});
var $circletwo = $(".circle2"); //변수 할당=특정요소를 지정
function moveCircletwo(e) {
  gsap.to($circletwo, 0.5, { //숫자가 높으면 커서이동후 원 반응속도 느려짐
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
}
$(window).on('mousemove', moveCircletwo);

const circle = document.querySelectorAll(".circle");
document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  circle.style.left = mouseX + 'px';
  circle.style.top = mouseY + 'px';
});

var $circle = $(".circle"); //변수 할당=특정요소를 지정
function moveCircle(e) {
  gsap.to($circle, 0.5, { //숫자가 높으면 커서이동후 원 반응속도 느려짐
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
}
$(window).on('mousemove', moveCircle);

$(function () {
  $('a').hover(function () {
    $('.circle').addClass('on').removeClass('off')
  }, function () {
    $('.circle').addClass('off').removeClass('on')
  });
});
///////////////////////////////////////////////////
//scrollto를 활용한 헤더 네비게이션 이동 구현
///////////////////////////////////////////////////
$('.sec_btn1').click(function () {
  gsap.to(window, {
    duration: 0.3,
    scrollTo: {
      y: ".sec1",
      offsetY: 0
    }
  });
});
$('.sec_btn2').click(function () {
  gsap.to(window, {
    duration: 0.3,
    scrollTo: {
      y: ".sec2",
      offsetY: 0
    }
  });
});
$('.sec_btn3').click(function () {
  gsap.to(window, {
    duration: 0.3,
    scrollTo: {
      y: ".sec3",
      offsetY: 0
    }
  });
});
$('.sec_btn4').click(function () {
  gsap.to(window, {
    duration: 0.3,
    scrollTo: {
      y: ".sec4",
      offsetY: 0
    }
  });
});
// ///////////////////////////////////////////////////
// //timeline.to 에서 to를 통해 해당 요소에 명령 입력
// ///////////////////////////////////////////////////
// gsap.to("#pintest", {
//   scrollTrigger: {
//     trigger: "#pintest", //트리거용 요소
//     pin: "#pintest", //true,false로 핀 유무 결정, 요소로 입력시 해당 요소가 고정됨
//     start: "600 center", //요소 트리거위치, 뷰포트 트리거 위치
//     end: "+=3000", //트리거가 끝날때까지의 길이(px)
//     // markers: true,
//   },
// });
// ///////////////////////////////////////////////////
// gsap.to(".xmove", {
//   x: 1500,
//   duration: 4,
//   scrollTrigger: {
//     trigger: '.xmove',
//     start: 'center bottom', //앞에 값은 요소 내부에 위치시킬 트리거 시작지점, 뒤에 값은 화면 자체의 트리거 시작지점
//     end: 'top top', //앞에 값은 요소 내부에 위치시킬 트리거 종료지점, 뒤에 값은 화면 자체의 트리거 종료지점
//     scrub: 1, //수치를 통해서 원복 방식의 부드러움을 가중시킬 수 있음(true 사용 가능)
//     //        markers: true,
//     onEnter: () => $('.xmove').addClass('bg-danger'),
//     //뷰포트에 xmove가 나타날 경우 특정요소를 추가
//     onLeave: () => $('.xmove').removeClass('bg-danger'),
//     //뷰포트에 xmove가 사라질 경우 특정요소를 삭제
//   },
// });
// /////////////////////////////////////////////////
// gsap.to(".spin1", {
//   scrollTrigger: ".spin1", // start the animation when ".box" enters the viewport (once)
//   rotation: 5,
//   delay: 1.5,
//   duration: 1,
// });
// gsap.to(".spin2", {
//   scrollTrigger: ".spin2", // start the animation when ".box" enters the viewport (once)
//   rotation: 5,
//   delay: 1.5,
//   duration: 1,
// });
// gsap.to(".spin3", {
//   scrollTrigger: ".spin3", // start the animation when ".box" enters the viewport (once)
//   rotation: 5,
//   delay: 1.5,
//   duration: 1,
// });
// gsap.to(".spin4", {
//   scrollTrigger: ".spin4", // start the animation when ".box" enters the viewport (once)
//   rotation: 5,
//   delay: 1.5,
//   duration: 1,
// });
// /////////////////////////////////////////////////
// var counting = {
//   var: 0
// };

// gsap.to(counting, {
//   var: 10000,
//   duration: 3,
//   ease: "none",
//   onUpdate: changeNumber,
//   scrollTrigger: {
//     trigger: "#number",
//   },
// })

// function changeNumber() {
//   number.innerHTML = (counting.var).toFixed();
// }
// /////////////////////////////////////////////////
// gsap.to("#id", {
//   x: 100,
//   y: 50,
//   duration: 1,
//   scrollTrigger: {
//     trigger: "#id",
//   },
// });

// /////////////////////////////////////////////////
// var $sections = document.querySelectorAll(".horizon_box"); //horizon_box를 변수로 할당
// var sec = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#section2", //"#section2"요소가 뷰포트용 트리거에 닿으면 작동 시작
//     pin: true, //핀을 통해서 뷰포트에 해당 요소 영역 고정시킴
//     scrub: 0.3, //스크롤을 통해 애니메이션 제어 함 기본 true, 숫자로 부드럽기 변경 가능
//     start: "top top", //요소의 트리거 위치와 뷰포트의 트리거 위치
//     end: "+=4000", //"#section2"요소의 시작부터 끝나는 지점까지의 길이(px)
//     //    markers: true,
//   }
// });
// sec.to($sections, { //".horizon_box" 타겟
//     xPercent: -100, // 해당 요소는 x축으로 -100프로 이동함
//     duration: 2, //
//     ease: "none",
//     stagger: 3
//   })
//   .to({}, {
//     duration: 1
//   });
// /////////////////////////////////////////////////
// //$(window).on("scroll", function() {
// //      if ($(window).scrollTop() > 100) {
// //        gsap.to(".green", {
// //          duration: 2,
// //          rotation: 360,
// //          scale: 0.5
// //        });
// //        gsap.to(".green", {
// //          duration: 1,
// //          text: "This is the new text",
// //          ease: "none"
// //        });
// //
// //      } else {
// //        $(".switch").removeClass("dd");
// //      }
// //    });
// //////////////////////////////////////////////////
// //    gsap.to(".green", {
// //      scrollTrigger: ".green", // start the animation when ".box" enters the viewport (once)
// //      x: 500,
// //      delay: 2,
// //      scrub: true,
// //    });
// //    //"#someID"요소로 스크롤하려면(GSAP 1.19.0 기준): 
// //    gsap.to(".class", {duration: 2, scrollTo: ".class"});
// /////////////////////////////////////////////////
// //    //"#someID"요소로 스크롤이 이동되게 하기
// //    gsap.to(".class", {
// //      duration: 2,
// //      scrollTo: ".class"
// //    });
// /////////////////////////////////////////////////