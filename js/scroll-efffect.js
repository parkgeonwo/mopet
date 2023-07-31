


$(window).on('scroll',function(){
  var scroll_value =  $(window).scrollTop();
  var windowWidth = $( window ).width() + 22;
  // console.log(scroll_value);

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



