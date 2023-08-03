change_point = 760;
first_change_value = 2078;
second_change_value = first_change_value + change_point;
third_change_value = first_change_value + change_point*2;
fourth_change_value = first_change_value + change_point*3;
fifth_change_value = first_change_value + change_point*4;

tablet_change_point = 2280;
tablet_first_change_value = 6074;
tablet_second_change_value = tablet_first_change_value + tablet_change_point;
tablet_third_change_value = tablet_first_change_value + tablet_change_point*2;
tablet_fourth_change_value = tablet_first_change_value + tablet_change_point*3;
tablet_fifth_change_value = tablet_first_change_value + tablet_change_point*4;


var sectionIndex = 0;
var sectionOffsets = [1562, 1562+760, 1562+760*2, 1562+760*3, 1562+760*4];
// var sectionOffsets = [change_point, change_point*2, change_point*2, change_point*3, change_point*4, change_point*5];
var isScrollAllowed = true;

// $(document).ready(function () {
//   // 각 섹션의 offset 값을 구해서 배열에 저장합니다.
//   $('.body').each(function () {
//     sectionOffsets.push($(this).offset().top);
//   });
// });/
// $(window).scroll(function (event) {
//   // 섹션에서 스크롤을 제한하는 부분입니다.
//   // console.log($(window).scrollTop());
//   if (isScrollAllowed && $(window).scrollTop() >= sectionOffsets[sectionIndex]) {
//     isScrollAllowed = false;
//     $(window).scrollTop(sectionOffsets[sectionIndex]);

//     $('.body').on('scroll touchmove mousewheel', function(event) {
//       event.preventDefault();
//       event.stopPropagation();
//       return false;
//     });

//     setTimeout(function () {
//       isScrollAllowed = true;
//       $('.body').off('scroll touchmove mousewheel');

//       // 섹션 인덱스를 증가시키고, 마지막 섹션까지 스크롤했다면 인덱스 초기화합니다.
//       sectionIndex++;
//       if (sectionIndex >= sectionOffsets.length) {
//         sectionIndex = sectionOffsets.length;
//     }
//     }, 1000);
//   }
//   console.log(sectionIndex);
// });




// $('.body').off('scroll touchmove mousewheel');




