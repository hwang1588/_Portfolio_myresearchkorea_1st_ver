//발생하면=event(이벤트가 발생하면)
//적용한다=effect(효과를 적용한다)
//~일 경우, ~가 아닐경우= if, else(가정법)

$(function () {
  
  $(".test_toggle").click(function () { //"test_toggle"요소를 '클릭'하면
    $(this).toggleClass("test_active not"); //"test_toggle"(this)요소에 "test_active"요소와 "not"요소가 '번갈아 적용'됨
  });

  $("#flip").click(function () { //"#flip"요소를 '클릭'하면
    $("#panel").slideToggle('1000'); //"#panel"요소가 '1000'의 속도로 위아래로 나왔다 들어감, 기본상태는 display: none; 필요
  });

  $(".switch").click(function () { //"switch"요소를 '클릭'했을때
    if ($(this).hasClass("on")) { //'만약에' "switch"(this)요소에 "on"요소가 '있을경우'
      $(this).addClass("off").removeClass("on"); //"switch"(this)요소에 "off"요소를 '추가'하고 "on"요소를 '제거'함
    } else { //'그 이외의 경우에는'("switch"요소에 "on"요소가 없을 경우)
      $(this).addClass("on").removeClass("off"); //"switch"(this)요소에 "on"요소를 '추가'하고 "off"요소를 '제거'함
    }
  });

  $(".test_enter").mouseenter(function () { //"test_enter"요소에 '마우스가진입'하면
    $(this).toggleClass("test_active not"); //"test_enter"(this)요소에 "test_active"요소와 "not"요소가 '번갈아 적용'됨
  });
  
  $(".test_p").on({ //"test_p"요소에
    click: function () { //'클릭' 이벤트가 발생하면
      $(".test_p1").append("마우스가 문장을 클릭했습니다.<br>"); //"test_p1"요소 '뒷부분'에 해당글자를 '출력함'
    },
    mouseenter: function () { //마우스가 진입하면
      $(".test_p2").append("마우스가 커서가 문장 위로 들어왔습니다.<br>"); //"test_p2"요소 '뒷부분'에 해당글자를 '출력함'
    },
    mouseleave: function () { //마우스가 떠나면
      $(".test_p3").append("마우스가 커서가 문장을 빠져 나갔습니다.<br>"); //"test_p3"요소 '뒷부분'에 해당글자를 '출력함'
    }
  });

  $(".test_button").on("mouseenter click mouseleave", function () { //"test_button"요소에 '마우스가진입', '클릭시', '마우스가떠남' 이벤트들이 발생하면
    $(".test_text").append("마우스가 버튼 위로 진입하거나 클릭하거나 빠져나갔어요!<br>"); //"test_text"요소의 '뒷부분'에 해당글자를 '출력함'
  });

  $(".form").submit(function () { //<form><input type="submit" value="제목입력"></form>에서 '제출하기' 이벤트가 발생하면
    alert("SUBMITTED"); //"SUBMITTED"라는글자를 '알림'으로 띄움
  });

  $(".test_attr").attr("style", "background-color: #000000 !important;"); //"test_attr"요소에 style="background-color: #000000;" 인라인으로 부여한다.

  $(".orange_circle").mouseenter(function () { //"orange_circle"요소에 '마우스가진입'하면
    $(this).toggleClass("moveup movedown"); //"orange_circle"(this)요소에 "test_active"요소와 "not"요소가 '번갈아 적용'됨
  });
 

});

