$(function(){
    $('.slider_wrap').slick({
      slide: 'div',        //슬라이드 되어야 할 태그
      infinite : true,     //무한 반복 옵션     
      slidesToShow : 1,        // 한 화면에 보여질 컨텐츠 개수
      slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
      speed : 500,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
      arrows : true,         // 옆으로 이동하는 화살표 표시 여부
      dots : true,         // 스크롤바 아래 점으로 페이지네이션 여부
      autoplay : true,            // 자동 스크롤 사용 여부
      autoplaySpeed : 2000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
      pauseOnHover : true,        // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
      vertical : false,        // 세로 방향 슬라이드 옵션
      prevArrow : "<button type='button' class='slick-prev'>Previous</button>",
      nextArrow : "<button type='button' class='slick-next'>Next</button>",
      draggable : true,     //드래그 가능 여부 
      responsive: [ // 반응형 웹 구현 옵션
        {  
          breakpoint: 960, 
          settings: {
            slidesToShow: 1
          } 
        },
        { 
          breakpoint: 768, 
          settings: {    
            slidesToShow: 1
          } 
        }
      ]

    });
})

$(function(){
  $('.slider_video').slick({
    slide: 'div',        //슬라이드 되어야 할 태그
    infinite : true,     //무한 반복 옵션     
    slidesToShow : 1,        // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
    speed : 500,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows : true,         // 옆으로 이동하는 화살표 표시 여부
    dots : true,         // 스크롤바 아래 점으로 페이지네이션 여부
    autoplay : true,            // 자동 스크롤 사용 여부
    autoplaySpeed : 2000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover : true,        // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
    vertical : false,        // 세로 방향 슬라이드 옵션
    prevArrow : "<button type='button' class='slick-prev'>Previous</button>",
    nextArrow : "<button type='button' class='slick-next'>Next</button>",
    draggable : true,     //드래그 가능 여부 
    responsive: [ // 반응형 웹 구현 옵션
      {  
        breakpoint: 960, 
        settings: {
          slidesToShow: 1
        } 
      },
      { 
        breakpoint: 768, 
        settings: {    
          slidesToShow: 1
        } 
      }
    ]

  });
})

$(function(){
  $('.slider_news').slick({
    slide: 'a',        //슬라이드 되어야 할 태그
    infinite : true,     //무한 반복 옵션     
    slidesToShow : 3,        // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll : 3,        //스크롤 한번에 움직일 컨텐츠 개수
    speed : 500,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows : false,         // 옆으로 이동하는 화살표 표시 여부
    dots : true,         // 스크롤바 아래 점으로 페이지네이션 여부
    autoplay : true,            // 자동 스크롤 사용 여부
    autoplaySpeed : 2000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover : true,        // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
    vertical : false,        // 세로 방향 슬라이드 옵션
    prevArrow : "<button type='button' class='slick-prev'>Previous</button>",
    nextArrow : "<button type='button' class='slick-next'>Next</button>",
    draggable : true,     //드래그 가능 여부 
    responsive: [ // 반응형 웹 구현 옵션
      {
        breakpoint: 1780,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
        } 
      },
      { 
        breakpoint: 992, 
        settings: {    
          slidesToShow: 2,
          slidesToScroll:2,
        } 
      },{
        breakpoint: 768,
        settings: {    
          slidesToShow: 1,
          slidesToScroll:1,
        } 
      }
    ]

  });
})

$(function(){
  $('.slider_sns').slick({
    slide: 'div',        //슬라이드 되어야 할 태그
    infinite : true,     //무한 반복 옵션     
    slidesToShow : 3,        // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
    speed : 500,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows : false,         // 옆으로 이동하는 화살표 표시 여부
    dots : false,         // 스크롤바 아래 점으로 페이지네이션 여부
    autoplay : true,            // 자동 스크롤 사용 여부
    autoplaySpeed : 2000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover : true,        // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
    vertical : false,        // 세로 방향 슬라이드 옵션
    prevArrow : "<button type='button' class='slick-prev'>Previous</button>",
    nextArrow : "<button type='button' class='slick-next'>Next</button>",
    draggable : false,     //드래그 가능 여부 
    responsive: [ // 반응형 웹 구현 옵션
      {  
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll:1,
          draggable : true,
          dots:true,
        } 
      },{
        breakpoint:768,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
          draggable : true,
          dots:true,
        } 
      }
     
    ]

  });
})