$(window).on('scroll',function(){
  var scroll_value =  $(window).scrollTop();
  var windowWidth = $( window ).width() + 22;
  // console.log(scroll_value);

  // if (isScrollAllowed) {
  //   // 특정 위치에 도달하면 스크롤을 1초 동안 비활성화합니다.
  //   if (scroll_value >= 1560 & scroll_value <= 1560 + 100) {
  //     console.log(scroll_value)
  //     isScrollAllowed = false; // 스크롤 비활성화
  //     document.body.style.overflow = "hidden"; // 스크롤 막기
  //     console.log(isScrollAllowed);
  //     setTimeout(function() {
  //       isScrollAllowed = true; // 스크롤 활성화
  //       document.body.style.overflow = "auto"; // 스크롤 복원
  //       console.log(isScrollAllowed);
  //     }, 1000); // 1초 후에 스크롤 활성화
  //   }
  // }

  // 시작 1562, 끝 5333
  // 


  if(windowWidth < 1080){
    if(scroll_value < first_change_value){
      $('.scroll-effect-num').html('01');
      $('.scroll-effect-title').html('커뮤니티');
      $('.scroll-effect-des').html('가까운 반려인 이웃들과 온라인으로<br>소통하며 고민과 정보를 나눠요');
    }
    else if( scroll_value >= first_change_value & scroll_value < second_change_value ){
      $('.scroll-effect-num').html('02');
      $('.scroll-effect-title').html('동네 모임');
      $('.scroll-effect-des').html('우리 동네 이웃들과 직접 모임을 만들어<br>다양한 활동을 함께 해요');
    }
    else if( scroll_value >= second_change_value & scroll_value < third_change_value ){
      $('.scroll-effect-num').html('03');
      $('.scroll-effect-title').html('동네 소식');
      $('.scroll-effect-des').html('우리 동네에 새로 온 이웃들을<br>한눈에 보고 친구를 맺어요');
    }
    else if( scroll_value >= third_change_value & scroll_value < fourth_change_value ){
      $('.scroll-effect-num').html('04');
      $('.scroll-effect-title').html('댕꿀팁 모음');
      $('.scroll-effect-des').html('반려동물 관련 체험단 이벤트나<br>행사들을 모아볼 수 있어요');
    }
    else if( scroll_value >= fourth_change_value & scroll_value < fifth_change_value ){
      $('.scroll-effect-num').html('05');
      $('.scroll-effect-title').html('액티비티');
      $('.scroll-effect-des').html('반려동물과 함께할 수 있는 다양한<br>활동들을 찾아볼 수 있어요');
    }
    else if( scroll_value >= fifth_change_value ){
      $('.scroll-effect-num').html('06');
      $('.scroll-effect-title').html('이웃 프로필');
      $('.scroll-effect-des').html('이웃들의 인사말과 반려동물과의<br>추억을 모아볼 수 있어요');
    }
  }
  else if(windowWidth >= 1080 & windowWidth < 1280){
    if(scroll_value < tablet_first_change_value){
      $('.scroll-effect-num').html('01');
      $('.scroll-effect-title').html('커뮤니티');
      $('.scroll-effect-des').html('가까운 반려인 이웃들과 온라인으로<br>소통하며 고민과 정보를 나눠요');
    }
    else if( scroll_value >= tablet_first_change_value & scroll_value < tablet_second_change_value ){
      $('.scroll-effect-num').html('02');
      $('.scroll-effect-title').html('동네 모임');
      $('.scroll-effect-des').html('우리 동네 이웃들과 직접 모임을 만들어<br>다양한 활동을 함께 해요');
    }
    else if( scroll_value >= tablet_second_change_value & scroll_value < tablet_third_change_value ){
      $('.scroll-effect-num').html('03');
      $('.scroll-effect-title').html('동네 소식');
      $('.scroll-effect-des').html('우리 동네에 새로 온 이웃들을<br>한눈에 보고 친구를 맺어요');
    }
    else if( scroll_value >= tablet_third_change_value & scroll_value < tablet_fourth_change_value ){
      $('.scroll-effect-num').html('04');
      $('.scroll-effect-title').html('댕꿀팁 모음');
      $('.scroll-effect-des').html('반려동물 관련 체험단 이벤트나<br>행사들을 모아볼 수 있어요');
    }
    else if( scroll_value >= tablet_fourth_change_value & scroll_value < tablet_fifth_change_value ){
      $('.scroll-effect-num').html('05');
      $('.scroll-effect-title').html('액티비티');
      $('.scroll-effect-des').html('반려동물과 함께할 수 있는 다양한<br>활동들을 찾아볼 수 있어요');
    }
    else if( scroll_value >= tablet_fifth_change_value ){
      $('.scroll-effect-num').html('06');
      $('.scroll-effect-title').html('이웃 프로필');
      $('.scroll-effect-des').html('이웃들의 인사말과 반려동물과의<br>추억을 모아볼 수 있어요');
    }
  }

})


// let observer = new IntersectionObserver((e)=>{
//   e.forEach((box)=>{
//     if(box.isIntersecting){
//       document.body.style.overflow = "hidden"; // 스크롤 막기
//       setTimeout(function() {
//         document.body.style.overflow = "auto"; // 스크롤 복원
//         console.log(isScrollAllowed);
//       }, 500); // 1초 후에 스크롤 활성화
//     }
//   })
// })

// let stopBox = document.querySelectorAll('#stopBox');
// observer.observe(stopBox[0])
// observer.observe(stopBox[1])
// observer.observe(stopBox[2])
// observer.observe(stopBox[3])
// observer.observe(stopBox[4])
// observer.observe(stopBox[5])
// observer.observe(stopBox[6])






